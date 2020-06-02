import  {createContext, useContext} from "react";
import AuthStores from "./auth";
import UserStores from './user';
import ImageStores from './image';
import HistoryStores from './history';


const context =  createContext({
    AuthStores ,
    UserStores,
    ImageStores,
    HistoryStores,
});

export const useStores = () => useContext(context)