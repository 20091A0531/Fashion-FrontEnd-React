import ProductCard from "./ProductCart";

const Men=({listItems,setList,cart,setCart})=>{
    const menList=listItems.filter((product)=>product.Category==="Men");
    return (
        <ProductCard listItems={menList} setList={setList} cart={cart} setCart={setCart}/>      
    )
}
export default Men;