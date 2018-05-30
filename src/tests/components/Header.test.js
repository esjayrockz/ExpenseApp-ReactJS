import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
//import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  //expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

})
