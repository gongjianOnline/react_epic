import React,{useRef} from "react"
import {useStores} from "../stores";
import {observer} from "mobx-react"
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
  const {ImageStore,UserStore} = useStores()
  const ref = useRef()
  const { Dragger } = Upload;
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
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
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
          <dt>尺寸定制</dt>
          <dt>更多尺寸</dt>
          <dt>...</dt>
        </dl>
      </Result> : null
    }
    </>
  )
})
export default Component