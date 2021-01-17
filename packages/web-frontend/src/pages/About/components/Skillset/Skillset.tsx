/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled, { keyframes } from 'styled-components';

// Type Declarations
interface SkillsetProps {
  imageUrl: string;
  imageAlt: string;
  skillsetName: string;
  skillsetTime: string;
  skillsetPercentage: string;
}

// SkillsetContentItem CSS Element
const SkillsetContentItem = styled.li`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 420px) {
    margin-top: 2rem;
  }
`;

// SkillsetContentIcon CSS Element
const SkillsetContentIcon = styled.div`
  width: 10.6382%;
  align-self: center;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 100%;
  }
`;

// SkillsetContentDetail CSS Element
const SkillsetContentDetail = styled.div`
  width: 85.1063%;
`;

// SkillsetContentMeta CSS Element
const SkillsetContentMeta = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

// SkillsetContentName CSS Element
const SkillsetContentName = styled.div`
  display: flex;
  align-items: flex-end;

  h4 {
    font-size: 1.5rem;
    color: #072142;
    letter-spacing: 0.2em;
    line-height: 1.2;

    @media screen and (max-width: 420px) {
      font-size: 0.75rem;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.2;
    color: #c0c5ca;
    margin-left: 0.5rem;
    letter-spacing: 0.2em;

    @media screen and (max-width: 420px) {
      font-size: 0.625rem;
    }
  }
`;

// SkillsetContentPercentage CSS Element
const SkillsetContentPercentage = styled.p`
  font-size: 1.5rem;
  color: #072142;
  letter-spacing: 0.2em;
  line-height: 1.2;

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }

  span {
    font-size: 1rem;
    line-height: 1.2;
    color: #072142;

    @media screen and (max-width: 420px) {
      font-size: 0.625rem;
    }
  }
`;

// SkillsetContentBarKeyframes CSS Keyframes
const SkillsetContentBarKeyframes = keyframes`
  0% { width: 10%; }
  100% { width: 100%; }
`;

// SkillsetContentBar CSS Element
const SkillsetContentBar = styled.div`
  width: 100%;
  height: 0.875rem;
  background: #fff;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);

  @media screen and (max-width: 420px) {
    height: 0.4375rem;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 10px;
    width: 10%;

    animation: ${SkillsetContentBarKeyframes} 1.5s forwards;

    background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  }
`;

// Skillset React Component
const Skillset = (props: SkillsetProps) => {
  return (
    <SkillsetContentItem>
      <SkillsetContentIcon>
        <img src={props.imageUrl} alt={props.imageAlt} />
      </SkillsetContentIcon>
      <SkillsetContentDetail>
        <SkillsetContentMeta>
          <SkillsetContentName>
            <h4>{props.skillsetName}</h4>
            <p>{props.skillsetTime}</p>
          </SkillsetContentName>
          <SkillsetContentPercentage>
            {props.skillsetPercentage}
            <span>%</span>
          </SkillsetContentPercentage>
        </SkillsetContentMeta>
        <SkillsetContentBar />
      </SkillsetContentDetail>
    </SkillsetContentItem>
  );
};

// Default Export Skillset React Component
export default Skillset;
