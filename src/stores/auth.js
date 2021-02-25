/*
*   作用: 专门用来维护注册和登录的状态和行为
* */
import {observable, action,makeObservable} from "mobx";
import Auth from "../models/index"
import UserStore from "./user";
class AuthStore {
  constructor() {
    makeObservable(this)
  }
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
        UserStore.pullUser()
        resolve(user)
      }).catch((error)=>{
        UserStore.resetUser()
        reject(error)
      })
    })
  }
  @action register(){
    return new Promise((resolve,reject)=>{
      Auth.register(this.values.username,this.values.password).then((user)=>{
        UserStore.pullUser()
        resolve(user)
      }).catch((error)=>{
        UserStore.resetUser()
        reject(error)
      })
    })
  }
  @action logout(){
    Auth.logout();
    UserStore.resetUser()
  }
}
export default new AuthStore()