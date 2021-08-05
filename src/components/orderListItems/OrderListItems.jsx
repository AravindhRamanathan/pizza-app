import './orderListItems.css'
import PizzaItem from '../pizzaItem/PizzaItem';
// 


export default function OrderListItems(props) {
    const title=props.title;
    const datas=props.data;

    return (
        <div>
            <div className="on-horizontalLine">
                <hr></hr>
            </div>
            <div className="catBar">
                <p>{title}</p>
            </div>
            <div className="pizza-banner-div">
                {datas.map((eachData,index)=>{
                   return <PizzaItem data={eachData} key={index}/>
                })
                }
                
            </div>
        </div>
    )
}
OrderListItems.defaultProps={
    "title":"menu",
}
