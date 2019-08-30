import React from 'react'
import Malcolm from './Malcolm'
import Michael from './Michael'

function Team() {
  return(
    <section className="team" id="team">
      <div className="row">
        <h2>WHO WE ARE</h2>
      </div>
      <div className="row">
        <Malcolm />
        <Michael />
      </div>
    </section>
  )
}

export default Team
