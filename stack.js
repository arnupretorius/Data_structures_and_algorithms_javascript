/* Stack data structure */

// functions: push, pop, peek, length

var letters = [];

var word = "dude";

var rword = "";

for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if (rword == word){
    console.log(word + " is a palindrome");
}
else {
    console.log(word + " is not a palindrome");
}