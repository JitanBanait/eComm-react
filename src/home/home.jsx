import {useEffect,useState} from 'react'
import Nav from '../header/navbar'
import Product from "../api/product";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductCard from "../component/card/index"
import {useNavigate } from 'react-router-dom'
const Home = () => {
    const [show, setShow] = useState(false);

    
    const [prData , setProduct] = useState(undefined)
    useEffect(function(){
        let data = {limit:5,skip:0}
        getProduct(data);
    },[])
    
    function handleClose(key){
        setShow(false);  
    } 
    function handleShow(key){
        setShow(true);

    }
    async function getProduct(data){
        const prResult = await Product(data)
        // console.log(prResult,"result")
        setProduct(prResult);
    }

    const isUser = JSON.parse(localStorage.getItem("isUser"))
   console.log(prData,"prData")
  
     return ( 
            <>
                {typeof(prData) === 'undefined' ? <h1>Loading</h1>:
                <>

            <Nav userName={isUser.user} userImg={isUser.image}/>
            <div>Home Page</div>  
            
                     <CardGroup  className="col-30 h-30 w-30 mb-2 gap-4">
            {
                prData.map(function(item,index){
            return <div id={`main${item.id}`} key={main${item._id}}>

            <Card>
                <Card.Img variant="top" src={`${config.BaseAPI}/${item.image}`} />
                <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text>
                   <p>Price:{item.productPrice}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="primary" onClick={handleShow(item.id)}>
                Description
            </Button>
                    <Button id={`cartBtn_${item.id}`} >Add to cart</Button>
                </Card.Footer>
            </Card>
            {/*--------modal----------- */ }
             <Modal show={show} onHide={handleClose(item.id)}>
                <Modal.Header closeButton>
                <Modal.Title>{item.productName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.prDescription}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose(item.id)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose(k)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
                </div>

            })
            }
            
            </CardGroup> 
                
                    {/* <div>
                        {prData.map((val)=>{
                            return <h5>{val.productName}</h5>
                        })}
                    </div> */}
                }
 











                    </>
        )
    
}
export default Home