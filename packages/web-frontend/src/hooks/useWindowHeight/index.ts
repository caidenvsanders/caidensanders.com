/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { useLayoutEffect, useState } from 'react';

/**
 * useWindowHeight Hook
 *
 * usage:
 *      const height = useWindowHeight();
 */
const useWindowHeight = () => {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return height;
};

export default useWindowHeight;
