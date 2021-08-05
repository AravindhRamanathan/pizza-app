import './navbar.css';
import logo from '../navbar/pizza-new-logo.png';
import { Link } from 'react-router-dom';
import { usePizza } from '../../context/PizzaContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function NavBar() {
    const { cart } = usePizza();
    function handleclick(index) {
        const navlinks_list = document.getElementsByClassName("list");
        for (var i = 0; i < navlinks_list.length; i++) {
            navlinks_list[i].classList.remove("active");
        }
        const liclass = "list" + index;
        document.getElementsByClassName(liclass)[0].classList.add("active");

    }

    return (
        <div className="navbar">
            <div className="navbarElements">
                <div className="logo">
                    <img className="navbarLogoImage" src={logo} alt="logo" />
                </div>
                <div className="navLinks">
                    <ul className="navLinks-ul">
                        <Link to="/" style={{ textDecoration: "none" }}><li className="list list1 active" onClick={(e) => handleclick(1)} >Our Menu</li></Link>
                        <Link to="/OrderNow" style={{ textDecoration: "none" }}><li className="list list2 " onClick={() => handleclick(2)}>Order Now</li></Link>
                        <Link to="/Cart" style={{ textDecoration: "none" }}>
                            <div className="list3-div">
                                <li className="list list3 " onClick={() => handleclick(3)}>
                                    <span className="list3-span">Cart</span>
                                    <ShoppingCartIcon/>
                                </li>
                                
                                <span className="cart-number">{cart}</span>
                            </div>
                        </Link>
                        {/* <li className="list list4" onClick={() => handleclick(4)}>About</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
