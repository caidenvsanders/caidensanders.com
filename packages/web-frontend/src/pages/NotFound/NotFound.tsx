/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { Link } from 'react-router-dom';

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// React Component Imports
import StarBackground from 'pages/Home/components/StarBackground';
import MoonBackground from 'pages/Home/components/MoonBackground';
import SkyBackground from 'pages/Home/components/SkyBackground';

// Root CSS Element
const Root = styled.div`
  width: 100%;
  height: 100%;
`;

// Container CSS Element
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Title CSS Element
const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 4rem;
`;

// Description CSS Element
const Description = styled.p`
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 3rem;
`;

// Button CSS ELement
const Button = styled.a`
  display: inline-block;
  font-size: 2.5rem;
  color: #fff;
  background: #ff4d5a;
  line-height: 1;
  font-weight: bold;
  padding: 30px 100px;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;

  @media screen and (max-width: 800px) {
    padding: 13px 24px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

// NotFound React Component
const NotFound = () => {
  return (
    <Root>
      <Container>
        <Title>404 - The page requested could not be found.</Title>
        <Description>
          Press this button, and we'll return you back to where you belong.
        </Description>
        <Link to={'/'}>
          <Button>Go Back</Button>
        </Link>
      </Container>

      <StarBackground />
      <MoonBackground />
      <SkyBackground />
    </Root>
  );
};

// Default Export NotFound React Component
export default NotFound;
