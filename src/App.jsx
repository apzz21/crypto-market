import { useEffect, useState } from "react";
import "./App.css";
import CoinCard from "./CoinCard";
import Navbar from "./Navbar";

function App() {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
  const saved = localStorage.getItem("watchlist");
  return saved ? JSON.parse(saved) : [];
});
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // 🔹 Add / Remove from Watchlist
  const addToWatchlist = (coin) => {
  if (watchlist.includes(coin.id)) {
    setWatchlist(watchlist.filter((id) => id !== coin.id));
  } else {
    setWatchlist([...watchlist, coin.id]);
  }
};

  // 🔹 Fetch Data from CoinGecko
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );

      if (!response.ok) {
        throw new Error("API failed");
      }

      const data = await response.json();
      setCoins(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    }
  };

  // ✅ 1. Load Watchlist from localStorage (Runs once)


  // ✅ 2. Save Watchlist whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // ✅ 3. Fetch API + Auto Refresh every 30s
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Search Filter
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="container">
        {/* WATCHLIST SECTION */}
        <h2 className="section-title">My Watchlist</h2>
        <p className="subtitle">
          Your personalized collection of assets
        </p>

        <div className="grid">
          {coins
      .filter((coin) => watchlist.includes(coin.id))
      .map((coin) => (
        <CoinCard
          key={coin.id}
          coin={coin}
          addToWatchlist={addToWatchlist}
          watchlist={watchlist}
        />
    ))}

          <div className="add-card">
            <div className="plus">+</div>
            <p>Add asset to watchlist</p>
          </div>
        </div>

        {/* MARKET OVERVIEW */}
        <div className="section-header">
          <div>
            <h2 className="section-title">Market Overview</h2>
            <p className="subtitle">
              Real-time data for top performance assets
            </p>
          </div>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="grid">
          {filteredCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              coin={coin}
              addToWatchlist={addToWatchlist}
              watchlist={watchlist}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;