import React from "react";
import Image from "next/image";  
import { motion } from "framer-motion";
import lightning from "../images/icon2.png";
import cursor from "../images/icon1.png";
import profilepic from "../images/logo.jpg";


const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-bg"></div>

            <div className="hero-text">
                <h1>Hi, I am</h1>
                <h1>Nimra Talha</h1>
            </div>
          
            <motion.div className="hero-icon left" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                <Image 
                    src={cursor}
                    height={190}
                    width={190}
                    alt="cursor"
                    draggable="false"
                    className="icon-image"
                />
            </motion.div>
            
            <motion.div className="hero-icon right" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                <Image 
                    src={lightning}
                    height={120}
                    width={120}
                    alt="lightning"
                    draggable="false"
                    className="icon-image-small"
                />
            </motion.div>
            
            <p className="hero-description">
                I am a Website developer focused on creating websites that provide the best experience for users.
            </p>

            <div className="hero-image-container">
                <Image 
                    src={profilepic}
                    alt="profile picture"
                    height={350} 
                    width={350}
                    className="hero-image"
                />
            </div>
        </div>
    );
};

export default Hero;
