import React from "react"

function Cart() {
  return (
    <button type="button" className="cart-button center">
      <span className="cart-count accent-bg">3</span>
      <img src="icon-cart.svg" alt="cart" />
    </button>
  )
}

export default Cart
