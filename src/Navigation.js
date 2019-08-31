import React from 'react'

function Navigation() {
  return(
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button 
            type="button" 
            className="navbar-toggle collapsed" 
            data-toggle="collapse" 
            data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>    
          <a 
            className="navbar-nrand" 
            href="http://www.firstimpressionconsulting.net">
            <img className="logo" src="../resources/images/logo3.gif" alt="favicon" />
          </a>
        </div>   

        <div className="collapse navbar-collapse js--main-nav" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav> 
  )
}

export default Navigation
