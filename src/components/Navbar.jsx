import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">🏠 Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">📒 Contacto</NavLink>
            </li>
          </ul>
          <span className="navbar-text text-white pe-5">
            🍰 Happy Cake
          </span>
        </div>
      </div>
    </nav>
  )
}

