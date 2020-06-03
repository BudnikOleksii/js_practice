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


function getFirstAndOther(first, ...other) {
    return { first, other };
}

const test = (first, ...other) => ({ first, other });
console.log(test(2, 3, 5, 6));

function showFirstAndOther(x, ...args) {
    let args1 = { first: x, other: [...args] };
    console.log(args1);
}
console.log(showFirstAndOther(2, 3, 5, 6));


const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
};
  
function getInfo(
    {
        name = 'Unknow',
        info: { partners: [first = 'none', second = 'none'] = [] } = {}
    } = {}
) {
    console.log(`Name: ${name}`);
    console.log(`Partners: ${first}, ${second}`);
}
  
getInfo(organisation);
getInfo();


let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
        "aliquip",
        "anim",
        "exercitation",
        "non",
    ],
    "friends": [
        {
            "id": 0,
            "name": "Barber Hicks"
        },
        {
            "id": 1,
            "name": "Santana Cruz"
        },
        {
            "id": 2,
            "name": "Leola Cabrera"
        }
    ]
};

const {
    name = 'name',
    email = 'email',
    balance = 'balance',
    tags: [firstTag = 'firstTag', , , lastTag = 'lastTag'] = [],
    friends: [{ name: friendName = '' }] = []
} = user;

console.log(name, email, balance, firstTag, lastTag, friendName);

const newArr = [...user.tags, ...user.friends];