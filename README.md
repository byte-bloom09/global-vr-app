# 🌍 Global-VR: Immersive Web-Based Travel Platform

## 1️⃣ Problem Statement
Physical travel is often restricted by budget, time, or physical accessibility. Conventional travel websites rely on flat, 2D images that fail to provide an authentic sense of presence.  

**Global-VR** solves this by providing a first-person, web-based Virtual Reality experience that allows users to explore the world’s most iconic destinations from their own homes.

---

## 2️⃣ Tech Stack

### Frontend
- React.js
- A-Frame (WebVR Framework)
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB (User profiles, Favorites, Reviews)

### Authentication
- JSON Web Tokens (JWT)
- Bcrypt

---

## 3️⃣ Features

- ✅ **User Authentication**  
  Secure Sign-in/Sign-up system to personalize user experience.

- 🌎 **Destination Hub**  
  Post-login menu featuring curated destinations for exploration.

- 🥽 **First-Person POV Experience**  
  Immersive VR environment with full 360° navigation.

- 🌗 **Dynamic Day/Night Cycle**  
  Toggle between day and night environments inside the virtual map.

- ⭐ **Interactive Bookmarking**  
  Users can favorite viewpoints and return quickly.

- 💬 **Public Feedback System**  
  Users can rate locations and leave reviews.

- 🧭 **Global Navigation Menu**  
  Persistent navigation for seamless switching between destinations.


## 4️⃣ Project Structure
```
global-vr-app/
│
├── client/ # React Frontend
│ ├── public/ # 360° Assets & Textures
│ ├── src/
│ │ ├── components/ # VRViewer, Navbar, Sidebar, ReviewCard
│ │ ├── pages/ # Login, DestinationMenu, Explorer
│ │ └── App.js
│
├── server/ # Node + Express Backend
│ ├── models/ # MongoDB Schemas (User, Destination, Review)
│ ├── routes/ # API endpoints (Auth, Destinations)
│ └── server.js # Backend entry point
│
└── README.md
```


This project follows a standard MERN architecture with separated **client (frontend)** and **server (backend)** modules.


