import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Eyeicon.css";
const Eyeicon = () => {
  

 
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);


  return (
    <div>
      <button onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}>
     {/* <FaArrowCircleUp  /> */}
     fsdfsdfsdfsdfsfsdfsdfsdfsdsdfdsd
    </button>
      <div className="bottom-icon">
        <Link to="./mymarkets" className="">
          <button className="eye-icon">
            <i className="fas fa-eye"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Eyeicon;
