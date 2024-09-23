// #2 Return the largest of 3 arguments numeric or string p.112
function max3(x, y, z) {
    if ((x > y) && (x > z)) {
        return x;
    } else if ((y > x) && (y > z)) {
        return y;
    } else {
        return z;
    }
}
console.log(max3(30, 50, 20));
console.log(max3("bite", "bat", "bit"));
console.log(max3(3.14, 3.141, -3.145));


// #5 Sum of odd integers p.112
function sumOfOddIntegers(n) {
    let sum = 0;
    n = (2 * n) - 1;
    // Start from 1 and increment by 2 for odd numbers
    for (let i = 1; i <= n; i += 2) {
            sum = sum + i;
    }
    return sum;
}
    
console.log("The sum of odd numbers for this integer is: " + sumOfOddIntegers(4));
console.log("The sum of odd numbers for this integer is: " + sumOfOddIntegers(5));
console.log("The sum of odd numbers for this integer is: " + sumOfOddIntegers(6));



// #9 rewrite "for" loop to work with "while" loop p.113
function countdown(start) {
    let t = start;
    while (t >= 0) {
        console.log(t);
        t--;
    }
}

countdown(10)
countdown(50)
countdown(100)