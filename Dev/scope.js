//This is global scope
let globalScope = "John";
function mainFunc(){
    //function scope
    let functionScope = "name";
    console.log(functionScope); //executed first
    console.log(globalScope); //after executed.
}
mainFunc()

function blockScope(){
    if(true){
        let scopeBlock = "JOhn"; //block level scope
        console.log(scopeBlock);
    }
    //console.log(scopeBlock)
}
blockScope();