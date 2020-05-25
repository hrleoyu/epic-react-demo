import React from "react";
import {useStores} from "../stores";
import {observer} from "mobx-react";
import Uploader from "../components/Uploader";


const Home = observer(() => {
    const {UserStores} = useStores()

    return (
        <>
            <h2>{
                UserStores.currentUser? <>
                    hello {UserStores.currentUser.attributes.username}
                    </> : '登陆后重试'
            }</h2>

            <Uploader/>
        </>
    )
})

export default Home