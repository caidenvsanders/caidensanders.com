/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { Link } from 'react-router-dom';

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
import type { AnimationControls, Variants } from 'framer-motion';

// Type Declarations
interface TitleProps {
  controls: AnimationControls;
  headingText: JSX.Element;
  descriptionText: JSX.Element;
  buttonText: JSX.Element;
  buttonSource: string;
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
const Heading = styled(motion.h1)`
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

// ButtonWrapper CSS Element
const ButtonWrapper = styled(motion.div)`
  margin-top: 2rem;

  @media screen and (max-width: 800px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 420px) {
    text-align: center;
    margin-top: 0.5rem;
  }
`;

// Button CSS Element
const Button = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  color: #fff;
  background: #ff4d5a;
  line-height: 1;
  font-weight: bold;
  padding: 18px 32px;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 13px 24px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

// Title Animation Variants
const headingVariants: Variants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.5 } },
};

// Spacer Animation Variants
const spacerVariants: Variants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0.1, duration: 0.5 } },
};

// Description Animation Variants
const descriptionVariants: Variants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0.2, duration: 0.5 } },
};

// Button Animation Variants
const buttonVariants: Variants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0.3, duration: 0.5 } },
};

// Title React Component
const Title = (props: TitleProps) => {
  return (
    <TitleWrapper>
      <Heading
        animate={props.controls}
        initial={'hidden'}
        variants={headingVariants}
      >
        {props.headingText}
      </Heading>
      <Spacer
        animate={props.controls}
        initial={'hidden'}
        variants={spacerVariants}
      >
        <span></span>
        <span></span>
      </Spacer>
      <Description
        animate={props.controls}
        initial={'hidden'}
        variants={descriptionVariants}
      >
        {props.descriptionText}
      </Description>
      <Link to={props.buttonSource}>
        <ButtonWrapper
          animate={props.controls}
          initial={'hidden'}
          variants={buttonVariants}
        >
          <Button>{props.buttonText}</Button>
        </ButtonWrapper>
      </Link>
    </TitleWrapper>
  );
};

// Default Export Title React Component
export default Title;
