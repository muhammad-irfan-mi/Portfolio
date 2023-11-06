import React from 'react'
import Header from './Header'

const FirstSec = () => {
    return (
        <>
            <div className="firstsec py-3">
                <Header />
                <div className="container my-5 intro">
                    <div className="row">
                        <div className="col-lg-6 py-5 px-4">
                            <h2>Front-End Web Developer</h2>
                            <h1>Muhammad <br /> Irfan</h1>
                            <p className='mt-5'>I am front-end web developer and I work on dummy projects and learn something new daily</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/image/link-pic.png" alt="Loading Error" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSec
