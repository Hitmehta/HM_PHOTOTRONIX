import Photos from "./Photos";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



	


const Gallary = () => {
    const [photos,setPhotos] = useState(Photos);

  

const formatedImg = photos.map((ele) => {
    return(
        <>
        <div class="col-md-4">
          <div class="cardd">
          
            <img class="card-img-top img" src={ele.image} alt="asdf" />
           
            
            </div>
            <br/>
        </div>
       
       
        </>
    )

})
return(
    <>
    <div class="container-lr mt-3">
        <div class="row">{formatedImg}</div>
     </div>
       
    </>
)
}

export default Gallary;