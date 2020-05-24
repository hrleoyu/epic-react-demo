import React from "react";
import {useStores} from "../stores";
import {observer} from "mobx-react";


const Home = observer(() => {
    const {UserStores} = useStores()

    return (
        <>
            <h1>Home</h1>
            <h2>{
                UserStores.currentUser? <>
                    hello {UserStores.currentUser.attributes.username}
                    </> : '登陆后重试'
            }</h2>
        </>
    )
})

export default Home