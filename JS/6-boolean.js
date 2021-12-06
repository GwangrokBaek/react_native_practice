// const c1 = true
// const c2 = false
// if (c1 && c2) {
//     console.log('c1 && c2')
// }
// if (c1 || c2) {
//     console.log('c1 || c2')
// }

// const c1 = 123
// const c2 = 'abc'
// if (c1 && c2) {
//     console.log('c1 && c2')
// }
// if (c1 || c2) {
//     console.log('c1 || c2')
// }
// if (c1 && c2 && 0) {
//     console.log('c1 && c2 && 0')
// }
// if (c1 && c2 && NaN) {
//     console.log('c1 && c2 && NaN')
// }
// if (c1 && c2 && '') {
//     console.log(`c1 && c2 && ''`)
// }

// const c1 = 123
// const c2 = 'abc'
// const v1 = c1 && c2
// const v2 = c1 && c2 && 0
// const v3 = c1 && 0 && c2
// console.log({ v1, v2, v3})

// const v4 = c1 || c2
// const v5 = '' || c2
// console.log({v4, v5})

// const v6 = !!(c1 && 0 && c2)
// const v7 = !!(c1 || c2)
// console.log({v6, v7})

// const c1 = 123
// const c2 = 0
// c1 && console.log('log1')
// c2 && console.log('log2')

// const price = 0
// const name = ''
// const price2 = price || 1000
// const name2 = name || '이름을 입력해주세요'
// console.log(price2)
// console.log(name2)

// const person = {}
// const name = person.name ?? 'unknown'
// nullish coalescing
// const name = person.name === undefined || person.name === null ? 'unknwon' : person.name

// const product = { desc: '', price: 0}
// const descInput = product.desc ?? "상품 설명을 입력하세요"
// const priceInput = product.price ?? 1000

// const name = ''
// const title = ''
// const text = (name || title) ?? 'foo'

const name = ''
function getDefaultName() {
    console.log('called getDefaultName')
    return 'default name'
}
console.log(name ?? getDefaultName())
console.log(name || getDefaultName())