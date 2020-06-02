"use strict";

// every analog
function every(arr, fn) {
    if (!Array.isArray(arr) || !fn || typeof fn !== 'function') {
        return new Error('first arg: array, second: callback');
    }

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false;
        }
    }

    return true;
}

console.log(
    every([2, 3, 4, 5], function(num) {
        return typeof num === 'number';
    })
);

// this tests
const rectangle = {
    width: 11,
    height: 11,
    getSquare() {
        return this.width * this.height;
    }
};

const res = rectangle.getSquare();
console.log(res);

const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return this.price * ((100 - parseInt(this.discount)) / 100);
    }
};

const res1 = price.getPrice();
console.log(res1);
const res2 = price.getPriceWithDiscount();
console.log(res2);

const obj = {
    height: 10,
    increaseHeight() {
        return this.height += 1;
    }
};

console.log(obj.increaseHeight());
console.log(obj.height);

const numerator = {
    value: 1,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        this.value += 1;
        return this;
    },
    minusOne() {
        this.value -= 1;
        return this;
    }
};
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

const obj2 = {
    price: 10,
    count: 11,
    getPrice() {
        return this.price * this.count;
    }
};

const obj1 = {
    price: 20,
    count: 22
};
console.log(obj2.getPrice.call(obj1));

let sizes = {
    width: 5,
    height: 10
}, getSquare = function() {
    return this.width * this.height;
};
console.log(getSquare.call(sizes));

let element = {
    height: 25,
    getHeight() {
        return this.height;
    }
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

const sum = (...params) => {
    if (!params.length) {
        return 0;
    }

    return params.reduce((prev, next) => {
        return prev + next;
    });
};
const check = sum(2, 3);
console.log(check);

const convertToObject = (num) => ({
    value: num,
    isOdd: Boolean(num % 2)
});
console.log(convertToObject(1));

