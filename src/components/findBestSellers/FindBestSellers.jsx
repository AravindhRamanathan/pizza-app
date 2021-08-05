import React from "react";
import { usePizza } from '../../context/PizzaContext';
import OrderListItems from "../orderListItems/OrderListItems";

export default function FindBestSellers(){
    // console.log("hi from findBest Sellers")
    const {pizzadata}=usePizza();
    const bestSellerArray = [];
    var index;
    // console.log(pizzadata["Veg pizza"]);
    for (index in pizzadata) {
        Object.keys(pizzadata[index]).forEach(function (key) {
            if (pizzadata[index][key].IsBestSeller === true) {
                bestSellerArray.push(pizzadata[index][key])
            }
        }
        )
    }
    // console.log(bestSellerArray);
    return(
        <div>
            <OrderListItems title="Best Sellers" data={bestSellerArray} key={index}/>
        </div>
    )
}