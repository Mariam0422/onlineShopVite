import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order'
export default function Header({orders}) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBasket onClick={() => setCartOpen(cartOpen => !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
          {cartOpen && (
            <div className="shop-cart">
             {orders.length > 0 ? 
               orders.map(el => (
                <Order key={el.id} item={el} />
               )): 
               <p style={{paddingBottom: "10px"}}>The cart is empty for now</p>  }
            </div>
          )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
