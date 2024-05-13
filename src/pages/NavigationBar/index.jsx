
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import ShopingCartItem from '../../assets/shopping-cart.png';
import { ProductsContext } from '../../context/productsContext';
import { useContext } from 'react';

const NavigationBar = () => {
    const {cart} = useContext(ProductsContext)

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/cart`)
    }

    return(
        <div className='navigation-bar-container'>
            <Link className='navigation-bar-link' to='/'>Home</Link>
            <div className='navigation-bar-cart' onClick={handleClick}>
                <img className='navigation-bar-icon' src={ShopingCartItem} alt="shoping-cart" />
                {cart.length > 0 && <div className='navigation-bar-cart-amount'>{cart.length}</div>}
            </div>
        </div>
    )
}

export default NavigationBar;