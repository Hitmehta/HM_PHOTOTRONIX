import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';

export default function Home(params) {
    return(
        <>
        
         <div style={{background:"url(./img/img-1.jpg)"}} class="container-lr page-holder bg-cover bgimg ">
         
       <p class="title text-center container-sm ">WELCOME TO HM PHOTOTRONIX</p>
       
       
       
        <div class="carousel  container-md flex-no-controls ">
       
            <Carousel class="border border-dark ">
                <Carousel.Item  interval={2000}>
                    <img className="d-block w-100" src="./img/img1.jpg" alt="Image One"/>
            
                </Carousel.Item>
                <Carousel.Item  interval={2000}>
                    <img className="d-block w-100" src="./img/img2.jpg" alt="Image One"/>
                </Carousel.Item>
                <Carousel.Item  interval={2000}>
                    <img className="d-block w-100" src="./img/img3.jpg" alt="Image One"/>
            
                </Carousel.Item>
            </Carousel>
        </div>

        
        <div class="container-lr mt-5 border border-light rounded about">
        <div class="row">
  <div class="col-3 text-center">
  <div class='my-5'>
    <img src='./img/about.jpg' class="w-100 rounded" alt=''/>
    </div>
  </div>
  <div class="col-9 text-center">
    <div class="my-5">
    <p>Borders
Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.

Border
Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.

Additive
 </p>
 

    </div>
  </div>
  <div class="container-lr main mb-2 " >

  <a href="#navbar"><img align="right" class="up rounded-circle" src='https://img.freepik.com/premium-vector/swipe-up-arrow-logo_7688-1427.jpg?w=2000' alt='Go to Navbar' /></a>
</div>

</div>

</div>










        {/* <div class="main" id="section1">
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
  <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
  <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
</div> */}


       
        </div>

   
         
            
        </>
    )
  
}