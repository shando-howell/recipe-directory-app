import { Link } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme";

import { SearchBar } from "../SearchBar/SearchBar"

import "./Navbar.css";

const Navbar = () => {
  const { color, changeColor } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
        <nav onClick={() => changeColor('orange')}>
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