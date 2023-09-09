const obj = {
    name:'arman',
    age: 18,
    address:'satbaria',
    info:['boys', 'running study', 'baper boro cele']
}

console.log(obj)

const jsonStringConvert = JSON.stringify(obj)
console.log(jsonStringConvert)

const jsonObjConvert = JSON.parse(jsonStringConvert)
console.log(jsonObjConvert)