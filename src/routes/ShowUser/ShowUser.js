import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { UserCard } from "../UserCard/UserCard";
import { Button, Form } from "react-bootstrap";

function ShowUser() {
  const { state, dispatch } = useContext(UserContext);
  const [id, setId] = useState("");
  const fetchData = async () => {
    await fetch("http://localhost:9000/v2/signup")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "users/addUser", payload: data }));
  };

  const fetchByID = async (art) => {
    if (art === "") {
      fetchData();
      return;
    }
    let fetchUrl = `http://localhost:9000/v2/signup/${art}`;
    await fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === undefined) {
          let dArray = [];
          dArray.push(data);
          dispatch({ type: "users/addUser", payload: dArray });
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(id);
    fetchByID(id);
  }, [id]);

  return (
    <div>
      <div className="ShowUser-control" style={{ display: "flex" }}>
        <Button style={{ margin: "2px" }} onClick={fetchData} variant="primary">
          {" "}
          AllCards
        </Button>
        <Form>
          <Form.Group style={{ display: "flex" }}>
            <Form.Control
              type="text"
              placeholder="Id"
              onChange={(e) => setId(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      {console.log(state.Users[0])}
      {Object.keys(state.Users[0]).length > 0 ? (
        state.Users.map((val, k) => {
          return <UserCard fetchData={() => fetchData()} key={k} val={val} />;
        })
      ) : (
        <span>No info to display</span>
      )}
    </div>
  );
}

export default ShowUser;
