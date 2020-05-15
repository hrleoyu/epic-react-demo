import React, {createContext, useContext} from "react";
import AuthStores from "./auth";


const context =  createContext(
    AuthStores = new AuthStores()
)

export const useStores = () => useContext(context)