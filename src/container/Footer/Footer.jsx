import React from 'react'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper';
import './Footer.scss'
const Footer = () => {
  return (
    <>
    <div className="app__footer">
    <h3 className="head-text">Want to reach out?</h3>
    <h3 className="head-text">Lets have a chat over some coffee.</h3>

    <div className="app__footer-cards">
      <div className=" app__footer-card app__footer-card-email">
        <img src={images.email} alt="email"/>
        <a href="edwin.huang7@gmail.com">edwin.huang7@gmail.com</a>
      </div>
      <div className=" app__footer-card app__footer-card-mobile">
        <img src={images.mobile} alt="mobile"/>
        <a href="0415560300">0415560300</a>
      </div>
    </div>
    </div>
    </>
  )
}

export default AppWrap(Footer,'contact');

