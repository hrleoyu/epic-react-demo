import React from "react";
import styled from 'styled-components'


const StyledFooter = styled.footer`
padding:10px 100px;
text-align:center;
font-size:12px;
color:#333;
`;

function Footer() {
    return (
        <StyledFooter>
            <p>作者：🐟</p>
        </StyledFooter>
    )
}

export default Footer