// Search
"JavaScript".search(/script/ui)  // => 4
"Python".search(/script/ui)      // => -1

// Replace

console.log("javascript".replace(/javascript/gi, "JavaScript"));

// replace() is more powerful than this, however.Recall that parenthesized subexpressions of a regular expression are numbered from left to right and that the regular expression remembers the text that each subexpression matches.If a $ followed by a digit appears in the replacement string, replace() replaces those two characters with the text that matches the specified subexpression.This is a very useful feature.You can use it, for example, to replace quotation marks in a string with other characters:

let quote = /"([^"]*)"/g;


console.log('He said "stop"'.replace(quote, 'wow $1 wow'))

// With named capturing groups
let quote2 = /"(?<quotedText>[^"]*)"/g;
'He said "stop"'.replace(quote, '«$<quotedText>»') // => 'He said «stop»'


let s = "15 times 15 is 225";
s.replace(/\d+/gu, n => parseInt(n).toString(16))


// Usefull domains cases with RegEx


// MATCH

// The match() method is the most general of the String regular expression methods. It takes a regular expression as its only argument (or converts its argument to a regular expression by passing it to the RegExp() constructor) and returns an array that contains the results
// of the match, or null if no match is found. If the regular expression has the g flag set, the method returns an array of all matches that appear in the string.

"7 plus 8 equals 15".match(/\d+5/g) // => ["7", "8", "15"]


let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
let fullurl, protocol, host, path;

if (match !== null) {
    fullurl = match[0]; // fullurl == "http://www.example.com/~david"
    protocol = match[1]; // protocol == "http"
    host = match[2]; // host == "www.example.com" path = match[3]; // path == "~david"
}


// SPLIT()
console.log("123,456,\n789".split(","));
console.log("123,456,789".split(","));

console.log("1, 2, 3,\n4, 5".split(/\s*,\s*/));


//  Where we can it use?

// 1) Поиск
// 2) Валидация ра
// 3) Работа с большими текстами и / или их трансформировнаие.
// 4) Рефакторинг кода в ИДЕ

// Рассказать про пробелы