import React from 'react'
import Image from 'next/future/image';
import Image1 from '../images/alvrio_logo-removebg-preview.png'
function Navbar() {
  return (
    <>
      <div className="navbar-section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto ">
          <div className="container mt-3">
            <a className="navbar-brand" href="#">
                <Image src={Image1} className="company-logo"></Image>
              </a>
              
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mx-auto mb-lg-0">
                <li><a className="nav-link mx-2" href="#">About</a></li>
                <li><a className="nav-link mx-2" href="#">Service</a></li>
                <li><a className="nav-link mx-2" href="#">Solution</a></li>
                <li><a className="nav-link mx-2" href="#">Platfrom</a></li>
                <li><a className="nav-link mx-2" href="#">Company</a></li>
              </ul>
              <form className="d-flex">
                <ul className="navbar-nav me-auto  mb-lg-0">
                  <li><a className="nav-link mx-1" href="#">Log In</a></li>
                </ul>
                <button className="btn btn-outline-primary mx-1 button" type="submit">Book a demo</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar