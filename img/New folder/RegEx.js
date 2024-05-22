// with regular expression constructor
// let regex = new Regexp('pattern', 'flags')

//with regular expression literal
// let regxl = /pattern/flags;

// let regexLnoflag = /pattern/

/*
there are three flags
1-> i: case insensitive matching
2-> g: Global search (find all matches)
3-> m: Multiline mode
*/

// We can match literal characters
let pattern = /hello/;
let str = "Hello"
console.log(pattern.test(str))

let pattern1 = /Hello/;
let str1 = "hi Hello dear"
console.log(pattern1.test(str1))

let pattern2 = /hello/i;
let str2 = "Hello"
console.log(pattern2.test(str2))

// // Character Classes:
let pattern3 = /[0-9]/i;
// let str3 = 123
let str3 = '123'
console.log(pattern3.test(str3))

let pattern4 = /[aeiou]/i;
let str4 = "Hello"
// let str4 = 'Hll'
console.log(pattern4.test(str4))

let pattern5 = /[myJsclass]/i;
// let str3 = "Hello"
let str5 = "Hll"
console.log(pattern5.test(str5))

/*
Special Characters: They are used to define specific patterns or conditions
for matching text.

1. . (Period): Matches any single character except for a newline.
2. ^ (Caret): Matches the start of a string.
3. $ (Dollar): Matches the end of the string.
4. * (Asterisk): Matches the preceeding character 0 or more times.
5. + (Plus): Matches the preceding character 1 or more times.
6. ? (Question Mark): Matches the preceding character 0 or 1 time (makes it
    optional).
7. [] (Square Brackets): Matches any one  of the characters within the
    brackets.
8. | (Pipe): Acts as OR operator, matches either the expression before or
    after the pipe.
9. ()(parentheses): Groups parts of a regular expression before or 
    after the pipe 
*/

// // The . (Period):
let pattern6 = /h..t/i;
// let str6 = "Ho t"
let str6 = "Hatt"
console.log(pattern6.test(str6))

// The ^ (Carets):
let pattern7 = /^h..lo/i;
// let pattern7 = /^hello/i;
let str7 = "hello world"
// let str7 = "Aello world"
console.log(pattern7.test(str7))

//  The (Dollar):
let pattern8 = /w..d$/i
let str8 = "hello world"
console.log(pattern8.test(str8))

// The * (Asterisk):
let pattern9 = /wo*rld$/i;
let str9 = "hello woooooooooooooooorld"
console.log(pattern9.test(str9))

// The + (Plus):
let pattern10 = /wo+rld$/i;
let str10 = "hello wrld"
console.log(pattern10.test(str10))

// The ? (Question Mark):
let pattern11 = /wo?orld$/i;
// let str11 = "hello world"
// let str11 = "hello wrld"
// let str11 = "hello woorld"
let str11 = "hello woooorld"
console.log(pattern11.test(str11))

// The [] (Square Brackets):
let pattern4a = /[aeiou]/i
let str4a = "Hello"
console.log(pattern4a.test(str4a))

// The | (pipe):
let pattern12 = /we|ar/i;
let str12 = "hello world how are you"
console.log(pattern12.test(str12))

// The () (Parentheses):
let pattern13 = /(red|green|blue) apple/i;
let str13 = "red apple"
let str13a = "green apple"
let str13b = "blue apple"
let str13c = "black apple"
console.log(pattern13.test(str13))
console.log(pattern13.test(str13a))
console.log(pattern13.test(str13b))
console.log(pattern13.test(str13c))

/*
Quantifiers specify how many times a character or a group of character can
occur.
*: matches the precedding character 0 or more times
+: matches the precedding character 1 or more times
?: matches the precedding character 0 or 1 times

{n}: matches the preceding character exactly n times
{n,}: matches the preceding character at least n times
{n,m}: matches the preceding character from n to m times
*/ 

// The {n} (Exact Occurences):
let pattern14 = /a{3}/i;
// let str14 = "aaa"
let str14 = "aaaa"
console.log(pattern14.test(str14))

let strAnything = 'This regex will match any string that contains the word "like" anywhere'