/*
*   作用: 专门用来维护注册和登录的状态和行为
* */
import {observable, action} from "mobx";
import Auth from "../models/index"
class AuthStore {
  @observable values = {
    username:"",
    password:""
  }
  @action setIsLogin(isLogin){
    this.isLogin = isLogin;
  }
  @action setUsername(username){
    this.values.username = username
  }
  @action setPassword(password){
    this.values.password = password
  }
  @action login(){
    return new Promise((resolve,reject)=>{
      Auth.login(this.values.username,this.values.password).then((user)=>{
        console.log("登录成功")
        resolve(user)
      }).catch((error)=>{
        console.log("登录失败")
        reject(error)
      })
    })
  }
  @action register(){
    return new Promise((resolve,reject)=>{
      Auth.register(this.values.username,this.values.password).then((user)=>{
        resolve(user)
      }).catch((error)=>{
        reject(error)
      })
    })
  }
  @action logout(){
    Auth.logout()
  }
}
export {AuthStore}