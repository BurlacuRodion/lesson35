import { useContext, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import DeleteItem from '../../assets/delete.png'
import './styles.css'

const ShopingCartPage = () => {
    const {cart, changeCart} = useContext(ProductsContext)
 
    const deleteItem = (id) => {
        console.log('id',id)
        console.log(cart)
        const arr = [...cart]
        const objWithIdIndex = arr.find((obj) => obj.id === id);
        arr.splice(objWithIdIndex, 1);
       console.log(arr)
       changeCart(arr)
    }

    if(cart.length === 0) return <div>cart is empty</div>

    const renderShopingList = cart.map((product) => {
        return (
            <div className="cart-item" key={product.id}>
                <div className="delete-item-wrapper" onClick={()=> deleteItem(product.id)}>
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