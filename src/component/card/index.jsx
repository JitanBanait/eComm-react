import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductCard(props) {
 


    const [show, setShow] = useState(false);


  return (
 
    
     <div>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={()=>setShow(!show)}>
        Description
      </Button>
            <Button id="cartBtn_ prData[i].id " >Add to cart</Button>
        </Card.Footer>
      </Card>
      {/*--------modal----------- */ }
      <Modal show={show} onHide={()=>setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(!show)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>setShow(!show)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

  )
    }
      
    
 


export default ProductCard;

