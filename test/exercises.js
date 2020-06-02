'use strict';

function minus(num1 = 0) {
    return function (num2= 0) {
        return num1 - num2;
    };
}

console.log(minus()(6));

function multiplyMaker(n1) {
    return function(n2) {
        return n1 *= n2;
    };
}

const multiply = multiplyMaker(2);
console.log(multiply(6));
console.log(multiply(6));

const module1 = (function() {
    let str = '';

    function setString(value = '') {
        str = String(value);
        return str;
    }

    function getString() {
        return str;
    }

    function getStrlength() {
        return str.length;
    }

    function reverseStr() {
        return str.split('').reverse().join('');
    }

    return {
        setString,
        getString,
        getStrlength,
        reverseStr
    };
})();

module1.setString('abcde');
console.log(module1.getString());
console.log(module1.getStrlength());
console.log(module1.reverseStr());

const module2 = (function() {
    let res = 0;

    function setVal(value = 0) {
        res = Number(value);
        return this;
    }

    function plus(value) {
        res += Number(value);
        return this;
    }

    function minus(value) {
        res -= Number(value);
        return this;
    }

    function times(value) {
        res *= Number(value);
        return this;
    }

    function devide(value) {
        res -= Number(value);
        return this;
    }

    function pow(ex = 2) {
      res = Math.pow(res, ex);
      return this;
    }

    function getNumber() {
      return  Number(res.toFixed(2)) || 0;
    }

    return {
        setVal,
        plus,
        minus,
        times,
        devide,
        pow,
        getNumber
    };
})();

console.log(module2.setVal(4).times(5).devide(2).plus(3).minus(1).pow(2).getNumber());

