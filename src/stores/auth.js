/*
*   作用: 专门用来维护注册和登录的状态和行为
* */
import {observable, action,makeObservable} from "mobx";
import {Auth} from "../models/index"
import UserStore from "./user";
import HistoryStore from "./history"
import ImageStores from "./image"
import {message} from "antd";

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
        message.error("登录失败")
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
        message.error("注册失败")
        reject(error)
      })
    })
  }
  @action logout(){
    Auth.logout();
    UserStore.resetUser();
    HistoryStore.reset();
    ImageStores.reset();
  }



}
export default new AuthStore()