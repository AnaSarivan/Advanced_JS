
/* const userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.name = 'Ion'
userOne.login();
userOne.logout(); */

class User {
    constructor(email, name) {
        this.email = email
        this.name = name
        this.score = 0
    }
    login(){
        console.log(this.email, 'has logged in');
        return this
    }
    logout(){
        console.log(this.email, 'has logged out');
        return this
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this
    }

}

// class inheritance
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
    
}

let userOne = new User('gf@ins.com', 'Ion')
let userTwo = new User('hgjkh@hg.com', 'Lala')
let admin = new Admin('jhf@khg.md', 'Archi')

let users = [userOne, userTwo, admin]

admin.deleteUser(userTwo)

//method chaining
/* userOne.login().updateScore().updateScore().logout()
 */