let s = "Hello, world";
s.substring(1, 4);
s.slice(1, 4);
s.slice(-3); s.split(", ");

// Searching a string
s.indexOf("l")
s.indexOf("l", 3)
s.indexOf("zz");
s.lastIndexOf("l")



s.startsWith("Hell");
s.endsWith("!");
s.includes("or")


s.toLowerCase();
s.toUpperCase();
s.normalize();
s.normalize("NFD");
// => "hello, world"
// Unicode NFC normalization: ES6
// NFD normalization. Also "NFKC",
// Inspecting individual (16-bit) characters of a string
s.charAt(0)
s.charAt(s.length - 1)
s.charCodeAt(0);
s.codePointAt(0)



console.log("x".padStart(3))
"x".padEnd(3)

console.log("x".padEnd(3, "*"));
"x".padEnd(3, "-")




const

