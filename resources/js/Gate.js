export default class Gate {

    constructor(user){
        this.user = user;
    }

    isAdmin() {
        return this.user === 'admin';
    }
    isUser() {
        return this.user === 'user';
    }
}
