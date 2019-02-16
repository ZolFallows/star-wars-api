import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Characters from './characters';


describe(`Characters Component`, () => {
    it('renders empty when sections not supplied', () => {
        const wrapper = shallow(<Characters />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only renders when character search triggers', () => {
      const wrapper = shallow(<Characters />);
      const input = wrapper.find('input');
      input.forEach(button => {
        button.simulate('onKeyPress')
      })
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  })