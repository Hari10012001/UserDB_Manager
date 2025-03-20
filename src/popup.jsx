import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Popup(abc) {
  console.log(abc.fieldData, "###");

  const updateData = () => {
    fetch(`https://655f2e8a879575426b44c20a.mockapi.io/student_data_crud_app/studentsData/${abc.fieldData.id}`, {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify(abc.fieldData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        alert("Success....!");
        abc.setRef(!abc.ref);
      })
      .catch((error) => {
        console.log(error);
      });

      abc.boxClose();
  };

  const createUser = () => {  
    fetch('https://655f2e8a879575426b44c20a.mockapi.io/student_data_crud_app/studentsData', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(abc.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
      alert("User added successfully...!");
      abc.setRef(!abc.ref);
    }).catch(error => {
      // handle error
      console.log(error);
    })
    
    abc.boxClose();
  }


  return (
    <>
      <Modal show={abc.boxShow} onHide={abc.boxClose}>
        <Modal.Header closeButton>
          <Modal.Title> {abc.fieldData.id ? "Edit Data ✍️" : "Add Data 📝"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoFocus
                defaultValue={abc.fieldData.name}
                onChange={(e) =>
                  abc.setFieldData({ ...abc.fieldData, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                autoFocus
                defaultValue={abc.fieldData.emailId}
                onChange={(e) =>
                  abc.setFieldData({
                    ...abc.fieldData,
                    emailId: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter the phone number"
                autoFocus
                defaultValue={abc.fieldData.phoneNo}
                onChange={(e) =>
                  abc.setFieldData({
                    ...abc.fieldData,
                    phoneNo: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the qualification"
                autoFocus
                defaultValue={abc.fieldData.qualification}
                onChange={(e) =>
                  abc.setFieldData({
                    ...abc.fieldData,
                    qualification: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                autoFocus
                defaultValue={abc.fieldData.location}
                onChange={(e) =>
                  abc.setFieldData({
                    ...abc.fieldData,
                    location: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxClose}>
            Close
          </Button>
          {abc.fieldData.id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> :
            <Button variant="success" onClick={createUser}>
            Create 
          </Button>}         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
