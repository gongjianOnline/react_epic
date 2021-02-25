/*
*   作用: 专门用来维护注册和登录的状态和行为
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