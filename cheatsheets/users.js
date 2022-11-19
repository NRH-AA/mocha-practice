let users = [];

class Users {
    constructor(id, username, password, birthdate, type=1) {
        for (let user of users) {
            if (user.id === id) throw new UserErrors('Users (id) is already taken.');
            if (user.username === username) throw new UserErrors('Users (name) is already taken.');
        }
        
        // Get the users age
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        today.setFullYear(birthdate.getFullYear());
        if (today < birthdate) age--;
        // Dont allow users under 16 to create
        if (age < 16) throw new UserErrors('The User is too young!');
        
        // Default type to 1
        if (type < 1) {
            type = 1;
        }
        
        this.id = id;
        this.username = username;
        this.password = password;
        this.birthdate = birthdate;
        this.type = type;
        this.created = new Date();
        users.push(this);
    }
    
    getUsername() {
        return this.username;
    }
    
    getType() {
        return this.type;
    }
    
    getBirthDate() {
         return this.birthdate.toDateString();
    }
    
}

class UserErrors extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = [Users, UserErrors];
