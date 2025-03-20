import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './table';
import { Container } from 'react-bootstrap';
import Popup from './popup';

function App() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [tempData, setTempData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => { 
    if(rowData) {
      setTempData(rowData);
    }else {
      setTempData({
        name: null,
        emailId : null,
        location: null,
        phoneNo : null,
        qualification : null
      })
    }
    setShow(true);
  };

  return (
    <Container fluid className='p-4'>
      <Popup ref={status} setRef={setStatus} boxShow={show} boxClose={handleClose} fieldData={tempData} setFieldData={setTempData}/>
     <TableComponent boxClick={handleShow} update={status} setUpdate={setStatus}  />
    </Container>
  )
}

export default App
