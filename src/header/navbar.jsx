import React from 'react'
import config from '../core/config/config'
import styles from './style.module.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// const options = 
 
//   {
//     name: 'Profile',
//     scroll: true,
//     backdrop: true,
//   }


function OffCanvasExample({ button,scroll,backdrop,userName ,userImg }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
    <div>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {button}
      </Button>

    </div>
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>welcome : {userName}</h1>
          <div>
            <img src={`${config.BaseAPI}/profile/${userImg}`} className={styles.img} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Nav(props) {
const {userName, userImg  } = props
  return (
    <>
    
        <OffCanvasExample 
    button= {'Profile'}
    scroll= {true}
    backdrop= {true}
    userName = {userName}
    userImg = {userImg}
   />
   
      {/* {options.map((props) => (
        <OffCanvasExample  {...props} />
      ))} */}
    </>
  );
}

// render(<Example />);

// render(<Example />);

// const Nav = () => {
//     return (
//         <div>Nav Page</div>
//     )
// }
export default Nav