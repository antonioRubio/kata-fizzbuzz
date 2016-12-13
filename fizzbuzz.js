module.exports = function FizzBuzz() {
    this.print = function (number) {
        checkIsInteger(number);
        return parseInt(number);
    }
};

function checkIsInteger(string) {
    if (false === Number.isInteger(string)) {
        throw new Error('Number is not an Integer');
    }
}