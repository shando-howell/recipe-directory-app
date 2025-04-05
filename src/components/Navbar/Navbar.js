import { Link } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>The Recipe</h1>
            </Link>
            <SearchBar />
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}

export default Navbar