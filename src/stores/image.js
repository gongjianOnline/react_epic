/*
*   作用: 用来管理图片上传的状态
* */
import {observable, action,makeObservable} from "mobx";
import {Uploader} from "../models/index"
import {message} from "antd";


class ImageStores {
  constructor() {
    makeObservable(this)
  }

  @observable filename = "";
  @observable file = null;
  @observable isUploading = false;
  @observable serverFile = null


  @action setFilename(newFilename){
    this.filename = newFilename
  }
  @action setFile(newFile){
    this.file = newFile
  }
  @action upload(){
    this.isUploading = true;
    this.serverFile = null;
    return new Promise((resolve,reject)=>{
      Uploader.add(this.file,this.filename).then((serverFile)=>{
        console.log("上传成功")
        this.serverFile = serverFile
        resolve(serverFile)
      }).catch(err=>{
        message.error("上传失败")
        reject(err)
      }).finally(()=>{
        this.isUploading = false;
      })
    })

  }

  @action reset(){
    this.isUploading = false;
    this.serverFile = null;
  }

}
export default new ImageStores()