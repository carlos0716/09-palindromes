const palindromes = function (a) {
    
        let stringToReverse = a;
        let newArray = stringToReverse.split("");
        let reversedArray = newArray.reverse();
        let newString = reversedArray.join("");
        if (a === newString) {
            return true;
        }
            else {
                return false;
            }
};

// function reverseString(string) {
//     let stringToReverse = string;
//     let newArray = stringToReverse.split("");
//     let reversedArray = newArray.reverse();
//     let newString = reversedArray.join("");
//     return newString;
// }
// reverseString("hello");

// Do not edit below this line
module.exports = palindromes;
