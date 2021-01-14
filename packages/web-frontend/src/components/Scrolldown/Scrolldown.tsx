/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion } from 'framer-motion';

// Type Declarations
type ScrolldownProps = {
  active: boolean;
};

// Root CSS Element
const Root = styled(motion.div)`
  position: fixed;
  font-size: 0.875rem;
  bottom: 80px;
  left: 40px;
  line-height: 1;
  letter-spacing: 0.3em;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  color: #fff;
  z-index: 100;

  &:after {
    content: '';
    width: 2px;
    height: 64px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -80px;
  }

  @media screen and (max-width: 420px) {
    left: auto;
    right: 6.25%;
    font-size: 0.625rem;
    bottom: 40px;

    &:after {
      height: 32px;
      bottom: -40px;
    }
  }
`;

// Scrolldown React Component
const Scrolldown = ({ active }: ScrolldownProps) => {
  return (
    <Root animate={{ y: active ? '0' : '180%' }} transition={{ duration: 0.7 }}>
      SCROLLDOWN
    </Root>
  );
};

// Default Export Scrolldown React Component
export default Scrolldown;
