// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
function midpoint(list) {
    let begin = 0
    let slow = list.getAt(begin)
    let fast = slow
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    

    return slow
}

module.exports = midpoint;