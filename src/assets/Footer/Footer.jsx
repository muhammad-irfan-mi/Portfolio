import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="firstsec py-5">
        <div className="footer container">
            <div className="row my-5">
                <div className="col-lg-2">
                  <div className="box" data-aos="flip-left"></div>
                </div>
                <div className="col-lg-6 f-content">
                    <h1>Follow Me</h1>
                    <div className="footer-dot">
                      <div className="dot" id="dot1"></div>
                      <div className="dot" id="dot2"></div>
                      <div className="dot" id="dot3"></div>
                      <div className="dot" id="dot4"></div>
                      <div className="dot" id="dot5"></div>
                      <div className="dot" id="dot6"></div>
                      <div className="dot" id="dot7"></div>
                      <div className="dot" id="dot8"></div>
                      <div className="dot" id="dot9"></div>
                      <div className="dot" id="dot10"></div>
                      <div className="dot" id="dot11"></div>
                      <div className="dot" id="dot12"></div>
                      <div className="dot" id="dot13"></div>
                      <div className="dot" id="dot14"></div>
                      <div className="dot" id="dot15"></div>
                      <div className="dot" id="dot16"></div>
                      <div className="dot" id="dot17"></div>
                    </div>
                </div>
                <div className="col-lg-4 footer-link">
                  <i><a href="https://twitter.com/Muhamma42799961" target='blank'><AiOutlineTwitter /></a></i>
                  <i><a href="https://www.linkedin.com/in/muhammad-irfan-mi" target='blank'><FaLinkedinIn /></a></i>
                  <i><a href="https://github.com/muhammad-irfan-mi" target='blank'><AiFillGithub /></a></i><br /><br /><br />
                  <i><a href=""><AiOutlineYoutube /></a></i>
                  <i><a href=""><AiOutlineInstagram /></a></i>
                  <i><a href=""><FaFacebookF /></a></i>
                </div>
                <div className="container px-5">
                  <hr />
                  <nav className='footer-nav'>
                    <a href="/"><h3 data-aos="fade-right">MuhammadIrfan</h3></a>
                    <ul data-aos="fade-left">
                      <li><a href="/">Home</a></li>
                      <li><a href="/">Projects</a></li>
                      <li><a href="/">Services</a></li>
                      <li><a href="/">Contact</a></li>
                    </ul>
                  </nav>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
