/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import { css, createGlobalStyle } from 'styled-components';

const OverflowOverrideCSS = css`
  html {
    overflow: visible !important;
  }
`;

export default createGlobalStyle`${OverflowOverrideCSS}`;
