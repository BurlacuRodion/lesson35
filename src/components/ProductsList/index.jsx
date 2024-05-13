import { ProductsContext } from '../../context/productsContext';
import CardItem from '../CardItem';
import './styles.css';
import { useContext, useEffect} from 'react';


const ProductList = () => {
    const {products, getProducts} = useContext(ProductsContext)

    useEffect(()=>{
        getProducts()
    },[])
    
    return <div className='product-list-wrapper'>
        {products.map(item => 
            <CardItem 
                key={item.id}
                title={item.title} 
                img={item.img} 
                price={item.price}
                id={item.id}
                mesureType={item.mesureType}
            />)
        }
    </div>
}

export default ProductList;