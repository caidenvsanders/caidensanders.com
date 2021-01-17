/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS Frameworks & Animation Imports
import { MotionConfig, AnimationFeature, GesturesFeature } from 'framer-motion';

// CSS Component Imports
import OverflowOverride from 'css/OverflowOverride';

// React Component Imports
import ScrollToTop from 'components/ScrollToTop';
import BlackCover from 'components/BlackCover';

// Miscellaneous Imports
import ROUTES from 'routes';

// React Page Imports
const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const Contact = lazy(() => import('pages/Contact'));
const NotFound = lazy(() => import('pages/NotFound'));

// App React Component
const App = () => {
  return (
    <MotionConfig features={[AnimationFeature, GesturesFeature]}>
      <Router>
        <ScrollToTop />
        <Switch>
          {/*  /contact */}
          <Route exact path={ROUTES.CONTACT}>
            <OverflowOverride />
            <Suspense fallback={<BlackCover />}>
              <Contact />
            </Suspense>
          </Route>

          {/* /portfolio */}
          <Route exact path={ROUTES.PORTFOLIO}>
            <OverflowOverride />
            <Suspense fallback={<BlackCover />}>
              <Portfolio />
            </Suspense>
          </Route>

          {/* /about */}
          <Route exact path={ROUTES.ABOUT}>
            <OverflowOverride />
            <Suspense fallback={<BlackCover />}>
              <About />
            </Suspense>
          </Route>

          {/* / || /home */}
          <Route exact path={[ROUTES.DEFAULT, ROUTES.HOME]}>
            <Suspense fallback={<BlackCover />}>
              <Home />
            </Suspense>
          </Route>

          {/* ALL PATHS NOT SPECIFIED */}
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </MotionConfig>
  );
};

// Default Export App React Component
export default App;
