/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion } from 'framer-motion';

// CSS Animation Variation Imports
import {
  titleVariants,
  spacerVariants,
  descriptionVariants,
} from 'pages/HomeLanding/animation';

// Type Declarations
interface TitleProps {
  controls: any;
}

// TitleWrapper CSS Element
const TitleWrapper = styled.div`
  color: #fff;
  position: absolute;
  overflow: hidden;
  top: 50%;

  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);

  z-index: 200;
  margin-left: 11%;

  @media screen and (max-width: 800px) {
    margin-left: 40px;
  }

  @media screen and (max-width: 420px) {
    margin: 0 13%;
    width: 87.5%;
    top: auto;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    bottom: 5rem;
  }
`;

// Title CSS Element
const TitleCSS = styled(motion.h1)`
  font-size: 7.5rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);

  @media screen and (max-width: 800px) {
    font-size: 4.75rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.375rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 3px 10px rgba(2, 11, 22, 0.5);
  }
`;

// Spacer CSS Element
const Spacer = styled(motion.div)`
  display: inline-block;
  margin-bottom: 2rem;

  span {
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background: #ff4d5a;

    &:first-child {
      margin-bottom: 0.875rem;

      @media screen and (max-width: 420px) {
        margin-bottom: 0.7rem;
      }
    }

    &:last-child {
      margin-left: 54px;

      @media screen and (max-width: 800px) {
        margin-left: 43px;
      }

      @media screen and (max-width: 420px) {
        margin-left: 27px;
      }
    }

    @media screen and (max-width: 420px) {
      width: 44px;
      height: 2px;
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 0.5rem;
  }
`;

// Description CSS Element
const Description = styled(motion.p)`
  color: #fff;
  font-size: 1.75rem;
  line-height: 1.5;
  letter-spacing: 0.1em;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

// Title React Component
const Title = (props: TitleProps) => {
  return (
    <TitleWrapper>
      <TitleCSS
        animate={props.controls}
        initial={'visible'}
        variants={titleVariants}
      >
        CAIDEN <br /> SANDERS
      </TitleCSS>
      <Spacer
        animate={props.controls}
        initial={'visible'}
        variants={spacerVariants}
      >
        <span></span>
        <span></span>
      </Spacer>
      <Description
        animate={props.controls}
        initial={'visible'}
        variants={descriptionVariants}
      >
        web developer / <br /> web designer.
      </Description>
    </TitleWrapper>
  );
};

// Default Export Title React Component
export default Title;
