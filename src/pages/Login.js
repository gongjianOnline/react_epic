import React from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import styled from "styled-components"
import {useStores} from "../stores/index"
import {useHistory} from "react-router-dom";

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
  const history = useHistory()
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };
  const {AuthStore} = useStores()
  const onFinish = (values) => {
    console.log('Success:', values);
    AuthStore.setUsername((values.username));
    AuthStore.setPassword(values.password)
    AuthStore.login().then(()=>{
      console.log('登录成功')
      history.push('/')
    }).catch(()=>{
      console.log('登录失败')
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
      <Title>登录</Title>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password />
        </Form.Item>

        {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked">*/}
        {/*  <Checkbox>记住密码</Checkbox>*/}
        {/*</Form.Item>*/}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>

  )
}
export default Register