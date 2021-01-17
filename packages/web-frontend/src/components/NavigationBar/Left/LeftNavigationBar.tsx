/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// Type Declarations
type LeftNavigationBarProps = {
  active: number;
  click: (active: number) => void;
};

// Root CSS Element
const Root = styled.div`
  margin: 0;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  width: 40px;
  left: 40px;
  overflow: hidden;
  position: fixed;
  z-index: 100;
  top: 50%;
  opacity: 1;

  @media screen and (max-width: 1250px) {
    width: auto;
    top: auto;
    left: 50%;
    bottom: 32px;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  @media screen and (max-width: 420px) {
    bottom: 20px;
  }
`;

// NavigationWrapper CSS Element
const NavigationWrapper = styled.ul`
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1250px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
`;

// NavigationItemWrapper CSS Element
const NavigationItemWrapper = styled.li`
  height: 3px;
  margin: 0 0 40px;
  display: block;
  width: 14px;
  position: relative;

  @media screen and (max-width: 1250px) {
    height: auto;
    margin: 0 28px;
  }

  @media screen and (max-width: 420px) {
    margin: 0 12px;
  }
`;

// NavigationItem CSS Element
const NavigationItem = styled.a`
  width: 100%;
  height: 100%;
  background: #fff;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  display: block;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 1250px) {
    width: 3px;
    height: 24px;
  }

  @media screen and (max-width: 420px) {
    width: 2px;
    height: 16px;
  }

  &.active {
    width: 40px;

    @media screen and (max-width: 1250px) {
      width: 3px;
      height: 40px;
    }

    @media screen and (max-width: 420px) {
      width: 2px;
      height: 32px;
    }
  }
`;

// LeftNavigationBar React Component
const LeftNavigationBar = ({ active, click }: LeftNavigationBarProps) => {
  return (
    <Root>
      <NavigationWrapper>
        <NavigationItemWrapper>
          <NavigationItem
            onClick={() => click(1)}
            className={active === 1 ? 'active' : ''}
          ></NavigationItem>
        </NavigationItemWrapper>
        <NavigationItemWrapper>
          <NavigationItem
            onClick={() => click(2)}
            className={active === 2 ? 'active' : ''}
          ></NavigationItem>
        </NavigationItemWrapper>
        <NavigationItemWrapper>
          <NavigationItem
            onClick={() => click(3)}
            className={active === 3 ? 'active' : ''}
          ></NavigationItem>
        </NavigationItemWrapper>
        <NavigationItemWrapper>
          <NavigationItem
            onClick={() => click(4)}
            className={active === 4 ? 'active' : ''}
          ></NavigationItem>
        </NavigationItemWrapper>
      </NavigationWrapper>
    </Root>
  );
};

// Default Export LeftNavigationBar React Component
export default LeftNavigationBar;
