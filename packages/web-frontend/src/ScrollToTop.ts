/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// ScrollToTop React Component
const ScrollToTop = ({ history }: { history: any }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

// Default Export ScrollToTop React Component
export default withRouter(ScrollToTop);
