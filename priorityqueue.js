class PriorityQueue{
   constructor(size = 10,   priorityfn = item => item){
      this.queue = [];
      this.nItem = 0; 
      this.maxSize = size;
      this.priorityfn = priorityfn; // function to get item priority
   }
   isEmpty(){
    return this.nItem === 0;
   }
   isFull(){
    return this.nItem >= this.maxSize;
   }
   add(item){
    if(this.isFull()){
        return "the queue is full";
    }
    const priority = this.priorityfn(item);
    let added = false;
    for (let i = 0 ; i < this.queue.length; i++){
        const currentPriority = this.priorityfn(this.queue[i]);
        if(priority < currentPriority){
            this.queue.splice(i, 0 , item);
            added = true ;
            console.log("Inserted at index", i, item);

            break ; 
        }
   }
   if(!added){
    this.queue.push(item);
    console.log("Pushed to end", item);
   }
   
   }
   remove(item){
    if (this.isEmpty()){
        return "the queue is underflow";
    }
    return this.queue.shift();
   }
   peek(index){
    return this.isEmpty() ? null : this.queue[0];
   }
   length(){
    return this.queue.length;
   }
   
   




}

const pq = new PriorityQueue(5, item => item[0]);
pq.add([3, 'Task C']);
pq.add([1, 'Task A']);
pq.add([2, 'Task B']);

console.log("Peek:", pq.peek());
console.log("Dequeued:", pq.remove());
console.log("Now:", pq.queue);
