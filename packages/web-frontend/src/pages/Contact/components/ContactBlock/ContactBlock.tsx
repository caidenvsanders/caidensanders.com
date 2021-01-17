/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React Imports
import { useState } from 'react';

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

const TextHalf = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingNumber = styled.p`
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

const HeadingText = styled.h2`
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

const MessageHalf = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LabelWrap = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.5rem;
  width: 50rem;

  padding: 0.5rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 50rem;

  border: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );
  border-width: 0.5px;
  border-radius: 12px;
  outline: none;
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  height: 10rem;
  width: 50rem;

  border: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );
  border-radius: 12px;
  outline: none;
`;

const ButtonWrapper = styled.div`
  margin-top: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  display: inline-block;
  font-size: 1.125rem;
  color: #fff;
  background: #ff4d5a;
  line-height: 1;
  font-weight: bold;
  padding: 18px 32px;
  border: none;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #e63441;
  }

  @media screen and (max-width: 800px) {
    padding: 13px 24px;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

// ContactBlock React Component
const ContactBlock = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleNameChange = (e: { target: { value: string } }) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    setEmailInput(e.target.value);
  };

  const handleMessageChange = (e: { target: { value: string } }) => {
    setMessageInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch('https://caidensanders.com/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email_name: nameInput,
        email_from: emailInput,
        email_message: messageInput,
      }),
    });
  };

  return (
    <>
      <TextHalf>
        <HeadingNumber>01</HeadingNumber>
        <HeadingText>Contact Me</HeadingText>
      </TextHalf>
      <MessageHalf>
        <form onSubmit={handleSubmit}>
          <LabelWrap>
            <Label>Name</Label>
            <Input
              type="text"
              value={nameInput}
              onChange={handleNameChange}
            ></Input>
          </LabelWrap>
          <LabelWrap>
            <Label>Email Address</Label>
            <Input
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
            ></Input>
          </LabelWrap>
          <LabelWrap>
            <Label>Message</Label>
            <Textarea
              value={messageInput}
              onChange={handleMessageChange}
            ></Textarea>
          </LabelWrap>
          <ButtonWrapper>
            <SubmitButton type="submit">Send to me!</SubmitButton>
          </ButtonWrapper>
        </form>
      </MessageHalf>
    </>
  );
};

// Default Export ContactBlock React Component
export default ContactBlock;
