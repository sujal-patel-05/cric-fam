// Netlify Serverless Function for Live Poll Voting
// Endpoint: /.netlify/functions/vote

let inMemoryVotes = {
  MM: 48,
  AA: 34,
  SSS: 36,
  HH: 29,
  PP: 45
};

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  let votes = { ...inMemoryVotes };
  let store = null;

  // Attempt to use Netlify Blobs if available in production environment
  try {
    const { getStore } = require("@netlify/blobs");
    store = getStore("cricket_fam_poll");
    const storedVotes = await store.get("votes", { type: "json" });
    if (storedVotes) {
      votes = storedVotes;
      inMemoryVotes = storedVotes;
    }
  } catch (e) {
    // Falls back to in-memory store
  }

  if (event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body || "{}");
      const team = data.team;

      if (team && votes[team] !== undefined) {
        votes[team] += 1;
        inMemoryVotes = { ...votes };

        if (store) {
          try {
            await store.setJSON("votes", votes);
          } catch (err) {
            console.error("Netlify Blobs write error:", err);
          }
        }
      }
    } catch (err) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid request payload" })
      };
    }
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(votes)
  };
};

