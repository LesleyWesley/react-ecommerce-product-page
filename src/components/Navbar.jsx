export default function Navbar() {
  return (
    <nav>
      <button className="menu-toggle">
        <img src="src/assets/icon-menu.svg" alt="menu" />
      </button>

      <div className="nav-overlay">
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
