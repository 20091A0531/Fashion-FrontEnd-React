import "../components/Wishlist.css";

const Wishlist=({cartItems,listItems,setListItems,setCart})=>{
  console.log(listItems);
    const onHandleClick = (id) => {
      console.log("in wishlist")
        let product = listItems.filter((item) => item.id === id);
        let newCart = [...cartItems];
        let contains = cartItems.filter((items) => items.id === id);
        if (contains.length === 0) {
          product[0]["quantity"] = 1;
          newCart.push(product[0]);
          setCart(newCart);
        } else {
          contains[0]["quantity"] += 1;
          let remainingCart = newCart.filter((items) => items.id !== id);
          remainingCart.push(contains[0]);
          setCart(remainingCart);
        }
      };
    const onRemoveClick=(id)=>{
      let product = listItems.findIndex((item) => item.id === id);
      let newCart = [...listItems];
      newCart[product]["Wishlist"]=false;
      setListItems(newCart);
    }  
    return(
      <>
      <div className="text-container">
          <h2>YOUR WISHLIST</h2>
      </div>
      <div className="container">
        {
          listItems.map((product)=>(
             product.Wishlist?<div key={product.id} className="product-card">
                    <img src={product.image} alt="" className="product-image" />
                    <div className="product-info">
                      <h3 className="product-name">{product.ProductName}</h3>
                      <p className="product-price">₹{product.price}</p>
                      <p className="product-category">Category : {product.Category}</p>
                      <div className="buttons">
                        <button
                          className="add-to-cart-button"
                          onClick={() => onHandleClick(product.id)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="add-to-cart-button"
                          onClick={() => onRemoveClick(product.id)}
                        >
                          Remove from Wishlist
                        </button>
                      </div>  
                    </div>
                  </div>:""
          ))
        }
        </div>
    </>    
    ) 
}
export default Wishlist;