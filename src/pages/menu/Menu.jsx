
import './menu.css';
import MenuListItem from '../../components/menuListItem/MenuListItem';
// import data from "../../data/db.json";
import { usePizza } from "../../context/PizzaContext";
import { useParams } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';



function Menu(props) {
    const { pizzadata } = usePizza();
    


    let menuData = [];
    const { name } = useParams();
    console.log("category) is " + name);
    if (props.view === "short") {
        menuData = pizzadata['general-menu'];
    } else {
        menuData = pizzadata[name];
    }
    //console.log(menuData);



    return (
        <div className="menuElements">
            {(props.view==="short")?<Carousel/>:""}
            <div className="menuHeader">
                <h1>{(name) ? name : props.title}</h1>
            </div>
            <div className="menuList">

                {menuData.map((data, index) => {
                    return <MenuListItem
                        key={index}
                        display={data.display}
                        title={data.title}
                        imageSource={data.imageSource}
                        desc={data.desc}

                    />
                })}

            </div>

        </div>
    )


}
Menu.defaultProps = {
    view: "short",
    type: "category",
    title: "Our Menu",
}
export default Menu;
