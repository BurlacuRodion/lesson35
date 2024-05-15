import './styles.css';
import { useNavigate } from 'react-router-dom';
//import ShopingCartIcon from '../../assets/shopping-cart.png';
import { ProductsContext } from '../../context/productsContext';
import { useContext, useState, useEffect } from 'react';
import Counter from '../Counter/indes';


const CardItem = ({title, img, price, id, mesureType, amount}) => {
    const navigate = useNavigate()
    const { handleAddToCart } = useContext(ProductsContext)
    const [value, setValue] = useState(1)

    const handleChangeValue = (value) => {
        if(isNaN(value) || value < 1) return;

        setValue(Number(value))
    }

    const arrowLeftAction = () => {
        if(value < 2 ) return;
        setValue(prev => --prev)    
    }

    const arrowRightAction = () => {
        setValue(prev => ++prev)
    }

    const handleClick = () => {
        navigate(`/product/${id}`)
    }
    const handleAddProduct = (e) => {
        e.stopPropagation()
        handleAddToCart({title, img, price, id, mesureType, amount: value})
        setValue(1)
    } 
    
    return (
        <div className='card-wrapper'>
            <div onClick={handleClick} className='card'>
                <img className='card-image' src={img} alt={`${title}-image`} />
                <p className='card-title'>{title}</p>
                <p className='card-price'>{price}$</p>
                <p className='card-price'>added {amount}</p>
            </div>
            <Counter 
                value={value} 
                onClick={handleAddProduct} 
                onChange={handleChangeValue}
                arrowLeftAction={arrowLeftAction}
                arrowRightAction={arrowRightAction}
            />  
        </div>
    );
}

export default CardItem;