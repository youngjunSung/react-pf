import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
//PC,MO 반응형
html, body {
  position: relative;
  font-size: 18px;
  height: 100%;
  @media all and (max-width: 700px) {
    font-size: 16px;
  }
  @media all and (max-width: 500px) {
    font-size: 14px;
  }
  @media all and (max-width: 400px) {
    font-size: 12px;
  }
  @media all and (max-width: 330px) {
    font-size: 10px;
  }
}

//모바일 전용
/*html, body {
  font-size: 30px;
  @media all and (max-width: 900px) {
    font-size: 25px;
  }
  @media all and (max-width: 720px) {
    font-size: 20px;
  }
  @media all and (max-width: 648px) {
    font-size: 18px;
  }
  @media all and (max-width: 576px) {
    font-size: 16px;
  }
  @media all and (max-width: 504px) {
    font-size: 14px;
  }
  @media all and (max-width: 432px) {
    font-size: 12px;
  }
  @media all and (max-width: 360px) {
    font-size: 10px;
  }
}*/

/* reset */
section, article, aside, footer, header, nav, hgroup {
  display:block;
}
body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select {
  margin: 0;
  padding: 0;
}

body, input, textarea, select, button, table {
  font-family: 'Noto Sans CJK KR', sans-serif;
  font-size: 18px;
}

html, body {
  height: 100%;
}

input {
  -webkit-appearance: none;
}

button {
  border: 0;
  background-color: transparent;
}

img, fieldset {
  border: 0;
}

ul, ol {
  list-style: none;
}

em, address {
  font-style: normal;
}

a {
  text-decoration: none;
}

a:hover, a:active, a:focus {
  text-decoration: none;
}

.blind, .u_skip {
  overflow: hidden !important;
  position: absolute !important;
  clip: rect(0, 0, 0, 0) !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
}
`

export default GlobalStyles;