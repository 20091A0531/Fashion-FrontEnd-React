import "../components/productcart.css";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


function ProductCard({ listItems,setList, cart, setCart }) {


  const onHandleClick = (id) => {
    let product = listItems.filter((item) => item.id === id);
    let newCart = [...cart];
    let contains = cart.filter((items) => items.id === id);
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

  const onHandleWish=(id)=>{
    let product = listItems.findIndex((item) => item.id === id);
    let newCart = [...listItems];
    newCart[product]["Wishlist"]=true;
    setList(newCart);
  }

  return (
    <div className="container">
      {listItems.map((product) => (
        <div key={product.id} className="product-card">
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
              <button className="add-to-wishlist-button"
                onClick={()=>onHandleWish(product.id)}
              >
              {product.Wishlist?<FaHeart />:<CiHeart />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
