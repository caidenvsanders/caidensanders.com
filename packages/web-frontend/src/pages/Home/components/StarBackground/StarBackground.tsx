/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// React Components Imports
import StarImage from 'pages/Home/components/StarBackground/StarImage';

// StarBackground CSS Element
const StarWrapper = styled.div`
  width: 1300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 29.427%;
  z-index: -100;

  @media screen and (max-width: 800px) {
    width: 100vw;
    left: 23%;
  }

  @media screen and (max-width: 420px) {
    left: 0;
  }
`;

// StarWrapper CSS Element
const StarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// StarImageContainer CSS Element
const StarImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 420px) {
    display: block;
  }
`;

const StarBackground = () => {
  return (
    <StarWrapper>
      <StarContainer>
        <StarImageContainer>
          <StarImage />
        </StarImageContainer>
      </StarContainer>
    </StarWrapper>
  );
};

export default StarBackground;
