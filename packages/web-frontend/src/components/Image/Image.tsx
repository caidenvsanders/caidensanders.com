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
interface ImageProps {
  source: string;
  number: JSX.Element;
  controls: AnimationControls;
  link: string;
}

interface ImageCSSProps {
  source: string;
}

// ImageCSS CSS Element
const ImageWrapper = styled(motion.custom(Link))<ImageCSSProps>`
  background: url('${(props) => props.source}') no-repeat center;
  background-size: cover;

  display: block;
  position: relative;
  width: 53.125%;
  height: 74.81%;
  margin: 0 8% 0 auto;
  box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 800px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 420px) {
    width: 80%;
    height: 55.633%;
    margin: 0 10%;
    top: 9.859%;
  }
`;

// PageNumberWrapper CSS Element
const PageNumberWrapper = styled.div`
  position: absolute;
  overflow-y: hidden;
  right: -7.549%;
  bottom: 12.3762%;
  font-size: 9.375rem;
  color: #fff;

  z-index: 200;

  @media screen and (max-width: 800px) {
    font-size: 4.6875rem;
    right: -5%;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

// PageNumber CSS Element
const PageNumber = styled.p`
  line-height: 1.1;
  text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);

  @media screen and (max-width: 420px) {
    text-shadow: 0 3px 10px rgba(2, 11, 22, 0.5);
  }
`;

const imageVariants: Variants = {
  hidden: {
    scale: 0,
    transition: { delay: 0.5, duration: 0 },
  },
  visible: { scale: 1, transition: { delay: 0.3, duration: 0.5 } },
};

// Image React Component
const Image = (props: ImageProps) => {
  return (
    <ImageWrapper
      source={
        props.source === ''
          ? 'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609976998/portfolio-background_skabjh.webp'
          : props.source
      }
      animate={props.controls}
      variants={imageVariants}
      to={props.link}
    >
      <PageNumberWrapper>
        <PageNumber>{props.number}</PageNumber>
      </PageNumberWrapper>
    </ImageWrapper>
  );
};

// Default Export Image React Component
export default Image;
