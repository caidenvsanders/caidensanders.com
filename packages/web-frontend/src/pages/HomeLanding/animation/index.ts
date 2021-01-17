/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

export {
  titleVariants,
  spacerVariants,
  descriptionVariants,
  moonTextVariants,
  moonVariants,
  firstCloudFrontVariants,
  secondCloudBackVariants,
  secondCloudFrontVariants,
  thirdCloudFrontVariants,
  firstCloudBackVariants,
};
