// const arr = [1, 2]
// const [a, b] = arr
// console.log(a)
// console.log(b)

// let a, b
// [a, b] = [1, 2]
// console.log(a)
// console.log(b)

// const array = [1]
// const [x = 10, y = 20] = array
// console.log({x, y})

// let left = 1;
// let right = 2;
// [left, right] = [right, left];
// console.log({left, right});

// const array = [1, 2, 3]
// const [x, , z] = array
// console.log({x, z})

// const array = [1, 2, 3]
// const [first, ...rest1] = array
// console.log(rest1)
// const [a, b, c, ...rest2] = array
// console.log(rest2)

// const object = { age: 21, name: 'mike'}
// const { age, name } = object
// const { name, age } = object
// const { a, b } = object
// console.log({ age, name })
// console.log({ a, b })

// const object = { age: 21, name: "mike" };
// const { age: theAge, name } = object;
// console.log(theAge); // 21
// console.log(age); // Error

// const object = { age: undefined, name: null, grade: 'A' }
// const { age = 0, name= "noName", grade = "F" } = object
// console.log({ age, name, grade})

// const obj = {age: undefined, name: 'mike'}
// const {age:theAge = 0, name} = obj
// console.log(theAge, name)

// function getDefaultAge() {
//     console.log("hello")
//     return 0
// }
// const obj = { age: undefined, grade: "A"}
// const {age = getDefaultAge(), grade} = obj
// console.log(age)

// const arr = [1, 2, 3]
// const [x = 0, y = 1, z = 3, a = getDefaultAge()] = arr
// console.log(x, y, z, a)

// const object = { age: 21, name: 'mike', grade: "A"}
// const { age, ...rest } = object
// console.log(rest)

// const people = [
//     {age: 21, name: "mike"},
//     {age: 51, name: "sara"},
// ]
// for (const { age, name } of people) {
//     console.log({age, name})
// }

// const object = { name: "mike", mother: { name: "sara" }}
// const {
//     name,
//     mother: { name: motherName }
// } = object
// console.log({ name, motherName })
// console.log({ name: motherName})
// console.log(mother)

// const [{ prop: x } = { prop: 123 }] = []
// console.log(x) // 123
// const [{ prop: x } = { prop: 123 }] = [{}]
// console.log(x) // undefined

// const index = 1
// const { [`key${index}`]: valueOfTheIndex } = {key1: 123}
// console.log(valueOfTheIndex)

// const object = {};
// const array = [];
// ({foo: object.prop, bar: array[0]} = {foo: 123, bar: true});
// console.log(object);
// console.log(array)