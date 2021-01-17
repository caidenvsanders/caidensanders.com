/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import { m as motion } from 'framer-motion';

// Type Declarations
interface CloudProps {
  front: boolean;
  mouseX: number;
  mouseY: number;
  controls: any;
  variants: any;
  cssCloud: any;
  imageLink: string;
  imageAlt: string;
}

// Cloud React Component
const Cloud = (props: CloudProps) => {
  return (
    <motion.div
      className={props.front ? 'front' : 'back'}
      animate={props.controls}
      initial={'visible'}
      variants={props.variants}
    >
      <props.cssCloud
        animate={{
          x: props.mouseX / 35,
          y: props.mouseY / 35,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img src={props.imageLink} alt={props.imageAlt} />
      </props.cssCloud>
    </motion.div>
  );
};

// Default Export Cloud React Component
export default Cloud;
