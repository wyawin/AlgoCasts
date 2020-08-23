// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   ' 0
//      '  ###  ' 1
//      ' ##### ' 2
//      '#######' 3
//      '0123456'
function pyramid(n, row = 0, stair = "") {
    // for(let i = 0 ; i < n ; i++){
    //     let stair = ""
    //     for(let j = 0 ; j < n + n - 1 ; j++){
    //         if(j >= n - i - 1 && j <= n + i -1){
    //             stair += "#"
    //         } else {
    //             stair += " "
    //         }
    //     }
    //     console.log(stair)
    // }
    if(row == n){
        return
    }

    if(stair.length == n + n - 1){
        console.log(stair)
        pyramid(n, row + 1)
        return
    }

    if(stair.length >= n - row - 1 && stair.length <= n + row - 1){
        stair += "#"
    } else {
        stair += " "
    }

    pyramid(n,row,stair)

}

module.exports = pyramid;
