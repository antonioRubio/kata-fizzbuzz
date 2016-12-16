const MULTIPLE_OF_THREE = 3;
const MULTIPLE_OF_FIVE = 5;

module.exports = function FizzBuzz(database) {

    this.database = database;

    this.print = function (number) {
        checkIsInteger(number);
        var result  = number;
        if (isFizz(number) || isBuzz(number)) {
            result = '';
            database.initConnection();
            if (isFizz(number)) {
                result +=  this.database.getStringWhenThreeNumber();
            }
            if (isBuzz(number)) {
                result +=  this.database.getStringWhenFiveNumber();
            }
        }

        return result;
    }
};

function checkIsInteger(string) {
    if (false === Number.isInteger(string)) {
        throw new Error('Number is not an Integer');
    }
}

function isFizz(number) {
    return isMultiple(number, MULTIPLE_OF_THREE);
}

function isMultiple(number, multipleNumber) {
    return 0 === number % multipleNumber;
}

function isBuzz(number) {
    return isMultiple(number, MULTIPLE_OF_FIVE);
}