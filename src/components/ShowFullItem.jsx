const ShowFullItem = ({item, onShowItem, onAdd}) => {
 
    return ( 
        <div className="full-item">
         <div>
         <img src={item.img}  onClick={() => onShowItem(item)}/>
         <h2>{item.title}</h2>
         <p>{item.desc}</p>
         <b>{item.price}$</b>
         <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
         <div className='close-cart'  onClick={() => onShowItem(item)}>x</div>
         </div>
        </div>
     );
}
 
export default ShowFullItem;