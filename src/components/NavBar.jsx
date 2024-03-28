import React from "react"

function NavBar () {

  const [menuOpen, setMenuOpen] = React.useState(false)

  function toggleMenu() {
    setMenuOpen(prevMenu => !prevMenu)
  }

  return (
    <nav role="navigation">
      {/*mobile toggle*/}

      <button className="menu-button" onClick={toggleMenu}><img src="icon-menu.svg" alt="menu button" /></button>

      {/*actual navigation links*/}
      <div className="mobile-menu-bg">
          <div className="menu-container">
              <ul className={menuOpen ? "" : "hide"}>
                  <li><a href="#">Collections</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
      </div>

    </nav>
  )
}

export default NavBar
