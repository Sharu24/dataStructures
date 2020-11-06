function LinkedList(){
    this.head = null;
    this.tail = null;
}
function Node(prev,value,next){
    this.prev = prev;
    this.value = value;
    this.next = next;
}

//Insert a Head Node value of 22
//Insert a Head Node value of 33
LinkedList.prototype.addToHead = function(value){
    //Construct a New Node which is going to be a head node
    const newNode = new Node(null,value,this.head);
    if(this.head){
        //If there is already a head node,......
        this.head.prev = newNode;
    }else{ 
        //There is no Head Node
        this.tail = newNode;
    }
    this.head = newNode;
}
const ll = new LinkedList();
ll.addToHead(22); //This is the first Node into the LL
console.log(ll);
