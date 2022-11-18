const chai = require("chai");
const expect = chai.expect;

let Bank = require('../problems/bank');

describe('Class Bank', () => {
    let bankInstance;
    
    beforeEach(() => {
        bankInstance = new Bank(0, 'JP Morgan', 'Seattle', 'Washington');
    })
    
    it('should require an id, name, city and state to construct', () => {
        expect(bankInstance).to.have.property('id', 0);
        expect(bankInstance).to.have.property('name', 'JP Morgan');
        expect(bankInstance).to.have.property('city', 'Seattle');
        expect(bankInstance).to.have.property('state', 'Washington');
    })
    
    it('should create a (location) key using "city, state"', () => {
        expect(bankInstance).to.have.property('location', 'Seattle, Washington');
    })
    
    it('should create a key (funds) that is set to 0', () => {
        expect(bankInstance).to.have.property('funds', 0);
    })
    
    it('IF ALL SPECS ABOVE PASS, START WORKING ON THE BANKS SPECS', () => {
        
    })
    
})
