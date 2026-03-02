Crypto Market Overview
A responsive crypto market dashboard that displays live cryptocurrency data with search and watchlist functionality.
This project was built as part of a Frontend Assignment and developed iteratively across three levels.

🚀 Live Demo
Deployed Link:
  https://crypto-market-steel.vercel.app/

GitHub Repository:
https://github.com/apzz21/crypto-market

Features

Level 1 – Market Viewer

• Fetches live cryptocurrency data from.  CoinGecko API
• Displays:
• Coin Name
• Symbol
• Current Price
• 24h Price Change %
• 24h change color indication:
• 🟢 Green → Positive change
• 🔴 Red → Negative change
• Auto-refreshes data every 30 seconds
• Error handling if API request fails
• Fully styled using basic CSS (no UI libraries used)

Level 2 – Search & Watchlist

• Search bar to filter coins by name
• "Add to Watchlist" button for each coin
• Separate Watchlist section
• Watchlist persists using localStorage
• Automatically loads saved watchlist on page refresh

Level 3 – Deployment

• Application deployed online
• Code hosted on GitHub
• README included explaining project structure and architecture

 Tech Stack

• HTML5
• CSS3 (Basic CSS)
• JavaScript
• CoinGecko Public API
• localStorage (for watchlist persistence)

 Project Structure

crypto-market-overview/
│
├── index.html
├── style.css
├── script.js
└── README.md

Explanation:

• index.html → Main structure of the application
• style.css → Custom styling to match Figma design
• script.js → Handles API calls, search, watchlist, auto-refresh logic
• README.md → Project documentation
Data Flow / Architecture
• On page load:
• Fetch top cryptocurrencies from CoinGecko API
• Load watchlist from localStorage
• Render market data
• Every 30 seconds:
• API is called again
• UI updates automatically
• Search:
• Filters coins dynamically based on input
• Watchlist:
• Selected coins are stored in localStorage
• Rendered separately in Watchlist section
The architecture is simple and modular:
• API handling logic separated from rendering logic
• Watchlist logic separated from market rendering
• State stored locally using localStorage

API Used

CoinGecko API
Endpoint used:
https://api.coingecko.com/api/v3/coins/markets
Parameters:
• vs_currency=usd
• order=market_cap_desc
• per_page=10
• page=1
• price_change_percentage=24h

Responsiveness

The layout is built using Flexbox and is responsive across:
• Desktop
• Tablet
• Mobile devices

Error Handling

If the API fails:
• An error message is displayed on screen
• The application does not crash
• Previous watchlist remains intact

Author
Aparna B Raj



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
