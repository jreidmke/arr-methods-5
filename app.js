let numArr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
let wordArr = ['Maria', 'James', 'Bill', 'Linda', 'Oliver'];
let objArr = [
    {name: 'Maria'},
    {name: 'James'},
    {name: 'Bill'},
    {name: 'Linda'},
    {name: 'Oliver'},
    {pizza: 1}
]

let fullNameObj = [
    {first: "James", last: "Reid"},
    {first: "Maria", last: "Aldapa"},
    {first: "Oliver", last: "Germaine"}
];

let valueObj = [
    {first: "James", last: "Reid", cool: true},
    {first: "Maria", last: "Aldapa", cool: true},
    {first: "Bill", last: "Reid"}
]

// Return arr with values doubled

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(el => newArr.push(el *= 2));
    return newArr;
}

console.log(doubleValues(numArr) + " double");

//Return arr with only even values

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(el => {if(el % 2 === 0) {newArr.push(el)}});
    return newArr;
}

console.log(onlyEvenValues(numArr) + " only evens");

//Returns first and last letter of each string in new arr.

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(el => {
        let firstLast = el[0] + el[el.length-1];
        newArr.push(firstLast);
    })
    return newArr;
}

console.log(showFirstAndLast(wordArr) + " first and last");

//Adding key value pair to each object in array

function addKeyAndValue(arr, key, value) {
    let newArr = [];
    arr.forEach(el => {
        el[key] = value;
        newArr.push(el);
    })
    return newArr;
}

console.log(addKeyAndValue(objArr, 'star wars', true))

//Returns an object with key of vowel in string and value of instances of vowel in string

function vowelCount(str) {
    let obj = {};
    str = str.toLowerCase().split("");
    let vowels = "aeiou".split("");
    str.forEach(char => {
        if(vowels.indexOf(char) !== -1) {
            obj[char] = 0;
        }
    })
    str.forEach(char => {
        for(key in obj) {
            if(key === char) {
                obj[key]++;
            }
        }
    })
    return obj;
}

console.log(vowelCount('James'))

//Doubles every value in place

function doublesWithMap(arr) {
    return arr.map(x => x * 2);
}

console.log(doublesWithMap(numArr) + " doubles with map");

//Returns values times idx in place

function valTimesIndex(arr) {
    return arr.map(function(x, i) {
        return x * i;
    })
}

console.log(valTimesIndex(numArr) + " vals times index");

//Extracts values of specified key, removes undefined values from arr

function extractKey(arr, key) {
   return arr.map(obj => {
        return obj[key];
    }).filter(val => val !==undefined)
}

console.log(extractKey(objArr, 'name'));

//Returns users full name

function extractFullName(arr) {
    return arr.map(obj => {
        let fullName = obj.first + " " + obj.last;
        return fullName;
    })
}

console.log(extractFullName(fullNameObj));

//Returns objects which contain a specific boolean kvp

function filterByValue(arr, val) {
    return arr.filter(x => x[val]);
}

console.log(filterByValue(valueObj, "cool"));

//Returns requested element from array

function find(arr, x) {
    return arr.filter(y => y === x);
}

console.log(find(numArr, 1));

//Finds first instance of object which matches provided KVP

function findInObj(arr, key, val) {
    return arr.filter(obj => {
        if(obj[key] === val) {
            return obj
        }
    })[0];
}

console.log(findInObj(valueObj, 'cool', true))

//Returns every odd value times 2

function doubleOddNumbers(arr) {
    let newArr = []
    arr.filter(x => {
        if(x % 2 !== 0) {
            newArr.push(x);
        }
    })
    return newArr.map(x => {
        return x *= 2;
    })
}

console.log(doubleOddNumbers(numArr));

//Removes all vowels from a string

function removeVowels(str) {
    let vowels = "aeiou"
    return str.toLowerCase().split("").filter(char => {
        return vowels.indexOf(char) === -1;
    }).join('');
}


console.log(removeVowels('JAMES'));
