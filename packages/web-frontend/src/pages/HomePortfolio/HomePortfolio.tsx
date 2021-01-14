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

// React Component Imports
import Title from 'components/Title';
import Image from 'components/Image';

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
    <Root height={height}>
      <InView
        as="div"
        onChange={(inView, entry) => inViewCallback(inView)}
        initialInView={false}
        threshold={1}
        style={{ width: '100%', height: '100%' }}
      >
        <PageWrapper>
          <Page>
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
          </Page>
        </PageWrapper>
      </InView>
    </Root>
  );
};

// Default Export HomePortfolio React Component
export default HomePortfolio;
