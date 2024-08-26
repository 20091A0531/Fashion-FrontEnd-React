import ProductCard from "./ProductCart";

const Home=({listItems,setList,cart,setCart})=>{
    const Category=["Men","Women","Kids"]
    return (
        <ProductCard listItems={listItems} setList={setList} cart={cart} setCart={setCart} Category={Category}/>

    )
}
export default Home;