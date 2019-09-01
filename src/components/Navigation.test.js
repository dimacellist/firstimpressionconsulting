import React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navigation from './Navigation'

Enzyme.configure({ adapter: new Adapter() })
it('should render banner text correctly with given strings', () => {
  const example = ['ABOUT', 'SERVICES', 'TESTIMONIALS', 'TEAM', 'CONTACT'];
  const component = shallow(<Navigation list={example} />);
  expect(component).toMatchSnapshot();
});