import * as service from "../core/service/service"
import UrlConstant from "../constants/url.constant"


 async function Product(data){
    // console.log(data)
  const payload = {
   limit: data.limit,
   skip: data.skip,
  }
  
 return await service
     .post(UrlConstant.moreProduct, payload)
     .then((resp) => {
       if(resp.statusText === "OK")
       {
        //  console.log(resp.data,"resp.data")
           return resp.data;
       }
     })
     .catch((err) => {
       console.log(err);
     });
   //  return (result)
}
export default Product;