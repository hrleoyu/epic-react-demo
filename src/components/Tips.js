import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import styled from "styled-components";

const TipsStyled = styled.div`
    background:#FF6347;
    padding:10px;
    margin:30px 0;
    color:#fff;
    border-radius:6px;
    font-size:16px
`;


const Tips = observer (({children}) => {
    const { UserStores } = useStores()
    return (
      <>
          {
              UserStores.currentUser ? null : <TipsStyled> {children} </TipsStyled>
          }
      </>
    );
})

export default Tips