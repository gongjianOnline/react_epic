import AV, { Query, User } from 'leancloud-storage';

AV.init({
  appId: "3pNPM91YdLJ2QFGd28vYprj4-gzGzoHsz",
  appKey: "n7MQNhmiQRqaL4EwWC0AjFOq",
  serverURL: "https://3pnpm91y.lc-cn-n1-shared.com"
});
/*登录注册*/
const Auth = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    });
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password)
        .then(loginedUser => resolve(loginedUser), error => reject(error));
    });
  },

  logout() {
    User.logOut();
  },

  getCurrentUser() {
    return User.current();
  }

}

/*文件存储*/
const Uploader = {
  add(file,filename){
    const item = new AV.Object('Image');
    const avFile = new AV.File(filename,file)
    item.set('filename',filename);
    item.set('owner',AV.User.current());
    item.set('url',avFile)
    return new Promise((resolve,reject)=>{
      item.save().then((serverFile)=>{
        console.log("保存成功")
        resolve(serverFile)
      },error=>{
        console.log("保存失败")
        reject(error)
      })
    })

  }
}

export {Auth,Uploader};