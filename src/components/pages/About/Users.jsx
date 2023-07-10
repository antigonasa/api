import React, { useEffect, useState } from "react";
import "./styles/users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseData = await response.json();
    setUsers(responseData);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="our-team">
      <h1>Our Team</h1>
      <div className="items">
        {users.map((props) => {
          return <div className="item" key={props.id} data-aos="flip-left">
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
      </div>
    </div>
  );
};

export default Users;
