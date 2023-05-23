// 65 to 90 uppercase. 65 = A
// 97 to 122 lowercase. 97 = a

let sentence = []

function randNum(){
    return Math.floor(Math.random() * (122 - 97 + 1) + 97);
}



function generateWord(){
    let word = ''
    let len = Math.floor(Math.random() * (7 - 3 + 1) + 3);
    for( let i = 0; i < len; i++){
        word += String.fromCharCode(randNum())
    }
    return word
}

function generateSentence(){
    let sentenceLength = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    for (let i = 0; i < sentenceLength; i++){
        sentence.push(generateWord())
    }
    return sentence
}

//const utterance = new SpeechSynthesisUtterance(generateSentence());
//window.speechSynthesis.speak(utterance);

// console.log(generateSentence());
// console.log(generateSentence());
// console.log(generateSentence());




console.log([1,2,3,4,5].reduce((tot, val) => tot + val));

// let timer;
// return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), t);
// }
//
//
// for (let i = functions.length -1; i >= 0; i--){
//      x = functions.pop()(x)
//  }


function abcd(x,y){
    console.log(arguments[0]);
    return x+y
}


//abcd(1,2)
const obj = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(digits) {
    if (!len) return []
    let len = digits.length
    let ans = []

    const dfs = (ind, str) => {

        if (ind === len) ans.push(str)
        else {
            let letters = obj[digits[pos]]

            for (let i = 0; i < letters.length; i++)
                dfs(ind+1, str+letters[i])
        }
    }


    dfs(0,"")
    return ans
};

let x = [2,3,1,1,4]

var jump = function(N) {
    let len = N.length - 1, curr = -1, next = 0, ans = 0;

    for (let i = 0; next < len; i++) {

        if (i > curr) ans++, curr = next

        next = Math.max(next, N[i] + i)
    }

    return ans
};

console.log(jump(x));
