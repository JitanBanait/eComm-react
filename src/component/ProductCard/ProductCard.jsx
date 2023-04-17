import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import config from "../../core/config/config";

const ProductCard = (props) => {
  const [show, setShow] = useState(false);
  const { item } = props;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={`${config.BaseAPI}/${item.image}`} />
        <Card.Body>
          <Card.Title>{item.productName}</Card.Title>
          <Card.Text>{item.prDescription}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => setShow(!show)}>
            Description
          </Button>
          <Button id={item.id}>Add to cart</Button>
        </Card.Footer>
      </Card>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>{item.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item.prDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(!show)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCard;
