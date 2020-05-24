import {observable, action} from 'mobx';
import { Auth } from '../mod/index';
import UserStores from '../stores/user'


class AuthStores {
    @observable value = {
        username : '',
        password : '',
    }
    @action setUsername(username){
        this.value.username = username
    }

    @action setPassword(password){
        this.value.password = password
    }

    @action login (){
        return new Promise((resolve, reject) => {
            Auth.login(this.value.username,this.value.password)
                .then(user => {
                    console.log('登陆成功')
                    UserStores.pullUser()
                     resolve(user)
                })
                .catch(err =>{
                    console.log('登陆失败2')
                    UserStores.resetUser()
                    console.log(err)
                    reject(err)
                })
        })
    }
    @action reg () {
        return new Promise((resolve, reject) => {
            Auth.reg(this.value.username,this.value.password)
                .then(user => {
                    console.log('注册成功')
                    UserStores.pullUser()
                    resolve(user)
                })
                .catch(err =>{
                    console.log('注册失败2')
                    UserStores.resetUser()
                    console.log(err)
                    reject(err)
                })
        })
    }

    @action logout () {
        Auth.logout()
        UserStores.resetUser()
    }
}



export default new AuthStores()