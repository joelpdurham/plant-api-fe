import React from 'react';
import { shallow } from 'enzyme';
import { Plants } from './Plants';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Plants component', () => {
  it('renders Plants', () => {
    const wrapper = shallow(<Provider store={store}><Plants /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
