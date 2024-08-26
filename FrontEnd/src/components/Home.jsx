import ProductCard from "./ProductCart";

const Home=({listItems,setList,cart,setCart})=>{
    return (
        <ProductCard listItems={listItems} setList={setList} cart={cart} setCart={setCart}/>

    )
}
export default Home;