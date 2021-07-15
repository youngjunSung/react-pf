import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme/theme';



const Portfolio = () => {
    return (
        <ThemeProvider theme={theme}>
            <h4>h4 text123</h4>
            <DescBox>123</DescBox>
            <Header>
                <h1><a href="index.html" class="logo">Portfolio <span>by syjun</span></a></h1>
                <ul class="contact">
                    <li><span class="active">Works</span></li>
                    <li><span>Capability</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </Header>
        </ThemeProvider>

    )
};

const DescBox = styled.p`
    margin-top: 100px;
    font-size: 20px;
    color: red;
    background-color: ${(props) => props.theme.dangerColor};
`;

const Header = styled.header`
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
					color: #2556a0;
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

export default Portfolio;