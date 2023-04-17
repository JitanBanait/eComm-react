import Login from "./login/login";
import Signup from "./Signup/signup";
import Home from "./home/home";
import Forgot from "./Forgot/forgot";
import {Route,Routes,BrowserRouter, Navigate } from 'react-router-dom';

export default function App(){

    const isAuth = localStorage.getItem("isAuth")
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='*'  element={isAuth?<Navigate to="/home"/>:<Navigate to="/login"/>}/>
        </Routes>
        
        </BrowserRouter>
    
        

        </>
    )
}