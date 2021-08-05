import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

export default function CarouselPizza() {
  //const [items] = useState([1, 2, 3, 4]);
  const carouselData=[
      {
          id:1,
          imgSrc:"/farmhouse.jpg",
          desc:"Classic delight with 100% real mozzarella cheese",
      },
      {
          id:2,
          imgSrc:"/margherita.jpg",
          desc:"Delightful combination of onion, capsicum, tomato & grilled mushroom"
      },
      {
          id:3,
          imgSrc:"/peppy_paneer.jpg",
          desc:"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
      },
      {
          id:4,
          imgSrc:"/mexican_green_wave.jpg",
          desc:"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
      }

  ]


  return (
    <div className="carousel-div">
      <div className="controls-wrapper">
      </div>
      {/* <hr className="seperator" /> */}
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {carouselData.map((data) => (
            <Item key={data.id} src={data.imgSrc} desc={data.desc}></Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

