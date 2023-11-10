import React ,{ useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { addToCategory, deleteCategory, getAVideo, getAllCategory ,updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category() {
const [show, setShow] = useState(false);

const [CategoryName ,setCategoryName]=useState("")
const [category, setCategory] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //function to add category 
  const handleAddCategory = async()=>{
    console.log(CategoryName);
    if(CategoryName){
        let body ={
          CategoryName,
          allvideos:[]
        }
        const response =  await addToCategory(body)
        console.log(response);
        if(response.status>=200 && response.status<300){
          toast.success('category add sucessfully')
          //empty the state
          setCategoryName("")
          //close model
          handleClose()
        }
        else{
          toast.danger('something went wrong please try again')
        }
    }
    else{
      toast.warning('please fill the category name')
    }
  }
//fnction to grt all category
  const allCategory = async () => {
    const { data } = await getAllCategory();
    // console.log(data);
    setCategory(data);
  };
//function to delete category
  const removeCategory=async(id)=>{
    await deleteCategory(id)
    allCategory()
  }


  //function to prevent reload
  const dragOver =(e)=>{
     e.preventDefault()
  }

  //function to drop videeo card to categroy
  const VideoDrop = async(e,Categoryid)=>{
    console.log(`category in which video card is drop${Categoryid}`);
    let videoID =e.dataTransfer.getData("videoID")
    console.log(videoID);


    //api to get a video
    const {data}= await getAVideo(videoID)
    console.log(data);

    let selectedCategory =category.find((item)=>item?.id==Categoryid)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);

    await updateCategory(Categoryid,selectedCategory)
    allCategory()
  }



 useEffect(() => {
    allCategory();
  }, [category]);



  return (
    <>
    <div className='d-grid ms-3' >
<button onClick={handleShow} className='btn btn-warning'>Add new category</button>
</div>


{category?.length > 0 ? 
        category?.map((item) =>(  
          <div className='border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item.CategoryName}</h6>
              <button onClick={()=>removeCategory(item?.id)} className="btn btn-danger">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div> ))
      : 
        <p className='fw-bolder fs-5 text-danger m-3'>Nothing to display</p>
      }


<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>  <i class="fa-solid fa-pencil text-warning "></i>Add New Cataegory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className="border border-secondary rounded p-2">
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category name</Form.Label>
        <Form.Control type="text" placeholder="Enter Catagory Name" onChange={(e)=>setCategoryName(e.target.value)} />
        
      </Form.Group>


         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory} >add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="colored"
      ></ToastContainer>
    </>
  )
}

export default Category