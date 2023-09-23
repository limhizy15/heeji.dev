import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: "Spoqa";
        font-weight: 400;
        font-style: normal;
        src: url("/fonts/SpoqaHanSansNeo-Medium.ttf") format("ttf");
      }
      
      @font-face {
        font-family: "Spoqa";
        font-weight: 700;
        font-style: normal;
        src: url("/fonts/SpoqaHanSansNeo-Bold.ttf") format("ttf");
      }
      `}
  />
);

export default Fonts;
