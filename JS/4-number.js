// console.log(Number.parseInt('123'))
// console.log(Number.parseInt('123.456'))
// console.log(Number.parseInt('123abc'))

// console.log(Number.parseFloat('123'))
// console.log(Number.parseFloat('123.456'))
// console.log(Number.parseFloat('123abc'))
// console.log(Number.parseFloat('123.456.789'))

// const v = Number.parseInt('abc')
// console.log(v)

// console.log('v', Number.isNaN(v))
// console.log('123', Number.isNaN(123))

// const w = 1 / 0;
// console.log(w)

// console.log('Infinity', w === Infinity)
// console.log('Number.isFinite', Number.isFinite(w))


// console.log(Math.pow(2, 53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))
console.log(9007199254740995 - 10)
console.log(9007199254740995n - 10n)

const a = 9007199254740995
const b = 10
const result = a - b
console.log(
    Number.isSafeInteger(a),
    Number.isSafeInteger(b),
    Number.isSafeInteger(result)
)
console.log("9007199254740995 - 10 =", result)

const c = 9007199254740991
const d = 10
const result2 = c - d
console.log(
    Number.isSafeInteger(c),
    Number.isSafeInteger(d),
    Number.isSafeInteger(result2)
)
console.log("9007199254740995 - 10 =", result2)

console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2)

console.log(Number.EPSILON)
function isSimilar(x, y) {
    return Math.abs(x-y) < Number.EPSILON
}
console.log(isSimilar(0.1 + 0.2, 0.3))

console.log(Math.random())
console.log(Math.max(30, 10, 55))
console.log(Math.pow(5, 3))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomInt(0, 10))
console.log(getRandomInt(0, 10))
console.log(getRandomInt(0, 10))