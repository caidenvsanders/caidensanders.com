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

// StarBackground CSS Element
const StarWrapper = styled.div`
  width: 1300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 29.427%;
  z-index: -100;

  @media screen and (max-width: 800px) {
    width: 100vw;
    left: 23%;
  }

  @media screen and (max-width: 420px) {
    left: 0;
  }
`;

// StarWrapper CSS Element
const StarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// StarImageContainer CSS Element
const StarImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 420px) {
    display: block;
  }
`;

// StarImage CSS Element
const StarImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  width: 100%;

  @media screen and (max-width: 420px) {
    -webkit-transform: translate3d(0%, 39%, 0) scale(1.5);
    transform: translate3d(0%, 39%, 0) scale(1.5);
  }
`;

const StarBackground = () => {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <StarWrapper>
      <StarContainer>
        <StarImageContainer>
          <StarImage
            src={
              'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/stars_vwlrkf.svg'
            }
            alt={'Star Background'}
            animate={{ x: mouseX / 35, y: mouseY / 35 }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </StarImageContainer>
      </StarContainer>
    </StarWrapper>
  );
};

export default StarBackground;
