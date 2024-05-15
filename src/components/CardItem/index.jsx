import './styles.css';
import { useNavigate } from 'react-router-dom';
//import ShopingCartIcon from '../../assets/shopping-cart.png';
import { ProductsContext } from '../../context/productsContext';
import { useContext, useState } from 'react';
import Counter from '../Counter/indes';


const CardItem = ({title, img, price, id, mesureType}) => {
    const navigate = useNavigate()
    const { handleAddToCart, handleChangeSelectedAmount, 
            selectedAmount } = useContext(ProductsContext)

    const [value, setValue] = useState(selectedAmount)

    const handleChangeValue = (value) => {
        if(isNaN(value) || value < 1) return;

        setValue(value)
        handleChangeSelectedAmount(value)

    }

    const handleClick = () => {
        navigate(`/product/${id}`)
    }
    const handleAddProduct = (e) => {
        e.stopPropagation()
        handleAddToCart({title, img, price, id, mesureType})
    } 

    return (
        <div className='card-wrapper'>
            <div onClick={handleClick}>
                <img className='card-image' src={img} alt={`${title}-image`} />
                <p className='card-title'>{title}</p>
                <span className='card-price'>{price}$</span>
            </div>
            <Counter value={value} onClick={handleAddProduct} onChange={handleChangeValue}/>  
        </div>
    );
}

export default CardItem;