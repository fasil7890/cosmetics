import React from 'react';
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";
import {motion} from "framer-motion";
import banner from "../../assets/banner.png";
import "./Intro.css"

const Intro = () => {
  const transition = {duration : 4,type:'spring'}
  return (
    <div className='intro container'>
        <div className="i-left">
            <div className="i-text">
                <span className='i-title'>Meet Your</span>
                <span className='i-title'>All-In-One</span>
                <span className='i-title'>Creator Store</span>
                <span className='i-para'>Turn your followers into paying customers <br />
                 by selling digital products and services you know <br />
                  your audience will love. Join the #StanFam <br />
                  to grow your Creator Business today!</span>
            </div>
            <div>
            <button className='i-button'>Continue</button>
            </div>
            <div className='i-icons'>
              <AiFillFacebook className='i-icon'/>
              <AiFillInstagram className='i-icon'/>
              <AiFillLinkedin className='i-icon'/> 
            </div>
        </div>
        <motion.div  initial={{left:"-20%"}}
         whileInView={{left:"-1%"}}
         transition={transition} className="i-right">
         <img className='i-banner' src={banner} alt="" />
         <div className='i-blur' style={{background:"pink"}}></div>
        

        </motion.div>
   
    </div>
  )
}

export default Intro