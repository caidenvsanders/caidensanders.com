/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import { useAnimation } from 'framer-motion';

// Hook Imports
import { InView } from 'react-intersection-observer';

import useWindowHeight from 'hooks/useWindowHeight';

// CSS Component Imports
import Slide from 'css/Slide';

// React Component Imports
import Title from 'components/Title';
import Image from 'components/Image';

// HomeContact React Component
const HomeContact = () => {
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
              headingText={<>Get In Touch</>}
              descriptionText={
                <>
                  caidensanders@gmail.com <br /> GitHub
                </>
              }
              buttonText={<>Or message me on here!</>}
              buttonSource={'/contact'}
            />
            <Image
              source={
                'https://res.cloudinary.com/ddbkztvvw/image/upload/v1610402354/coffee-image_v8eff4.webp'
              }
              number={<>03</>}
              controls={controls}
              link={'/contact'}
            ></Image>
          </Slide.Page>
        </Slide.PageWrapper>
      </InView>
    </Slide.Root>
  );
};

// Default Export HomeContact React Component
export default HomeContact;
