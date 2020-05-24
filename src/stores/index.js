import  {createContext, useContext} from "react";
import AuthStores from "./auth";
import UserStores from './user'


const context =  createContext({
    AuthStores ,
    UserStores
});

export const useStores = () => useContext(context)