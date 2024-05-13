import {useParams} from 'react-router-dom';
import { ProductsContext } from '../../context/productsContext';
import {useContext} from 'react';
import './styles.css'

const ProductPage = () => {
    //return <CardItem/>
    const {id} = useParams()
    const {getProduct} = useContext(ProductsContext)
    const {product} = getProduct(id)
    
    return (
    <div className="product-page-container">
        <div className="product-page-details">
            <div>
                <img className="product-page-image" src={product.img} alt={product.title}/>
            </div>
            <div className="product-page-description">
                <h2>{product.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt harum autem, officia adipisci sit modi.</p>
                <p>{product.price}$</p>
            </div>
        </div>
    </div>
    )
}

export default ProductPage;