// const person = null
// const name = person?.name
// const name = (person === null || person === undefined) ? undefined : person.name
// console.log(name)

// const person = {
//     getName: () => 'abc',
// }
// const name = person.getName?.()
// console.log(name)

// function loadData(onComplete) {
//     console.log("loading...")
//     onComplete?.()
// }
// loadData()

// const person = { friends: null, mother: null }
// const firstFriend = person.friends?.[0]

// const prop = "name"
// const name = person.mother?.[prop]

// console.log(firstFriend)
// console.log(name)

// const name =
//     person &&
//     person.friends &&
//     person.friends[0] &&
//     person.friends[0].mother &&
//     person.friends[0].mother.name

// const name2 = person?.friends?.[0]?.mother?.name

const person = {}
const name = person?.friends?.[0]?.mother?.name ?? "default name"
console.log(name)