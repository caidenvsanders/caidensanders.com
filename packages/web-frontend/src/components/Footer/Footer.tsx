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

// Type Declarations
interface IconCSSProps {
  source: string;
}

// FooterContainer CSS Element
const FooterContainer = styled.footer`
  width: 100%;
  padding: 9rem 0 0 0;
  text-align: center;
  background-image: linear-gradient(101deg, #072142, #8c2b7a 52%, #ff4d5a);
  position: relative;
  z-index: 100;

  @media screen and (max-width: 420px) {
    padding: 7.2rem 0;
  }
`;

// FooterText CSS Element
const FooterText = styled.a`
  display: block;
  font-size: 1.75rem;
  line-height: 1.3;
  color: #fff;
  letter-spacing: 0.2em;
  text-decoration: none;
  transition: 0.3s;

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

// FooterButton CSS Element
const FooterButton = styled.div`
  display: inline-block;
  font-size: 1.125rem;
  margin-top: 1.5rem;
  color: #072142;
  background: #fff;
  line-height: 1;
  font-weight: bold;
  padding: 18px 32px;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;

  @media screen and (max-width: 800px) {
    padding: 13px 24px;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

// FooterIcons CSS Element
const FooterIcons = styled.div`
  padding-top: 3rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

// Icon CSS Element
const Icon = styled.a<IconCSSProps>`
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  margin-right: 1rem;
  background: url('${(props) => props.source}') no-repeat center center / cover;
  color: #000;
`;

// Footer React Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText href={'mailto:me@caidensanders.com'}>
        me@caidensanders.com
      </FooterText>
      <FooterText href={'https://github.com/caidenvsanders'} target={'_blank'}>
        GitHub
      </FooterText>
      <Link to={'/contact'}>
        <FooterButton>Or send me a message on here!</FooterButton>
      </Link>
      <FooterIcons>
        <Icon
          source={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1610221928/GitHub-160_n24euk.png'
          }
          href={'https://github.com/caidenvsanders'}
          target={'_blank'}
        />
        <Icon
          source={
            'https://res.cloudinary.com/ddbkztvvw/image/upload/v1610222456/StackOverflow-160_oou6ms.webp'
          }
          href={'https://stackoverflow.com/users/13021396/caidensanders'}
          target={'_blank'}
        />
      </FooterIcons>
    </FooterContainer>
  );
};

// Default Export Footer React Component
export default Footer;
