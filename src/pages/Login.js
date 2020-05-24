import {Form, Input, Button} from 'antd';
import React from "react";
import styled from 'styled-components';
import {useStores} from '../stores/index';
import {useHistory} from 'react-router-dom'

const StyleH1 = styled.h1`
    text-align:center;
    margin-button:30px;
`;

const Wrapper = styled.div`
    max-width:800px;
    margin:30px auto;
    box-shadow:2px 2px 4px 2px rgba(0,0,0,0.2);
    border-radius:4px;
    padding:20px;
`;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};

const Login = () => {
    const {AuthStores} = useStores();
    const history = useHistory()

    const onFinish = values => {
        console.log('Success:', values);
        AuthStores.setUsername(values.username);
        AuthStores.setPassword(values.password);
        AuthStores.login()
            .then(() => {
                console.log('登陆成功')
                history.push('/')
            })
            .catch((err) => {
                console.log('登陆失败1')
                console.log(err)
            })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    //密码验证没有做

    return (

        <Wrapper>
            <StyleH1>登陆</StyleH1>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>




                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登陆
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default Login