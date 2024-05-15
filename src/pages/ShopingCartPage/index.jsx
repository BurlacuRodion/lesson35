import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import DeleteItem from '../../assets/delete.png'
import './styles.css'

const ShopingCartPage = () => {
    const {cart} = useContext(ProductsContext)

    console.log(cart)

    if(cart.length === 0) return <div>cart is empty</div>

    const renderShopingList = cart.map((product) => {
        return (
            <div className="cart-item" key={product.title}>
                <div className="delete-item-wrapper">
                    <img className="delete-item" src={DeleteItem} alt="delete"/>
                </div>
                <img className='cart-img' src={product.img} alt={product.title} />
                <p>{product.title}</p>
                <div className="cart-counter">
                    <p>{product.amount}</p>
                </div>
                {/* <p>Price per {product.mesureType}: {product.price}</p> */}
                <div className='cart-price'>
                    <p>Cost: {product.amount * Number(product.price)}</p>
                </div>
                
            </div>
        )        
    })

    return <div className="shoping-cart-wrapper">
        {renderShopingList}
    </div>

}

export default ShopingCartPage;