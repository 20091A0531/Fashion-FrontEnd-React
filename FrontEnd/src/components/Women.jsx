import ProductCard from "./ProductCart";

const Women=({listItems,setList,cart,setCart})=>{
    const womenList=listItems.filter((product)=>product.Category==="Women");
    return (
        <ProductCard listItems={womenList} setList={setList} cart={cart} setCart={setCart}/>
        
    )
}
export default Women;