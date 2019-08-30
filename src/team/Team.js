import React from 'react'

function Team() {
  return(
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
  )
}

export default Team
