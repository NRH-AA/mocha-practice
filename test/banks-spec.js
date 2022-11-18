const chai = require("chai");
const expect = chai.expect;

const Banks = require('../problems/banks');

describe('Class Banks', () => {
    let mainBank = new Banks('JP Morgan', 'New York', 'New York');
    
    it('should require a name, city, state to construct', () => {
        expect(mainBank).to.have.property('name', 'JP Morgan');
        expect(mainBank).to.have.property('city', 'New York');
        expect(mainBank).to.have.property('state', 'New York');
    })
    
    it('should create a (location) key using "city, state"', () => {
        expect(mainBank).to.have.property('location', 'New York, New York');
    })
    
    it('should create a (id) key that inciments by 1 for each new Banks instance', () => {
        expect(mainBank).to.have.property('id', 1);
    })
    
    it('should create a (branches) key that is an empty array', () => {
        expect(mainBank).to.have.property('branches');
        expect(mainBank.branches).to.deep.equal([]);
    })
    
    it('should create a (totalFunds) key set to 0', () => {
        expect(mainBank).to.have.property('totalFunds', 0);
    })
})

describe('createBranch()', () => {
    let mainBank = new Banks('JP Morgan', 'New York', 'New York');
    let bankInstance = mainBank.createBranch('Seattle', 'Washington');

    it('should return a new bank instance object or an empty object if no params are passed.', () => {
        expect(bankInstance).to.be.a('object');
    })
    
    it('should add the new instance to the branches array of the Banks instance', () => {
        expect(mainBank.branches).to.have.lengthOf(1);
    })
    
    it('should create the new bank instance with a name key equal to the Banks name key', () => {
        expect(bankInstance).to.have.property('name', 'JP Morgan');
    })
    
    it('should create the new bank instance with a id key equal to the Banks id key', () => {
        expect(bankInstance).to.have.property('id', 2);
    })
    
    it('should create the new bank instance with (city, state, location) keys that are unique to the instance', () => {
        expect(bankInstance).to.have.property('city', 'Seattle');
        expect(bankInstance).to.have.property('state', 'Washington');
        expect(bankInstance).to.have.property('location', 'Seattle, Washington');
    }) 
})


describe('getBranches()', () => {
    let mainBank = new Banks('JP Morgan', 'New York', 'New York');
    
    it('should return an array containing all bank branches or an empty array if non exist', () => {
        let allBankInstances = mainBank.getBranches();
        expect(allBankInstances).to.be.a('array');
        expect(allBankInstances).to.have.lengthOf(0);
        
        const bankInstance1 = mainBank.createBranch('Seattle', 'Washington');
        const bankInstance2 = mainBank.createBranch('Los Angeles', 'California');
        
        allBankInstances = mainBank.getBranches();
        
        expect(allBankInstances).to.be.a('array');
        expect(allBankInstances).to.have.lengthOf(2);
        expect(allBankInstances[0]).to.have.property('name', 'JP Morgan');
        expect(allBankInstances[1]).to.have.property('name', 'JP Morgan');
        expect(allBankInstances[0]).to.have.property('location', 'Seattle, Washington');
        expect(allBankInstances[1]).to.have.property('location', 'Los Angeles, California');
    })
})
