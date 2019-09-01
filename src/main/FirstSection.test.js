import React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FirstSection from './FirstSection'

Enzyme.configure({ adapter: new Adapter() })

describe('First Section', () => {
  const component = shallow(<FirstSection />);

  it('First section to contain <h2>', () => {
    expect(component.containsAnyMatchingElements([
      <h2>GETTING YOUR LANGUAGE RIGHT, FIRST TIME</h2>,
      <p>We all know that communication lies at the heart of successful business. <br /> 
      And getting your communication in English right can be the difference <br/>
      between success and failure. Whether it’s in meetings and presentations, <br/>
      or on your website and marketing materials, first impressions last.</p>
    ])).toEqual(true);
  });
});
