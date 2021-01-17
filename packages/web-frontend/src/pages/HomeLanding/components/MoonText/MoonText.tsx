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
interface MoonTextProps {
  mouseX: number;
  mouseY: number;
  controls: any;
  variants: any;
}

// MoonTextWrapper CSS Element
const MoonTextWrapper = styled(motion.div)`
  position: absolute;
  left: -15.5963%;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
`;

// MoonText CSS Element
const MoonTextCSS = styled.p`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-shadow: 0 10px 15px rgba(2, 11, 22, 0.2);
  color: #ff4d5a;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
    text-shadow: 0 4px 6px rgba(2, 11, 22, 0.2);
  }
`;

// MoonText React Component
const MoonText = (props: MoonTextProps) => {
  return (
    <motion.div
      className={'front'}
      animate={props.controls}
      initial={'visible'}
      variants={props.variants}
    >
      <MoonTextWrapper
        animate={{
          x: props.mouseX / 45,
          y: props.mouseY / 45,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <MoonTextCSS>PORTFOLIO</MoonTextCSS>
      </MoonTextWrapper>
    </motion.div>
  );
};

// Default Export MoonText React Component
export default MoonText;
