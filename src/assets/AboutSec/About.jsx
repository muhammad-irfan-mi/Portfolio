import React from 'react'

const About = () => {
  return (
    <>
    <div className='firstsec py-5'>
      <div className="container py-5 about">
        <div className="row">
            <div className="col-lg-2 circle">
                <div className="box"></div>
            </div>
            <div className="col-lg-5 about-img">
                <img src="/image/coding.jpg" alt="" />
            </div>
            <div className="col-lg-5">
                <h1 className='my-5'>About Me</h1>
                <p className='px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cum assumenda quae quas recusandae cumque corporis pariatur, asperiores sint quis nobis.</p>
                <button className='my-4'>Contect Me</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
