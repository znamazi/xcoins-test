import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  background: ${({ background }) =>
    background ? background : 'rgba(255, 255, 255, 0.35)'};
  border: ${({ borderSize }) => (borderSize ? borderSize : '0.5px')} solid
    ${({ borderColor }) =>
      borderColor ? borderColor : 'rgba(210, 210, 210, 0.5)'};

  box-sizing: border-box;
  box-shadow: 0px 4px 4px
    ${({ shadowColor }) =>
      shadowColor ? shadowColor : 'rgba(239, 239, 239, 0.25)'};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '20px'};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  display: flex;
  justify-content: center;
  flex-direction: column;
  // align-items: center;
  padding: ${({ padding }) => (padding ? padding : '20px')};
`
export const Title = styled.div`
  font-family: Reckless;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  color: #864879;
  margin: ${({ margin }) => margin};
  @media screen and (max-width: 1200px) {
    display: none !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 17px;
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'space-between'};
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  height: ${({ height }) => height};
  background: ${({ background }) => (background ? background : '#1F1d36')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '10px'};
  border: ${({ border }) => (border ? border : 'transparent')};
  color: ${({ color }) => (color ? color : '#919191')};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  &:focus {
    outline: none;
  }
`
export const Image = styled.img`
  ${(p) => p.rotate && 'transform:rotate(180deg)'}
`
