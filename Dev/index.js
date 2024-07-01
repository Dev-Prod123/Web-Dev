//Data types
//let/const  storage_name = value;

let name = "john"; //string
let age = 23; //number
let isAdmin = true; //boolean
let main; //undefined
let dummy = null; //object by default so we can defined empty objects


//let is block level example
function mainFunc() {
    if (true) {
        var x = 10; // outside block by within function level
        let y = 20; //within block level but not outside block
        const z = 30; // within block outside block b=not working 
        console.log(`This is var ${x}`);
        console.log(`This is let ${y}`);
        console.log(`This is const ${z}`);

    }
    console.log(`This is var ${x}`); //output 10
    console.log(`This is let ${y}`); //reference error
    console.log(`This is const ${z}`); //reference error.
}
mainFunc();