/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LCIENSE file in the root directory of this source tree.
 */

// React Imports
import { useState, useEffect } from 'react';

/**
 * useKeyPress Hook
 *
 * usage:
 *      const { keyPressed } = useKeyPress('ArrowDown', () => {}, () => {});
 */
const useKeyPress = (
  targetKey: string,
  onPressDown = () => {},
  onPressUp = () => {}
) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    // If pressed key is our target key then set to true
    const downHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(true);
        onPressDown();
      }
    };

    // If released key is our target key then set to false
    const upHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    };

    // Add event listeners
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
