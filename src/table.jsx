import Button from "react-bootstrap/Button";
import React from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";

function TableComponent(bcd) {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch(
      "https://655f2e8a879575426b44c20a.mockapi.io/student_data_crud_app/studentsData",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        setTableData(tasks.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bcd.update]);

  console.log(tableData);

  const deleteUser = (id) => {
    fetch(`https://655f2e8a879575426b44c20a.mockapi.io/student_data_crud_app/studentsData/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // Do something with deleted task
        alert("Deleted successfully....!");
        bcd.setUpdate(!bcd.update)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

 
  return (
    <>
    <Button onClick={() => bcd.boxClick()} variant={"warning"} className="fs-5 mb-3"> Add Data </Button>
    <Table striped bordered hover variant="dark">
      <thead className="text-center">
        <tr className="fs-3">
          <th className="p-4 bg-primary">S.No</th>
          <th className="p-4 bg-primary">Name</th>
          <th className="p-4 bg-primary">Email</th>
          <th className="p-4 bg-primary">Location</th>
          <th className="p-4 bg-primary">Phone No</th>
          <th className="p-4 bg-primary">Qualification</th>
          <th className="p-4 bg-primary">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {tableData &&
          tableData.map((item, out) => {
            return (
              <tr className="fs-5">
                <td className="p-3">{out + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.emailId}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">{item.phoneNo}</td>
                <td className="p-3">{item.qualification}</td>
                <td className="p-3">
                  <Button
                    onClick={() => bcd.boxClick(item)}
                    variant="success me-3"
                  >
                    {" "}
                    Edit{" "}
                  </Button>
                  <Button variant="danger" onClick={() => deleteUser(item.id)}>
                    {" "}
                    Delete{" "}
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
    </>
  );
}

export default TableComponent;
