import {observable,action} from 'mobx'



class HomeStore {
    @observable
    a = 1

    @action add (){
        this.a ++
    }
}

export default new HomeStore();