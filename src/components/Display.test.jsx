import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from './RequestForm';

describe('RequestForm component', () => {
  it('renders the RequestForm', () => {
    const wrapper = shallow(<RequestForm url="butt@butt.com" body="fun things time"  onChange={() => {}} onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
