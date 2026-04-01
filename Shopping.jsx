import React from 'react'

const Shopping = () => {

return (
    <>
    {/* 1. INPUT SECCTION */}
<div className="cart-container">
    <h1>Shopping Cart</h1>
    <div className=".input-section">
      <h2>Add Products</h2>
     <div className=".input-group">
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="price" step={0.5} min={0}/>
        <button>Add to Cart</button>
        </div>
     </div>
    </div>
     {/* 2. CART SECTION */}
       <cartitem/>














    {/* 3. Checkout-Footer */}
      <div className="cart-footer">
        <div className="cart-total">Total : 1000/ </div>
        <button className="checkout-btn"> Checkout </button>
        </div>


     
    </>
)
}
export default Shopping