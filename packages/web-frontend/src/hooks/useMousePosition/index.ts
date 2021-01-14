/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LCIENSE file in the root directory of this source tree.
 */

// React Imports
import { update } from 'lodash';
import { useState, useEffect } from 'react';

// Type Declarations
type eventMouseCoordinates = {
  clientX: number;
  clientY: number;
};

const throttled = (delay: number, fn: Function) => {
  let lastCall = 0;
  return function (...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

/**
 * useMousePosition Hook
 *
 * usage:
 *      const { mouseX, mouseY } = useMousePosition();
 */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: null as any,
    mouseY: null as any,
  });

  const updateMousePosition = (e: eventMouseCoordinates) => {
    setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
  };

  const updateMousePositionThrottled = throttled(25, updateMousePosition);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePositionThrottled);

    return () =>
      window.removeEventListener('mousemove', updateMousePositionThrottled);
  }, []);

  return mousePosition;
};

export default useMousePosition;
