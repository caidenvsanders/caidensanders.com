/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion, useAnimation } from 'framer-motion';

// Hook Imports
import { InView } from 'react-intersection-observer';

import useWindowHeight from 'hooks/useWindowHeight';
import useMousePosition from 'hooks/useMousePosition';

// Root CSS Element
const Root = styled.div<{ height: number }>`
  height: ${(props) => props.height + 'px'};

  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

// PageWrapper CSS Element
const PageWrapper = styled.div`
  position: relative;

  display: block;
  vertical-align: middle;
  width: 100%;
  height: inherit;
`;

// Page CSS Element
const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  color: #fff;

  @media screen and (max-width: 420px) {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    max-height: 667px;
  }
`;

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
const Title = styled(motion.h1)`
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

// Moon CSS Element
const Moon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 29.427%;
  margin: auto;
  height: 1385px;
  width: 1385px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vw;
    left: 23%;
  }

  @media screen and (max-width: 420px) {
    width: 165vw;
    height: 165vw;
    left: 50%;
    top: -6.25rem;
    bottom: auto;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
`;

// MoonImage CSS Element
const MoonImage = styled.div`
  position: relative;
  width: 39.350180505%;
  height: 39.350180505%;

  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;

    &:first-child {
      position: relative;
    }

    &.front {
      z-index: 200;
    }

    &.back {
      z-index: -100;
    }

    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
      width: 100%;
    }
  }
`;

// MoonTextWrapper CSS Element
const MoonTextWrapper = styled(motion.div)`
  position: absolute;
  left: -15.5963%;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
`;

// MoonText CSS Element
const MoonText = styled.p`
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

// FirstCloudFront CSS Element
const FirstCloudFront = styled(motion.div)`
  top: 20.55045%;
  right: -49.357798%;
  width: 88.44%;

  position: absolute;
`;

// SecondCloudBack CSS Element
const SecondCloudBack = styled(motion.div)`
  top: -5.504587%;
  left: -38.715596%;
  width: 87.155%;

  position: absolute;
`;

// SecondCloudFront CSS Element
const SecondCloudFront = styled(motion.div)`
  bottom: -18.53211%;
  right: -28.6238532%;
  width: 87.155%;

  position: absolute;
`;

// ThirdCloudFront CSS Element
const ThirdCloudFront = styled(motion.div)`
  bottom: -5.137614678%;
  left: -49.357798%;
  width: 87.155%;

  position: absolute;
`;

// FirstCloudBack CSS Element
const FirstCloudBack = styled(motion.div)`
  top: -22.38532%;
  right: -7.706422%;
  width: 69.724%;

  position: absolute;
`;

// Title Animation Variants
const titleVariants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// Spacer Animation Variants
const spacerVariants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0.1, duration: 0.7 } },
};

// Description Animation Variants
const descriptionVariants = {
  hidden: {
    x: '-50vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0.2, duration: 0.7 } },
};

// MoonText Animation Variants
const moonTextVariants = {
  hidden: {
    x: '60vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// Moon Animation Variants
const moonVariants = {
  hidden: {
    x: '55vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// FirstCloudFront Animation Variants
const firstCloudFrontVariants = {
  hidden: {
    x: '40vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// SecondCloudBack Animation Variants
const secondCloudBackVariants = {
  hidden: {
    x: '60vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// SecondCloudFront Animation Variants
const secondCloudFrontVariants = {
  hidden: {
    x: '80vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// ThirdCloudFront Animation Variants
const thirdCloudFrontVariants = {
  hidden: {
    x: '65vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// FirstCloudBack Animation Variants
const firstCloudBackVariants = {
  hidden: {
    x: '70vw',
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { x: 0, transition: { delay: 0, duration: 0.7 } },
};

// HomeLanding React Component
const HomeLanding = () => {
  const height = useWindowHeight();
  const { mouseX, mouseY } = useMousePosition();

  const controls = useAnimation();

  const inViewCallback = (inView: boolean) => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  };

  return (
    <Root height={height}>
      <InView
        as="div"
        onChange={(inView, entry) => inViewCallback(inView)}
        initialInView={true}
        threshold={1}
        style={{ width: '100%', height: '100%' }}
      >
        <PageWrapper>
          <Page>
            <TitleWrapper>
              <Title
                animate={controls}
                initial={'visible'}
                variants={titleVariants}
              >
                CAIDEN <br /> SANDERS
              </Title>
              <Spacer
                animate={controls}
                initial={'visible'}
                variants={spacerVariants}
              >
                <span></span>
                <span></span>
              </Spacer>
              <Description
                animate={controls}
                initial={'visible'}
                variants={descriptionVariants}
              >
                web developer / <br /> web designer.
              </Description>
            </TitleWrapper>
            <Moon>
              <MoonImage>
                <motion.div
                  className={'front'}
                  animate={controls}
                  initial={'visible'}
                  variants={moonTextVariants}
                >
                  <MoonTextWrapper
                    animate={{
                      x: mouseX / 45,
                      y: mouseY / 45,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <MoonText>PORTFOLIO</MoonText>
                  </MoonTextWrapper>
                </motion.div>
                <motion.div
                  className={'front'}
                  animate={controls}
                  initial={'visible'}
                  variants={firstCloudFrontVariants}
                >
                  <FirstCloudFront
                    animate={{
                      x: mouseX / 40,
                      y: mouseY / 40,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <img
                      src={
                        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/cloud01_mrcljs.svg'
                      }
                      alt={'First Cloud'}
                    ></img>
                  </FirstCloudFront>
                </motion.div>
                <motion.div
                  className={'back'}
                  animate={controls}
                  initial={'visible'}
                  variants={secondCloudBackVariants}
                >
                  <SecondCloudBack
                    animate={{
                      x: mouseX / 35,
                      y: mouseY / 35,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <img
                      src={
                        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975093/cloud02_o4s2fr.svg'
                      }
                      alt={'Second Cloud'}
                    ></img>
                  </SecondCloudBack>
                </motion.div>
                <motion.div
                  className={'front'}
                  animate={controls}
                  initial={'visible'}
                  variants={secondCloudFrontVariants}
                >
                  <SecondCloudFront
                    animate={{
                      x: mouseX / 45,
                      y: mouseY / 45,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <img
                      src={
                        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975093/cloud03_grx3aj.svg'
                      }
                      alt={'Third Cloud'}
                    ></img>
                  </SecondCloudFront>
                </motion.div>
                <motion.div
                  animate={controls}
                  initial={'visible'}
                  variants={moonVariants}
                >
                  <motion.div
                    className={'back'}
                    animate={{
                      x: mouseX / 50,
                      y: mouseY / 50,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <img
                      src={
                        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/moon_qmr6pa.svg'
                      }
                      alt={'Moon SVG'}
                    ></img>
                  </motion.div>
                </motion.div>
                <motion.div
                  className={'front'}
                  animate={controls}
                  initial={'visible'}
                  variants={thirdCloudFrontVariants}
                >
                  <ThirdCloudFront
                    animate={{
                      x: mouseX / 40,
                      y: mouseY / 40,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <img
                      src={
                        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/cloud04_gmup62.svg'
                      }
                      alt={'Fourth Cloud'}
                    ></img>
                  </ThirdCloudFront>
                </motion.div>
                <motion.div
                  className={'back'}
                  animate={controls}
                  initial={'visible'}
                  variants={firstCloudBackVariants}
                >
                  <FirstCloudBack
                    animate={{
                      x: mouseX / 35,
                      y: mouseY / 35,
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <img
                      src={
                        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/cloud05_jjercd.svg'
                      }
                      alt={'Fifth Cloud'}
                    ></img>
                  </FirstCloudBack>
                </motion.div>
              </MoonImage>
            </Moon>
          </Page>
        </PageWrapper>
      </InView>
    </Root>
  );
};

// Default Export HomeLanding React Component
export default HomeLanding;
