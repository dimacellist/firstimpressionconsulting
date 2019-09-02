import React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import Form from './Form'

Enzyme.configure({ adapter: new Adapter() })

describe('Form', () => {
  const component = shallow(<Form />)

  it('Contact form to contain Name, Email, Message input fields', () => {
    expect(component.containsMatchingElement(
      <input type="text" name="name" id="name" placeholder="Your name" required />,
      <input type="email" name="email" id="email" placeholder="Your email" required />,
      <textarea name="message" placeholder="Your message"></textarea>
    )).to.equal(true)
  })

  it('Contact form submits data to certain file', () => {
    expect(component.find("form").prop("action")).to.equal("#");
  })
})
