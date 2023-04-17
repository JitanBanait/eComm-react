 import * as service from "../core/service/service"
 import UrlConstant from "../constants/url.constant"


  async function Login(data){


   const payload = {
    email: data.userName,
    password: data.password,
   }
   
  return await service
      .post(UrlConstant.Login, payload)
      .then((resp) => {
        if(resp.statusText === "OK")
        {
        //   console.log(resp.data);
        localStorage.setItem("isAuth",true)
        localStorage.setItem("isUser",JSON.stringify(resp.data))
           
            return resp.data;
       
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //  return (result)
}
async function signup(data,file){
 
    console.log(file,"imagechk")
    let formData = new FormData();
   
    formData.append('username',data.userName);
    formData.append('password',data.password);
      formData.append('email',data.email);
      formData.append('profilePic',file.img);
   await service
       .postUpload(UrlConstant.Signup, formData)
       .then((resp) => {
         if(resp.statusText === "OK")
         {
          console.log(resp,"json")
         }
       })
       .catch((err) => {
         console.log(err);
       });
 }
 
export {Login ,signup}