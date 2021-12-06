// const name = 'mike'
// const obj = {
//     age: 21,
//     name,
//     getName() {
//         return this.name
//     }
// }

// function makePerson1(age, name) {
//     return {age: age, name: name}
// }

// function makePerson2(age, name) {
//     return {age, name}
// }

// const name = 'mike'
// const age = 21
// console.log(name, age)
// console.log('name =', name, ', age =', age)
// console.log({name, age})

// function makeObject1(key, value) {
//     const obj = {}
//     obj[key] = value
//     return obj
// }

// function makeObject2(key, value) {
//     return {[key]: value}
// }

// Math.max(1, 3, 7, 9)
// const numbers = [1, 3, 7, 9]
// Math.max(...numbers)

// const arr1 = [1, 2, 3]
// const obj1 = {age: 23, name: 'mike'}
// const arr2 = [...arr1]
// const obj2 = {...obj1}
// arr2.push(4)
// obj2.age = 80

// console.log([1, ...[2, 3], 4]) // [1, 2, 3, 4]
// console.log(new Date(...[2018, 11, 24])) // 2018년 12월 24일

// const obj1 = { age: 21, name: 'mike'}
// const obj2 = {hobby: 'soccer'}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const obj1 = { x: 1, x: 2, y: 'a'}
const obj2 = { ...obj1, y: 'b'}
console.log({obj1, obj2})