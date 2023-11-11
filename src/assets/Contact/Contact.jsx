import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])
    return (
        <>
            <div className="container-fluid firstsec contact py-5">
                <div id="contact">
                    <h1 data-aos="flip-left">Contact Me</h1>
                    <div className="row form-parent">
                        <div className="col-lg-4">
                            <div className="curve-left" data-aos="flip-left">
                            </div>
                        </div>
                        <div className="form col-lg-4" data-aos="fade-left">
                            <label htmlFor="fnm" data-aos="flip-right">Full Name</label>
                            <input type="text" name="" id="fnm" placeholder='Enter your name' data-aos="flip-right" />
                            <label htmlFor="email" data-aos="flip-left">Email</label>
                            <input type="email" name="" id="email" placeholder='Enter your Email' data-aos="flip-left" />
                            <textarea id="" placeholder='Write your Message' data-aos="fade-right"></textarea>
                            <button data-aos="flip-left">Send</button>
                        </div>
                        <div className="col-lg-4">
                        <div className="curve-right" data-aos="flip-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
