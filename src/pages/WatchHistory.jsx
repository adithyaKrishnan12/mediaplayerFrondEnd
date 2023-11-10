import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteAHistory, getallHistory } from '../services/allAPI'

function WatchHistory() {

const [history , setHistory] =useState([])


  const watchAllHistory =async()=>{
    const {data} =await getallHistory()
    // console.log(data);
    setHistory(data)

  }
  console.log(history);

useEffect(()=>{
  watchAllHistory()
},[])


/* Function to remove history */
const removeAHistory=async(id)=>{
  await deleteAHistory(id)
  // refresh history
  WatchHistory()
}

  return (
<>
<div className='container mt-5 d-flex justify-content-between'>
<h3>watch history </h3>
<Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'30px'}}>Back to Home</Link>
</div>
<Table className='table mt-5 mb-5 container'>

  <thead>
    <tr>
      <th>#</th>
      <th>caption</th>
      <th>Url</th>
      <th>Time stamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {history?.length>0?
    history.map((item ,index )=>(<tr>
      <th>{index+1}</th>
      <th>{item.caption}</th>
      <th><a href={item.embedLink} target='_blank'>{item.embedLink}</a></th>
      <th>{item.timestamp}</th>
      <td><button onClick={()=>removeAHistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
    </tr>)):
  
  <p className='fw-bolder fs-5 text-danger m-4'>nothing to display</p>
 
    
     }
  </tbody>
</Table>


</>
  )
}

export default WatchHistory