import { useEffect, useState } from "react"
import Input from '../component/input/index'
import Button from '../component/button/index'
import { Link,useNavigate } from 'react-router-dom';
import Home from '../home/home'
import Nav from "../header/navbar";


import {Login} from '../api/user'
import styles from './style.module.css';


// kminchelle,0lelplR
export default function login(){
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("isAuth");
    const [value,setValue] = useState({userName:"",password:""});
    const [loggedIn , setLoggedIn] = useState({userName:"",userImg:""})
   
    useEffect(function(){
        if(isAuth){
            navigate("/home")
        }
     
    },[])
   
   async function loginUser(){
       const result = await Login(value)
      
      // console.log(result,"result")
      
       setLoggedIn({userName:result.user,userImg:result.image})
       
        navigate("/home");
        // setValue({userName:"",password:""})
        
    }
    function inputChange(key){
        return function(event){
            setValue({...value , [key]:event.target.value})
        }
    } 
    return (
        <>
        {
            <>
            
            <div className={styles.mainDIV} >
                <div className={styles.leftDiv} id="leftDiv">
                <div >Login</div>
                <Input placeholder ="Username"
                    value={value.userName}
                    onChange={inputChange("userName")}
                    type = "text"
                    name = "userName"
                    required
                   
                />
                <Input placeholder ="Password"
                    value={value.password}
                    onChange={inputChange("password" )}
                    type = "password"
                    name = "password"
                   required
                />
                 <Button onClick={loginUser}>Login</Button>

                </div>
                <div className={styles.rightDiv} id="rightDiv">
                
                <Button ><Link to="/signup">CREATE ACCOUNT</Link></Button>
                <Button > <Link to="/forgot">FORGOT PASSWORD</Link></Button>

                </div>
            </div>        
            </>
           
            
        }
        </>
    )
}
 
