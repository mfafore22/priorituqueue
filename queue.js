class Queue{

    constructor(size){
        this.size = size + 1;
        this.data = new Array(this.size);
        this.front = 0;
        this.rear = 0
    }
    isFull(){
        //if putting rear forward one step would put it where front is 
        return (this.rear + 1)% this.size === this.front;
    }
    isEmpty(){
        //front and rear are in the same position
        return this.front === this.rear;
    }
    enqueue(item){
        if(this.isFull()){
            console.log("Queue is full!");
            return;
        }
        //put the item at rear position
        this.data[this.rear] = item;
        //then we move rear one step forward
        this.rear = (this.rear + 1) % this.size;
    }
    dequeue(){
        if (this.isEmpty()){
            console.log("Queue is empty!");
            return null;
        }
        //we take the item at the front 
        const item = this.data[this.front];
        //we clear that spot 
        this.data[this.front] = null;
        //we move front one step forward and wrap around if needed.
        this.front = (this.front + 1) % this.size;
        return item;
    }
    peek(){
        return this.isEmpty() ? null : this.data[this.front];
    }
    print(){
        let result = [];
        let i = this.front;
        while(i !== this.rear){
          result.push(this.data[i]);
          i = (i + 1)  %  this.size;
        }
        console.log("Queue contents:", result);
    }



}
const q = new Queue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.print();

q.peek(0);
console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);

//circular queue is used  in printers , music playlist loops ,buffers in network data handling , cpu scheduling.