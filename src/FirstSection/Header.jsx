import React from 'react'

const Header = () => {
  return (
      <>
          {/* <nav>
            <div>
              <h5>MuhammadIrfan</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
            <button>Contact Me</button>
          </nav> */}
          <nav className="navbar navbar-expand-lg">
  <div className="container header">
    <a className="navbar-brand text-light px-4" href="/">MuhammadIrfan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link text-light px-4" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light px-4" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light px-4" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light px-4" href="/">Contact</a>
        </li>
      </ul>
        <button type="button">Contact Me</button>
    </div>
  </div>
</nav>
      </>
  )
}

export default Header
