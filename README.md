# 🎧 HeyGaana — Spotify-Inspired Music Player

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

🔗 **Live Demo:** (https://heygaana.netlify.app/)

HeyGaana is a **frontend-only music player application** inspired by Spotify, built entirely using **HTML, CSS, and Vanilla JavaScript**.  
The project focuses on **core web fundamentals**, real-world UI logic, audio playback handling, responsive design, and deployment on a static hosting platform.

---

## 📌 Resume Snapshot (Quick Overview)

**HeyGaana – Music Player Web App**  
- Built a Spotify-inspired music player using HTML, CSS, and JavaScript  
- Implemented audio playback using the HTML5 Audio API  
- Added play/pause, next/previous controls, seekbar, and time formatting  
- Managed static song data using JSON for Netlify-compatible deployment  
- Designed responsive UI with mobile navigation and smooth animations  
- Deployed the project on Netlify with optimized performance  

---

## ✨ Project Overview

HeyGaana is more than a visual clone — it is a **functional music player** designed to replicate the essential behavior of modern streaming platforms.

Users can:
- Browse a dynamically generated song list
- Play, pause, and switch tracks
- Navigate using previous and next buttons
- View current song information and playback time
- Seek within a track using a progress bar
- Experience responsive design across devices

All functionality is achieved **without frameworks or external libraries**, emphasizing clarity and control.

---

## 🚀 Live Deployment

The project is deployed using **Netlify**, a static hosting service.

👉 **Live URL:** https://heygaana.netlify.app/

Deployment highlights:
- Fully static frontend
- JSON-based data handling
- No backend dependency
- High Lighthouse performance score (~95)

---

## 🧠 Key Features & Concepts

### 🎵 Audio Playback System
- Uses the native **HTML5 Audio API**
- Maintains a single global audio instance
- Ensures UI and audio state stay synchronized
- Handles edge cases like pause, resume, and track switching

### ⏱ Time & Seekbar Logic
- Converts raw seconds into `mm:ss` format
- Updates playback time in real-time
- Click-based seekbar interaction for precise navigation

### 📁 Static Data with JSON
- Songs stored in `songs.json`
- Avoids directory fetching (static-hosting safe)
- Mimics real API behavior in frontend-only setup
- Works seamlessly with Netlify deployment

### 📱 Responsive UI
- Mobile-first layout using media queries
- Hamburger menu for smaller screens
- Smooth sidebar animations using CSS transitions
- Layout adapts cleanly across screen sizes

---

## 🛠 Tech Stack

- **HTML5** — Semantic structure  
- **CSS3** — Flexbox, transitions, media queries  
- **JavaScript (ES6+)** — DOM manipulation, events, Audio API  
- **JSON** — Static data handling  
- **Netlify** — Hosting & deployment  
- **Git & GitHub** — Version control  

No frameworks.  
No libraries.  
Pure fundamentals.

---

## 📂 Project Structure

spotify-clone/
│
├── index.html
│
├── css/
│ ├── style.css
│ └── utility.css
│
├── js/
│ └── script.js
│
├── assets/
│ ├── icons/
│ └── images/
│
├── songs/
│ ├── *.mp3
│ └── songs.json
│
└── README.md


