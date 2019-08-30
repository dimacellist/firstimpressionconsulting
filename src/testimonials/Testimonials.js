import React from 'react'

function Testimonials() {
  return(
    <section className="testimonials" id="testimonials">
      <div className="row">
        <h2>WHO WE HAVE HELPED</h2>
        <p className="long-copy">
          With First Impression you can rest assured that the quality of our work 
          will reflect the quality of your work.
          We have been providing language solutions to the Lithuanian marketplace 
          collectively for ten years. In that time we have produced content and 
          tone of voice guides, and provided training and coaching services, 
          to a wide range of companies and organisations, from key public sector 
          organisations (Invest Lithuania, Vilnius Municipality) to major international 
          companies (Barclays, Ernst and Young, ERGO) to the country’s budding startup 
          community (Vilnius Tech Park, DealLink, Firepush). Here is what they have to say about us:
        </p>       
      </div>	
      <div className="row">
        <div className="col span-1-of-3">
          <blockquote>
            The team at First Impression has moved our web text and blogs 
            to the next level. As a truly safe pair of hands with more than 
            competitive prices. They really give your business the voice it needs
            <br /><br />CEO at Kitoks.com
            <cite>
              <img 
                className="js--wp-5" 
                src="resources/images/pic01.jpg" 
                alt="Tom Kacevicius" 
              />Tom Kacevicius
              </cite>
          </blockquote>
        </div>		
        <div className="col span-1-of-3">
          <blockquote>
            For an exceptional project, we needed an exceptional team. 
            We chose First Impression and never looked back. Their skill and 
            effort in creating the best results for the client, no matter how tight the deadline is!
            <br /><br />Communication Coordinator at Vilnius Tech Park
            <cite>
              <img 
                className="js--wp-6" 
                src="resources/images/pic02.jpg" 
                alt="Monika Poškaityte"
              />Monika Poškaityte
            </cite>
          </blockquote>
        </div>		
        <div className="col span-1-of-3">
          <blockquote>
            I very much appreciate the professional attention towards customer needs. 
            I highly recommend First Impression, who are able to explain how the English language works
            <br /><br />CEO of ERGO Baltic
            <cite>
              <img 
                className="js--wp-7" 
                src="resources/images/pic03.jpg" 
                alt="Kestutis Bagdonavicius"
              />Kestutis Bagdonavicius
            </cite>
          </blockquote>
        </div>
      </div>
    </section>	
  )
}

export default Testimonials
