// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counter = [0]
    let arr = [root, 's']

    while(arr.length > 1){
        
        const first = arr.shift()
        if(first === 's'){
            arr.push('s')
            counter.push(0)
        } else {
            counter[counter.length - 1] += 1
            arr.push(...first.children)
        }
    }

    return counter
}

module.exports = levelWidth;
