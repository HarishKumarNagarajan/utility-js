var maxValue = 0;
const max = (array) => {
    if(array.length === 0) {
        return maxValue;
    }
    const temp = array.shift()
    if(temp>maxValue){
        maxValue = temp;
    }
    return max(array);
}


module.exports = max;