import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import Header from './Header'

const FirstSec = () => {
    useEffect(()=> {
        AOS.init({duration: 800});
      },[])
    return (
        <>
            <div className="firstsec py-3">
                <Header />
                <div className="container-fluid py-5 intro">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 py-5 px-4" data-aos="fade-right">
                            <h2>Front-End Web Developer</h2>
                            <h1>Muhammad <br /> Irfan</h1>
                            <p className='mt-5'>I am front-end web developer and I work on dummy projects and learn something new daily</p>
                        </div>
                        <div className="col-lg-5 intro-img" data-aos="fade-up">
                            <i className='cross'><ImCross /></i>
                            <img src="/image/link-img.png" alt="Loading Error" />
                        </div>
                        <div className="col-lg-1 link-icon py-5">
                            <a href="https://github.com/muhammad-irfan-mi" target='blank' data-aos="fade-left"><i><AiOutlineGithub /></i></a>
                            <a href="https://www.linkedin.com/in/muhammad-irfan-mi" target='blank' data-aos="fade-right"><i><AiFillLinkedin /></i></a>
                            <a href="" data-aos="fade-left"><i><AiFillInstagram /></i></a>
                            <a href="https://twitter.com/Muhamma42799961" target='blank' data-aos="fade-right"><i><AiFillTwitterCircle /></i></a>
                            <a href="" data-aos="fade-left"><i><AiFillFacebook /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSec
