const leapYears = function(year) {
    if(year/4 == Math.floor(year/4)){
        if(year/100 == Math.floor(year/100)){
            if(year/400 == Math.floor(year/400)){
                return true
            } else{
                return false
            }
        }else{
            return true
        }
    } else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
