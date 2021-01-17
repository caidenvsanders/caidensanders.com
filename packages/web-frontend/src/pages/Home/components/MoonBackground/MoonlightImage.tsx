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

// MoonlightImage CSS Element
const MoonlightImageCSS = styled(motion.div)`
  width: 100%;
  height: 100%;

  background: url('https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/moonlight_fg20ka.svg')
    no-repeat;
  background-size: 100%;
`;

const MoonlightImage = () => {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <MoonlightImageCSS
      animate={{ x: mouseX / 25, y: mouseY / 25 }}
      transition={{ type: 'spring', stiffness: 100 }}
    />
  );
};

export default MoonlightImage;
