import React from 'react'

function Cover() {
  return(
    <div className="cover" data-type="background" data-speed="4">
      <div className="cover-text">
          <img src="resources/images/logo.gif" alt="logo" />
          <p className="lead">Because when it comes to communication, first impressions last</p>
          <a href="#services" role="button" className="btn btn-lg">Our suite of services</a>
      </div>
    </div> 
  )
} 

export default Cover
