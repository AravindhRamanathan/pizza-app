import "./sidebar.css"
// import image from "../../../public/images/pizzasOverview/margherita.jpg"

export default function SideBar({ handleCloseClick }) {
    // function handleClosedClick(){
    //     console.log("hi close is running")
    // }
    return (
        <div className="sideBarElements">
            <div className="desc-customze-img">
                <img src="/images/overview/margherita.jpg" alt="pizza"></img>
                <button onClick={() => handleCloseClick()} className="close-icon">x</button>
                <p className="pizza-rupee-sidebar">₹99</p>
            </div>
            <div className="pizza-title-sidebar">
                <p>Margherita</p>
                <p className="pizza-desc-sidebar">classic delight with a 100% real mozzaerla cheese</p>
            </div>
            <div>
                <p>select size</p>
                
            </div>

        </div>
    )
}
