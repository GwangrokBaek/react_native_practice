// 자바스크립트의 8가지 기본 타입
// number, bigint, string, boolean, object, symbol, undefined, null

const v1 = 12;
const v2 = 123456789123456789123456789n;
const v3 = 'ab';
const v4 = true;
console.log(typeof v1, typeof v2, typeof v3, typeof v4); // number bigint string boolean

const v5 = {};
const v6 = Symbol('abc');
const v7 = undefined;
const v8 = null;
console.log(typeof v5, typeof v6, typeof v7, typeof v8); // object symbol undefined object

function f1() {}
console.log(typeof f1) // function

class MyClass {}
console.log(typeof MyClass) //function

console.log(Object.prototype.toString.call(null)) // [object Null]

console.log(typeof []) // object
console.log(Object.prototype.toString.call([])) // [object Array]

const idSymbol = Symbol('id')
const obj = {id: 123}
obj[idSymbol] = 456
console.log(obj) // {id: 123, [Symbol(id)]: 456}

const arr = []
console.log(arr[Symbol.iterator]) // [Function: values]

const v9 = String(123)
const v10 = String(new Date())
console.log(typeof v9, v9) // string 123
console.log(typeof v10, v10) // string Sat Dec 04 2021 18:55:40 GMT+0900 (GMT+09:00)

const v11 = Number('123')
const v12 = BigInt('123')
console.log(typeof v11, v11) // number 123
console.log(typeof v12, v12) // bigint 123n

const v13 = Boolean(123)
const v14 = Boolean(0)
console.log(typeof v13, v13) // true
console.log(typeof v14, v14) // false

const v15 = Boolean('abc')
const v16 = Boolean('')
console.log(typeof v15, v15) // true
console.log(typeof v16, v16) // false

const v17 = !!123
const v18 = !!0
const v19 = !!'abc'
const v20 = !!''
console.log(typeof v17, v17) // true
console.log(typeof v18, v18) // false
console.log(typeof v19, v19) // true
console.log(typeof v20, v20) // false

console.log(typeof new Boolean(true)) // object
console.log(typeof new Number(1)) // object
console.log(typeof new String('abc')) // object

const s1 = new String('abc')
s1.id = 123
console.log('value:', s1.valueOf()) // value: abc
console.log('id:', s1.id) // id: 123
console.log(s1) // [String: 'abc'] { id: 123 }

console.log(123 === 123) // true
console.log('123' === '123') // true
console.log('123' === 123) // false
console.log(0 === false) // false
console.log(123 === true) // false

console.log(123 == 123) // true
console.log('123' == '123') // true
console.log('123' == 123) // true
console.log(0 == false) // true
console.log(123 == true) // false