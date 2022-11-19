const chai = require("chai");
const expect = chai.expect;

const [Users, UserErrors] = require('../problems/users');

describe('Class UserErrors', () => {
    let error = new UserErrors('');
    it('should construct with a (message) key.', () => {
        expect(error).to.have.property('message');
    })
})


describe('Class Users', () => {
    const date = new Date();
    const birthDate = new Date(1995, 06, 29);
    const user = new Users(0, 'admin', 'adminPassword', birthDate, 0, date);
    
    it('should construct with (id), (username), (password), (birthdate) parameters', () => {
        expect(user).to.have.property('id', 0);
        expect(user).to.have.property('username', 'admin');
        expect(user).to.have.property('password', 'adminPassword');
    })
    
    it('should construct with (type) parameter that defaults to 1 when not included or is given a number less than 1', () => {
        expect(user).to.have.property('type', 1);
    })
    
    it('should construct with (created) parameter that stores when the date the User was created', () => {
        expect(user).to.have.property('created');
        expect(user.created).to.not.equal(date);
    })
    
    it('should not construct two Users with the same id', () => {
        try {
            const user2 = new Users(0, 'admin', 'asd', 1);
            expect("SHOULD NOT GET HERE").to.equal(false);
          } catch (error) {
            expect(error instanceof UserErrors).to.equal(true);
            expect(error.message).to.equal("Users (id) is already taken.");
          }
    })
    
    it('should not construct two Users with the same username', () => {
        try {
            const user2 = new Users(1, 'admin', 'asd', 1);
            expect("SHOULD NOT GET HERE").to.equal(false);
          } catch (error) {
            expect(error instanceof UserErrors).to.equal(true);
            expect(error.message).to.equal("Users (name) is already taken.");
          }
    })
    
    it('should not construct a Users who is under 16 year old', () => {
        try {
            const birthDate2 = new Date(2015, 11, 25);
            const user2 = new Users(2, 'kid', 'asd', birthDate2);
            expect("SHOULD NOT GET HERE").to.equal(false);
          } catch (error) {
            expect(error instanceof UserErrors).to.equal(true);
            expect(error.message).to.equal("The User is too young!");
          }
    })
    
    it('should have a method: getUsername()', () => {
        expect(user).to.have.property('getUsername');
    })
    
    it('should have a method: getType()', () => {
        expect(user).to.have.property('getType');
    })
    
    describe('getUsername() method', () => {
        it('should return the Users instance username', () => {
            const username = user.getUsername();
            expect(username).to.equal('admin');
        })
    })
    
    describe('getType() method', () => {
        it('should return the Users instance type', () => {
            const type = user.getType();
            expect(type).to.equal(1);
        })
    })
    
    describe('getBirthDate() method', () => {
        it('should return the Users instance birthdate in date string format', () => {
            expect(user).to.have.property('getBirthDate');
            const userBirthDate = user.getBirthDate();
            expect(user.birthdate.toDateString()).to.equal(userBirthDate);
        })
    })
    
    
})
