import React from "react"

function NavBar () {
  return (
    <nav role="navigation">
      {/*mobile toggle*/}

      {/*actual navigation links*/}
      <div className="mobile-menu-bg">
          <div className="menu-container">
              <ul>
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
