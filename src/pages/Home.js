import React from "react"
import {observer} from 'mobx-react'
import {useStores} from "../stores"
import Uploader from "../components/uploader"
const Home = observer(()=>{
  const {UserStore} = useStores()
  return(
    <>
      <h1>
        {
          UserStore.currentUser ? <>
            Hello {UserStore.currentUser.attributes.username}
          </> :<>
            用户未登录
          </>
        }
        <Uploader></Uploader>
      </h1>
    </>
  )
})
export default Home