import React, { useState, useContext } from "react";
import "./CreateUser.css";
import { UserContext } from "../../App";
import { SignUpForm } from "../FormTemplateRoute/FormTemplate";

export default function () {
  const { state, dispatch } = useContext(UserContext);

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
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) =>
        fetch("http://localhost:9000/v2/signup")
          .then((res) => res.json())
          .then((data) => dispatch({ type: "users/addUser", payload: data }))
      );
    e.target.reset();
  };

  return (
    <div className="createUser-form">
      {/* Form template takes a prop to handle form submission and User template */}
      <SignUpForm
        handleOnSubmit={handleOnSubmit}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}
