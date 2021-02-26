import React,{useRef} from "react"
import {useStores} from "../stores";
import {observer,useLocalStore} from "mobx-react"
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from "styled-components"

const Result = styled.div`
  margin-top: 30px;
  border: 1px dashed #ccc;
  padding: 20px;
`
const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`
const Image = styled.img`
  max-width:300px
`

const  Component = observer(()=>{
  const {ImageStore,UserStore} = useStores();
  const ref1 = useRef();
  const ref2 = useRef();
  const store = useLocalStore(()=>({
    width:null,
    setwidth(width){
      store.width = width
    },
    get widthStr(){
      return store.width?`/w/${store.width}`:''
    },
    height:null,
    setheight(height){
      store.height = height
    },
    get heightStr(){
      return store.height?`/h/${store.height}`:''
    },
    get getFullStr(){
      return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
    }
  }))
  const ref = useRef()
  const { Dragger } = Upload;
  const bindWidthChange = ()=>{
    store.setwidth(ref1.current.value)
  };
  const bindHeightChange = ()=>{
    store.setheight(ref2.current.value)
  };
  const props = {
    showUploadList:false,
    beforeUpload: (file)=>{
      console.log(file)
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      if(UserStore.currentUser === null){
        message.warning('请先登录再上传');
        return false
      }
      if(!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)){
        message.error('只能上传png/svg/jpg/gif格式的图片');
        return false
      }
      if(file.size > 1024*1024){
        message.error('图片最大1M');
        return false
      }
      ImageStore.upload().then((serverFile)=>{
        console.log('上传成功')
        console.log(serverFile)
      }).catch(()=>{
        console.log("上传失败")
      })
      return false;
    }
  };
  return (
    <>
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或拖拽上传图片</p>
          <p className="ant-upload-hint">
            仅支持 .png/.svg/.jpg/.gif 格式的图片,图片最大1M
          </p>
        </Dragger>
      </div>

      {
        ImageStore.serverFile ? <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>完整路径</dt>
            <dd>
              <a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url}>
                {ImageStore.serverFile.attributes.url.attributes.url}
              </a>
            </dd>
            <dt>文件名</dt>
            <dd>{ImageStore.filename}</dd>
            <dt>图片预览</dt>
            <dd>
              <Image src={ImageStore.serverFile.attributes.url.attributes.url} alt="图片预览"/>
            </dd>
            <dt>更多尺寸</dt>
            <dd>
              <input ref={ref1} onChange={bindWidthChange} type="text" placeholder="最大宽度(可选)"/>
              <input ref={ref2} onChange={bindHeightChange} type="text" placeholder="最大高度(可选)"/>
            </dd>
            <dd>
              <a target='_blank' href={store.getFullStr}>{store.getFullStr}</a>
            </dd>
          </dl>
        </Result> : null
      }
    </>
  )
})
export default Component