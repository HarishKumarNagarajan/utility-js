const tail = (array) => {
    return array.slice(1);
}

console.log(tail([1,2,3,4]));
console.log(tail([]));


module.exports = tail;