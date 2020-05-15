import {observable, action} from 'mobx'


class AuthStores {
    @observable isLogin = false
    @observable isLoading = false
    @observable value = {
        usename : '',
        password : ''
    }

    @action setIsLogin(isLogin){
        this.isLogin = isLogin
    }

    @action setUseName(usename){
        this.value.usename = usename
    }

    @action setPassword(password){
        this.value.password = password
    }

    @action login (){
        console.log('登陆中……')
        this.isLoading = true
        setTimeout(() => {
            console.log('登陆成功')
            this.isLogin = true
            this.isLoading = false
        },1000)
    }

    @action reg () {
        console.log('注册中……')
        this.isLoading = true
        setTimeout(() => {
            console.log('注册成功')
            this.isLogin = true
            this.isLoading = false
        },1000)
    }

    @action logout () {
        console.log('已注销')
    }
}



export default AuthStores