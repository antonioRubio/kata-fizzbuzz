module.exports = function FizzBuzz(database) {

    const MULTIPLE_OF_THREE = 3;
    const MULTIPLE_OF_FIVE = 5;

    this.database = database;

    this.print = function (number) {
        this.checkIsInteger(number);
        var result  = number;
        if (this.isFizz(number) || this.isBuzz(number)) {
            result = '';
            database.initConnection();
            if (this.isFizz(number)) {
                result +=  this.database.getStringWhenThreeNumber();
            }
            if (this.isBuzz(number)) {
                result +=  this.database.getStringWhenFiveNumber();
            }
        }

        return result;
    };

    this.checkIsInteger = function (string) {
        if (false === Number.isInteger(string)) {
            throw new Error('Number is not an Integer');
        }
    };

    this.isFizz = function (number) {
        return this.isMultiple(number, MULTIPLE_OF_THREE);
    };

    this.isBuzz = function (number) {
        return this.isMultiple(number, MULTIPLE_OF_FIVE);
    };

    this.isMultiple = function (number, multipleNumber) {
        return 0 === number % multipleNumber;
    };
};

