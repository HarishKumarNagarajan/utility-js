const matchCondition = {'filterUpperCase': 1};
var temp = [];


const TFCondition = (inputArray,condition) => {
    if(inputArray.length === 0){
        return temp;
    }
    const number = inputArray.shift();
    const fullCondition = Boolean(number)+condition;
    console.log(fullCondition,eval(fullCondition), condition);
    if(eval(fullCondition)){
        temp.push(number);
    }
    return TFCondition(inputArray,condition);
}

const baseCondition = (inputArray,condition) => {
    if(inputArray.length === 0){
        return temp;
    }
    const number = inputArray.shift();
    const fullCondition = String(number)+condition;
    console.log(fullCondition,eval(fullCondition), condition);
    if(eval(fullCondition)){
        temp.push(number);
    }
    return baseCondition(inputArray,condition);
}

const filterUpperCase = (inputArray) => {
    if(inputArray.length === 0){
        return temp;
    }
    const letter = inputArray.shift()
    if(letter === letter.toUpperCase()){
        temp.push(letter);
    }
    return filterUpperCase(inputArray);
}

const filter = (array, condition) => {
    var result = [];
    temp = [];
    switch(matchCondition[condition]){
        case 1:
            result = filterUpperCase(array)
            break;
        default:
            if (condition == ' == true' || condition == ' == false'){
                result = TFCondition(array, condition);
                break;
            }
            result = baseCondition(array, condition)
            
    }
    return result;
}

module.exports = filter;