import React from "react";
import { Form, Button } from "react-bootstrap";

export const SignUpForm = ({ handleOnSubmit, user, setUser }) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.username}
            placeholder="UserName"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            defaultValue={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.email}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            defaultValue={user.mobile}
            placeholder="Phone No."
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Choose an Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            defaultValue={user.image}
            onChange={(e) => setUser({ ...user, image: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            defaultValue={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gender"
            defaultValue={user.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
          />
        </Form.Group>

        <div className="createUser-buttons">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
