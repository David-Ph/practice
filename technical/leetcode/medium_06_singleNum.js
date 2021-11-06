var singleNumber = function (nums) {
    const newSet = new Set();

    nums.forEach(num => {
        if(newSet.has(num)){
            newSet.delete(num);
        }else{
            newSet.add(num);
        }
    });
    return [...newSet];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
