// ? Flags
let caseInsensitive = /regex/i; // i = case insensitive
let globalMatches = /regex/g; // g = global / more than one matches

// ? expresions
let orRegex = /dog|cat|bird|fish/; // match dog or cat or bird or fish
let matchStrings = /strings/gi; // a regex that will match string called 'words'
let matchLetters = /[a-z]/gi; // a regex that will match letters a to z
let matchSeverals = /[bcm]at/gi; // will match bat, cat, mat
let matchWildCard = /[.un]/gi; // will match *un like fun, bun, mun, sun, etc
let matchNumbers = /[0-6]/gi; // match number 0 to 6
let matchOccurances = /a+/gi; // match one or more occurances of a
let matchZeroOrMore = /go*/; // match zero or more occurances of g + o
let greedyMatching = /t[a-z]*i/gi; // will match pattern that starts with t and ends with i, with some letters in between. By default, regex will choose the longest possible
let lastRegex = /caboose$/; // will match caboose in the end of the string
let shortHand = /\w/g; // match alphanumeric shorthand for /[a-zA-Z0-9_]/
let digitShortHand = /\d/g; // match every number shorthand for /[0-9]/
let nonDigit = /\D/g; // match every non number, shorthand for /[^0-9]/
let whiteSpaces = /\s/g; // match every whitespaces
let nonWhiteSpaces = /\S/g; // match every non white spaces
let multipleA = /a{3,5}h/; // in ah string, only match those who has a that apepars between 3-5 times
let lowerCount = /haz{4,}ah/i; // in hazah string, only match those who has z that appears more than 4 times

let negateExpressions = /[^aiueo]/gi; // match everything but aiueo
let negateBeginning = /^Cal/gi; // will negate only Cal at the beginning
let negateLettersAndNumbers = /\W/g; // will negate alphanumberic, shorthand for [^a-zA-Z0-9_]
