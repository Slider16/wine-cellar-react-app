import React from 'react';
import ReactDOM from 'react-dom';
import WineCellarReactApp from './WineCellarReactApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WineCellarReactApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
