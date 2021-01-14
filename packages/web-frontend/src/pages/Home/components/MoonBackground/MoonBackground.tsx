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
import { useDebouncedCallback } from 'use-debounce';

import useMousePosition from 'hooks/useMousePosition';

// MoonBackground CSS Element
const MoonlightWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;

  @media screen and (max-width: 420px) {
    height: 100%;
    bottom: 0;
    margin: auto;
    max-height: 667px;
  }
`;

// Moonlight CSS Element
const Moonlight = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 29.427%;
  margin: auto;
  height: 1385px;
  width: 1385px;
  z-index: -100;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vw;
    left: 23%;
  }

  @media screen and (max-width: 420px) {
    width: 165vw;
    height: 165vw;
    left: 50%;
    top: -10rem;
    bottom: auto;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
`;

// MoonlightWrapper CSS Element
const MoonlightContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// MoonlightImage CSS Element
const MoonlightImage = styled(motion.div)`
  width: 100%;
  height: 100%;

  background: url('https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/moonlight_fg20ka.svg')
    no-repeat;
  background-size: 100%;
`;

const MoonBackground = () => {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <MoonlightWrapper>
      <Moonlight>
        <MoonlightContainer>
          <MoonlightImage
            animate={{ x: mouseX / 25, y: mouseY / 25 }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </MoonlightContainer>
      </Moonlight>
    </MoonlightWrapper>
  );
};

export default MoonBackground;
