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

import Skillset from 'pages/About/components/Skillset';

import Footer from 'components/Footer';

// Root CSS Element
const Root = styled.div`
  overflow: visible;
`;

// Wrapper CSS Element
const Wrapper = styled.div`
  margin-bottom: 12.5rem;
  position: relative;
  z-index: 200;

  @media screen and (max-width: 420px) {
    margin-bottom: 7.5rem;
  }
`;

// WhoContainer CSS Element
const WhoContainer = styled.div`
  margin-top: 12.5rem;

  @media screen and (max-width: 420px) {
    margin-top: 7.5rem;
  }
`;

// WhoTextTop CSS Element
const WhoTextTop = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-left: 138px;
  margin-top: 9rem;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }

  @media screen and (max-width: 420px) {
    margin-top: 4.5rem;
  }
`;

// WhoHeadingNumber CSS Element
const WhoHeadingNumber = styled.p`
  font-size: 2.5rem;
  color: #ff4d5a;
  position: absolute;
  left: 0;
  padding-left: 3.875rem;
  padding-right: 2rem;
  line-height: 1.1;

  @media screen and (max-width: 420px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }

  &:after {
    content: '';
    width: 3rem;
    height: 2px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    @media screen and (max-width: 420px) {
      width: 1.5rem;
    }
  }
`;

// WhoTextWrap CSS Element
const WhoTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 10%;
  box-sizing: content-box;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 1250px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-left: 10%;
  }
`;

const WhoTextHeading = styled.h2`
  font-size: 2.5rem;
  color: #072142;
  letter-spacing: 0.2em;
  margin-right: 2rem;
  padding-top: 0.75rem;

  @media screen and (max-width: 800px) {
    padding-top: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
    padding-top: 0.125rem;
  }
`;

const WhoTextContainer = styled.div`
  width: 48.333%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 4.5rem;
  }

  @media screen and (max-width: 420px) {
    margin-top: 2.5rem;
  }
`;

const WhoTextContainerName = styled.div`
  color: #072142;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 420px) {
    margin-bottom: 1rem;
  }
`;

const WhoTextContainerNameText = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.2em;
  line-height: 1.3;

  @media screen and (max-width: 420px) {
    font-size: 0.625rem;
  }
`;

const WhoTextContainerText = styled.p`
  margin-bottom: 4rem;
  font-size: 1.2rem;

  @media screen and (max-width: 420px) {
    margin-bottom: 2rem;
  }
`;

const WhoTextContainerImage = styled.div`
  box-shadow: 0px 63px 154px -20px rgba(7, 33, 66, 0.5);
  width: 50%;
  align-self: center;

  @media screen and (max-width: 420px) {
    box-shadow: 0px 33px 84px -20px rgba(7, 33, 66, 0.5);
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 100%;
  }
`;

const ProfessionalContainer = styled.div`
  margin-top: 12.5rem;

  @media screen and (max-width: 420px) {
    margin-top: 7.5rem;
  }
`;

const ProfessionalTextTop = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-left: 138px;
  margin-top: 9rem;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }

  @media screen and (max-width: 420px) {
    margin-top: 4.5rem;
  }
`;

const ProfessionalHeadingNumber = styled.p`
  position: absolute;
  left: 0;
  font-size: 2.5rem;
  color: #ff4d5a;
  padding-left: 3.875rem;
  padding-right: 2rem;
  line-height: 1.1;

  @media screen and (max-width: 420px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }

  &:after {
    content: '';
    width: 3rem;
    height: 2px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    @media screen and (max-width: 420px) {
      width: 1.5rem;
    }
  }
`;

const ProfessionalTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 1250px) {
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding-left: 10%;
  }
`;

const ProfessionalTextHeading = styled.h2`
  font-size: 2.5rem;
  color: #072142;
  letter-spacing: 0.2em;
  margin-right: 2rem;
  padding-top: 0.75rem;

  @media screen and (max-width: 800px) {
    padding-top: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
    padding-top: 0.125rem;
  }
`;

const ProfessionalTextContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 14.4rem;

  @media screen and (max-width: 1250px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 800px) {
    margin-top: 4.5rem;
  }

  @media screen and (max-width: 420px) {
    margin-top: 2.5rem;
  }
`;

const ProfessionalTextList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  jusify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const ProfessionalTextItem = styled.li`
  width: 29.75%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 4rem;

    &:first-child {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 420px) {
    margin-top: 2rem;
  }
`;

const ProfessionalTextImage = styled.div`
  width: 42.016%;
  height: 50%;
  margin: 0rem auto 0rem;

  @media screen and (max-width: 800px) {
    width: 24.429%;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 100%;
  }
`;

const ProfessionalTextSubtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #072142;
  text-align: center;
  letter-spacing: 0.2em;
  line-height: 1.2;
  word-break: break-all;

  @media screen and (max-width: 420px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const ProfessionalTextText = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
`;

const SkillsetContainer = styled.div`
  margin-top: 12.5rem;

  @media screen and (max-width: 420px) {
    margin-top: 7.5rem;
  }
`;

const SkillsetContainerTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 138px;
  margin-top: 9rem;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
    padding-left: 0;
  }

  @media screen and (max-width: 420px) {
    margin-top: 7.2rem;
  }
`;

const SkillsetHeadingNumber = styled.p`
  position: absolute;
  left: 0;
  font-size: 2.5rem;
  color: #ff4d5a;
  position: relative;
  padding-left: 3.875rem;
  padding-right: 2rem;
  line-height: 1.1;

  @media screen and (max-width: 420px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }

  &:after {
    content: '';
    width: 3rem;
    height: 2px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    @media screen and (max-width: 420px) {
      width: 1.5rem;
    }
  }
`;

const SkillsetTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
  box-sizing: content-box;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 1250px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding-left: 10%;
  }
`;

const SkillsetTextHeading = styled.h2`
  letter-spacing: 0.2em;
  margin-right: 2rem;
  padding-top: 0.75rem;

  @media screen and (max-width: 800px) {
    padding-top: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
    padding-top: 0.125rem;
  }
`;

const SkillsetContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 7.5rem;

  @media screen and (max-width: 1250px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 800px) {
    margin-top: 4.5rem;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (max-width: 420px) {
    margin-top: 2.5rem;
  }
`;

const SkillsetContentList = styled.ul`
  width: 47%;

  li:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

// About React Component
const About = () => {
  return (
    <Root>
      <TopNavigationBar />
      <PageImage
        title={'About Me'}
        description={`Hello! I'm Caiden Sanders.`}
        buttonText={'Learn more!'}
        source={
          'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609976998/portfolio-background_skabjh.webp'
        }
      ></PageImage>
      <Wrapper id={'wrapper'}>
        <WhoContainer>
          <WhoTextTop>
            <WhoHeadingNumber>01</WhoHeadingNumber>
            <WhoTextWrap>
              <WhoTextHeading>WHO AM I</WhoTextHeading>
              <WhoTextContainer>
                <WhoTextContainerName>
                  <WhoTextContainerNameText>
                    Caiden Sanders
                  </WhoTextContainerNameText>
                </WhoTextContainerName>
                <WhoTextContainerText>
                  Hello! I'm Caiden Sanders, a 15 year old website developer and
                  designer from Bellingham, Washington. I love making websites
                  with clean and simple designs.
                </WhoTextContainerText>
                <WhoTextContainerImage>
                  <img
                    src={
                      'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609977001/myself_fnjur3.webp'
                    }
                    alt={'Myself - Caiden Sanders'}
                  ></img>
                </WhoTextContainerImage>
              </WhoTextContainer>
            </WhoTextWrap>
          </WhoTextTop>
        </WhoContainer>
        <ProfessionalContainer>
          <ProfessionalTextTop>
            <ProfessionalHeadingNumber>02</ProfessionalHeadingNumber>
            <ProfessionalTextWrap>
              <ProfessionalTextHeading>
                WHO AM I PROFESSIONALLY
              </ProfessionalTextHeading>
              <ProfessionalTextContainer>
                <ProfessionalTextList>
                  <ProfessionalTextItem>
                    <ProfessionalTextImage>
                      <img
                        src={
                          'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975637/design-skills_r7kdlo.svg'
                        }
                        alt={'Design SVG Icon'}
                      ></img>
                    </ProfessionalTextImage>
                    <ProfessionalTextSubtitle>DESIGN</ProfessionalTextSubtitle>
                    <ProfessionalTextText>
                      Design and user experience are utilized to the maximum.
                      Everyone knows that a website is only as good as it's user
                      experience. I take that sentence to heart. An absolute
                      necessity for an amazing website is design and user
                      experience.
                    </ProfessionalTextText>
                  </ProfessionalTextItem>
                  <ProfessionalTextItem>
                    <ProfessionalTextImage>
                      <img
                        src={
                          'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975636/tech_u450cs.svg'
                        }
                        alt={'Tech SVG Icon'}
                      ></img>
                    </ProfessionalTextImage>
                    <ProfessionalTextSubtitle>
                      TECHNOLOGY
                    </ProfessionalTextSubtitle>
                    <ProfessionalTextText>
                      The technology that the website is developed with is also
                      of utmost importance. Old, rusty, broken down technology
                      is of no good to anyone who wants a website in the modern
                      world. Fast-action JavaScript frameworks and
                      server-side-rendering are becoming more and more vital to
                      websites.
                    </ProfessionalTextText>
                  </ProfessionalTextItem>
                  <ProfessionalTextItem>
                    <ProfessionalTextImage>
                      <img
                        src={
                          'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975637/book-open_ktx5nk.svg'
                        }
                        alt={'Book SVG Icon'}
                      ></img>
                    </ProfessionalTextImage>
                    <ProfessionalTextSubtitle>
                      EFFICIENCY
                    </ProfessionalTextSubtitle>
                    <ProfessionalTextText>
                      Deadlines and communication are important when the
                      development of a website is occuring. Lots of people may
                      ease out on deadlines or communication, but I'm not like
                      any of those people. I can guarauntee constant
                      communication and the meeting of a deadline with the
                      development of your website.
                    </ProfessionalTextText>
                  </ProfessionalTextItem>
                </ProfessionalTextList>
              </ProfessionalTextContainer>
            </ProfessionalTextWrap>
          </ProfessionalTextTop>
        </ProfessionalContainer>
        <SkillsetContainer>
          <SkillsetContainerTop>
            <SkillsetHeadingNumber>03</SkillsetHeadingNumber>
            <SkillsetTextWrap>
              <SkillsetTextHeading>SKILL SET</SkillsetTextHeading>
            </SkillsetTextWrap>
          </SkillsetContainerTop>
          <SkillsetContent>
            <SkillsetContentList>
              <Skillset
                imageUrl={
                  'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609974763/react-160_deseyq.png'
                }
                imageAlt={'React Icon'}
                skillsetName={'React'}
                skillsetTime={'3 YEARS'}
                skillsetPercentage={'100'}
              />
              <Skillset
                imageUrl={
                  'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609974764/express-160_iwswea.png'
                }
                imageAlt={'Express Icon'}
                skillsetName={'Express'}
                skillsetTime={'3 YEARS'}
                skillsetPercentage={'100'}
              />
              <Skillset
                imageUrl={
                  'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609974764/google-160_v0dq2i.jpg'
                }
                imageAlt={'Google Icon'}
                skillsetName={'Google'}
                skillsetTime={'3 YEARS'}
                skillsetPercentage={'100'}
              />
            </SkillsetContentList>
            <SkillsetContentList>
              <Skillset
                imageUrl={
                  'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609974764/aws-160_tgamlo.png'
                }
                imageAlt={'AWS Icon'}
                skillsetName={'AWS'}
                skillsetTime={'3 YEARS'}
                skillsetPercentage={'100'}
              />
              <Skillset
                imageUrl={
                  'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609974764/wordpress-160_lf0bo3.png'
                }
                imageAlt={'Wordpress Icon'}
                skillsetName={'Wordpress'}
                skillsetTime={'3 YEARS'}
                skillsetPercentage={'100'}
              />
              <Skillset
                imageUrl={
                  'https://res.cloudinary.com/ddbkztvvw/image/upload/v1609975402/squarespace-160_qcdp5r.png'
                }
                imageAlt={'SquareSpace Icon'}
                skillsetName={'SquareSpace'}
                skillsetTime={'3 YEARS'}
                skillsetPercentage={'100'}
              />
            </SkillsetContentList>
          </SkillsetContent>
        </SkillsetContainer>
      </Wrapper>
      <Footer />
    </Root>
  );
};

// Default Export About React Component
export default About;
