let pattern = new RegExp("s$");
let pattern = /s$/;
let pattern2 = /s$/g;


// As a general rule, however, if you want to include any of these punctuation characters literally in a regular expression, you must precede them with a \.
// ^ $ . * + ? = ! : | \ / ( ) [ ] { }

const backslashRegEx = /\/\|/


// CHARACTER CLASSES


// Individual literal characters can be combined into character classes by placing 
// them within square brackets.
// A character class matches any one character that is contained within it. 


const characterClass = /[abc]/gi


// Negated character classes can also be defined; 
// these match any character except those contained within the brackets.
// A negated character class is specified by placing a caret(^) as the first character inside the left bracket.

const characterClass = /[^abc]/gi
