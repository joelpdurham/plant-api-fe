import React from 'react';
import { shallow } from 'enzyme';
import { Plant } from './Plant';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Plant component', () => {
  it('renders Plant', () => {
    const wrapper = shallow(<Provider store={store}><Plant name='test' image='test' /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});