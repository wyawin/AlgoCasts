// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let mapA = buildMapChar(stringA)
    let mapB = buildMapChar(stringB)

    if(Object.keys(mapA).length !== Object.keys(mapB).length){
        return false
    } else {
        for(let a in mapA){
            if(mapB[a] != mapA[a]){
                return false
            }
        }
        return true
    }
    

}

function buildMapChar(str){
    const charMap = {}

    for(let c of str.replace(/[^\w]/g,"").toLowerCase()){
        charMap[c] = charMap[c] + 1 || 1
    }

    return charMap
}

module.exports = anagrams;
