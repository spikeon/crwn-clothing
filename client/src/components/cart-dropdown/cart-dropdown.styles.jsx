import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    width: 95vw;
    right: 2.5vw;
    height: calc(100vh - 90px);
  }
`;

export const CartItemsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessageContainer = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

