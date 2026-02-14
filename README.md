# GETFIN - Get Finance
A performant portfolio dashboard built with modern full-stack practices.
The application fetches stock portfolio data, groups it by sector, and presents aggregated financial metrics with optimized API usage and caching strategies.

## Tech Stack
### Frontend
Next.js (App Router / Client Components)
React
TypeScript
Custom Hooks
Fetch API

### Backend
Node.js
Next.js API Routes
In-memory caching with TTL

### Architecture Goals

Reduce unnecessary API calls
Improve response time
Maintain UI freshness
Keep strong TypeScript contracts


### Versions Used

```bash
Node.js: >=18.x
Next.js: 14+
React: 18+
TypeScript: 5+
```



## Installation
### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

or
```bash
yarn install
```

### 3 Configure Backend Endpoint

Update the portfolio service if required:
```bash
http://localhost:4500/api/portfolio
```

Ensure your backend service is running.

▶️ Running the Project
Development Mode
```bash
npm run dev
```

Starts the app on:

```bash
http://localhost:3000
npm run build
npm run dev
```

###  Performance Considerations

 ***Cache + Polling Alignment***
Both use 15 seconds, preventing duplicate upstream requests.

 ***Backend Aggregation***
Grouping on the server avoids repeated client calculations.

***Typed Contracts***
TypeScript ensures API and UI never drift apart.
