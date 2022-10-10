import './App.scss';
import {FaBehance, FaLinkedin} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar} from 'react-icons/io5';
import {IconContext} from "react-icons";
import Card from './component/Card';
import {motion} from 'framer-motion';

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};

const btnGroup={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};
const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};




function App() {
  return (
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>R<span>EV</span>ORN</motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
                <div className="icon"><a href="https://www.linkedin.com/in/miguelangelfuentes/"><FaLinkedin/></a></div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <div className="icon"><IoMailOutline/></div>
                  miguelangel.fm@outlook.com
              </IconContext.Provider>
            </motion.span>
          </motion.div>
      </motion.header>

      <motion.div className="content_wrapper" initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
        <div className="left_content_wrapper">

          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>p </motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e </motion.span>
                <motion.span variants={letter} className="second"></motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>o </motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>v</motion.span>
                <motion.span variants={letter}>e </motion.span>
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>e </motion.span>
                <motion.span variants={letter}>w</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>d </motion.span>
                <motion.span variants={letter} className="second"> t</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter} className="second">n</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>f</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>g </motion.span>
              <motion.span variants={letter}>g</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>e </motion.span>
              <motion.span variants={letter}>v</motion.span>
              <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>c</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>s</motion.span>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>Fully electric cars have zero tailpipe emissions making them greener, cleaner and better for the environment than petrol or diesel.</motion.p>

          <motion.div className="btn_group" variants={stagger}>
            <motion.div className="btn btn_primary" variants={btnGroup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://www.paypal.com/donate/?hosted_button_id=XLWPTLULTDXQN">
              Paypal
              <IconContext.Provider value={{color:"#14da8f", size:"25px"}}>
                <IoChevronForwardCircle/>
                </IconContext.Provider>
</a>
            </motion.div>
            <motion.div className="btn btn_secondary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>btn_secondary</motion.div>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper">
          <motion.img src={process.env.PUBLIC_URL + '../images/truck.png'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>
      </motion.div>

      <Card/>




    </motion.div>
  );
}

export default App;