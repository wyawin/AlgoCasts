// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // return str.charAt(0).toUpperCase() + str.slice(1);
    const splitSpace = []
    for(let s of str.split(' ')){
        s = s.charAt(0).toUpperCase() + s.slice(1)
        splitSpace.push(s)
    }
    return splitSpace.join(' ')
}

module.exports = capitalize;
