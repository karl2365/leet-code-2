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
 * Complete the 'makeAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagrams(a, b) {
    // Write your code here
    //set up objects of the alphabet with 0 counts
    let A = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}   
    let B = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0} 
    // populate the objects with counts of the input strings by character
    for (let i = 0; i < a.length; i++){
        A[a[i]] += 1
    }
    for (let i = 0; i < b.length; i++){
        B[b[i]] += 1
    }

    let count = 0;
    // compare the counts in each object adding the difference to the counter variable
    for(let i = 97; i <= 122; i ++){
        let x = String.fromCharCode(i);
        if (A[x] < B[x]){
            count += B[x] - A[x];
        }
        else if (B[x] < A[x]){
            count += A[x] - B[x];
        }

        
    }
    return count;


}

function main() {