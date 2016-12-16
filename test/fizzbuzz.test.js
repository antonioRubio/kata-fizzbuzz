var assert = require('assert');
var sinon = require('sinon');
var FizzBuzz = require('../fizzbuzz');
//var DatabaseFake = require('./DatabaseFake');

suite('Print', function() {

    setup(function() {
        this.database = {
            initConnection : function () {},
            getStringWhenThreeNumber : function () {},
            getStringWhenFiveNumber: function() {}
        };
        this.mockDatabase = sinon.mock(this.database);

        this.fizzBuzz = new FizzBuzz(this.database);
    });

    test('return 1 when print number "1"', function() {
        //Arrange
        expectInitConnectionNeverCalled(this.mockDatabase);
        //Act
        var result = this.fizzBuzz.print(1);
        //Assert
        assert.equal('1', result);
        this.mockDatabase.verify();
    });

    test('return 2 when print number "2"', function() {
        //Arrange
        expectInitConnectionNeverCalled(this.mockDatabase);
        //Act
        var result = this.fizzBuzz.print(2);
        //Assert
        assert.equal('2', result);
        this.mockDatabase.verify();
    });

    test('Throw exception when argument is string', function() {
        //Arrange
        expectInitConnectionNeverCalled(this.mockDatabase);
        //Act
        //Assert
        var self = this;
        assert.throws(function() {self.fizzBuzz.print('two')}, /Number is not an Integer/);
        this.mockDatabase.verify();
    });

    test('return Fizz when print number "3"', function() {
        //Arrange
        expectInitConnectionOnceCalled(this.mockDatabase);
        this.mockDatabase.expects('getStringWhenThreeNumber').once().returns('Fizz');
        //Act
        var result = this.fizzBuzz.print(3);
        //Assert
        assert.equal('Fizz', result);
        this.mockDatabase.verify();
    });

    test('return 4 when print number "4"', function() {
        //Arrange
        expectInitConnectionNeverCalled(this.mockDatabase);
        //Act
        var result = this.fizzBuzz.print(4);
        //Assert
        assert.equal('4', result);
        this.mockDatabase.verify();
    });

    test('return Buzz when print number "5"', function() {
        //Arrange
        expectInitConnectionOnceCalled(this.mockDatabase);
        this.mockDatabase.expects('getStringWhenFiveNumber').once().returns('Buzz');
        //Act
        var result = this.fizzBuzz.print(5);
        //Assert
        assert.equal('Buzz', result);
        this.mockDatabase.verify();
    });

    test('return FizzBuzz when print number "15"', function() {
        //Arrange
        this.mockDatabase.expects('initConnection').once();
        this.mockDatabase.expects('getStringWhenThreeNumber').once().returns('Fizz');
        this.mockDatabase.expects('getStringWhenFiveNumber').once().returns('Buzz');
        //Act
        var result = this.fizzBuzz.print(15);
        //Assert
        assert.equal('FizzBuzz', result);
        this.mockDatabase.verify();
    });
});

function expectInitConnectionOnceCalled(mockDatabase) {
    mockDatabase.expects('initConnection').once();
}

function expectInitConnectionNeverCalled(mockDatabase) {
    mockDatabase.expects('initConnection').never();
}