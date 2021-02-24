import react from "react"
import {observer} from "mobx-react"
import {useStores} from "../stores/index";
const Login = observer(()=>{
  const {AuthStore} = useStores()
  return (
    <>
      <h1>login:{AuthStore.value.username}</h1>
    </>
  )
})
export default Login