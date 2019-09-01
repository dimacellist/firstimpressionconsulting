import React from 'react'
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import Testimonials from './Testimonials'
import TestimonialsTitle from './TestimonialsTitle'
import FirstTestimonial from './FirstTestimonial'
import SecondTestimonial from './SecondTestimonial'
import ThirdTestimonial from './ThirdTestimonial'

Enzyme.configure({ adapter: new Adapter() })

describe('Testimonials', () => {
  const component = shallow(<Testimonials />)

  it('Testimonials section contains main <p>', () => {
    expect(component.containsMatchingElement(
      <TestimonialsTitle />
    )).to.equal(true)
  })

  it('Testimonials section to contains three testimonials', () => {
    const component = mount(<Testimonials />)
    expect(component.find('.span-1-of-3')).to.have.lengthOf(3)
  })

  describe('Each Testimonial', () => {
    const testimonial1 = mount(<FirstTestimonial />)
    const testimonial2 = mount(<SecondTestimonial />)
    const testimonial3 = mount(<ThirdTestimonial />)
    
    it('Renders correct image for testimonials', () => {
      expect(testimonial1.find("img").prop("src")).to.equal("resources/images/pic01.jpg");
      expect(testimonial2.find("img").prop("src")).to.equal("resources/images/pic02.jpg");
      expect(testimonial3.find("img").prop("src")).to.equal("resources/images/pic03.jpg");
    })
  })
})
