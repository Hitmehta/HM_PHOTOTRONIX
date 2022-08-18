const Landscape = [
    {
        id : 1,
        category: 'Landscape',
        image: "img/img3.jpg"
    }
    
]


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


	


const Landscape1 = () => {
    const [landscape,setLandscape] = useState();

  

const formatedImg1 = landscape.map((ele1) => {
    return(
        <>
        <div class="col-md-4">
          <div class="card">
            <img class="card-img-top img" src={ele1.image} alt="asdf" />
            <h4 class="card-title text-center mt-1">{ele.category}</h4>
            </div>
            <br/>
        </div>
       
       
        </>
    )

})
return(
    <>
    <div class="container-lr bg-dark">
        <div class="row">{formatedImg1}</div>
     </div>
       
    </>
)
}


export default Landscape;