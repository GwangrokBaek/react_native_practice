// if (true) {
//     const i = 0;
// }
// console.log(i);

// let foo = 'bar1'
// console.log(foo)
// if (true) {
//     let foo = 'bar2'
//     console.log(foo)
// }
// console.log(foo)

// console.log(foo)
// const foo = 1

// const foo = 1
// {
//     console.log(foo)
//     const foo = 2
// }

var foo = 1;
(function () {
    console.log(foo)
    var foo = 2
})();

const bar = { prop1: 'a'};
bar.prop1 = 'b'
bar.prop2 = 123
console.log(bar)
const arr = [10, 20]
arr[0] = 100
arr.push(300)
console.log(arr)

const foobar = Object.freeze({prop1: 'a'})
foobar.prop1 = 'b'
console.log(foobar)
// Object.preventExtensions
// Object.seal
// Object.freeze