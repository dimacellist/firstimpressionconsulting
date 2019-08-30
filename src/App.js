import React from 'react'
import Navigation from './components/Navigation'
import Cover from './cover/Cover'
import FirstSection from './main/FirstSection'
import MainSection from './main/MainSection'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div className="App">
        <Navigation />
          <Cover />   
            <FirstSection />
            <MainSection />
	
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

        <section className="team" id="team">
            <div className="row">
                <h2>WHO WE ARE</h2>
            </div>
            <div className="row">
                <div className="col span-1-of-2">
                    <h3>Malcolm Stewart</h3>
                    <img className="js--wp-2" src="resources/images/pic07.jpg" alt="Malcolm Stewart"/>
                    <p>
                      I have been providing English language services in Lithuania for the past seven years.	
                      Through designing and delivering courses, seminars and copy for various companies in 
                      the region, I have developed an approach to language services which is based on working 
                      closely with the client. This enables us to achieve results that provide added value 
                      throughout the company: from the language that the company uses in its everyday 
                      communication to the copy it uses to present itself to the world.	
                    </p>
                    <p><em>
                        “Having a good product or service is only the first step; the real 
                        key is developing the language you need to sell it. That’s where First 
                        Impression Consulting can really help.”</em>
                    </p>
                </div>		
                <div className="col span-1-of-2">
                    <h3>Michael Pennock</h3>
                    <img className="js--wp-3" src="resources/images/pic08.jpg" alt="Michael Pennock"/>
                    <p>
                      I have been working as a professional freelance copywriter and English language 
                      communications coach in Lithuania for the past 3 years.My background is in 
                      lecturing and teaching History and Politics, and I achieved a Masters with 
                      Distinction from the University of London, School of Oriental and African Studies. 
                      My academic background helps me bring coherence and structure to the texts 
                      I work on. And my experience as a teacher has given me vital skills for helping 
                      clients with their public speaking and presentations.
                    </p>
                    <p>
                      <em>
                        “Effective communication, whether written or spoken, 
                        is about simplicity. Knowing what you want to say, and having the 
                        language tools to say it. That’s where First Impression can really help.”
                      </em>
                    </p>
                </div>
            </div>
        </section>

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

        <footer>
            <div className="row">
                    <ul className="social">
                        <li><a href="facebook.com"><i className="ion-social-facebook-outline"></i></a></li>
                        <li><a href="twitter.com"><i className="ion-social-twitter-outline"></i></a></li>
                        <li><a href="linkedin.com"><i className="ion-social-linkedin-outline"></i></a></li>
                    </ul>	
                <div className="row">
                    <p>
                        Copyright &copy; 2019 by First Impression. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default App;
