import './styles.css';
import { useNavigate } from 'react-router-dom';
//import ShopingCartIcon from '../../assets/shopping-cart.png';
import { ProductsContext } from '../../context/productsContext';
import { useContext } from 'react';
import Counter from '../Counter/indes';


const CardItem = ({title, img, price, id, mesureType}) => {
    const navigate = useNavigate()
    const { handleAddToCart, handleChangeSelectedAmount, selectedAmount } = useContext(ProductsContext)

    const handleClick = () => {
        navigate(`/product/${id}`)
    }
    const handleAddProduct = (e) => {
        e.stopPropagation()
        handleAddToCart({title, img, price, id, mesureType})
    } 

    return (
        <div className='card-wrapper' onClick={handleClick}>
            <img className='card-image' src={img} alt={`${title}-image`} />
            <p className='card-title'>{title}</p>
            <span className='card-price'>{price}$</span>
            <Counter value={selectedAmount} onClick={handleAddProduct} onChange={handleChangeSelectedAmount}/>  
        </div>
    );
}

export default CardItem;