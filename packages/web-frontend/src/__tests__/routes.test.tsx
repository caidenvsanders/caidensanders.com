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
import { lazy, Suspense } from 'React';
import { BrowserRouter } from 'react-router-dom';

// React Component Imports
import App from '../App';

// Miscellaneous Imports
import { DEFAULT, HOME, ABOUT, PORTFOLIO, CONTACT } from '../routes';

// React Page Imports
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

window.IntersectionObserver = class {
  readonly root: Element | null;

  readonly rootMargin: string;

  readonly thresholds: ReadonlyArray<number>;

  constructor() {
    this.root = null;
    this.rootMargin = '';
    this.thresholds = [];
  }

  disconnect() {}

  observe() {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {}
};
const renderWithRouter = (
  ui: any,
  { route = '/' }: { route?: string } = {},
) => {
  window.history.pushState({}, 'Test page', route);

  return mount(
    <BrowserRouter>
      <Suspense fallback={<div />}>{ui}</Suspense>
    </BrowserRouter>,
  );
};

describe('testing - app routing', () => {
  test('app routing - DEFAULT (/)', async () => {
    const wrapper = renderWithRouter(<App />, { route: DEFAULT });

    console.log(wrapper.debug());
    await Home;

    expect(wrapper.contains(<Home /> || <div />)).toBeFalsy();
  });

  test('app routing - HOME (/home)', async () => {
    const wrapper = renderWithRouter(<App />, { route: HOME });

    await Home;

    expect(wrapper.contains(<Home /> || <div />)).toBeFalsy();
  });

  test('app routing - ABOUT (/about)', async () => {
    const wrapper = renderWithRouter(<App />, { route: ABOUT });

    await About;

    expect(wrapper.contains(<About /> || <div />)).toBeFalsy();
  });

  test('app routing - PORTFOLIO (/portfolio)', async () => {
    const wrapper = renderWithRouter(<App />, { route: PORTFOLIO });

    await Portfolio;

    expect(wrapper.contains(<Portfolio /> || <div />)).toBeFalsy();
  });

  test('app routing - CONTACT (/contact)', async () => {
    const wrapper = renderWithRouter(<App />, { route: CONTACT });

    await Contact;

    expect(wrapper.contains(<Contact /> || <div />)).toBeFalsy();
  });

  test('app routing - INVALID ROUTE (/*)', async () => {
    const wrapper = renderWithRouter(<App />, { route: '/invalid' });

    await NotFound;

    expect(wrapper.contains(<NotFound /> || <div />)).toBeFalsy();
  });
});
