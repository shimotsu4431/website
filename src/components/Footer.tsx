import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export default () => {
  return <Footer>
    <Container>
      <Menu>
        <Link to="/contact">CONTACT</Link>
        <a target="_blank" rel="noopener" href="https://twitter.com/mottox2">TWITTER</a>
        <a target="_blank" rel="noopener" href="https://mottox2.booth.pm/">BOOTH</a>
      </Menu>
      <Copyright>
        Copyright &copy; 2018 @mottox2 All Rights Reserved.
      </Copyright>
    </Container>
  </Footer>
}

const Footer = styled.footer`
  background-color: #4AA1C4;
  color: white;
  padding: 32px 0;
  text-align: center;
`

const Container = styled.div`
  max-width: ${1032 - 24}px;
  margin: auto;
  @media screen and (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`

const Menu = styled.nav`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 600px) {
    margin: 0;
  }
  a {
    color: white;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    display: block;
    margin-right: 12px;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Copyright = styled.div`
  margin-left: auto;
  font-size: 12px;
`