import React from "react"
import {NavLink,useHistory} from "react-router-dom"
import styled from "styled-components";
import {Button} from "antd";
import {useStores} from "../stores/index";
import {observer} from "mobx-react"


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
const StyledButton = styled(Button)`
  margin-left: 10px;
`
const Component = observer(()=>{
  const history = useHistory()
  const {UserStore,AuthStore} = useStores();
  const handleLogout = ()=>{
    AuthStore.logout()
  };
  const handleLogin = ()=>{
    console.log("跳轉到登錄頁")
    history.push('/login')
  };
  const handleRegister = ()=>{
    console.log("跳转到注册页");
    history.push('/register')
  };
  return(
    <Header>
      <Logo>logo</Logo>
      <Nav>
        <StyledLink to='/' activeClassName="active" exact>首页</StyledLink>
        <StyledLink to='/history'>上传历史</StyledLink>
        <StyledLink to='/about'>关于</StyledLink>
        <Login>
          {
            UserStore.currentUser ? <>
              {UserStore.currentUser.attributes.username} <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
            </> :<>
              <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
              <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
            </>

          }
        </Login>
      </Nav>
    </Header>
  )
})
export default Component