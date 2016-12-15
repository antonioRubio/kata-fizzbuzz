module.exports = function FizzBuzz(database) {
    this.database = database;

    this.print = function (number) {
        checkIsInteger(number);
        var result  = number;
        if (isFizz(number)) {
            result =  this.database.getStringWhenThreeNumber();
        }

        return result;
    }
};

function checkIsInteger(string) {
    if (false === Number.isInteger(string)) {
        throw new Error('Number is not an Integer');
    }
}

function isMultipleOfThree(number) {
    return 0 === number % 3;
}

function isFizz(number) {
    return isMultipleOfThree(number)
}