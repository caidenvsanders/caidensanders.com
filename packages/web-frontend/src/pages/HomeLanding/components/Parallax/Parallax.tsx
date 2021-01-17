/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion } from 'framer-motion';

// Hook Imports
import useMousePosition from 'hooks/useMousePosition';

// CSS Animation Variation Imports
import {
  moonTextVariants,
  moonVariants,
  firstCloudFrontVariants,
  secondCloudBackVariants,
  secondCloudFrontVariants,
  thirdCloudFrontVariants,
  firstCloudBackVariants,
} from 'pages/HomeLanding/animation';

// React Component Imports
import MoonText from 'pages/HomeLanding/components/MoonText';
import Moon from 'pages/HomeLanding/components/Moon';
import Cloud from 'pages/HomeLanding/components/Cloud';

// Type Declarations
interface ParallaxProps {
  controls: any;
}

// MoonWrapper CSS Element
const MoonWrapper = styled.div`
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

// Parallax React Component
const Parallax = (props: ParallaxProps) => {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <MoonWrapper>
      <MoonImage>
        <MoonText
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={moonTextVariants}
        ></MoonText>
        <Cloud
          front={true}
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={firstCloudFrontVariants}
          cssCloud={FirstCloudFront}
          imageLink={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/cloud01_mrcljs.svg'
          }
          imageAlt={'First Cloud'}
        />
        <Cloud
          front={false}
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={secondCloudBackVariants}
          cssCloud={SecondCloudBack}
          imageLink={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975093/cloud02_o4s2fr.svg'
          }
          imageAlt={'Second Cloud'}
        />
        <Cloud
          front={true}
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={secondCloudFrontVariants}
          cssCloud={SecondCloudFront}
          imageLink={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975093/cloud03_grx3aj.svg'
          }
          imageAlt={'Third Cloud'}
        />
        <Moon
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={moonVariants}
          imageLink={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/moon_qmr6pa.svg'
          }
          imageAlt={'Moon SVG'}
        />
        <Cloud
          front={true}
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={thirdCloudFrontVariants}
          cssCloud={ThirdCloudFront}
          imageLink={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/cloud04_gmup62.svg'
          }
          imageAlt={'Fourth Cloud'}
        />
        <Cloud
          front={false}
          mouseX={mouseX}
          mouseY={mouseY}
          controls={props.controls}
          variants={firstCloudBackVariants}
          cssCloud={FirstCloudBack}
          imageLink={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/cloud05_jjercd.svg'
          }
          imageAlt={'Fifth Cloud'}
        />
      </MoonImage>
    </MoonWrapper>
  );
};

// Default Export Parallax React Component
export default Parallax;
