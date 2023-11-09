import React, { useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=> {
    AOS.init({duration: 2000});
  },[])
  return (
    <>
    <div className='firstsec py-5'>
      <div className="container py-5 about">
        <div className="row">
            <div className="col-lg-2 circle">
                <div className="box" data-aos="flip-left"></div>
            </div>
            <div className="col-lg-5 about-img" data-aos="fade-right">
                <img src="/image/coding.jpg" alt="" />
            </div>
            <div className="col-lg-5" data-aos="fade-left">
                <h1 className='my-5'>About Me</h1>
                <p className='px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cum assumenda quae quas recusandae cumque corporis pariatur, asperiores sint quis nobis.</p>
                <button className='my-4' data-aos="flip-right">Contact Me</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
