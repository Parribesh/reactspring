import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import FlipSide from "./FlipSide";
import "./UserCard.css";

export const UserCard = ({ val, fetchData }) => {
  const { dispatch } = useContext(UserContext);
  const [toggle, setToggle] = useState();

  const deleteCard = async () => {
    await fetch(`http://localhost:9000/v2/signup/${val.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        fetchData();
      });
  };

  const handleToggle = () => {
    setToggle(true);
    console.log(toggle);
  };

  return (
    <div className="userCard-root">
      {!toggle ? (
        <div style={{ display: "flex" }}>
          <img style={{ height: "100px", width: "100px" }} src={val.image} />
          <ul>
            <li>UserID: {val.id}</li>
            <li>Username: {val.username}</li>
            <li>Password: {val.password}</li>
            <li>Email: {val.email}</li>
            <li>Phone: {val.mobile}</li>
            <li>Address: {val.address}</li>
            <li>Gender: {val.gender}</li>
          </ul>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button onClick={() => handleToggle()} className="btn-secondary">
              Edit
            </Button>
            <Button className="btn-success">Send</Button>
            <Button onClick={deleteCard} className="btn-danger">
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <FlipSide setToggle={setToggle} val={val} />
      )}
    </div>
  );
};
