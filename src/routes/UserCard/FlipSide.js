import React, { useState, useContext } from "react";
import { SignUpForm } from "../FormTemplateRoute/FormTemplate";
import { UserContext } from "../../App";
import { Button } from "react-bootstrap";

function FlipSide({ setToggle, val }) {
  const { dispatch } = useContext(UserContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
    mobile: "",
    address: "",
    email: "",
    gender: "",
    image: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:9000/v2/signup", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) =>
        fetch("http://localhost:9000/v2/signup")
          .then((res) => res.json())
          .then((data) => dispatch({ type: "users/addUser", payload: data }))
      );
    e.target.reset();
    setToggle(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "5px" }}>
      <Button onClick={() => setToggle(false)}>Cancel</Button>
      <SignUpForm
        handleOnSubmit={handleOnSubmit}
        user={val}
        setUser={setUser}
      />
    </div>
  );
}

export default FlipSide;
