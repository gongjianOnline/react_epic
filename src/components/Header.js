import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import {Button} from "antd";

const Header = styled.header`
  background: #02101f;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`
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
  margin-left:20px
`
const StyleButton = styled(Button)`
  margin-left: 10px;
`
function Component(){
  return(
    <Header>
      <Logo>logo</Logo>
      <Nav>
        <StyledLink to='/' activeClassName="active" exact>首页</StyledLink>
        <StyledLink to='/history'>上传历史</StyledLink>
        <StyledLink to='/about'>关于</StyledLink>
        <Login>
          <StyleButton>注销</StyleButton>
          <NavLink to='/login'><StyleButton>登录</StyleButton></NavLink>
          <NavLink to='/register'><StyleButton type="primary" >注册</StyleButton></NavLink>
        </Login>
      </Nav>
    </Header>
  )
}
export default Component