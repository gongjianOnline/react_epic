import React from "react"
import {Link} from "react-router-dom"
function Header(){
  return(
    <div>
      <div>logo</div>
      <nav>
        <Link to='/'>首页</Link>
        <Link to='/history'>历史</Link>
        <Link to='/about'>关于</Link>
      </nav>
    </div>
  )
}
export default Header