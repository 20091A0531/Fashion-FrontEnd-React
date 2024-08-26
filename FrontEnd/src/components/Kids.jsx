import ProductCard from "./ProductCart";

const Kids=({listItems,setList,cart,setCart})=>{
    const Category=["Kids"]
    return (
        <ProductCard listItems={listItems} setList={setList} cart={cart} setCart={setCart} Category={Category}/>
        
    )
}
export default Kids;