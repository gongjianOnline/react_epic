/*
*   作用: 专门用来维护注册和登录的状态和行为
* */
import {observable, action, makeObservable} from "mobx";
class AuthStore {
  constructor() {
    makeObservable(this)
  }
  @observable isLogin = false;
  @observable isLoading = false;
  @observable values = {
    username:"jirengu",
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
    console.log('登录中...')
    this.isLoading = true;
    setTimeout(()=>{
      console.log('登录成功')
      this.isLogin = true
      this.isLoading = false
    },1000)
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