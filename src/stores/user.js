import {observable, action} from 'mobx';
import { Auth } from '../mod/index';


class UserStores {
    @observable currentUser = null

    @action pullUser() {
    this.currentUser = Auth.getCurrentUser()
    }

    @action resetUser () {
        this.currentUser = null
    }
}


export default new UserStores()