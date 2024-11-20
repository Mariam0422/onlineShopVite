import React, { useState, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order'
export default function Header({orders, onDelete}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [sum, setSum] = useState(0);
  
  useEffect(() => {
    const total = orders.reduce((acc, el) => acc + +el.price, 0);
    setSum(total);
  }, [orders]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartOpen && !event.target.closest(".shop-cart") && !event.target.closest(".shop-cart-button") && !event.target.closest(".delete-icon")) {
        setCartOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [cartOpen]);

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
             {orders.length > 0 ? (
              <>           
               {orders.map(el => (
                <Order key={el.id} item={el} onDelete={onDelete}/>
               ))}
               <hr/>
               <p style={{float: "right", fontWeight: "600", margin: "20px 0 20px 0"}}>Общяя сумма: {new Intl.NumberFormat().format(sum)}</p>
               </>  
              )
               : 
               <p style={{paddingBottom: "10px"}}>The cart is empty for now</p> 
                }
            </div>
          )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
