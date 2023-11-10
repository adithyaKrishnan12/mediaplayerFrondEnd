import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';    
import { useNavigate } from 'react-router-dom';
function LandingPage() {
    const navigateByUrl = useNavigate()
  return (
    <>
    <div>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
    <Col></Col>
    <Col lg={5}>
        <h3>Welcome to<span className='text-warning'> Media Player</span></h3>
        <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam natus tenetur quos, cum, praesentium totam cumque numquam architecto ipsum qui! Mollitia, eum officia assumenda commodi quibusdam enim est repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. At, debitis sunt nostrum fugit consequatur ducimus maiores, ex repellendus totam asperiores suscipit nisi sapiente minus, tempora reprehenderit aspernatur voluptatum a commodi?</p>
        <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning ms-2  '>Get Start <i class="fa-solid fa-arrow-right"></i></button>
    </Col>
    <Col ></Col>
    <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="net ila monu" />
    </Col>
    </Row>
    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center  flex-column'>
            <h3 className='mb-5'>Features</h3>
            <div className='cards d-flex justify-content-evenly align-items-center w-100 '>

            <Card className='p-4' style={{ width: '22rem' }}>
                <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
                <Card.Body>
                    <Card.Title>Managing Video</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                  
                </Card.Body>
             </Card>



             <Card className='p-4' style={{ width: '22rem' }}>
                <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                <Card.Body>
                    <Card.Title>Categorized Video</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                   
                </Card.Body>
             </Card>


             <Card className='p-4' style={{ width: '22rem' }}>
                <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                <Card.Body>
                    <Card.Title>Watch History</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
             </Card>

            </div>

    
    </div>

            <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center  flex-column'></div>
                <div className='container w-100 border'>
                    <Row>
                        <Col lg={6} className='p-4'>
                            <h3 className='text-warning'>Simple Fast and powerful</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis ullam maxime cumque quos, ipsa consequatur quasi! Aliquid sapiente optio libero, omnis, ipsum quo inventore, rerum provident laboriosam atque quos?</p>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore molestiae facere expedita tempora nam? Qui minus, asperiores illum quam optio similique iusto, temporibus quasi cum voluptatibus consequatur reiciendis voluptatum. Facilis!</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id voluptate officia quod quasi repellat praesentium, similique, consectetur repellendus quisquam fugiat at, eveniet voluptatum. Exercitationem, quasi. Labore earum est debitis!</p>
                        </Col>
                        <Col lg={6} className='p-4'><iframe width="560" height="315" src="https://www.youtube.com/embed/RLzC55ai0eo?si=CHenOlvSHm9Df4kx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                        

                    </Row>
                </div>
    </div>
    </>
  )
}

export default LandingPage