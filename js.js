
//functii
///functii simple


function logHelloToConsole(){
    console.log("Hello");
}

logHelloToConsole();
logHelloToConsole();
logHelloToConsole()

//functii cu parametrii
/**
 * This function logs in conole 2 numbers and their sum
 * @param {number} a 
 * @param {number} b 
 */
function logSum(a , b){
    let sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
}

logSum(2, 3);
logSum(3, 5);