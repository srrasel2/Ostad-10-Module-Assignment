//1st Question Answer(function) Here---------------------


function calculateSum (sum1, sum2) {

    const calculet = sum1+sum2;
    console.log(calculet);
}

calculateSum(10, 40);



//2nd Question Answer(function) Here---------------------

function isEven (a) {
    const evenValue = a % 2;
    if (evenValue===0){
        console.log(true);
    }
    else{
        console.log(false);
    }
 }
 isEven(21);


 
//3rd Question Answer(function) Here---------------------

const numbersArray = [5, 38, 80,92, 91, 44];
function findMax (num) {
    
    return Math.max(...num);    
}
console.log(findMax(numbersArray));



//4th Question Answer(function) Here---------------------


function filterOddNumbers(numbers) {
    const result= numbers.filter(num => num % 2 !== 0);
    console.log(result);
}

const numbers = [5, 4, 11, 7, 13, 6, 2, 8, 10];
filterOddNumbers(numbers);


//5th Question Answer(function) Here---------------------

function countWords(str) {
    const words = str.trim().split(/\s+/);
    
    let wordsLenth = words.length;
    console.log(wordsLenth);
}

const inputString = "Bangladesh is my mother land";
countWords(inputString);



//6th Question Answer(function) Here---------------------


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const inputArray = [1, 1, 2, 3, 4, 4, 5, 1,2];
const uniqueArray = removeDuplicates(inputArray);

console.log(uniqueArray);
