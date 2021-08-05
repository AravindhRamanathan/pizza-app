import React from 'react'
import "./item.css";

export default function Item(props) {
    const src="/images/overview/"+props.src;
    return (
        <div className="carousel-image">
            <img src={src}/>
            <p>{props.desc}</p>
        </div>
    )
}


// import styled from "styled-components";

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 70%;
//   background-color: #683bb7;
//   color: #fff;
//   margin: 15px;
//   font-size: 4em;
// `;

