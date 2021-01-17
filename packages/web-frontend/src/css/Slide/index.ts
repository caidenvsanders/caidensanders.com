/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// Root CSS Element
const Root = styled.div<{ height: number }>`
  height: ${(props) => props.height + 'px'};

  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

// PageWrapper CSS Element
const PageWrapper = styled.div`
  position: relative;

  display: block;
  vertical-align: middle;
  width: 100%;
  height: inherit;
`;

// Page CSS Element
const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  color: #fff;

  @media screen and (max-width: 420px) {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    max-height: 667px;
  }
`;

const Slide = { Root, PageWrapper, Page };
export default Slide;
