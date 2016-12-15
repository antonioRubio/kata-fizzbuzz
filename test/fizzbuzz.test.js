var assert = require('assert');
var sinon = require('sinon');
var FizzBuzz = require('../fizzbuzz');
var DatabaseFake = require('./DatabaseFake');

suite('Print', function() {

    setup(function() {
        var database = {
            getStringWhenThreeNumber : function () {}
        };
        this.fizzBuzz = new FizzBuzz(database);
    });

    test('return 1 when print number "1"', function() {
        //Arrange
        //Act
        var result = this.fizzBuzz.print(1);
        //Assert
        assert.equal(result, '1');
    });

    test('return 2 when print number "2"', function() {
        //Arrange
        //Act
        var result = this.fizzBuzz.print(2);
        //Assert
        assert.equal(result, '2');
    });

    test('Throw exception when argument is string', function() {
        //Arrange
        //Act
        //Assert
        var self = this;
        assert.throws(function() {self.fizzBuzz.print('two')}, /Number is not an Integer/);
    });

    test('return Fizz when print number "3"', function() {
        //Arrange
        //Act
        var result = this.fizzBuzz.print(3);
        //Assert
        assert.equal(result, 'Fizz');
    });
});