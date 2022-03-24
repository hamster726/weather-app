import { createGlobalStyle, css } from "styled-components";
import { useSelector } from "react-redux";

const Global = () => {
  const { theme } = useSelector((state) => state);

  return <GlobalStyle backgroundOffset={theme.backgroundOffset} color={theme.color} />;
};

export { Global, GlobalStyle };
const GlobalStyle = createGlobalStyle`

  html, body {
    background: linear-gradient(135deg, #00bbff, #d2f5ae, #e1e80d, #ff9900, #facf62, #e6756f, #884186, #111642, #2d729f);
    background-size: 900% 900%;
    ${(props) =>
      css`
        background-position: ${props.backgroundOffset}% ${props.backgroundOffset}%;
        color: ${props.color};
      `};

    //background: #3fb9ff;
    /* inset | offset-x | offset-y | blur-radius | spread-radius | color */
    //box-shadow: inset 0 -40vh 40vh -10vh #00c086;
    //box-shadow: inset 0 -40vh 20vh -120px teal,
    //inset 0 -70vh 20vh -120px yellowgreen,
    //inset 0 -90vh 20vh -10vh gold;
  }
`;
