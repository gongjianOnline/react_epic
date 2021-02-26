/*
*   作用: 专门用来获取用户的登录状态和用户信息
* */
import {observable, action,makeObservable} from "mobx";
import Auth from "../models/index"
class UserStore {
  constructor() {
    makeObservable(this)
  }
  @observable currentUser = null;

  @action pullUser(){
    this.currentUser = Auth.getCurrentUser()
  }

  @action resetUser(){
    this.currentUser = null
  }

}
export default new UserStore()