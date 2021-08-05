import './cart.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePizza } from '../../context/PizzaContext';
import LargeCartList from '../../components/largeCartList/LargeCartList';



export default function Cart() {
    const { cart, cartList } = usePizza();
    // console.log("totalPrice is "+totalPrice)
    useEffect(() => {
        const navlinks_list = document.getElementsByClassName("list");
        for (var i = 0; i < navlinks_list.length; i++) {
            navlinks_list[i].classList.remove("active");
        }
        const liclass = "list3";
        document.getElementsByClassName(liclass)[0].classList.add("active");
        console.log("hi from new york")
    }, [cartList, cart])

    return (
        <div className="l-cart-elements">
            <div className="l-cart-banner">
                {cart === 0 ? (
                    <div className="l-empty-cart">
                        <div className="l-empty-text-div">
                            <h3 className="l-empty-title-text">Your Cart is Empty</h3>
                            <p className="l-empty-title-desc">please add some items </p>
                        </div>
                        <div className="l-empty-button">
                            <Link to="/OrderNow"><button className="l-empty-button-element">Explore pizzas</button></Link>
                        </div>
                    </div>
                ) : (
                    <div className="l-cart-list-component">
                        <div className="l-cart-list-title-div">
                            <h3 className="l-cart-list-title">{cart} items selected</h3>
                            <Link to="/OrderNow" style={{ textDecoration: 'none' }}><h4 className="l-cart-list-explore">EXPLORE MENU</h4></Link>
                        </div>
                        {cartList.map((cartData, index) => {
                            // console.log(cartData);
                            return <LargeCartList data={cartData} />
                        })}
                    </div>
                )
                }
            </div>
            <div className="l-address-form-banner">
                <h3 >Address</h3>
                <div className="l-address-form">
                    Name:<input placeholder="Enter Your Name"></input>
                    Address:<textarea placeholder="Enter your Delivery Address"></textarea>
                </div>
                {/* <h3>Price Details:{totalPrice}</h3> */}

            </div>

        </div>
    )
}
