
import  ArrowLeftIcon from '../../assets/angle-left.png';
import  ArrowRightIcon from '../../assets/angle-right.png';
import ShopingCartIcon from '../../assets/shopping-cart.png';
import './styles.css'

const Counter = ({value, onChange, onClick}) => {
    const handleChange = (e) => {
        e.stopPropagation()
        onChange(e.target.value)
    }

    return(
        <div className='counter-container'>
            <img className="counter-icon" src={ArrowLeftIcon} alt="arrow-left"/>
            <div className="counter-input-wrapper">
                <input className='counter-input' value={value} onChange={handleChange} onClick={(e)=>e.stopPropagation()}/>
            </div>
            <img className="counter-icon" src={ArrowRightIcon} alt="arrow-right"/>

            <div onClick={onClick}>
                <img className='counter-icon' src={ShopingCartIcon} alt="shoping-cart" />
            </div>
        </div>
    );
}

export default Counter;