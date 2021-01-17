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

// StarImage CSS Element
const StarImageCSS = styled(motion.img)`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  width: 100%;

  @media screen and (max-width: 420px) {
    -webkit-transform: translate3d(0%, 39%, 0) scale(1.5);
    transform: translate3d(0%, 39%, 0) scale(1.5);
  }
`;

const StarImage = () => {
  const { mouseX, mouseY } = useMousePosition();

  return (
    <StarImageCSS
      src={
        'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975091/stars_vwlrkf.svg'
      }
      alt={'Star Background'}
      animate={{ x: mouseX / 35, y: mouseY / 35 }}
      transition={{ type: 'spring', stiffness: 100 }}
    />
  );
};

export default StarImage;
