import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// get data by mockapi.io
// https://mockapi.io/projects/64ae0009b470006a5ec6861f

export default function Update() {
  let history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);

  const sendDataToApi = () => {
    axios
      .put(`https://64ae0009b470006a5ec6861e.mockapi.io/Crud/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        // history.push("/read");
        console.log('history', history);
        history(`/read`);
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <>
      <h1>UPDATE</h1>
      <Form>
        <Form.Field>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            name="lname"
            value={lastName}
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Link to="/read">
          <Button type="submit" onClick={sendDataToApi}>
            Update
          </Button>
        </Link>
      </Form>
    </>
  );
}
