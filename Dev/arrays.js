//Arrays are unordered collection of data stored in single variable
//in javascript arrays are used collection and manipulate the data

//concat
let arr = ["john", 123, "deo"];
let arr1 = [123, 234, "Deo"];
console.log(arr.concat(arr1));

//copywithin //target start end
let mainArr = [1, 2, 3, 4, 5];
mainArr.copyWithin(4, 10).forEach((ele, index) => {
    console.log(ele, index);
})
console.log(mainArr);

//arr.entries(); ==> key value pairs
//const mathod = ["john","Steven",123];
const obj = [
    { name: "John" },
    { age: 23 },
    { array: ["John", 23, "doe"] },
    {
        arr: [{
            properties: "yes",
            isAdmin: true
        }]
    }
]

for (let i = 0; i < obj.length; i++) {
    const element = obj[i];
    console.log(`index ${i}`);
    if (element.hasOwnProperty("name")) {
        console.log(`name ${element.name}`);
    }
    if (element.hasOwnProperty("age")) {
        console.log(`age ${element.age}`);
    }
    if (element.hasOwnProperty("array")) {
        console.log(`array ${element.array}`);
    }
    if (element.hasOwnProperty("arr")) {
        const arrElement = element.arr[0];
        console.log(`arr ${JSON.stringify(arrElement)}`);
        if (arrElement.hasOwnProperty("properties")) {
            console.log(`properties ${arrElement.properties}`);
        }
        if (arrElement.hasOwnProperty("isAdmin")) {
            console.log(`isAdmin ${arrElement.isAdmin}`);
        }
    }
}

//arr.every() return true or false
const numbers = [1,2,3,4,5];
const isPositive = (num) => num > 0;
console.log(numbers.every(isPositive));