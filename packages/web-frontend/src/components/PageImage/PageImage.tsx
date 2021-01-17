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

// React Component Imports
import { Link as ScrollLink } from 'react-scroll';

// Type Declarations
interface ImageCSSProps {
  source: string;
}

interface PageImageProps {
  source: string;
  title: string;
  description: string;
  buttonText: string;
}

// PageTop CSS Element
const PageTop = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: #fff;
  background: #020b16;

  @media screen and (max-width: 420px) {
    display: block;
  }
`;

// PageTopInner CSS Element
const PageTopInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 420px) {
    display: block;
    max-height: 761px;
    position: relative;
  }
`;

// BackArrow CSS Element
const BackArrow = styled(motion.a)`
  position: fixed;
  top: 120px;
  left: 40px;
  display: block;
  width: 64px;
  transition: 0.5s;
  overflow: hidden;
  color: #fff;
  z-index: 300;

  @media screen and (max-width: 420px) {
    width: 32px;
    top: 60px;
    left: 6.25%;
  }
`;

// Scrolldown CSS Element
const Scrolldown = styled.p`
  position: fixed;
  font-size: 0.875rem;
  bottom: 80px;
  left: 40px;
  line-height: 1;
  letter-spacing: 0.3em;
  writing-mode: vertical-rl;
  color: #fff;
  z-index: 100;

  @media screen and (max-width: 420px) {
    left: auto;
    right: 6.25%;
    font-size: 0.624rem;
    bottom: 40px;
  }

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

    @media screen and (max-width: 420px) {
      height: 32px;
      bottom: -40px;
    }
  }
`;

// Title CSS Element
const Title = styled.div`
  color: #fff;
  position: absolute;
  overflow: hidden;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  z-index: 20;
  margin-left: 11%;

  @media screen and (max-width: 800px) {
    margin-left: 40px;
  }

  @media screen and (max-width: 420px) {
    width: 87.5%;
    margin: 0 6.25%;
    top: auto;
    transform: translate3d(0, 0, 0);
    bottom: 8rem;
  }
`;

// TitleText CSS Element
const TitleText = styled.h2`
  font-size: 7.5rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
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
const Spacer = styled.div`
  display: inline-block;
  margin-bottom: 2rem;

  @media screen and (max-width: 420px) {
    margin-bottom: 0.5rem;
  }

  &span {
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background: #ff4d5a;

    &:first-child {
      margin-bottom: 0.875rem;
    }

    &:last-child {
      margin-left: 54px;
    }

    @media screen and (max-width: 800px) {
      width: 70px;

      &:last-child {
        margin-left: 43px;
      }
    }

    @media screen and (max-width: 420px) {
      width: 44px;
      height: 2px;

      &:first-child {
        margin-bottom: 0.4375rem;
      }

      &:last-child {
        margin-left: 27px;
      }
    }
  }
`;

// Description CSS Element
const Description = styled.p`
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

// ButtonWrap CSS Element
const ButtonWrap = styled.div`
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
const Button = styled(ScrollLink)`
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
    font-size: 0.75rem;
  }
`;

// Image CSS Element
const Image = styled.div<ImageCSSProps>`
  background: url('${(props) => props.source}') no-repeat center;
  background-size: cover;

  display: block;
  position: relative;
  width: 60.677%;
  height: 100vh;
  margin: 0 0 0 auto;
  box-shadow: none;

  @media screen and (max-width: 420px) {
    width: 100%;
    height: 65.492%;
    top: auto;
  }
`;

// BackArrow Animation Variants
const backArrowVariants = {
  nonhovering: {
    x: 0,
    transition: { delay: 0.2, duration: 0.3 },
  },
  hovering: { x: -10, transition: { delay: 0, duration: 0.3 } },
};

const PageImage = (props: PageImageProps) => {
  return (
    <PageTop>
      <PageTopInner>
        <BackArrow
          initial={'nonhovering'}
          whileHover={'hovering'}
          variants={backArrowVariants}
        >
          <Link to={'/'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="34"
              viewBox="0 0 67 34"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#FFF"
                strokeLinecap="round"
                transform="translate(2 1)"
              >
                <path strokeWidth="2" d="M0,15.5533333 L64,15.5533333"></path>
                <polyline
                  strokeWidth="2"
                  points="15.556 0 0 15.556 15.556 31.111"
                ></polyline>
              </g>
            </svg>
          </Link>
        </BackArrow>
        <Scrolldown>SCROLLDOWN</Scrolldown>
        <Title>
          <TitleText>{props.title}</TitleText>
          <Spacer>
            <span></span>
            <span></span>
          </Spacer>
          <Description>{props.description}</Description>
          <ButtonWrap>
            <Button
              to={'wrapper'}
              spy={false}
              smooth={true}
              duration={1000}
              offset={window.innerWidth > 420 ? -144 : -72}
              isDynamic={true}
            >
              {props.buttonText}
            </Button>
          </ButtonWrap>
        </Title>
        <Image source={props.source} />
      </PageTopInner>
    </PageTop>
  );
};

export default PageImage;
