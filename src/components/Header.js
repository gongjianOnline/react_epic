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
const Login = styled.div`
  marigin-left:auto
`
const Button = styled.button`
  margin-left: 10px;
`

function Component(){
  return(
    <Header>
      <Logo>logo</Logo>
      <nav>
        <StyledLink to='/' activeClassName="active" exact>首页</StyledLink>
        <StyledLink to='/history'>上传历史</StyledLink>
        <StyledLink to='/about'>关于</StyledLink>
      </nav>
      <Login>
        <Button>
          <StyledLink to="/login">登录</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/register">注册</StyledLink>
        </Button>
      </Login>
    </Header>
  )
}
export default Component