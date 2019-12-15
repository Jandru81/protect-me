/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import AddProduct from './AddProduct';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AddProduct {...props} />);
  if (state) wrapper.setState(state);

  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error ', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-AddProduct');

  expect(appComponent.length).toBe(1);
});
