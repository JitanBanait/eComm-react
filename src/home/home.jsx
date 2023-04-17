import { useEffect, useState } from "react";
import Nav from "../header/navbar";
import Product from "../api/product";
import CardGroup from "react-bootstrap/CardGroup";
import config from "../core/config/config";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductCard from "../component/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);

  const [prData, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function handleClose(key) {
    setShow(false);
  }
  function handleShow(key) {
    setShow(true);
  }

  async function fetchData() {
    let data = { limit: 5, skip: 0 };
    const prResult = await Product(data);
    setProduct(prResult);
  }

  const isUser = JSON.parse(localStorage.getItem("isUser"));

  return (
    <>
      {prData === null ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Nav userName={isUser.user} userImg={isUser.image} />
          <div>Home Page</div>

          <CardGroup className="col-30 h-30 w-30 mb-2 gap-4">
            {prData.map((item, index) => {
              return (
                <>
                <ProductCard key={index} item={item} />
                </>
              );
            })}
          </CardGroup>
        </>
      )}
    </>
  );
};
export default Home;
