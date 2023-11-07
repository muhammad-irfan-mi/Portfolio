import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import Header from './Header'

const FirstSec = () => {
    return (
        <>
            <div className="firstsec py-3">
                <Header />
                <div className="container-fluid py-5 intro">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 py-5 px-4">
                            <h2>Front-End Web Developer</h2>
                            <h1>Muhammad <br /> Irfan</h1>
                            <p className='mt-5'>I am front-end web developer and I work on dummy projects and learn something new daily</p>
                        </div>
                        <div className="col-lg-5">
                            <img src="/image/link-pic.png" alt="Loading Error" />
                        </div>
                        <div className="col-lg-1 link-icon py-5">
                            <a href="https://github.com/muhammad-irfan-mi" target='blank'><i><AiOutlineGithub /></i></a>
                            <a href="https://www.linkedin.com/in/muhammad-irfan-mi" target='blank'><i><AiFillLinkedin /></i></a>
                            <a href=""><i><AiFillInstagram /></i></a>
                            <a href=""><i><AiFillTwitterCircle /></i></a>
                            <a href=""><i><AiFillFacebook /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSec
