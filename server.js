const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

let localPollVotes = {
  MM: 48,
  AA: 34,
  SSS: 36,
  HH: 29,
  PP: 45
};

const server = http.createServer((req, res) => {
  // Support Netlify Functions locally
  if (req.url.startsWith('/.netlify/functions/vote')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      return res.end();
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          if (data.team && localPollVotes[data.team] !== undefined) {
            localPollVotes[data.team] += 1;
          }
        } catch (e) {}
        res.writeHead(200);
        res.end(JSON.stringify(localPollVotes));
      });
      return;
    }

    res.writeHead(200);
    return res.end(JSON.stringify(localPollVotes));
  }

  let decodedUrl = decodeURI(req.url.split('?')[0]);
  if (decodedUrl === '/') decodedUrl = '/index.html';

  const filePath = path.join(__dirname, decodedUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found: ' + decodedUrl);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n🏏 Turf Cricket Championship Hub is LIVE!`);
  console.log(`👉 Open in browser: http://localhost:${PORT}\n`);
});

