import ProductCard from "./ProductCart";

const Kids=({listItems,setList,cart,setCart})=>{
    const kidsList=listItems.filter((product)=>product.Category==="Kids");
    return (
        <ProductCard listItems={kidsList} setList={setList} cart={cart} setCart={setCart}/>
        
    )
}
export default Kids;