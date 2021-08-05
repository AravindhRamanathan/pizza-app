import { useEffect } from "react";
import FindBestSellers from "../../components/findBestSellers/FindBestSellers";
import OrderListItems from "../../components/orderListItems/OrderListItems";
import SideBar from "../../components/sidebar/SideBar";
import { usePizza } from "../../context/PizzaContext";
import LargeCartList from "../../components/largeCartList/LargeCartList";
import "./ordernow.css";

function OrderNow() {
    const { cart,cartList,pizzadata, isSideBar, handleCloseClick } = usePizza();
    const newArray = [];
    const keyArray=[];
    var index;
    for (index in pizzadata) {
        keyArray.push(index);
        if (index !== "general-menu") {
            newArray.push(pizzadata[index]);
        }
    }

    //changing the nav links to actuve nav links
    useEffect(() => {
        const navlinks_list = document.getElementsByClassName("list");
        for (var i = 0; i < navlinks_list.length; i++) {
            navlinks_list[i].classList.remove("active");
        }
        const liclass = "list2";
        document.getElementsByClassName(liclass)[0].classList.add("active");
    }, [])

    console.log("cart number is "+cart)
    return (
        <>
            <div className={isSideBar ? "show-side-bar active" : "show-side-bar"}>
                <SideBar handleCloseClick={handleCloseClick} />
            </div>

            <div className="orderNowElements">
                <div className="on-menuItems">
                    <FindBestSellers />
                    {newArray.map((eachArray,index)=>{
                        return <OrderListItems title={keyArray[index+1]} data={eachArray} key={index}/>
                        })
                    }
                    



                    {/* <div className="on-horizontalLine">
                        <hr></hr>
                    </div>
                    <div className="catBar">
                        <p>BESTSELLER</p>
                    </div>
                    <div className="pizza-banner-div">
                        <PizzaItem />
                        <PizzaItem />
                        <PizzaItem />
                        <PizzaItem />
                        <PizzaItem />
                        <PizzaItem />
                        <PizzaItem />
                </div>*/}

                </div>
                <div className="on-cart">
                    <div className="ad-banner">
                        <img src="/images/covid-banner.png" alt="ad-banner" title="get a discount coupon"></img>
                        <div className="vaccination-button">
                            <button className="i-am-vaccinated">i am vaccinated</button>
                            <button className="planned-to-vaccinate">i planned to vaccinate</button>
                        </div>
                    </div>
                    {(cart===0)?(
                    <div className="on-empty-cart-banner">
                        <div className="on-text-area">
                            <p className="on-cart-banner-text">Your Cart is empty</p>
                            <p className="on-caption-text">please add some items from the menu</p>
                        </div>
                    </div>
                    ):(
                        <div className="cart-banner">
                            {cartList.map((cartData,index)=>{
                            // console.log(cartData);
                            return <LargeCartList data={cartData} small="true"/>
                        })}
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default OrderNow
