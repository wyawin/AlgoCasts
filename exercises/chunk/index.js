// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // const chunked = []
    // array.forEach(element => {
    //     if(!chunked[chunked.length - 1] || chunked[chunked.length - 1].length == size){
    //         chunked.push([element])
    //     } else {
    //         chunked[chunked.length - 1].push(element)
    //     }
    // });

    // return chunked

    const chunked = []
    // const split_count = Math.ceil(array.length / size)
    // // let size_temp = size
    // for(let i = 0 ; i < split_count ; i++){
    //     chunked.push(array.slice(i * size, (i + 1) * size))
    //     // size_temp += size
    // }

    let index = 0
    while(index < array.length){
        chunked.push(array.slice(index, index + size))
        index += size
    }

    return chunked
}

module.exports = chunk;
