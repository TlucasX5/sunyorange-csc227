function getStats(array) {
    let sum = 0;
    let avg = 0;
    let max = array[0];
    let min = array[0];
    let count = array.length;
    let median = "";


    // get Sum, Max, Min
    for (let i = 0; i < count; i++) {
        sum += array[i];

        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
    }    

    // get median
    let arraysort = array.sort();
    const middle = (count + 1) / 2;
    if (count%2 == 0){
        median = arraysort[middle - 1];
    } else {
        median = arraysort[middle - .5];
    }

    //get average
    avg = sum / count;

    // build dictionary object using variables
    let stats = {
        "count" : count,
        "sum" : sum,
        "average" : avg,
        "median" : median,
        "max" : max,
        "min" : min
    };

    // print dictionary to console
    console.log(JSON.stringify(stats));
}

// define array value and run function
let array = [3, 7, 0, -1, 2];
getStats(array);