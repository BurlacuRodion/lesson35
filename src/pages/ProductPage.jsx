import CardItem from "../components/CardItem";
import {useParams} from 'react-router-dom';
import { ProductsContext } from "../context/productsContext";
import {useContext} from 'react'



const ProductPage = () => {
    //return <CardItem/>
    const {id} = useParams()
    const {getProduct} = useContext(ProductsContext)
    const {product} = getProduct(id)
    
    return <CardItem title={product.title} img={product.img} price={product.price} id={product.id}/>
}

export default ProductPage;