const sumAll = function(x, y) {
    let sum = 0;
    if (Number.isInteger(x) && Number.isInteger(y)) {
        if (x >= 0 && y >= 0) {
            if (x < y) {
                for (let i = x; i <= y; i++) {
                    sum += i;
                }
                return sum;
            }
            else if (x > y) {
                for (let i = y; i <= x; i++) {
                    sum += i;
                }
                return sum;
            }
            else return "ERROR";
        }
        else return "ERROR";
    }
    else return "ERROR";
}

// Do not edit below this line
module.exports = sumAll;
