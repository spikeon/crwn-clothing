import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    height: 100px;
    margin-bottom: 20px;
  }
`;

export const CartItemImage = styled.img``;

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItemName = styled.span`
  font-size: 16px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }

`;

export const CartItemPrice = styled.span`
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;