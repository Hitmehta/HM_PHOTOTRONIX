import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portrait = () => {
    let portrait = [
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
        {
            id:1,
            img : 'img/img4.jpg'
        },
    ]
    const formatedImg2 = portrait.map((ele) => {
        return(
            <>
            
            <div class="col-md-3 ">
              <div class="card w-75">
              
                <img class="card-img-top img " src={ele.img} alt="asdf" />
               
                
                </div>
                <br/>
            </div>
           
           
            </>
        )
    
    })
    return(
        <>
        <div class="container-lr bg-dark">
            <div class="row">{formatedImg2}</div>
         </div>
           
        </>
    )
        
}
export default Portrait;