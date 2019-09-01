import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return(
    <footer>
      <div className="row">
        <ul className="social">
          <li><a href="facebook.com"><i className="ion-social-facebook-outline"></i></a></li>
          <li><a href="twitter.com"><i className="ion-social-twitter-outline"></i></a></li>
          <li><a href="linkedin.com"><i className="ion-social-linkedin-outline"></i></a></li>
        </ul>	
        <div className="row">
          <p>
            Copyright &copy; {currentYear} by First Impression. All rights reserved.
          </p>
        </div>
      </div>
  </footer>
  )
}

export default Footer
