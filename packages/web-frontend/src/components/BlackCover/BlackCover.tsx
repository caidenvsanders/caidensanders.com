/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// BlackCover CSS Element
const BlackCoverCSS = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vh;
  background: #000;
`;

const BlackCover = () => {
  return <BlackCoverCSS />;
};

export default BlackCover;
