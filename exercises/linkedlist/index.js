// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null){
        this.next = next
        this.data = data
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        const node = new Node(data, this.head)
        this.head = node
    }

    size(){
        let count = 0;
        let node = this.head
        while(node != null){
            node = node.next
            count++
        }

        return count
    }

    getFirst(){
       return this.head
    }

    getLast(){
        // if(!this.head){
        //     return null
        // }
        // let node = this.head
        // while(node.next != null){
        //     node = node.next
        // }

        // return node
        return this.getAt(this.size() - 1)
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head.next
    }

    removeLast(){
        if(!this.head){
            return
        }

        if(!this.head.next){
            this.head = null
            return
        }

        let previous = this.head
        let node = this.head.next
        while(node.next){
            previous = node
            node = node.next
        }

        previous.next = null
    }

    insertLast(data){
        let newNode = new Node(data)
        let last = this.getLast()

        if(last){
            last.next = newNode
        } else {
            this.head = newNode
        }
    }

    getAt(index){
        if(!this.head){
            return null
        }
        let count = 0;
        let node = this.head
        while(node){
            if(index == count){
                return node
            } 
            
            node = node.next
            count++
            
        }
        
        return null
    }

    removeAt(index){
        if(!this.head){
            return
        }
       
        let node = this.getAt(index)
       

        if(!node){
            return
        }

        if(index == 0){
            this.head = this.head.next
            return
        }

        let previous = this.getAt(index - 1)
        if(previous){
            previous.next = node.next
            return
        } 
        
        
        return
    }

    insertAt(data, index){
        let newNode = new Node(data)
        
        if(!this.head){
            this.head = newNode
            return
        }

        
       
        if(index == 0){
            newNode.next = this.head
            this.head = newNode
            return
        }
        
        let previous = this.getAt(index - 1)
        let forward = this.getAt(index)
        
        if(index > this.size()){
            let lastNode = this.getLast()
            lastNode.next = newNode
            return
        } 
        
        
        newNode.next = forward
        previous.next = newNode
        
        return
    }
    
    forEach(fn){
        let node = this.head
        let counter = 0
        while(node){
            fn(node,counter)
            node = node.next
            counter++
        }
    }

    *[Symbol.iterator](){
        let node = this.head
        while(node){
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
