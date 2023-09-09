// default parameter provided
function sum(a = 0, b = 0, c = 2){
    let total = (a + b) * c;
    console.log(a, b)
    return total; 
}
console.log(sum(5,5))

// dynamic string
// -----example-1 numeric,string

const a = 10;
const b = 20;
const result = `the sum of ${a} and ${b} is ${a + b}`;

console.log(result)
// ------example-2 string

const myName = "shahriar \n"+
"salam \n"+
"arman";
console.log(myName)

// ------example-3  array,object 
const numbers = [10 , 20, 30, 40];
const student = {stdName: 'arman', age: 18};
const math = `the sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math);

// function expression
// arrow function

const add1 = (a,b) => a + b;
console.log(add1(10, 2))

const add2 = (a, b, c, d) => a + b + c + d;
console.log(add2(10, 20, 30, 40))

const multiply = (a, b) => a * b;
console.log(multiply(20 , 20))

// expression object
const getAge = (person) => person.age;
const student2 = {fullName: "shahriar salam arman" , age:18 };
const age = getAge(student2);
console.log(age)

// expression array
const getThird = num => num[2];
const third = getThird([93, 53, 39, 93]);
console.log(third)

// expression large arrow function

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const answer = sum + mult;
    return answer;
}
console.log(doMath(1, 2, 3))