import styled from "styled-components";

export const WrapperPortfolioItem = styled.article`
  position: relative;

  background-color: var(--cardBg);
  border-radius: 1.5rem;
  width: 15rem;
  height: 10rem;
`;

export const PortfolioItemProducing = styled.p`
  position: absolute;
  top: calc(0% - 0.75rem);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const PortfolioItemTitle = styled(PortfolioItemProducing)`
  top: calc(100% - 0.75rem);
  color: var(--mainColor);
  font-weight: 600;
  text-transform: none;
  letter-spacing: 1px;
`

export const ItemContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;
  height: fit-content;
`