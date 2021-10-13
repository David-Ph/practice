// ? Flags
let caseInsensitive = /regex/i; // i = case insensitive
let globalMatches = /regex/g; // g = global / more than one matches

// ? expresions
let matchStrings = /strings/gi; // a regex that will match string called 'words'
let matchLetters = /[a-z]/gi; // a regex that will match letters a to z
let matchSeverals = /[bcm]at/gi; // will match bat, cat, mat
let matchWildCard = /[.un]/gi; // will match *un like fun, bun, mun, sun, etc
let matchNumbers = /[0-6]/gi; // match number 0 to 6
let matchOccurances = /a+/gi; // match one or more occurances of a
let matchZeroOrMore = /go*/; // match zero or more occurances of g + o

let negateExpressions = /[^aiueo]/gi; // match everything but aiueo
