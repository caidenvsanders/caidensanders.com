/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Component Imports
import TopNavigationBar from 'components/NavigationBar/Top';

import PageImage from 'components/PageImage';

import Footer from 'components/Footer';

const Portfolio = () => {
  return (
    <>
      <TopNavigationBar />
      <PageImage
        title={'Portfolio'}
        description={`Websites that I've developed.`}
        buttonText={'See them!'}
        source={
          'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609976998/portfolio-background_skabjh.webp'
        }
      ></PageImage>
      <Footer />
    </>
  );
};

export default Portfolio;
