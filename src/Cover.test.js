import React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cover from './Cover'

Enzyme.configure({ adapter: new Adapter() })

describe('Cover', () => {
  const component = shallow(<Cover />);

  it('Cover section to contain certain string', () => {
    expect(component.containsMatchingElement(
      <p>Because when it comes to communication, first impressions last</p>
    )).toEqual(true);
  });

  it('Cover section expected to contain <a> tag', () => {
    expect(component.containsMatchingElement(
      <a>Our suite of services</a>
    )).toEqual(true);
  });

});
