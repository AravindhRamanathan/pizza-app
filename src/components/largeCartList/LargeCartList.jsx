import { usePizza } from '../../context/PizzaContext';
import './largeCartList.css'
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect,useState } from 'react';

export default function LargeCartList(props) {
    
    const [data] = useState(props.data);
    const [quantity,setQuantity]=useState(data.cartItemQuantity);
    const [price,setPrice]=useState(data.price);
    const imgSrc = "/images/overview" + data.o_image;
    const {totalPrice,setTotalPrice,setCart,cartList} = usePizza();
    
    useEffect(()=>{
        setTotalPrice(totalPrice=>totalPrice+price);
    },totalPrice,price);
    console.log(totalPrice);
    

    function handleDelete(cid){
        for(var i in cartList)
        {
            if(cartList[i].id===cid)
            {

                // cartList.splice(cid,1);
                cartList[i].cartItemQuantity=0;
                setCart(cart=>cart-1);
                setQuantity(0);
                
                // cartList.pop(cartList[i].id);  
            }
        }
    }
    
    // function handleAddQuantity(cid){
    //     console.log("hi from add");
    //     for(var i in cartList)
    //     {
    //         if(cartList[i].id===cid)
    //         {   
    //             cartList[i].cartItemQuantity+=1;
    //             setQuantity(quantity=>quantity+1);
    //             setPrice(price=>price*quantity);
    //             cartList[i].price=price;
    //             console.log("price is "+price);
    //             console.log(cartList);
    //         }
    //     }
    // }
    // function handleRemoveQuantity(cid){
    //     for(var i in cartList)
    //     {
    //         if(cartList[i].id===cid)
    //         {
    //             console.log("cartlist iterator is "+i);
    //             cartList[i].cartItemQuantity-=1;
    //             if(cartList[i].cartItemQuantity<=0)
    //             {
    //                 setQuantity(0);
    //                 setCart(cart=>cart-1);
    //                 cartList.pop(cartList[i]);
    //                 console.log(cartList[i]);
    //                 // return true;
    //             }
    //             else{
    //                 setQuantity(quantity=>quantity-1);
    //                 // return false;
    //             }
    //         }
    //     }
    // }
    return (
        <>
        {quantity!==0?(
            <div className={`l-cart-list-elements ${props.small==="true"?"small":""}`} >
            <div className={`l-cart-list-image-div ${props.small==="true"?"small":""}`}>
                <img className={`l-cart-list-image ${props.small==="true"?"small":""}`} src={imgSrc} alt="pizaa" />
            </div>
            <div className={`l-cart-list-desc ${props.small==="true"?"small":""}`}>
                <h3>{data.title}</h3>
                <p>{data.o_desc}</p>
                <h4 className={`l-cart-list-desc-h4 ${props.small==="true"?"small":""}`}>{data.type} | {data.crust}</h4>
            </div>
            <div className="l-cart-list-price-elements">
                <p className="l-cart-list-price">₹{price}</p>
                <div className="l-cart-add-remove">
                    
                    {/* <button className="l-cart-remove" onClick={()=>handleRemoveQuantity(data.id)}><RemoveIcon/></button>
                    <p className="l-cart-quantity">{quantity}</p>
                    <button className="l-cart-add" onClick={()=>handleAddQuantity(data.id)}><AddIcon/></button> */}
                    <button className="l-cart-delete" onClick={()=>handleDelete(data.id)}><DeleteIcon color="primary"/></button>
                </div>
            </div>
        </div>):(<></>)}
        </>
    )
}

