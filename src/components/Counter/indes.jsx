
import  ArrowLeftIcon from '../../assets/angle-left.png';
import  ArrowRightIcon from '../../assets/angle-right.png';
import ShopingCartIcon from '../../assets/shopping-cart.png';
import './styles.css'

const Counter = ({value, onChange, onClick, arrowLeftAction, arrowRightAction}) => {
    const handleChange = (e) => {
        e.stopPropagation()
        onChange(e.target.value)
    }

    return(
        <div className='counter-container'>
            <div onClick={arrowLeftAction}>
                <img className="counter-icon" src={ArrowLeftIcon} alt="arrow-left"/>
            </div>
            <div className="counter-input-wrapper">
                <input className='counter-input' value={value} onChange={handleChange} onClick={(e)=>e.stopPropagation()}/>
            </div>
            <div onClick={arrowRightAction}> 
                <img className="counter-icon" src={ArrowRightIcon} alt="arrow-right"/>
            </div>
            <div onClick={onClick}>
                <img className='counter-icon' src={ShopingCartIcon} alt="shoping-cart" />
            </div>
        </div>
    );
}

export default Counter;