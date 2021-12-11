// function printLog(a = 1) {
//     console.log({ a })
// }
// printLog()
// printLog(3)

// function getDefault() {
//     console.log("called getDefault")
//     return 1
// }

// function printLog(a = getDefault()) {
//     console.log({ a })
// }

// printLog()
// printLog(3)

// function required() {
//     throw new Error("no parameter")
// }

// function printLog(a = required()) {
//     console.log({ a })
// }

// printLog(10)
// printLog()

// function printLog(a) {
//     const rest = Array.from(arguments).splice(1)
//     console.log({a, rest})
// }
// printLog(1, 2, 3)

// function getValues1(numbers, greaterThan, lessThan) {
//     return numbers.filter(item => greaterThan < item && item < lessThan)
// }

// function getValues2({numbers, greaterThan, lessThan}) {
//     return numbers.filter(item => greaterThan < item && item < lessThan)
// }

// const numbers = [10, 20, 30, 40]
// const result1 = getValues1(numbers, 5, 25)
// const result2 = getValues2({ numbers, greaterThan: 5, lessThan: 25})

// function getValues({ numbers, greaterThan = 0, lessThan = Number.MAX_VALUE}) {
//     return numbers.filter(item => greaterThan < item && item < lessThan)
// }

// const numbers = [10, 20, 30, 40]
// console.log(getValues({ numbers, greaterThan: 5, lessThan: 25}))
// console.log(getValues({ numbers, greaterThan: 15}))
// console.log(getValues({ lessThan: 25, numbers}))

// function f1({p1, p3, ...rest}) {
//     console.log({p1, p3, rest})
// }

// f1({p1: "a", p2: "b", p3: "c", p4: "d"})
// f1({p1: "a", p3: "b"})

// const add = (a, b) => a + b;
// const add5 = a => a + 5;
// const addAndReturnObject = (a, b) => ({ result: a + b })

const add = (a, b) => {
    if (a <= 0 || b <= 0) {
        throw new Error("must be positive number")
    }
    return a + b
}

const printLog = (...rest) => console.log(rest)
printLog(1, 2)
