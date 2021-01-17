/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { useAnimation } from 'framer-motion';

// Hook Imports
import { InView } from 'react-intersection-observer';

import useWindowHeight from 'hooks/useWindowHeight';

// CSS Component Imports
import Slide from 'css/Slide';

// React Component Imports
import Title from 'components/Title';
import Image from 'components/Image';

// HomePortfolio React Component
const HomePortfolio = () => {
  const height = useWindowHeight();

  const controls = useAnimation();

  const inViewCallback = (inView: boolean) => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  };

  return (
    <Slide.Root height={height}>
      <InView
        as="div"
        onChange={(inView, entry) => inViewCallback(inView)}
        initialInView={false}
        threshold={1}
        style={{ width: '100%', height: '100%' }}
      >
        <Slide.PageWrapper>
          <Slide.Page>
            <Title
              controls={controls}
              headingText={<>My Portfolio</>}
              descriptionText={<>Websites that I've developed.</>}
              buttonText={<>Show me more!</>}
              buttonSource={'/portfolio'}
            />
            <Image
              source={
                'https://res.cloudinary.com/ddbkztvvw/image/upload/v1610402359/reile-image_kdpeiq.webp'
              }
              number={<>02</>}
              controls={controls}
              link={'/portfolio'}
            />
          </Slide.Page>
        </Slide.PageWrapper>
      </InView>
    </Slide.Root>
  );
};

// Default Export HomePortfolio React Component
export default HomePortfolio;
