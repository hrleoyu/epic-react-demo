import AV, { Query,User} from 'leancloud-storage'

AV.init({
    appId: "jlh3qLMJWqUjmTETsd0uIPma-gzGzoHsz",
    appKey: "xytyoQ1Fcs3RmxiwLdIguaoW",
    serverURL: "https://jlh3qlmj.lc-cn-n1-shared.com"
});
 const Auth= {
    reg(username, password) {
        let user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve, reject) => {
            user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
        });
    },
    //     let user = new User();
    //     user.setUsername(username);
    //     user.setPassword(password);
    //     return new Promise((resolve, reject) => {
    //         user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    //     });
    // },


     login(username, password) {
         console.log('------')
         console.log(username, password)
         return new Promise((resolve, reject) => {
             User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
         });
     },

     logout() {
         User.logOut();
     },

     getCurrentUser() {
         return User.current();
     }

 };


export {
    Auth
};