import { useState, useContext,createContext} from "react";
import data from "../data/db.json";

const PizzaContext= createContext();

export function usePizza(){
    return useContext(PizzaContext);
}
export function PizzaProvider(props){
    const [cart,setCart]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [cartList,setCartList]=useState([
        // {
        //     id:"1",
        //     image:'daasd',
        //     desc:"sfadfsdfsd",
        //     type:"sdfsdfsdf",
        //     crust:"sdfsdfsdf",
        //     price:"sfsdfsdff"
        // }
        
        ]);
    const [isSideBar, setIsSideBar] = useState(false);

    function handleCustomize() {
        setIsSideBar(!isSideBar);
        document.getElementsByClassName("orderNowElements")[0].style.opacity = 0.5;
    }
    function handleCloseClick(){
        setIsSideBar(!isSideBar);
        document.getElementsByClassName("orderNowElements")[0].style.opacity = 1;
    }

    const pizzadata=data;


    const value={
        handleCloseClick,
        handleCustomize,
        isSideBar,
        setIsSideBar,
        totalPrice,
        setTotalPrice,
        pizzadata,
        cart,
        setCart,
        cartList,
        setCartList
    }

    

    return(
        <PizzaContext.Provider value={value}>
            {props.children}
        </PizzaContext.Provider>
    )
}