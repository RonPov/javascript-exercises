const removeFromArray = function(list, other) {
    for(i=1; i<arguments.length; i++){
        while(list.includes(arguments[i])){
            let index = list.indexOf(arguments[i]);
            list.splice(index, 1)
        }
   

};

return list

};

// Do not edit below this line
module.exports = removeFromArray;
