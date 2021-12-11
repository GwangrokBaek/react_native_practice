// function makeAdd(v1) {
//     return function (v2) {
//         return v1 + v2
//     }
// }

// const add3 = makeAdd(3)
// console.log(add3(10))
// const add7 = makeAdd(7)
// console.log(add7(10))

function main() {
    let v = 0;
    function f1() {
        v++;
        console.log(v);
    }
    function f2() {
        v++;
        console.log(v);
    }
    return { f1, f2 };
}
const obj = main();
obj.f1();
obj.f2();
obj.f1();
obj.f2();