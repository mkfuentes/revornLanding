import React from 'react';
import {FaCarSide, FaCalendarCheck, FaBatteryFull} from "react-icons/fa";
import { IconContext } from "react-icons";
import {BsRecycle, BsScrewdriver, BsPlug} from 'react-icons/bs'
import {motion} from 'framer-motion';

let easing = [0.6,-0.05,0.01,0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:20},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:.2
        }
    }
}

const title = {
    hidden:{
        y:60,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            delay:.2,
            duration:0.6,
            ease:easing
        }
    }
};

const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:630,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:630,borderRadius:"100%"
    },
}



function Card() {
  return (
    <motion.div className="service_container">
        <div className="title_wrapper">
            <motion.span className="service_title"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >Revorn is the name i give to this project; EV for electric vehicle, REBORN as the restoration and REV because i think this is a revolution.</motion.span>
            <motion.h2
                initial={{y:200, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1}}
            >Hands on</motion.h2>
        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#14da8f", size:"22px"}}>
                        <BsRecycle/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Auto restoration</h3>

                    <span>Improve car value, many cars are worth a significant amount of money when restored.Establish the car’s identity</span>

            </motion.div>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#e7daf8"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#5700cf", size:"22px"}}>
                        <BsScrewdriver/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Update</h3>
                    <span>Simply plug in your phone via a USB cable or wireless. The digital interface with which you’re most familiar is now accessible</span>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
                        <BsPlug/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Electric conversion</h3>
                    <span>Fully electric cars have zero tailpipe emissions making them greener, cleaner and better for the environment than petrol or diesel</span>
              </motion.div>
              
              <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
                        <FaCarSide/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Eluminator Mache E</h3>
                    <span>This makes it ideal for cars with straight line acceleration requirements such as drag racing or off-road vehicle applications</span>
              </motion.div>
              
              <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
                        <FaCalendarCheck/>
                    </IconContext.Provider>
                </motion.span>
                <h3>First candidate</h3>
                    <span>I found the very first candidate in order to begin this project, a Ford F100 model 72</span>
              </motion.div>
              
              <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#14da8f", size:"22px"}}>
                        <FaBatteryFull/>
                    </IconContext.Provider>
                </motion.span>
                <h3>More features</h3>
                    <span>Electric motor is not all im trying to do with this also: <br />
Regen brakes, 
Smart mirror with a dash cam, 
Keyless, 
In and outside led illumination

 </span>
            </motion.div>

          </motion.div>
          
          <motion.div className='contenido_kicks' variants={item}>
              <h2>Introduction</h2><br />

Hi, I'm Miguel, I'm 30 years old and I'm from Mexico City.
I'm a computational systems enginneer and since I was a child I always knew that I wanted to do something important and maybe like many of you I wanted to change the world.
              Today I am looking for your support in order to make that dream come true.
              <br />
              <img src="./images/R_truck.jpg" alt="" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>

<h2>Abstract</h2><br />
My long-term plan is to own a workshop and have a robust platform for the restoration and electrification of old and new models that contribute to poor air quality, climate change and gases that affect our health.

Most assembly plants are beginning to build electric or hybrid vehicles.

For this reason, I would like to give classic cars (and the new ones) a second chance, so that people who enjoy these cars can use them again using only electrical energy.
              <br />
              <h2>Donations</h2><br />
              <div className="boton">
              <a href="https://www.paypal.com/donate/?hosted_button_id=XLWPTLULTDXQN">
              Paypal
</a>
            </div>
          </motion.div>
</motion.div>
  )
}

export default Card