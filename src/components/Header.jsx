import Navbar from "./Navbar"

export default function Header() {
  return (
    <header>
          <div className="header--left">
            <Navbar />
            <img src="src/assets/logo.svg" alt="Sneakers logo" />
          </div>

          <div className="header--right">
            <button className="cart">
              <span className="cart-count-span">3</span>
              <img src="src/assets/icon-cart.svg" alt="cart" />
            </button>
            <img src="src/assets/image-avatar.png" alt="profile picture" className="profile-pic"/>
          </div>
    </header>
  )
}
