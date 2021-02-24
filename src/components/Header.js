import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";

const Header = styled.header`
  background: #02101f;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;
const Logo = styled.div`
  color: #fff;
  height: 30px;
`;
const StyledLink = styled(NavLink)`
  color:#fff;
  margin-left: 30px;
  
  &.active {
    border-bottom:1px solid #fff;
  }
`;

function Component(){
  return(
    <Header>
      <Logo>logo</Logo>
      <nav>
        <StyledLink to='/' activeClassName="active" exact>首页</StyledLink>
        <StyledLink to='/history'>上传历史</StyledLink>
        <StyledLink to='/about'>关于</StyledLink>
      </nav>
    </Header>
  )
}
export default Component