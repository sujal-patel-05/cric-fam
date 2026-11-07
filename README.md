# 🏆 Turf Cricket Championship 2026
**Organized by Cricket Fam**

A modern, high-octane tournament web portal inspired by **The Hundred** and **Indian Premier League (IPL)** broadcast graphics.

---

## ⚡ Highlights & Features

- **Broadcast Aesthetic**: Electric neon accents, bespoke team emblems, stadium textures, and smooth micro-animations.
- **Official Tournament Schedule**: 10 high-intensity group fixtures followed by the official playoff ladder (1st direct to Grand Final; 2nd vs 3rd in Semi-Final).
- **5 Franchises & Official Leadership**:
  - 🔵 **Megha Marvels (MM)** — Captain: *Krunal Gandhi* • Owner: *Megha Desai*
  - 🔴 **Arpita Avengers (AA)** — Captain: *Derick* • Owner: *Arpita*
  - 🟠 **Sohi Super Strikers (SSS)** — Captain: *Chirag Desai* • Owner: *Sohi Desai*
  - 🟣 **Hitakshi Hurricane (HH)** — Captain: *Saurabh Desai* • Owner: *Hitakshi Desai*
  - 🟢 **Priyansi Power Hitters (PP)** — Captain: *Chirag Desai* • Owner: *Priyansi Desai*
- **Live Matchday Countdown**: Real-time ticker counting down to the tournament opener on **14th November at 9:00 PM IST**.
- **Live Fan Voting**: Real-time fan poll powered by Netlify Functions with auto-polling sync.
- **Mobile-First Experience**: Built with strict zero-overflow boundaries, fluid typography (`clamp()`), and a sticky bottom app bar tailored for smartphones.
- **Official Media Lightbox**: High-resolution gallery to view and zoom the official tournament posters.

---

## 🚀 How to Run Locally

Start the local Node.js server (which includes local live-vote emulation):

```bash
node server.js
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 Deploy to Netlify (1-Click Ready)

This repository includes [`netlify.toml`](./netlify.toml) and a serverless endpoint at [`netlify/functions/vote.js`](./netlify/functions/vote.js).

### Option A: Via GitHub (Recommended)
1. Push this folder to a GitHub repository.
2. Sign in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"** > select your GitHub repo.
4. Netlify will auto-detect the configuration:
   - **Publish directory**: `.` (root)
   - **Functions directory**: `netlify/functions`
5. Click **"Deploy site"**. Your live tournament site and voting API will be live instantly!

### Option B: Via Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🏏 Official Tournament Schedule

| # | Matchup | Teams |
|---|---|---|
| **1** | MM vs HH | Megha Marvels vs Hitakshi Hurricane |
| **2** | AA vs SSS | Arpita Avengers vs Sohi Super Strikers |
| **3** | PP vs MM | Priyansi Power Hitters vs Megha Marvels |
| **4** | HH vs AA | Hitakshi Hurricane vs Arpita Avengers |
| **5** | SSS vs PP | Sohi Super Strikers vs Priyansi Power Hitters |
| **6** | MM vs AA | Megha Marvels vs Arpita Avengers |
| **7** | HH vs PP | Hitakshi Hurricane vs Priyansi Power Hitters |
| **8** | MM vs SSS | Megha Marvels vs Sohi Super Strikers |
| **9** | AA vs PP | Arpita Avengers vs Priyansi Power Hitters |
| **10** | HH vs SSS | Hitakshi Hurricane vs Sohi Super Strikers |

---
© 2026 **Cricket Fam**. All rights reserved.

