# The Voyage Vault

A polished travel planner for discovering destinations, comparing trip ideas, and drafting itineraries in one modern interface.

## Overview
The Voyage Vault is a responsive single-page travel planning experience built with React, Vite, and Tailwind CSS. It was designed to feel portfolio-ready on GitHub and production-ready in the browser, with a mobile-first layout, accessible interactions, fluid media, and a cleaner visual system across mobile, tablet, and desktop screens.

## Live Demo
Add your deployed URL here once the project is live.

- Live site: `https://your-demo-link.com`

## Features
- Responsive travel planner UI optimized for mobile, tablet, and desktop
- Destination discovery cards with pricing and trip-duration highlights
- Itinerary planner with local storage persistence
- Contact form with accessible labels and touch-friendly controls
- Animated landing experience powered by Framer Motion
- Clean routing for Home, Destinations, Itinerary, About, and Contact pages
- Mobile-first navigation with improved focus states and keyboard support

## Screenshots And GIFs
Add product visuals to `docs/screenshots/` and update the image links below.

- Home screen: `docs/screenshots/home.png`
- Destinations page: `docs/screenshots/destinations.png`
- Itinerary planner: `docs/screenshots/itinerary.png`
- Mobile walkthrough GIF: `docs/screenshots/mobile-demo.gif`

Example markdown to use after adding the assets:

```md
![Home screen](./docs/screenshots/home.png)
![Mobile demo](./docs/screenshots/mobile-demo.gif)
```

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Framer Motion
- Heroicons
- Local Storage for itinerary persistence

## Setup Instructions
### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone https://github.com/boipeloMo/The-Voyage-Vault.git
cd The-Voyage-Vault
npm install
```

### Run Locally
```bash
npm run dev
```

Open the local dev server URL shown in the terminal.

### Production Build
```bash
npm run build
npm run preview
```

## Folder Structure
```text
The-Voyage-Vault/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── docs/
│   └── screenshots/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Why This Project Stands Out
- The UI was refactored to be mobile-first instead of desktop-shrunk
- Layouts now use more consistent breakpoints and fluid components
- Touch targets, focus states, and form labels were improved for accessibility
- The repository is structured and documented to work well as a pinned GitHub project

## Suggested Next Improvements
- Deploy to Vercel or Netlify and replace the live demo placeholder
- Capture polished screenshots and a short mobile demo GIF
- Add filtering, favorites, and itinerary export features
- Introduce automated tests for critical flows

## Author
Boipelo Kenya Moabi

