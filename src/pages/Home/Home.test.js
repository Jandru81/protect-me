/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Home from './Home';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Home {...props} />);
  if (state) wrapper.setState(state);

  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error ', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-home');

  expect(appComponent.length).toBe(1);
});
