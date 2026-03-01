import { ArrowDownRight, ArrowUpRight, Star } from "lucide-react";

function CoinCard({ coin, addToWatchlist, watchlist }) {
const isAdded = watchlist.includes(coin.id);
const isPositive = coin.price_change_percentage_24h > 0;

return (
    <div className="card">
    <div className="card-top">
        <div className="coin-info">
        <div className="coin-icon-wrapper">
            <img src={coin.image} alt={coin.name} className="coin-logo" />
        </div>

        <div>
            <h3 className="coin-name">{coin.name}</h3>
            <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
        </div>
        </div>

        <Star
        size={18}
        className="star"
        onClick={() => addToWatchlist(coin)}
        fill={isAdded ? "#2563eb" : "none"}
        stroke={isAdded ? "#2563eb" : "gray"}
        />
    </div>

    <h2 className="price">
        ${coin.current_price.toLocaleString()}
    </h2>

    <div className={`change ${isPositive ? "positive" : "negative"}`}>
        {isPositive ? (
        <ArrowUpRight size={14} />
        ) : (
        <ArrowDownRight size={14} />
        )}
        <span>
        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
        </span>
    </div>
    </div>
);
}

export default CoinCard;