// https://github.com/rabius-sunny/js-apply

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    if (kilometer > 0) {
        // Condition checks if the value is positive or negative. 
        return meter;
    }
    return 'Plese enter correct distance value.'
}


function budgetCalculator(totalWatch, totalMobile, totalLaptop) {
    var singleWatchPrise = 50;
    var singleMobilePrise = 100;
    var singleLaptopPrise = 500;
    var totalWatchPrise = totalWatch * singleWatchPrise;
    var totalMobilePrise = totalMobile * singleMobilePrise;
    var totalLaptopPrise = totalLaptop * singleLaptopPrise;
    var totalCosts = totalWatchPrise + totalMobilePrise + totalLaptopPrise;

    if (totalWatch > 0 && totalMobile > 0 && totalLaptop > 0) {
        // Condition checks if any number of devices is included or not.
        return totalCosts;
    }
    return 'Please enter actual number of your device'
}


function hotelCost(days) {
    var costs = 0;

    if (days <= 10) {
        costs = days * 100;
    } else if (days <= 20) {
        var firstTenthCosts = 10 * 100;
        var remaingDays = days - 10;
        var secondTenthCosts = remaingDays * 80;
        costs = firstTenthCosts + secondTenthCosts;
    } else {
        var firstTenthCosts = 10 * 100;
        var secondTenthCosts = 10 * 80;
        var remaingDays = days - 20;
        var thirdTenthCosts = remaingDays * 50;
        costs = firstTenthCosts + secondTenthCosts + thirdTenthCosts;
    }
    return costs;
}


function megaFriend(names) {
    var largest = names[0];

    for (var i = 0; i < names.length; i++) {
        var char = names[i];
        if (char.length > largest.length) {
            largest = char;
        }
    }
    if (names != '') {
        // Condition checks if user entered an array of string or an empty array.
        return largest;
    }
    return 'Please enter an array with some string'
}
// Please give an Array of String as parameter to the function as like :
// var array = ['Salam', 'Mollik', 'Minhajul', 'Alom', 'Rafikul', 'Jhanker']