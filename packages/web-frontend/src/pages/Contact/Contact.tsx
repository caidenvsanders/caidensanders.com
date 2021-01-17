/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// React Component Imports
import TopNavigationBar from 'components/NavigationBar/Top';

import PageImage from 'components/PageImage';
import ContactBlock from 'pages/Contact/components/ContactBlock';

import Footer from 'components/Footer';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 70vh;

  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <>
      <TopNavigationBar />
      <PageImage
        title={'Contact Me'}
        description={'Shoot me a message.'}
        buttonText={'Message me!'}
        source={
          'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609976998/portfolio-background_skabjh.webp'
        }
      ></PageImage>
      <Wrapper id="wrapper">
        <ContactBlock />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
