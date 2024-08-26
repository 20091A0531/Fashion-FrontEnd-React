import ProductCard from "./ProductCart";

const Women=({listItems,setList,cart,setCart})=>{
    const Category=["Women"]
    return (
        <ProductCard listItems={listItems} setList={setList} cart={cart} setCart={setCart} Category={Category}/>
        
    )
}
export default Women;