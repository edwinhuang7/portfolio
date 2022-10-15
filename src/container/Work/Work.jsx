import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss'


const workinfo =[
  {title1: 'Makersplace', description1: 'Marketplace that allows users to upload files for 3d printing and connects them to 3d print makers',imgUrl1: images.work01, webLink1: 'https://www.google.com', codeLink1: 'https://github.com/edwinhuang7/makersplace',
  title2: 'CS50: Finance', description2: 'Finance is a stock trading application that returns real-time stock prices through integration of an API.',imgUrl2: images.work02, webLink2: 'https://finance-cs50-edwin.herokuapp.com/', codeLink2: 'https://github.com/edwinhuang7/finance',
  title3: 'Weather', description3: 'Weather app is a simple application that returns weather data such as temperature, wind speed and humidity.',imgUrl3: images.work03, webLink3: 'https://weather-edwin.netlify.app/', codeLink3: 'https://github.com/edwinhuang7/weather-app'}
]


const Work = () => {
  return (
    <div className="app__full-banner">
      {workinfo.map((workinfo, index) => (
        <div>
          <div className="app__full-banner-item">

          <div className="app__full-banner-text">
          <p className="bold-text">Featured Project</p>
          <p className="head-text">{workinfo.title1}</p>
          <p className="p-text">{workinfo.description1}</p>
          <a className="webLink" href={workinfo.webLink1}><AiFillEye fontSize="3em" /></a>
          <a className="codeLink" href={workinfo.codeLink1}><AiFillGithub fontSize="3em" /></a>
          </div>
          <motion.div 
           whileInView={{ opacity:1 }}
           whileHover= {{ scale:1.05}}
           transition={{ duration: 0.5, type:'tween'}}
           className="app__full-banner-image">
           
        
          <img src={workinfo.imgUrl1} alt={workinfo.title1} />
          
           </motion.div>

       
          </div>

           <div className="app__full-banner-item">
           <motion.div 
           whileInView={{ opacity:1 }}
           whileHover= {{ scale:1.05}}
           transition={{ duration: 0.5, type:'tween'}}
           className="app__full-banner-image">
           
        
          <img src={workinfo.imgUrl2} alt={workinfo.title2} />
          
           </motion.div>

           <div className="app__full-banner-text">
           <p className="bold-text">Featured Project</p>
           <p className="head-text">{workinfo.title2}</p>
           <p className="p-text">{workinfo.description2}</p>
           <a className="webLink" href={workinfo.webLink2}><AiFillEye fontSize="3em" /></a>
           <a className="codeLink" href={workinfo.codeLink2}><AiFillGithub fontSize="3em" /></a>
           </div>
          
           </div>
              <div className="app__full-banner-item">

          <div className="app__full-banner-text">
          <p className="bold-text">Featured Project</p>
          <p className="head-text">{workinfo.title3}</p>
          <p className="p-text">{workinfo.description3}</p>
          <a className="webLink" href={workinfo.webLink3}><AiFillEye fontSize="3em" /></a>
          <a className="codeLink" href={workinfo.codeLink3}><AiFillGithub fontSize="3em" /></a>
          </div>
          <motion.div 
           whileInView={{ opacity:1 }}
           whileHover= {{ scale:1.05}}
           transition={{ duration: 0.5, type:'tween'}}
           className="app__full-banner-image">
           
        
          <img src={workinfo.imgUrl3} alt={workinfo.title3} />
          
           </motion.div>
          </div>
           </div>

           
      

      ))}

    </div>

      
  

      

    

    
  )
}

export default AppWrap(Work,'work');