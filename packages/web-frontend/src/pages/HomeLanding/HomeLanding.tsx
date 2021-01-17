/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';
import { m as motion, useAnimation } from 'framer-motion';

// Hook Imports
import { InView } from 'react-intersection-observer';

import useWindowHeight from 'hooks/useWindowHeight';

// CSS Component Imports
import Slide from 'css/Slide';

// React Component Imports
import Title from 'pages/HomeLanding/components/Title';
import Parallax from 'pages/HomeLanding/components/Parallax';

// HomeLanding React Component
const HomeLanding = () => {
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
        onChange={(inView) => inViewCallback(inView)}
        initialInView={true}
        threshold={1}
        style={{ width: '100%', height: '100%' }}
      >
        <Slide.PageWrapper>
          <Slide.Page>
            <Title controls={controls}></Title>
            <Parallax controls={controls} />
          </Slide.Page>
        </Slide.PageWrapper>
      </InView>
    </Slide.Root>
  );
};

// Default Export HomeLanding React Component
export default HomeLanding;
