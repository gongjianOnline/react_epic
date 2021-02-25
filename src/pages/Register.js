import React from "react"
import { Form, Input, Button } from 'antd';
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
  border-radius:4px;
  padding:20px;
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`


function Register(){
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const tailLayout = {
      wrapperCol: { offset: 6, span: 18 },
    };
    const onFinish = (values) => {
      console.log('Success:', values);
    };
    // 检查用户名规范
    const validateUsername = (rule,value)=>{
      if(/\W/.test(value)){
        return Promise.reject("只能是字母数字下划线")
      }
      if(value.length < 4 || value.length > 10){
        return Promise.reject("长度为4~10字符")
      }
    }
    // 检查密码规范
    const validateConfirm = ({getFieldValue})=>({
      validator(rule,value){
        console.log(getFieldValue('password'))
        if(getFieldValue('password') === value){
          return Promise.resolve()
        }
       return  Promise.reject('两次密码不一致')
      }
    })

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  return (
    <Wrapper>
      <Title>注册</Title>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名！' },
            {validator: validateUsername}
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码！' },

          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="affPassword"
          rules={[
            { required: true, message: '请输入确认密码！'},
            validateConfirm
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>

  )
}
export default Register