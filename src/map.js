const matchCondition = {'cube':1,'identity':2,'object':3};
var _ = require('lodash');
var temp = [];

const cube = (inputArray) => {
    if(inputArray.length === 0){
        return temp;
    }
    temp.push(Math.pow(inputArray.shift(), 3))
    return cube(inputArray);
}

const someObject = (inputArray) => {
    if(inputArray.length === 0){
        return temp;
    }
    temp.push(inputArray.shift().x+1)
    return someObject(inputArray);
}

const map = (array,keyword) => {
    var result = [];
    temp = [];
    switch(matchCondition[keyword]){
        case 1:
            result = cube(array);
            break;
        case 2:
            result = _.identity(array);
            break;
        case 3:
            result = someObject(array);
            break;
        default:
            result = undefined;
    }
    return result;
}

module.exports = map;