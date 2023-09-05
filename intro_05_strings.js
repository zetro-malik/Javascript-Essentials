
// string is immutable, channot change a single character

const name = "zeeshan"
console.log(name)
console.log(name.length)

const name2 = 'azhar' //also can used single qoutes
console.log(name, name2)

//template literals 
const boy1 = "zeeshan"
const boy2 = "khubaib"
console.log(`${boy1} is a friend of ${boy2}`)

//escape squenece
console.log("zeeshan\'s laptop")


//string methods
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,5)) // start is included but end is not
console.log(name.slice(5)) // taking start and going to end
console.log(name.replace('zee','tee'))
console.log("    zeeehan  ".trim()) //removes wide-spaces
console.log(name.startsWith("zee")); // Check if the string starts with a specific substring
console.log(name.endsWith("shan")); // Check if the string ends with a specific substring
console.log(name.includes("ee")); // Check if the string includes a specific substring
console.log(name.charAt(2)); // Get character at a specific index

