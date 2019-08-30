import React from 'react'
import TestimonialsTitle from './TestimonialsTitle'
import FirstTestimonial from './FirstTestimonial'
import SecondTestimonial from './SecondTestimonial'
import ThirdTestimonial from './ThirdTestimonial'

function Testimonials() {
  return(
    <section className="testimonials" id="testimonials">
      <TestimonialsTitle />
      <div className="row">
        <FirstTestimonial />
        <SecondTestimonial />
        <ThirdTestimonial />
      </div>
    </section>	
  )
}

export default Testimonials
