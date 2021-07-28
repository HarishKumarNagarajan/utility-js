var minValue=999999;
const min = (array) => {

    if(array.length === 0) {
        return minValue;
    }
    const temp = array.shift()
    if(temp<minValue){
        minValue = temp;
    }
    return min(array);
}


module.exports = min;