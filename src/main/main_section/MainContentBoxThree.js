import React from 'react'

function MainContentBoxThree() {
  return(
    <div className="col span-1-of-3 box">
      <i className="ion-shuffle icon-big"></i>
      <h3>Tone of Voice Guides</h3>
      <p>
        In collaboration with you, we’ll design and implement a tone of voice guide 
        that will create consistency and help improve communication processes 
        all across your business.
      </p>
        <button 
          type="button" 
          className="modal_btn btn btn-primary btn-lg" 
          data-toggle="modal" 
          data-target="#myModal3"
        >More</button>
      <div 
        className="modal fade" 
        id="myModal3" 
        tabIndex="-1" 
        role="dialog" 
        aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>Tone of Voice Guides<br /><br />
                A tone of voice guide is like a brand book for language; 
                it’s a style guide which will help ensure all of your company’s 
                communication is consistent and communicates your brand identity.
                We find the right sentence structures and vocabulary to create unique, 
                value-focused voices for your company. Then, using a range of detailed 
                examples and explanations, we train your team on how to use your company’s 
                unique voice.<br /><br />
                &nbsp;&nbsp;&nbsp;&diams; You want the brand values and core strengths of 
                your company to come across in every piece of communication that goes out, 
                from emails to web copy to brochures to product text.<br /><br />
                &nbsp;&nbsp;&nbsp;&diams; Through helping you to identify and clarify who you 
                are and why you do what you do, and by analyzing your clientele in detail, 
                we will find your company’s own, unique voice.<br /><br />
                &nbsp;&nbsp;&nbsp;&diams; The detailed guide we produce for you, full of 
                practical examples and introduced to staff through bespoke training sessions, 
                will then ensure that all of your team know how to write using your company’s voice.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  </div>			
  )
}

export default MainContentBoxThree
