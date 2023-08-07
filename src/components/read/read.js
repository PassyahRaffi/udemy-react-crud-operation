import { Button, Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// get data by mockapi.io
// https://mockapi.io/projects/64ae0009b470006a5ec6861f

export default function Read() {
  const [apiData, setApiData] = useState([]);

  console.log(apiData);

  const getDataToApi = async () => {
    try {
      const response = await axios.get(
        "https://64ae0009b470006a5ec6861e.mockapi.io/Crud"
      );

      if (response.status === 200) {
        setApiData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setID = (data) => {
    localStorage.setItem("ID", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
  };

  const onDelete = async (data) => {
    /* example 1 */
    try {
      const response = await axios.delete(
        `https://64ae0009b470006a5ec6861e.mockapi.io/Crud/${data.id}`
      );

      if (response.status === 200) {
        getDataToApi();
        alert(`delete, data id ${data.id} success !`);
      }
    } catch (error) {
      console.log(error);
    }

    /* example 2 */
    // axios
    //   .delete(`https://64ae0009b470006a5ec6861e.mockapi.io/Crud/${data.id}`)
    //   .then(() => {
    //     getDataToApi();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    getDataToApi();
  }, []);

  return (
    <div>
      <h1>READ</h1>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data, idx) => {
            return (
              <Table.Row key={idx}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button color="green" onClick={() => setID(data)}>
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  {/* <Link to="/delete"> */}
                  <Button color="red" onClick={() => onDelete(data)}>
                    Delete
                  </Button>
                  {/* </Link> */}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
