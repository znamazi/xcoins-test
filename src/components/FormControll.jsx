import styled from 'styled-components'

export const Label = styled.label`
  font-family: 'FH Oscar';
  color: ${({ color }) => (color ? color : '#313144')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  padding: ${({ padding }) => padding};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '600')};
  cursor: ${({ cursor }) => cursor};
`

export const Select = styled.select`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '200px')};
  width: 100%;
  height: ${({ height }) => (height ? height : '40px')};
  border: ${({ border }) => (border ? border : '1px solid #3f3351')};
  background: ${({ background }) => (background ? background : '#3f3351')};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '10px'};
  box-sizing: border-box;
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'FH Oscar')};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '20px')};
  color: ${({ color }) => (color ? color : '#ffffff')};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 0px 10px #4dbab8;
  }
  padding: 0 17px;
  @media screen and (max-width: 576px) {
    font-size: ${({ fontSizeXS }) => (fontSizeXS ? fontSizeXS : '16px')};
  }
  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizeXS }) => (fontSizeXS ? fontSizeXS : '14px')};
  }
  ::placeholder {
    color: #909090;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #909090;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #909090;
  }
`

export const Input = styled.input`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '200px')};
  width: 100%;
  height: ${({ height }) => (height ? height : '40px')};
  border: ${({ border }) => (border ? border : '1px solid #1f1d36')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '10px'};
  box-sizing: border-box;
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'FH Oscar')};
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  color: ${({ color }) => (color ? color : '#313144')};
  &:focus {
    outline: none;
  }
  padding: 0 17px;
  @media screen and (max-width: 576px) {
    font-size: ${({ fontSizeXS }) => (fontSizeXS ? fontSizeXS : '13px')};
  }
  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizeXS }) => (fontSizeXS ? fontSizeXS : '11px')};
  }
  ::placeholder {
    color: #909090;
    opacity: 1; /* Firefox */
    font-size: 13px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #909090;
    font-size: 13px;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #909090;
    font-size: 13px;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  height: ${({ height }) => (height ? height : '55px')};
  background: ${({ background }) => (background ? background : '#D7D7D7')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '10px'};
  border: ${({ border }) => (border ? border : 'transparent')};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  color: ${({ color }) => (color ? color : '#ffffff')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '20px')};
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(0.8);
  }
`
