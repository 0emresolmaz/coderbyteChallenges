let arr = "DDLL";

let I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
let resultString ="";
let multiply=1;

let result = calc(arr);
console.log(result);

if (result>=1000) {
    for (let i = 0; i < Math.floor(result/M); i++) {
        resultString+="M"
        
    }
}
if (result%1000>=500) {
    for (let i = 0; i < (result%1000)/D; i++) {
        resultString+="D"
        
    }
}

if (result%500>=100) {
    for (let i = 0; i < (result%500)/C; i++) {
        resultString+="C"
        
    }
}

if (result%100>=50) {
    for (let i = 0; i < (result%100)/L; i++) {
        resultString+="L"
        
    }
}

if (result%50>=10) {
    for (let i = 0; i < (result%50)/X; i++) {
        resultString+="X"
        
    }
}

if (result%10>=5) {
    for (let i = 0; i < (result%10)/V; i++) {
        resultString+="V"
        
    }
}

if (result%5>=1) {
    for (let i = 0; i < (result%5)/I; i++) {
        resultString+="I"
        
    }
}



console.log(resultString);




function calc(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      
        if (arr[i] == "I") {
            result += multiply * I;
        }
        else if (arr[i] == "V") {
            result += multiply * V;
        }
        else if (arr[i] == "X") {
            result += multiply * X;
        }
        else if (arr[i] == "L") {
            result += multiply * L;
        }
        else if (arr[i] == "C") {
            result += multiply * C;
        }
        else if (arr[i] == "D") {
            result += multiply * D;
        }
        else if (arr[i] == "M") {
            result += multiply * M;
        }

    }
    return result;
}

