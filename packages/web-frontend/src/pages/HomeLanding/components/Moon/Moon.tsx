/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import { m as motion } from 'framer-motion';

// Type Declarations
interface MoonProps {
  mouseX: number;
  mouseY: number;
  controls: any;
  variants: any;
  imageLink: string;
  imageAlt: string;
}

// Moon React Component
const Moon = (props: MoonProps) => {
  return (
    <motion.div
      animate={props.controls}
      initial={'visible'}
      variants={props.variants}
    >
      <motion.div
        className={'back'}
        animate={{
          x: props.mouseX / 50,
          y: props.mouseY / 50,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img src={props.imageLink} alt={props.imageAlt}></img>
      </motion.div>
    </motion.div>
  );
};

// Default Export Moon React Component
export default Moon;
