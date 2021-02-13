import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    padding-bottom: 20px;
    border-bottom: 2px dashed #aaa;
  }

`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const SignInSubtitle = styled.span``;

export const SignInButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;