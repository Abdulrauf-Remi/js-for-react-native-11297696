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