import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Carousel from 'react-elastic-carousel'

const UsersWithAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res.data: ", res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);


  const breakpoints2 = [
    {
      width:1,
      itemsToShow:1,
    },
    {
      width:500,
      itemsToShow:2,
    },
    {
      width:850,
      itemsToShow:3,
    },
  ]

  const carouselRef = useRef(null);
  const onNextStart2 = (currentItem, nextItem) => {
    if(currentItem.index === nextItem.index){
      carouselRef.current.goTo(0)
    }
  }
  
  const onPrevStart2 = (currentItem, nextItem) => {
    if(currentItem.index === nextItem.index){
      carouselRef.current.goTo('single-slide'.length)
    }
  }

  return (
    <div className="our-team">
      <h1>Our Team</h1>

      <br />
      <br />
      <br />
      
      <Carousel
          // enableAutoPlay
          // autoPlaySpeed={3000}
          // itemsToShow={3}
          // itemsToScroll={2}
          onNextStart={onNextStart2}
          onPrevStart={onPrevStart2}
          breakPoints={breakpoints2}
          disableArrowsOnEnd={false}
          ref={carouselRef}
      >
        {users.map((props) => {
          return <div className="item slider-item" key={props.id}>
            <h6>{props.id}. {props.name}</h6>
            <p className="email">{props.email}</p>
            <p className="address">Address:</p>
            <p className="city">
                St. {props.address.street}
            </p>
            <p className="city">
                City: {props.address.city}
            </p>
          </div>;
        })}
      </Carousel>

      <br />
      <br />
    </div>
  );
};

export default UsersWithAxios;
