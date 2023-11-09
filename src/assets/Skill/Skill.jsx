import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skill = () => {
    useEffect(()=> {
        AOS.init({duration: 1300});
      },[])
    return (
        <>
            <div className="firstsec p-5">
                <div className="container skill px-5">
                    <h1 data-aos="flip-right">My Skills</h1>
                    <div className="row">
                        <div className="col-md-5" data-aos="fade-right">
                            <div className="dot-parent">
                                <h3>Html</h3>
                                <div className="line"><div className="chil-line"></div></div>
                            </div>
                            <div className="dot-parent">
                                <h3>CSS</h3>
                                <div className="line"><div className="chil-line" id='css'></div></div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5" data-aos="fade-left">
                            <div className="dot-parent">
                                <h3>JS</h3>
                                <div className="line"><div className="chil-line js" ></div></div>
                            </div>
                            <div className="dot-parent">
                                <h3>React</h3>
                                <div className="line"><div className="chil-line js" ></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
