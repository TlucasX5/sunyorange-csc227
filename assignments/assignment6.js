//Assignment 6 Chapter 7

//p.266 #8

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--){
        result += str.charAt(i);
    }
    return result;
}

function isSentencePalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[, ' ]/g, ""); 
    return str === reverse(str);
}

isSentencePalindrome("Madam, I'm Adam");
isSentencePalindrome("im a palidrome");


//p.267 #11

function createOrdinalForm(n) {
    const i = n % 10; 
    const j = n % 100;
    if (i === 1 && j !== 11) {
        return n + "st";
    } else if (i === 2 && j !== 12) {
        return n + "nd";
    } else if (i === 3 && j !== 13) {
        return n + "rd";
    } else {
        return n + "th";
    }
}

  console.log(createOrdinalForm(1));
  console.log(createOrdinalForm(11));
  console.log(createOrdinalForm(12));
  console.log(createOrdinalForm(13));
  console.log(createOrdinalForm(22));
  console.log(createOrdinalForm(33));  
  console.log(createOrdinalForm(50));


//p.268 #13

function addCommas(d) {
    let length = d.toString().length;
    let num = d.toString();

    if (length > 3) { 
        let result = "";
        let ctr = 0;
        for(let i=length-1; i>=0; i--) {
            ctr++;
            result = num.charAt(i) + result; //returns digit associated with the index (i) and concats to result        
            if ((ctr === 3) && (i !== 0)) {
                result = "," + result;
                ctr = 0;
            }
        }
        return(result);
    }else {
        return("The number " + num + " is too short for a comma");
    }
}

addCommas(10000);
addCommas(100000);
addCommas(1000000);
addCommas(100);