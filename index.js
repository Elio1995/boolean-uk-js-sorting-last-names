const names = [`Mason`, `Marcora`, `Rico`, `Neves`, `Ivanov`] 
const lastNames = names.push(prompt (`What is your last name?`))

console.log("Names: ", names)

const alphabeticallysorted = names.sort()

console.log("Alphabetically Sorted Names: ", alphabeticallysorted)

const mynameposition = names.indexOf("Mehmeti")

console.log("My Name Position: ", mynameposition)

// - Have an output that Uppercase's all names in the array

// const uppercasenames = names.map(toUpperCase)
// console.log("Uppercase Names: "uppercasenames)

for (const name of names) {
    console.log([name, name.toUpperCase()])
}