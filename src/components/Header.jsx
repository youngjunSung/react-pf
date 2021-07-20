import React from 'react';
import styled from 'styled-components';
import theme from './theme/theme';

const Header = () => {
    return (
        <Header>
            <Logo>
							<a href="index.html" class="logo">Portfolio <span>by syjun</span></a>
						</Logo>
            <Contact class="contact">
                <li><span class="active">Works</span></li>
                <li><span>Capability</span></li>
                <li><span>Contact</span></li>
            </Contact>
        </Header>
    )
}

const Contact = styled.ul`
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
`

const Logo = styled.h1`
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
`

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
`