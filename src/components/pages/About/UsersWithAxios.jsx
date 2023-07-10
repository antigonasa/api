import axios from "axios";
import React, { useEffect, useState } from "react";

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

  return (
    <div className="our-team">
      <h1>Our Team</h1>
      <div className="items">
        {users.slice(0,10).map((props) => {
          return <div className="item" key={props.id}>
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

export default UsersWithAxios;
