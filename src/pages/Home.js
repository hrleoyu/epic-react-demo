import React from "react";
import {useStores} from "../stores";
import {observer} from "mobx-react";
import Uploader from "../components/Uploader";
import Tips from "../components/Tips";


const Home = observer(() => {
    const {UserStores} = useStores()

    return (
        <>
            <h5>{
                UserStores.currentUser? null : <Tips>用户未登录，请登录后重试！</Tips>
            }</h5>

            <Uploader/>
        </>
    )
})

export default Home