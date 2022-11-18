class Bank {
    constructor(id, name, city, state) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.state = state;
        this.location = `${city}, ${state}`;
        this.funds = 0;
    }
    
    
    
}

module.exports = Bank;
