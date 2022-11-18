const Bank = require('../problems/bank');

let banksAutoID = 0;

class Banks {
    constructor(name, city, state) {
        this.id = ++banksAutoID;
        this.name = name;
        this.city = city;
        this.state = state;
        this.location = `${this.city}, ${this.state}`
        this.branches = [];
        this.totalFunds = 0;
    }
    
    createBranch(city, state) {
        let newBranch = new Bank(this.id, this.name, city, state);
        this.branches.push(newBranch);
        return newBranch;
    }
    
    getBranches() {
        return this.branches;
    }
}

module.exports = Banks;
