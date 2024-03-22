import React from "react"

function Header() {
  return (
    <header>
      <div className="container space-between">
        <div className="header-left">
            <img src="icon-menu.svg" alt="menu" />
            <img src="logo.svg" alt="sneakers logo" />
        </div>

        <div className="header-right">
            <button type="button" className="cart-button center">
              <span className="cart-count accent-bg">3</span>
              <img src="icon-cart.svg" alt="cart" />
            </button>
            <img src="image-avatar.png" alt="profile picture" className="profile-pic"/>
        </div>
      </div>
    </header>
  )
}

export default Header
