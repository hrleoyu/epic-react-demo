import {Form, Input, Button} from 'antd';
import React from "react";
import styled from 'styled-components';
import {useStores} from "../stores";
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

const Reg = () => {
    const {AuthStores} = useStores();
    const history = useHistory()

    const onFinish = value => {
        console.log('Success:', value);
        AuthStores.setUsername (value.username);
        AuthStores.setPassword(value.password);
        AuthStores.reg()
            .then(() => {
                console.log('注册成功返回首页')
                history.push('/')
            })
            .catch((err) => {
                console.log('注册失败1')
                console.log(err)
            })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const validateUsername = (rule, value) => {
        if(/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
        if(value.length < 4 || value.length > 10) return Promise.reject('长度为4～10个字符');
        return Promise.resolve();
    };

    const validateConfirm = ({getFieldValue}) => ({
        validator(rule, value) {
            if(getFieldValue('password') === value) return Promise.resolve();
            return Promise.reject('两次密码不一致');
        }
    });

    return (

        <Wrapper>
            <StyleH1>注册</StyleH1>
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
                        {validator: validateUsername}
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
                        {
                            min: 4,
                            message: '最少4个字符'
                        },
                        {
                            max: 10,
                            message: '最大10个字符'
                        }
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    label="确认密码"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: '确认密码！',
                        },
                        validateConfirm
                    ]}
                >
                    <Input.Password/>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default Reg