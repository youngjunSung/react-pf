import React, {useState} from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './styles/GlobalStyles'

const Portfolio = () => {
  const [active, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!active);
  }
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
          <Header bgColor={active}>
              <h1><a href="index.html" class="logo">Portfolio <span>by syjun</span></a></h1>
              <ul class="contact">
                  <li><span onClick={toggleClass} class={active ? 'active' : ''}>Works</span></li>
                  <li><span>Capability</span></li>
                  <li><span>Contact</span></li>
              </ul>
          </Header>
          <Footer>
            <span>Copyright © 2021 Sung Young Jun. Inc.</span>
          </Footer>
      </ThemeProvider>
    </>
  )
};

const Header = styled.header`
  // background-color: ${props => props.bgColor || 'blue'};
  // bgColor 값이 있으면 해당 값으로 나오고 그렇지 않으면 'blue'
  background-color: ${props => props.bgColor && 'skyblue'};
  // bgColor 값이 true이면 'skyblue'
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem calc(100% - 1580px) 1.5rem calc(100% - 1580px);
	margin: 0 auto;
  text-align: left;
	z-index: 100;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	@media all and (max-width: 1610px) {
		padding: 1.5rem;
	}
  @media all and (max-width: 700px) {
    text-align: center;
  }
  //로고
  .logo {
    float: left;
    font-weight: 600;
    font-size: 1.6rem;
    color: #333;
		cursor: pointer;
		span {
			font-weight: 300;
			font-size: 1rem;
			color: #666;
		}
  }
  //깃헙 페북 링크드인
  .contact {
    float: right;
		margin-top: .25rem;
    @media all and (max-width: 700px) {
      //display: none;
    }
    li {
      float: left;
      span {
				position: relative;
				cursor: pointer;
        color: #555;
				font-weight: 300;
        font-size: .8rem;
				&.active {
					color: ${(props) => props.theme.mainColor};
					font-weight: 600;
				}
      }
      &+li {
        margin-left: 1rem;
      }
    }
    @include clearfix;
  }
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .75rem 0;
  text-align: center;
  z-index: 100;
  -webkit-box-sizing: border-box;
	box-sizing: border-box;
  span {
    font-size: .75rem;
    font-weight: 300;
    color: gray;
    vertical-align: middle;
  }
`

export default Portfolio;