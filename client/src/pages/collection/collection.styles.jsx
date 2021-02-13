import styled from 'styled-components';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  .collection-item {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;