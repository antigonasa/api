import React, { useEffect, useState } from "react";
import SharedLink from "../../shared/SharedLink/SharedLink";
import "./styles/users.scss";
import { FaHome } from 'react-icons/fa'

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
      <br />
      <SharedLink to='/' link='View More' icon={<FaHome />} reverse />
      <br />
      <br />
    </div>
  );
};

export default Users;
