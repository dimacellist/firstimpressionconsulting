import React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cover from './Cover'

Enzyme.configure({ adapter: new Adapter() })
it('Cover section to contain certain string', () => {
  const example = "Because when it comes to communication, first impressions last";
  const component = shallow(<Cover list={example} />);
  expect(component).toMatchSnapshot();
});