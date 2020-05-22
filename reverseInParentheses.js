'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'reverseInParentheses' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function reverseInParentheses(s) {
    // Write your code here

    let ret = [];
    let rev = [];
    let reversing = false;

    for(let i = 0; i<s.length; i++){
        if (s[i] !== '(' && s[i] !== ')'){
            if (reversing === true){
                rev.push( s[i]);
            }
            else {
                ret.push(s[i]);
            }
        }
        if (s[i] === '('){
            reversing = !reversing;
        }
        if (s[i] === ')'){
            reversing = !reversing;
            ret.push(rev.reverse().join(''))
            rev = [];
        }
    }
    return ret.join('');
}
function main() {