/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Testing-Library Imports
import '@testing-library/jest-dom/extend-expect';

// Enzyme Imports
import { mount } from 'enzyme';

// React Imports
import { BrowserRouter } from 'react-router-dom';

// React Page Imports
import Home from 'pages/Home';
import About from 'pages/About';
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

// React Component Imports
import App from '../App';

// Miscellaneous Imports
import { DEFAULT, HOME, ABOUT, PORTFOLIO, CONTACT } from 'routes';

const renderWithRouter = (
  ui: any,
  { route = '/' }: { route?: string } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  return mount(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('testing - app routing', () => {
  test('app routing - DEFAULT (/)', () => {
    const wrapper = renderWithRouter(<App />, { route: DEFAULT });

    expect(wrapper.contains(<Home />)).toBeTruthy();
  });

  test('app routing - HOME (/home)', () => {
    const wrapper = renderWithRouter(<App />, { route: HOME });

    expect(wrapper.contains(<Home />)).toBeTruthy();
  });

  test('app routing - ABOUT (/about)', () => {
    const wrapper = renderWithRouter(<App />, { route: ABOUT });

    expect(wrapper.contains(<About />)).toBeTruthy();
  });

  test('app routing - PORTFOLIO (/portfolio)', () => {
    const wrapper = renderWithRouter(<App />, { route: PORTFOLIO });

    expect(wrapper.contains(<Portfolio />)).toBeTruthy();
  });

  test('app routing - CONTACT (/contact)', () => {
    const wrapper = renderWithRouter(<App />, { route: CONTACT });

    expect(wrapper.contains(<Contact />)).toBeTruthy();
  });

  test('app routing - INVALID ROUTE (/*)', () => {
    const wrapper = renderWithRouter(<App />, { route: '/invalid' });

    expect(wrapper.contains(<NotFound />)).toBeTruthy();
  });
});
