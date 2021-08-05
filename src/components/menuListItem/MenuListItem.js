import './menuListItem.css';
import { Link } from 'react-router-dom';


export default function MenuListItem(props) {
    // console.log("name of the folder is"+props.name);
    const src="/images/"+props.imageSource;
   // console.log(image);
    function componentCall(){
        // console.log("component called"+display);
        return (props.display==="short")?(
            <>
                <div className="menuListTitle">
                <p>{props.title}</p>
                </div>
                <div className="menuListImage">
                    <img src={src} alt="pizza" />
                </div>
            </>
            ):(
                <>
                    <div className="menuListImage">
                    <img src={src} alt="pizza" />
                    </div>
                    <div className="menuListTitle">
                    <p>{props.title}</p>
                    </div>
                </>
            )
    }
    

    return (
        // <div className={`box ${isBoxVisible ? "" : "hidden"}`}></div>
        <div className={`menuListItem ${props.display==="short"?"":"changeBg"}`} title={props.title}>
            {componentCall()}
            <div className="menuListDesc">
                <p>{props.desc}</p>
            </div>
            <div className="menuListButton">
            {/* {`/${roomId}/${userName}`} */}
                {(props.display==="short")?(
                    <Link  to ={`/${props.title}`}><button className="menuListButtonElement" type="button">VIEW ALL</button></Link>
                )
                :(
                    <Link to ="/OrderNow"><button className="menuListButtonElement" type="button">ORDER NOW</button></Link>
                )}

                {/* <button type="button">VIEW ALL</button> */}
            </div>
        </div>
  
    )
}

