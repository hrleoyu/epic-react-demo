import React, {useState} from "react";
import Logo from './logo.svg';
import {NavLink,useHistory} from "react-router-dom";
import styled from 'styled-components';
import {Button} from 'antd';
import {useStores} from '../stores';
import {observer} from "mobx-react";



const StyledHeader = styled.header`
    background-color:#02101f;
    display:flex;
    align-items:center;
    padding:10px 100px;
    height:50px;
    color:#fff;
`;
const StyledLogo = styled.img`
    height:30px;
`;
const StyledLink = styled(NavLink)`
    color:#fff;
    margin-left:30px;
    
    &.active {
        border-bottom:1px solid #fff;
    }
`;

const StyleLogin = styled.div`
    margin-left: auto;
`;

const StyleButton = styled(Button)`
    margin-left: 10px;
    
`;

const Header = observer ( () => {
    const {UserStores, AuthStores} = useStores();

    const history = useHistory();

    const handleLogout = () =>{
        AuthStores.logout()
    };

    const handleLogin = () => {
        console.log('跳转到登陆页面');
        history.push('/login');
    };

    const handleRegister = () => {
        console.log('跳转到注册页面');
        history.push('/reg');
    }


    return (
        <StyledHeader>
            <StyledLogo src={Logo} alt={'图标'}/>
            <nav>
                <StyledLink to={'/'} exact activeClassName={'active'}>首页</StyledLink>
                <StyledLink to={'/history'}>上传历史</StyledLink>
                <StyledLink to={'/about'}>关于我</StyledLink>
            </nav>
            <StyleLogin>
                {
                    UserStores.currentUser ? <>
                        {UserStores.currentUser.attributes.username}  <StyleButton type="primary" onClick={() =>handleLogout()}>注销</StyleButton>
                    </> : <>
                        <StyleButton type="primary" onClick={()=>handleLogin()}>登陆</StyleButton>
                        <StyleButton type="primary" onClick={handleRegister}>注册</StyleButton>
                    </>

                }

            </StyleLogin>
        </StyledHeader>
    );
})

export default Header