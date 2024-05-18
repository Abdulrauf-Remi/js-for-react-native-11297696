function processArray(numArray) {
    return numArray.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

const numArray = [1,2,3,4,5,6,7,8,9,10];
console.log(processArray(numArray));


let strArr = ["Remi", "Adeleke", "Mango", "University", "Legon", "America"];
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 4];


function formatArrayStrings(strArr, numArr) {
    let formattedArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            formattedArr.push(strArr[i].toUpperCase());
        } else {
            formattedArr.push(strArr[i].toLowerCase());
        }
    }
    return formattedArr;
};



console.log(formatArrayStrings(strArr, numArr));

module.exports = {formatArrayStrings};