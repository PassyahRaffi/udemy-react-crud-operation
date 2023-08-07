import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// get data by mockapi.io
// https://mockapi.io/projects/64ae0009b470006a5ec6861f

export default function Create() {
  let history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const sendDataToApi = () => {
    axios
      .post("https://64ae0009b470006a5ec6861e.mockapi.io/Crud", {
        firstName,
        lastName,
      })
      .then(() => {
        // history.push("/read");
        console.log(history);
        history(`/read`);
      });
  };
  return (
    <>
      <h1>CREATE</h1>
      <Form>
        <Form.Field>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
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
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToApi}>
          Submit
        </Button>
      </Form>
    </>
  );
}
