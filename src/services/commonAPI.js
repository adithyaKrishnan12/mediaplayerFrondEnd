import axios from "axios"

 export const commonAPI =async(httpMethod,url,reqBody)=>{

    let reqconfig= {
        method: httpMethod,
        url ,
        data: reqBody,
        Headers :{
            "Content-Type":"application/json"

        }
        
      }
return await axios(reqconfig).then((result)=>{
    return result

}).catch((err)=>{
    return err
}) 

}