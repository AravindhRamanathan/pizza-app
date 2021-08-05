import "./pizzaitem.css";
import { useState,useEffect } from "react";
import { usePizza } from "../../context/PizzaContext";

export default function PizzaItem(props) {
    
    const eachData=props.data;
    // console.log("price is"+eachData.o_price);
    const imgSrc="/images/overview"+eachData.o_image;
    const{handleCustomize,cartList} = usePizza();
    const {cart,setCart}= usePizza();
    const [price,setPrice]=useState(eachData.o_price);
    const [type,setType]=useState("regular");
    const [crust,setCrust]=useState("new hand toasted");
    var basePrice=eachData.o_price;
    // const typePriceModal={
    //     "regular":{
    //         "new hand toasted":"'+baseprice+'",
    //         "cheese burst":149,
    //         "fresh pan pizza":199,
    //     },
    //     "medium":{
    //         "new hand toasted":139,
    //         "cheese burst":189,
    //         "fresh pan pizza":249,
    //     },
    //     "large":{
    //         "new hand toasted":149,
    //         "cheese burst":249,
    //         "fresh pan pizza":349,
    //     }
    // }
    const typePriceModal={
        "regular":{
            "new hand toasted":30,
            "cheese burst":50,
            "fresh pan pizza":70,
        },
        "medium":{
            "new hand toasted":50,
            "cheese burst":70,
            "fresh pan pizza":90,
        },
        "large":{
            "new hand toasted":70,
            "cheese burst":90,
            "fresh pan pizza":110,
        }
    }
    // const crustPriceModal={
    //     "new hand toasted":{
    //         "regular":99,
    //         "medium":139,
    //         "large":149,
    //     },
    //     "cheese burst":{
    //         "regular":149,
    //         "medium":189,
    //         "large":249,
    //     },
    //     "fresh pan pizza":{
    //         "regular":199,
    //         "medium":239,
    //         "large":349,
    //     }
    // }

    function findCartItem(cid){
        console.log(cartList);
        // console.warn(cartProduct);
        for(var i in cartList)
        {
            if(cartList[i].id===cid)
            {
                cartList[i].cartItemQuantity+=1;
                return true;
            }
        }
        return false;
    }

    function handleCartAdd(id){
        let TempCartItem=eachData;
        let cartItemQuantity=1;
        if(!findCartItem(id)){
            TempCartItem={...TempCartItem,price,type,crust,cartItemQuantity};
        cartList.push(TempCartItem);
        setCart(cart=>cart+1);
        console.warn(cartList);
            

        }
        else{
            console.log("yes cart found")
        }
        
    }
    function CalcItemPrice(type,crust){
        const total=typePriceModal[type][crust];
        eachData.price=price;
        setPrice(price=>price+total);
        
    }
    useEffect(()=>{
        (type==="regular"&&crust==="new hand toasted")?
            setPrice(basePrice): CalcItemPrice(type,crust);
    },[type,crust,cart,basePrice])
    
    
    return (
        <div className="pizza-banner">
            <div className="pizza-image">
                <img src={imgSrc} alt="pizza-food" />
                <p className="pizza-rupee">₹{price}</p>
                <button className="pizza-customize" onClick={()=>handleCustomize()}>Customize</button>
            </div>
            <div className="pizza-overview-desc">
            <div className="pizza-title">
                <p>{eachData.title}</p>
                <p className="pizza-desc">{eachData.o_desc}</p>
            </div>
            <hr />
            <form className="pizza-select">
                <div className="select-div">
                    <div className="left-select">
                        <p >size:</p>
                        <select className="pizza-type-select" value={type} onChange={(e)=>setType(e.target.value)}>
                            <option value="regular">regular</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                    </div>
                    <div className="right-div">
                        <p >crux:</p>
                        <select className="pizza-crust-select" value={crust} onChange={(e)=>setCrust(e.target.value)}>
                            <option value="new hand toasted">new hand toasted</option>
                            <option value="cheese burst">cheese burst</option>
                            <option value="fresh pan pizza">fresh pan pizza</option>
                        </select>
                    </div>
                   
                </div>
            </form>
            
            <div className="pizza-item-button">
                        <button type="button" onClick={()=>handleCartAdd(eachData.id)}>ADD TO CART</button>
            </div>
            </div>
        </div>
    )
}
