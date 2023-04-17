import React from 'react'
import { useState } from "react"
import Input from '../component/input/index'
import Button from '../component/button/index'
import { Link } from 'react-router-dom';
import {signup} from '../api/user'
// import styles from './style.module.css';

export default function Signup(){
    const [value,setValue] = useState({userName:"",password:"",email:""});
    const [image,setImg] = useState({img:""})
    console.log(image,"mmm")
    async function CreateUser(){
        // console.log(value)
        const result = await signup(value,image)
        console.log(result)
       
    }
    function inputChange(key){
        return function(event){
            setValue({...value , [key]:event.target.value})
        }
    }    
    // function inputImg(event){
        
    //     // const url = URL.createObjectURL(event.target.files[0])
        
    //         console.log(event.target.files[0])
    //         const formdata = new FormData()
    //         formdata.append("file", event.target.files[0])
    //         // console.log(URL.createObjectURL(event.target.files[0]))
    //         setValue({...value , file:event.target.files[0]})
    //         console.log(value);
    // } 
    return (
        <>
        <div>
        <div>SignUp Page</div>
        <form>

        <Input placeholder ="Username"
                    value={value.userName}
                    onChange={inputChange("userName")}
                    type = "text"
                    name = "userName"
                   
                />
        <Input placeholder ="email"
                    value={value.email}
                    onChange={inputChange("email")}
                    type = "email"
                    name = "email"
                   
                />
        <Input placeholder ="Password"
                    value={value.password}
                    onChange={inputChange("password" )}
                    type = "password"
                    name = "password"
                   
                />
        <Input     onChange={(e)=> setImg({img:e.target.files[0]})}
                    type = "file"
                    name = "file"
                   
                />
        </form>
        <Button onClick={CreateUser}>Create</Button>
        <Button ><Link to="/">Back</Link></Button>


        </div>


        </>
    )
}
