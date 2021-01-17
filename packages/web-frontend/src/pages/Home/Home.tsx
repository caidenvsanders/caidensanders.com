/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { lazy, Suspense } from 'react';

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// React Component Imports
import TopNavigationBar from 'components/NavigationBar/Top';

import HomeLanding from 'pages/HomeLanding';

import StarBackground from 'pages/Home/components/StarBackground';
import MoonBackground from 'pages/Home/components/MoonBackground';
import SkyBackground from 'pages/Home/components/SkyBackground';

import Scrolldown from 'components/Scrolldown';
import LeftNavigationBar from 'components/NavigationBar/Left';

// Hook Imports
import { useStorageState } from 'react-storage-hooks';
import { useDebouncedCallback } from 'use-debounce';

import useWindowHeight from 'hooks/useWindowHeight';
import useKeyPress from 'hooks/useKeyPress';

const HomeAbout = lazy(() => import('pages/HomeAbout'));
const HomePortfolio = lazy(() => import('pages/HomePortfolio'));
const HomeContact = lazy(() => import('pages/HomeContact'));

// Type Declarations
interface HomeContainerProps {
  transformX: number;
}

// HomeRoot CSS Element
const HomeRoot = styled.div`
  display: block;
`;

// HomeRootWrapper CSS Element
const HomeRootWrapper = styled.div`
  display: block;
`;

// HomeContainer CSS Element
const HomeContainer = styled.div<HomeContainerProps>`
  height: 100%;
  position: relative;
  touch-action: none;
  transform: translate3d(0px, ${(props) => props.transformX}px, 0px);
  transition: all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Beginning Touch and Ending Touch Coordinates
let beginningTouchY = 0;
let endingTouchY = 0;

// Switch Slides on Up Arrow Key Press
const ArrowUpKeyPress = (active: number, debouncedActive: any) => {
  if (active === 1) return () => debouncedActive.callback(4);
  else return () => debouncedActive.callback(active - 1);
};

// Switch Slides on Down Arrow Key Press
const ArrowDownKeyPress = (active: number, debouncedActive: any) => {
  if (active === 4) return () => debouncedActive.callback(1);
  else return () => debouncedActive.callback(active + 1);
};

// Switch Slides on Mouse Wheel Scroll
const onMouseWheel = (
  e: { deltaY: number },
  active: number,
  debouncedActive: any,
) => {
  if (e.deltaY > 0) {
    if (active === 4) debouncedActive.callback(1);
    else debouncedActive.callback(active + 1);
  } else if (e.deltaY < 0) {
    if (active === 1) debouncedActive.callback(4);
    else debouncedActive.callback(active - 1);
  }
};

// Initiate Touch on Start Touch
const onStartTouch = (e: any) => {
  beginningTouchY = e.touches[0].clientY;
};

// Switch Slides on End Touch
const onEndTouch = (e: any, active: number, debouncedActive: any) => {
  endingTouchY = e.changedTouches[0].clientY;
  if (beginningTouchY > endingTouchY + 5) {
    if (active === 4) debouncedActive.callback(1);
    else debouncedActive.callback(active + 1);
  } else if (beginningTouchY < endingTouchY - 5) {
    if (active === 1) debouncedActive.callback(4);
    else debouncedActive.callback(active - 1);
  }
};

// Home React Component
const Home = () => {
  const [active, setActive] = useStorageState(
    sessionStorage,
    'active-slide',
    1,
  );
  const debouncedActive = useDebouncedCallback(
    (active: number) => {
      setActive(active);
    },
    1600,
    { maxWait: 1600, leading: true, trailing: false },
  );

  const height = useWindowHeight();

  useKeyPress('ArrowUp', ArrowUpKeyPress(active, debouncedActive));
  useKeyPress('ArrowDown', ArrowDownKeyPress(active, debouncedActive));

  return (
    <div
      onWheel={(e) => {
        onMouseWheel(e, active, debouncedActive);
      }}
      onTouchStart={(e) => {
        onStartTouch(e);
      }}
      onTouchEnd={(e) => {
        onEndTouch(e, active, debouncedActive);
      }}
    >
      <TopNavigationBar />
      <HomeRoot>
        <HomeRootWrapper>
          <HomeContainer
            transformX={
              active === 1
                ? 0
                : active === 2
                ? -1 * height
                : active === 3
                ? -1 * height * 2
                : active === 4
                ? -1 * height * 3
                : 0
            }
          >
            <HomeLanding />
            <Suspense fallback={<p>Loading</p>}>
              <HomeAbout />
            </Suspense>
            <Suspense fallback={<p>Loading</p>}>
              <HomePortfolio />
            </Suspense>
            <Suspense fallback={<p>Loading</p>}>
              <HomeContact />
            </Suspense>
          </HomeContainer>
          <StarBackground />
          <MoonBackground />
          <SkyBackground />
        </HomeRootWrapper>
      </HomeRoot>
      <Scrolldown active={active === 1 ? true : false} />
      <LeftNavigationBar active={active} click={debouncedActive.callback} />
    </div>
  );
};

// Default Export Home React Component
export default Home;
