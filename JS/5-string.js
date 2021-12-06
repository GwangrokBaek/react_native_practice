// const s1 = 'abc'
// const s2 = "abcd"
// const s3 = `abcde`
// console.log(s1.length, s2.length, s3.length)

// const name = 'mike'
// const age = 23
// const text1 = 'name: ' + name + ', age: ' + age
// const text2 = `name: ${name}, age: ${age}`
// console.log(text1)
// console.log(text2)

// const text3 = '할 일 목록\n* 운동하기\n* 요리하기'
// console.log(text3)

// const text4 = `할 일 목록
// * 운동하기
// * 요리하기
// `
// console.log(text4)

// const s1 = 'abcd'
// const c1 = s1[1]
// console.log(c1)

// const s2 = 'abcd'
// s2[1] = 'z'
// console.log(s2)

// const input = 'This is my car. The car is mine'
// const output = input.replace('car', 'bike')
// console.log({input, output})
// console.log(input.replace(/car/g, 'bike'))
// console.log(input.replaceAll('car', 'bike'))

// const s1 = 'This is my car. The car is mine'
// console.log(s1.includes('car'))
// console.log(s1.includes('my car'))
// console.log(s1.includes('my car', 10))

// console.log(s1.startsWith('This is'))
// console.log(s1.startsWith('is'))

// console.log(s1.endsWith('mine'))
// console.log(s1.endsWith('is'))

// const s1 = 'This is my car. The car is mine'
// console.log(s1.substr(0, 4))
// console.log(s1.substr(5, 2))
// console.log(s1.substr(16))

// let pos = s1.indexOf(' ')
// console.log(s1.substr(0, pos))
// pos = s1.lastIndexOf(' ')
// console.log(s1.substr(pos + 1))

// console.log(s1.slice(5, 7))

// const s1 = 'This is my car. The car is mine'
// console.log(s1.split(' '))

// const arr = s1.split('.')
// console.log(arr)
// console.log(arr.map(item => item.trim()))

// console.log(s1.split(' ').join())
// console.log(s1.split(' ').join('..'))

// console.log('12'.padStart(5, '0'))
// console.log('123'.padStart(5, '0'))
// console.log('123'.padStart(5, '*'))
// console.log('123'.padEnd(5, '*'))

// const s1 = 'This is my car. The car is mine'
// console.log(s1.match(/T[^\s-]*/g))

// function taggedFunc(strings, ...expressions) {
//     console.log({ strings, expressions })
//     return 123
// }

// const v1 = 10
// const v2 = 20
// const result = taggedFunc`a-${v1}-b-${v2}`
// console.log({result})

// taggedFunc`a-${v1}-b-${v2}-c`
// taggedFunc`a-${v1}-b-${v2}`
// taggedFunc`${v1}-b-${v2}`

function highlight(strings, ...expressions) {
    return strings.reduce(
        (acc, str, i, arr) => {
            return(
            expressions.length === i
            ? `${acc}${str}`
            : `${acc}${str}<strong>${expressions[i]}</strong>`)},
            '',
    )
}

const v1 = 10
const v2 = 20
const result = highlight`a ${v1} b ${v2}`
console.log(result)

highlight(['a ', 'b ', ''], v1, v2)