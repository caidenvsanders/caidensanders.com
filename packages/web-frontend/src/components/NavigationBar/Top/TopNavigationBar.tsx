/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { useState } from 'react';
import { Link } from 'react-router-dom';

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion } from 'framer-motion';

// Root CSS Element
const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 40px 0;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 1000;
`;

// Logo CSS Element
const Logo = styled.div`
  a {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    position: relative;
    z-index: 1000;
    text-decoration: none;
    cursor: pointer;

    color: #fff;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 420px) {
      font-size: 1rem;
    }
  }
`;

// Wrap CSS Element
const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
`;

// Icons CSS Element
const Icons = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 4rem;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

// Icon CSS ELement
const Icon = styled.a`
  display: block;
  margin-right: 2rem;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

// MenuIcon CSS Element
const MenuIcon = styled.div`
  position: relative;
  width: 50px;
  height: 22px;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: 25px;
    height: 15px;
  }

  &:before {
    bottom: 0;
  }

  &:after {
    top: 0;
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    position: absolute;
    rigth: 0;
    -webkit-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -o-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  &.menuOpen:before {
    bottom: 50%;
    -webkit-transform: rotate(-45deg) translate3d(0, 50%, 0);
    transform: rotate(-45deg) translate3d(0, 50%, 0);
  }

  &.menuOpen:after {
    top: 50%;
    -webkit-transform: rotate(45deg) translate3d(0, -50%, 0);
    transform: rotate(45deg) translate3d(0, -50%, 0);
  }
`;

const MenuNav = styled.nav`
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#072142),
    color-stop(42%, #8c2b7a),
    to(#ff4d5a)
  );
  background-image: -webkit-linear-gradient(
    left,
    #072142,
    #8c2b7a 42%,
    #ff4d5a
  );
  background-image: -o-linear-gradient(left, #072142, #8c2b7a 42%, #ff4d5a);
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -o-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  z-index: -100;

  &.menuOpen {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  &.menuOpen a {
    -webkit-transforM; translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const MenuNavWrapper = styled.ul`
  text-align: center;
`;

const MenuNavItemWrapper = styled.li`
  margin-top: 4.5rem;
  position: relative;
  padding: 0 153px;
  overflow: hidden;

  @media screen and (max-width: 420px) {
    padding: 0;
    margin-top: 2rem;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const MenuNavItem = styled.div`
  a {
    display: inline-block;
    color: #fff;
    font-size: 7.5rem;
    line-height: 1;
    letter-spacing: 0.1em;
    text-shadow: 0 10px 30px rgba(2, 11, 22, 0.2);
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    -webkit-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
    -o-transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 800px) {
      font-size: 4.75rem;
    }

    @media screen and (max-width: 420px) {
      font-size: 2.375rem;
      text-shadow: 0 3px 20px rgba(2, 11, 22, 0.2);
    }

    &:after {
      content: '';
      width: 0;
      height: 10px;
      background: #fff;
      position: absolute;
      left: 0;
      top: 40%;
      -webkit-box-shadow: 0 10px 30px rgba(2, 11, 22, 0.2);
      box-shadow: 0 10px 30px rgba(2, 11, 22, 0.2);
      -webkit-transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
      -o-transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
      transition: 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:hover {
      opacity: 1;

      &:after {
        width: 100%;
      }
    }
  }
`;

// Curtain CSS Element
const Curtain = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #020b16;
  z-index: 99999;
`;

// Curtain Animation Variants
const curtainVariants = {
  hidden: {
    x: 0,
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: '100%', transition: { delay: 0, duration: 1 } },
};

// TopNavigationBar React Component
const TopNavigationBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Root>
      <Logo key={'logo'}>
        <Link to={'/'}>Caiden Sanders</Link>
      </Logo>
      <Wrap key={'wrap'}>
        <Icons>
          <Icon
            href={'https://github.com/caidenvsanders'}
            rel={'noopener'}
            target={'_blank'}
          >
            GitHub
          </Icon>
        </Icons>
        <MenuIcon
          className={isOpen === true ? 'menuOpen' : ''}
          onClick={() => setOpen(!isOpen)}
        />
      </Wrap>
      <MenuNav className={isOpen === true ? 'menuOpen' : ''} key={'menunav'}>
        <MenuNavWrapper>
          <MenuNavItemWrapper>
            <MenuNavItem>
              <Link to={'/'}>HOME</Link>
            </MenuNavItem>
          </MenuNavItemWrapper>
          <MenuNavItemWrapper>
            <MenuNavItem>
              <Link to={'/about'}>ABOUT ME</Link>
            </MenuNavItem>
          </MenuNavItemWrapper>
          <MenuNavItemWrapper>
            <MenuNavItem>
              <Link to={'/portfolio'}>PORTFOLIO</Link>
            </MenuNavItem>
          </MenuNavItemWrapper>
          <MenuNavItemWrapper>
            <MenuNavItem>
              <Link to={'/contact'}>CONTACT</Link>
            </MenuNavItem>
          </MenuNavItemWrapper>
        </MenuNavWrapper>
      </MenuNav>
      <Curtain
        initial={'hidden'}
        animate={'visible'}
        variants={curtainVariants}
        key={'curtain'}
      />
    </Root>
  );
};

// Default Export TopNavigationBar React Component
export default TopNavigationBar;
