import React from 'react'

function Contact() {
  return(
    <section className="contact-form" id="contact">
      <div className="row">
        <h2 className="js--wp-4">CONTACT US</h2>
      </div>
      <div className="row">
        <form method="post" action="mailer.php" className="form">
          <div className="row">
            <div className="col span-1-of-3">
              <label>Name</label>
            </div>
            <div className="col span-2-of-3">
              <input type="text" name="name" id="name" placeholder="Your name" required />
            </div>
          </div>		
          <div className="row">
            <div className="col span-1-of-3">
              <label>Email</label>
            </div>
            <div className="col span-2-of-3">
              <input type="email" name="email" id="email" placeholder="Your email" required />
            </div>
          </div>			
          <div className="row">
            <div className="col span-1-of-3">
              <label>Send a message</label>
            </div>
            <div className="col span-2-of-3">
              <textarea name="message" placeholder="Your message"></textarea>
            </div>
          </div>		
          <div className="row">
            <div className="col span-1-of-3">
                <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <input type="submit" value="SUBMIT" />
            </div>
          </div>  
        </form>
      </div>
    </section>
  )
}

export default Contact
