import React from "react";
import Logo from './logo.svg';
import {NavLink} from "react-router-dom";
import styled from 'styled-components'


const StyledHeader = styled.header`
    background-color:#02101f;
    display:flex;
    align-items:center;
    padding:10px 100px;
    height:50px
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

const StyleButton = styled.button`
    margin-left: 10px;
`

function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={Logo} alt={'图标'}/>
            <nav>
                <StyledLink to={'/'} exact activeClassName={'active'}>首页</StyledLink>
                <StyledLink to={'/history'}>上传历史</StyledLink>
                <StyledLink to={'/about'}>关于我</StyledLink>
            </nav>
            <StyleLogin>
                <StyleButton>
                    <StyledLink to={'/login'}>登陆</StyledLink>
                </StyleButton>
                <StyleButton>
                    <StyledLink to={'/reg'}>注册</StyledLink>
                </StyleButton>
            </StyleLogin>
        </StyledHeader>
    )
}

export default Header