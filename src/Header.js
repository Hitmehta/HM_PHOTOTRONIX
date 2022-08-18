import { Link } from "react-router-dom";
export default function Header() {
    return(
        <>
        <nav class="menu " id="navbar">
        
    <li class="menu-item">
    <Link to="./" class="nav-l ">Home <span class="sr-only">(current)</span></Link>
    </li>
    <li class="menu-item">
    <Link to="./Category" class="nav-link" >Photo Gallary</Link>
    </li>
    <li class="menu-item">
    <Link to="./Category" class="nav-link" >Video Gallary</Link>
    </li>
    <li class="menu-item">
    <Link to="./Category" class="nav-link" >About us</Link>
    </li>
    

</nav>
        {/* <nav class="navbar container-lr   navbar-expand-md  bg-faded " id="navbar">
        <ul class="navbar-nav mx-auto ">
        <li class="nav-item  text-center ">
        <Link to="./" class="nav-l ">Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item  text-center ">
        <Link to="./Category" class="nav-link" >Photo_Gallary</Link>
        </li>
 

        <li class="nav-item  text-center ">
        <Link to="./Category" class="nav-link" >Video_Gallary</Link>
        </li>


        <li class="nav-item  text-center ">
        <Link to="./" class="nav-l ">Home <span class="sr-only">(current)</span></Link>
        </li>
  
</ul>
  
  

</nav> */}
       

{/* <nav class="container-lr  navbar navbar-expand-md navbar-light bg-faded bg-light" id="navbar">
  <ul class="navbar-nav mx-auto ">
    <li class="nav-item  text-center ">
      <Link to="./" class="nav-link ">Home <span class="sr-only">(current)</span></Link>
    </li>
    <li class="nav-item text-center ">
    <Link to="./Category" class="nav-link" >Photo_Gallary</Link>
    </li>
    <li class="nav-item text-center ">
    <Link to="./Category" class="nav-link" >Photo_Gallary</Link>
    </li>
    <li class="nav-item text-center ">
      <a class="nav-link" href="#section2">About us</a>
    </li>
    
  </ul>
</nav> */}


        </>
    )
    
}