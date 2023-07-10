import React, { useState } from "react";
import "./styles/form.scss";
import axios from "axios";
import { AiFillCheckCircle } from "react-icons/ai";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Your password should have 8 or more characters!");
    } else {
      axios
        .post("https://reqres.in/api/login", {
          //mund ta perdorim kete forme nese field tek API eshte ndryshe nga inputi yne
          // email:email,
          // password: password

          //Nese field i API eshte i njejte me inputin tone, mjafton te shkruajme:
          email,
          password,
        })
        .then((res) => {
          console.log("log in result: ", res);
          setEmail("");
          setPassword("");
          setError("");
          setModal(true);
          setTimeout(() => {
            setModal(false);
          }, 2000)
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  return (
    <div className="form-container">

      {modal ? <div className="modal">
        <AiFillCheckCircle />
      </div> : null}

      <form onSubmit={handleLogin}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? <p>{error}</p> : null}
        <button type="submit" className="shared-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
