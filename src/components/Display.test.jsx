import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders the Display', () => {
    const wrapper = shallow(<Display url="butt@butt.com" body="fun things time"  onChange={() => {}} onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
