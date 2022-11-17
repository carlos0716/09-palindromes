const palindromes = function (a) {
    
        let stringToReverse = a;
        let newArray = stringToReverse.split("");
        let reversedArray = newArray.reverse();
        let newString = reversedArray.join("");
        // let car = a.split('');
        // let car2 = newString.split('');
        let aNoPunct = a.replace(/[.,\/#!$%\^&\-_`~()]/g, '')
                        .replace(/\s+/g,"")   ;;

        let newStringNoPunct = newString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                                        .replace(/\s+/g,"")   ;
        let aAllCase = aNoPunct.toLowerCase();
        let newStringAllCase = newStringNoPunct.toLowerCase();
        console.log(aAllCase);
        console.log(newStringAllCase)
         
        
       
        if (aAllCase === newStringAllCase) {
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
