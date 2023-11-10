import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


// upload videos



export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI ('POST',`${serverURL}/videos`,reqBody)
}

// get all video from json server

export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video
export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE' ,`${serverURL}/videos/${id}`,{})
}

//api to add data to watch-history
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST' ,`${serverURL}/history`,videoDetails)
}


//api to get all history from json server
export const getallHistory =async()=>{
    return await commonAPI('GET',`${serverURL}/history`,{})
}

// api to delete history
export const deleteAHistory = async(id)=>{
    return await commonAPI('DELETE' ,`${serverURL}/history/${id}`,{})
}


//api to add category
export const addToCategory = async()=>{
    return await commonAPI('POST',`${serverURL}/categories`,"")
}






//get all category from json server
export const getAllCategory = async ()=>{
	return await commonAPI('GET',`${serverURL}/categories`,"")
}

//api to delete history from json server
export const deleteCategory = async (id)=>{
	return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}


//api to get a perticular video
 export const getAVideo = async (id)=>{
   return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}



//api t update category
 export const updateCategory = async(id,body)=>{
    await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}











// //upload all videos
// import { commonAPI}from "./commonAPI"
// import {serverURL}from "./serverURL"

//  export const uploadAllVideo =async(reqBody)=>{
//   return  await commonAPI('POST',`${serverURL}/videos`,reqBody)
// }

// //get all videeos 


// export const getAllVideos =async()=>{
//     return await commonAPI(`GET,${serverURL}/videos`)
// }

// //api to delete videeo 

// export const deleteAVideo = async(id)=>{
//     return await commonAPI('delete'`${serverURL}/videos/${id}`,{})

// }

// //api to add data to watch history

// export const addToHistory=async(videoDetails)=>{
//     return await commonAPI('POST',`${serverURL}`)
// }
