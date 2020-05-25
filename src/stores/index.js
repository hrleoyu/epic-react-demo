import  {createContext, useContext} from "react";
import AuthStores from "./auth";
import UserStores from './user';
import ImageStores from './image'


const context =  createContext({
    AuthStores ,
    UserStores,
    ImageStores
});

export const useStores = () => useContext(context)