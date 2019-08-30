import React from 'react'

function MainContentBoxOne() {
  return(
  <div className="col span-1-of-3 box">
    <i className="ion-ios-compose icon-big"></i>
    <h3>Copywriting services </h3>
    <p>
      You can trust our professional copywriters, editors and translators 
      to produce the English language marketing and branding materials you 
      need to take your business to the next level. We’ll give you the hook 
      that will catch that all important client. 
    </p>
    <button 
      type="button" 
      className="modal_btn btn btn-primary btn-lg" 
      data-toggle="modal" 
      data-target="#myModal">More</button>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <p>Our range of copywriting services:<br /><br />
                    From scratch; Simply give us a brief and we’ll create the perfect 
                    content to suit your needs.<br /><br />
                    &nbsp;&nbsp;&nbsp;&diams; <b>Advantages:</b> no time wasted staring at a 
                    blank screen; professional, experienced writers; content tailored to 
                    international clientele.<br /><br />
                    Rewrites; Create a first draft in English yourself, and we’ll do the rest. 
                    We’ll make sure every sentence communicates value, we’ll check the structure 
                    to make sure your USP is loud and clear, and, of course, we’ll make sure every 
                    word sounds natural and correct.<br /><br />
                    &nbsp;&nbsp;&nbsp;&diams; <b>Advantages:</b> your ideas, put in our words; 
                    you control the output, but needn’t worry about your English 
                    writing skills.<br /><br />
                    Editing; You’re happy with your tone of voice, and enjoy putting 
                    your brand personality into the texts you produce. You just want to make 
                    sure the ‘i’s are dotted and the ‘t’s crossed. Our experienced 
                    native-speaker editors will carefully check through your text, 
                    correcting any errors.<br /><br />
                    &nbsp;&nbsp;&nbsp;&diams; <b>Advantages:</b> 100% confidence that your 
                    text is correct.<br /><br />
                    Dual-native translation services; Using two native speakers, 
                    we translate your texts into English, then edit them so they 
                    sound natural and professional. With native speakers in both languages, 
                    we can identify all the nuances of the original text, then find the 
                    perfect English expressions to communicate exactly what you want.
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

export default MainContentBoxOne
