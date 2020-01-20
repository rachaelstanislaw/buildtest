import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Renders Pending...', () => {
  const app = mount(<App />)
  expect(app.find('h1').text()).toEqual('Pending...')
})

test('Renders Success!', () => {
  const app = mount(<App />)
  app.find('button').simulate('click')
  expect(app.find('h1').text()).toEqual('Success!')
})
