/*
*   作用: 专门用来维护注册和登录的状态和行为
* */
import {observable, action, makeObservable} from "mobx";
import {Auth} from "../models/index"
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
    Auth.login(this.values.username,this.values.password).then((user)=>{
      console.log("登陆成功")
      console.log(user)
    }).catch((error)=>{
      console.log("登陆失败")
      console.log(error)
    })
  }
  @action reqister(){
    console.log('注册中...')
    this.isLoading = true;
    setTimeout(()=>{
      console.log('注册成功')
      this.isLogin = true
      this.isLoading = false
    },1000)
  }
  @action logout(){
    console.log("已注销")
  }
}
export {AuthStore}