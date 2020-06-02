import {observable, action} from 'mobx';
import { Auth } from '../mod/index';
import UserStores from '../stores/user'
import {message} from "antd";
import  HistoryStores from './history';
import ImageStore from './image'


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
                    message.success('登陆成功')
                    UserStores.pullUser()
                     resolve(user)
                })
                .catch(err =>{
                    console.log('登陆失败2')
                    UserStores.resetUser()
                    message.error('登陆失败')
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
                    message.success('注册成功')
                    UserStores.pullUser()
                    resolve(user)
                })
                .catch(err =>{
                    console.log('注册失败2')
                    message.error('注册失败')
                    UserStores.resetUser()
                    console.log(err)
                    reject(err)
                })
        })
    }

    @action logout () {
        Auth.logout();
        UserStores.resetUser();
        HistoryStores.again()
        ImageStore.again()
    }
}



export default new AuthStores()