import * as G from "../../styles"
import * as S from "./stylePortfolio"

export const Portfolio = () => {
  return (
    <G.WrapperContent>
      <G.ContainerCurrentTitle>
        <G.LineCurrenteTitle></G.LineCurrenteTitle>
        <G.CurrentTitle>Portfolio</G.CurrentTitle>
        <G.LineCurrenteTitle></G.LineCurrenteTitle>
      </G.ContainerCurrentTitle>
      <S.ItemContainer>

        <S.WrapperPortfolioItem>
          <S.PortfolioItemProducing>IN PRODUCING</S.PortfolioItemProducing>
          <S.PortfolioItemTitle>Shopping Cart</S.PortfolioItemTitle>
        </S.WrapperPortfolioItem>

        <S.WrapperPortfolioItem>
          <S.PortfolioItemTitle>SOON</S.PortfolioItemTitle>
        </S.WrapperPortfolioItem>

        <S.WrapperPortfolioItem>
          <S.PortfolioItemTitle>SOON</S.PortfolioItemTitle>
        </S.WrapperPortfolioItem>

        <S.WrapperPortfolioItem>
          <S.PortfolioItemTitle>SOON</S.PortfolioItemTitle>
        </S.WrapperPortfolioItem>

        <S.WrapperPortfolioItem>
          <S.PortfolioItemTitle>SOON</S.PortfolioItemTitle>
        </S.WrapperPortfolioItem>

        <S.WrapperPortfolioItem>
          <S.PortfolioItemTitle>SOON</S.PortfolioItemTitle>
        </S.WrapperPortfolioItem>

      </S.ItemContainer>

    </G.WrapperContent>
  )
}