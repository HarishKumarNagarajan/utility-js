const { isInteger } = require("lodash");

var temp;

const plusFunction = (inputArray) => {
    if(inputArray.length === 0){
        return temp;
    }
    temp+=inputArray.shift();
    return plusFunction(inputArray);
}

const reduce = (array, start) => {
    if (array.length===0 && !start){
        return undefined;
    }
    if(!start && isInteger(array[0])){
        temp = start || 0;
    } else {
        temp = start || '';
    }
    var result = plusFunction(array,start);
    return result;
}

console.log(reduce(['a','b','c']));

module.exports = reduce;