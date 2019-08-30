import React from 'react'

function MainContentBoxTwo() {
  return(
    <div className="col span-1-of-3 box">
      <i className="ion-chatbubbles icon-big"></i>
      <h3>Communication consultancy</h3>
      <p>
          Through a bespoke program of seminars and workshops, and through individual 
          coaching sessions, we will give you all the tools you need to communicate 
          effectively and confidently in English.
      </p>
      <button 
        type="button" 
        className="modal_btn btn btn-primary btn-lg" 
        data-toggle="modal" 
        data-target="#myModal2"
      >More</button>
      <div 
        className="modal fade" 
        id="myModal2" 
        tabIndex="-1" 
        role="dialog" 
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <p>Our range of communication consultancy services<br /><br />
                Communication coaching; Working together with your coach on real life
                communication tasks like  preparing for a presentation or interview, 
                you will gain confidence and control of the language tools you need 
                to succeed. Your coach will also analyse your emails and written output, 
                helping you to maximize the effectiveness of your communication.<br /><br />
                &nbsp;&nbsp;&nbsp;&diams; <b>Advantages:</b> practical advice  with immediate results; 
                supportive sessions to build confidence and help you take the next step 
                in your English communication.<br /><br />
                &nbsp;&nbsp;&nbsp;&diams; <b>Seminar programs:</b> Our range of interactive 
                seminars will give you and your team the ideas, the resources and the inspiration 
                to transform your English communication. Seminar topics include: effective emailing, 
                presentations and pitches, networking and small talk, making sense of British English, 
                cultural awareness, negotiation.<br /><br />
                &nbsp;&nbsp;&nbsp;&diams; <b>Advantages:</b> pdf copies of every presentation 
                give you a wealth of resources to use; engaging presentation style, 
                with plenty of opportunities to try out new approaches.
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

export default MainContentBoxTwo
