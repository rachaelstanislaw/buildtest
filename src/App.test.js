import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Renders Header', () => {
  let app = mount(<App />)
  expect(app.find('#message').text()).toEqual('')
})

test('Renders new color hex code', () => {
  let app = mount(<App />)
  app.find('#button').simulate('click')
  expect(app.find('#message').text()).toEqual('Click for a new color')
})
