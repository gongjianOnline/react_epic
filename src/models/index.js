import AV,{Query,User} from "leancloud-storage"
AV.init({
  appId: "3pNPM91YdLJ2QFGd28vYprj4-gzGzoHsz",
  appKey: "n7MQNhmiQRqaL4EwWC0AjFOq",
  serverURL: "https://3pnpm91y.lc-cn-n1-shared.com"
});
console.log("start...")
const Auth = {
  register(username,password){
    let user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve,reject)=>{
      user.signUp().then((loginedUser)=>{
        console.log('注册成功')
        resolve(loginedUser)
      },(error)=>{
        reject(error)
      });
    })
  },
  login(username,password){
    return new Promise((resolve,reject)=>{
      AV.User.logIn(username, password).then((loginedUser)=>{
        resolve(loginedUser)
      },(error)=>{
        reject(error)
      });
    })
  },
  logout(){
    User.logOut()
  },
  getCurrentUser(){
    return  User.current()
  }

}





export default {Auth};
