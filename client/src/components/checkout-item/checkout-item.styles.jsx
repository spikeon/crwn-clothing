import styled, {css} from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const columnStyles = css`
  width: 23%;
`;

export const CheckoutItemImageContainer = styled.div`
  padding-right: 15px;
  ${columnStyles}
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemNameContainer = styled.span`
  ${columnStyles}
`;

export const CheckoutItemQuantityContainer = styled.div`
  padding-left: 20px;
  display: flex;
  ${columnStyles}
`;

export const CheckoutItemQuantityArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutItemQuantityValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemPriceContainer = styled.div`
  ${columnStyles}
`;

export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
