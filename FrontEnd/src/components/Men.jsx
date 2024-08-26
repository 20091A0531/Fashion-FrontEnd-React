import ProductCard from "./ProductCart";

const Men=({listItems,setList,cart,setCart})=>{
    const Category=["Men"]
    return (
        <ProductCard listItems={listItems} setList={setList} cart={cart} setCart={setCart} Category={Category}/>      
    )
}
export default Men;