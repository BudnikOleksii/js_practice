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

// sort methods for array
const arr = [1,2,3,5,8,9,10];
const newArr = arr.map((n) => {
    return {
        digit: n,
        odd: n % 2 !== 0
    };
});
console.log(newArr);

const arr1 = [12, 4, 50, 1, 0, 18, 40];
function isZero(n) {
    return n === 0;
}
console.log(arr1.some(isZero));

const arr2 = ['yes', 'hello', 'no', 'easycode', 'what'];
function checkStrlength(str) {
    return str.length > 3;
}
console.log(arr2.every(checkStrlength));

const arr3 = [
    {char:"a",index:12}, 
    {char:"w",index:8}, 
    {char:"Y",index:10}, 
    {char:"p",index:3}, 
    {char:"p",index:2},
    {char:"N",index:6}, 
    {char:" ",index:5}, 
    {char:"y",index:4}, 
    {char:"r",index:13}, 
    {char:"H",index:0},
    {char:"e",index:11}, 
    {char:"a",index:1}, 
    {char:" ",index:9}, 
    {char:"!",index:14}, 
    {char:"e",index:7}
];
function getStrFromArr(arr) {
    const copyArr = arr.slice(),
          sortedArr = copyArr.sort((prev, next) => prev.index - next.index),
          strFromArr = sortedArr.reduce((acc, current) => {
              return acc +=current.char;
          }, '');
    return strFromArr;
}
console.log(getStrFromArr(arr3));

const arr4 = [ [14, 45], [1], ['a', 'c', 'd'] ];
const sortedArr = arr4.sort((prev, next) => prev.length - next.length);
console.log(sortedArr);

const arr5 = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];
const sortedArr1 = arr5.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(sortedArr1);

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arr, min, max) {
    let res = arr.slice().sort((prev, next) => prev.price - next.price);
    
    return res.filter(prod => prod.price >= min && prod.price <= max);
}
console.log(filterCollection(products, 15, 30));