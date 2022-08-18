import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Category() {
    return(
        <>
            <div class="container-sm text-center my-3 ">
                <h1>Choose your Category</h1>
            </div>

            <div class="row row1"> 
                <div class="col-md-3 my-3 ">
                    
                <Link to="/Gallary" class="text-dark">
                            <img class="card-img-top img" src={"./img/img1.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Landscape</h4>
                        </Link>
                    
                    <br/>
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img4.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                </div>

                <div class="col-md-3 my-3">
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img3.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                    <br/>
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img2.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                </div>

                <div class="col-md-3 my-3">
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img2.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                    <br/>
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img2.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                </div>

                <div class="col-md-3 my-3">
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img2.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                    <br/>
                   
                        <Link to="/Portrait">
                            <img class="card-img-top img" src={"./img/img2.jpg"} alt="asdf" />
                            <h4 class="card-title text-center mt-1">Portrait</h4>
                        </Link>
                    
                </div>  
</div>
        </>
    )
    
}