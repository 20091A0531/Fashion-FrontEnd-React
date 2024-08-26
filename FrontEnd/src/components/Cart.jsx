import "./Cart.css"; // Import the CSS file


const Cart = ({ cartItems, setCart }) => {


  const handleOnChange = (event,id) => {

    let newCart = [...cartItems];
    let itemCart = newCart.findIndex((product) => product.id === id);
    if (event.target.value >= 1) {
      newCart[itemCart]["quantity"] = event.target.value;
      console.log(cartItems[itemCart]["quantity"]);
      setCart(newCart);
    }
  };


  const removeFromCart = (id) => {

    let newCart = cartItems.filter((product)=>product.id!==id);
    setCart(newCart);
  };


  const getTotalPrice = () => {
    
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <div className="cart-content">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div>
                    <label>Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(event) => handleOnChange(event,item.id)}
                    />
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h3>Total Price: ₹{getTotalPrice()}</h3>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
