import React,{useRef}from "react"
import {observer} from "mobx-react"
import {useStores} from "../stores/index";
const Login = observer(()=>{
  const {AuthStore} = useStores()
  const inputRef = useRef()
  const bindChange = (e)=>{
    AuthStore.setUsername(inputRef.current.value)
  }
  return (
    <>
      <h1>login: {AuthStore.values.username}</h1>
      <input type="text"
             onChange={bindChange}
             ref={inputRef}/>
    </>
  )
})
export default Login