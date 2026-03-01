import { Bell, Search } from "lucide-react";

function Navbar({ search, setSearch }) {
return (
    <nav className="navbar">
    <div className="navbar-inner">
        <div className="nav-left">
        <h2 className="logo">
            Crypto<span>Pulse</span>
        </h2>

        <div className="nav-links">
            <span className="active">Market</span>
            <span>Portfolio</span>
            <span>Exchange</span>
        </div>
        </div>

        <div className="nav-right">
        <div className="search-box">
            <Search size={16} />
            <input
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <Bell size={18} className="bell" />
        <div className="avatar">JD</div>
        </div>
    </div>
    </nav>
);
}

export default Navbar;