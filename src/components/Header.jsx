import React from "react"
import NavBar from "../components/NavBar.jsx"
import Cart from "../components/Cart.jsx"

function Header() {
  return (
    <header>
      <div className="container space-between">
        <div className="header-left">
            <NavBar />
            <img src="logo.svg" alt="sneakers logo" />
        </div>

        <div className="header-right">
            <Cart />
            <img src="image-avatar.png" alt="profile picture" className="profile-pic"/>
        </div>
      </div>
    </header>
  )
}

export default Header
