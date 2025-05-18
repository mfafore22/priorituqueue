# 📊 Priority Queue in JavaScript

This is a simple *Priority Queue* implementation in JavaScript, allowing items to be enqueued based on their priority. Items with *higher priority (lower numerical value)* are served before lower-priority items, maintaining *FIFO* order among items with equal priority.

## 📦 Features

- ✅ Custom priority function support  
- ✅ Insert items in order based on priority  
- ✅ FIFO behavior for same-priority items  
- ✅ Max size enforcement (optional)  
- ✅ Helpful utility methods (peek, isEmpty, isFull, length)

## 🧠 How It Works

- The queue uses an *array* internally.
- Items are inserted using *insertion sort logic: we scan the queue and insert an item **just before* any item with a *lower priority (i.e., a higher key)*.
- If the queue is full, further insertions are blocked.
- Items are removed from the *front* of the queue.

## 🛠️ Usage

js
// Import or define the PriorityQueue class
const pq = new PriorityQueue(5, item => item[0]); // max size 5, priority is item[0]

// Enqueue items
pq.add([3, 'Task C']);
pq.add([1, 'Task A']);
pq.add([2, 'Task B']);

console.log("Peek:", pq.peek());          // [1, 'Task A']
console.log("Dequeued:", pq.remove());    // [1, 'Task A']
console.log("Now:", pq.queue);            // Remaining queue


## 📚 Methods

| Method      | Description |
|-------------|-------------|
| add(item) | Adds item based on its priority |
| remove()  | Removes and returns the highest-priority item |
| peek()    | Returns the item at the front without removing |
| isEmpty() | Returns true if the queue is empty |
| isFull()  | Returns true if the queue is full |
| length()  | Returns the current size of the queue |

## 🧪 Example Output


Inserted at index 0 [1, 'Task A']
Pushed to end [3, 'Task C']
Inserted at index 1 [2, 'Task B']
Peek: [1, 'Task A']
Dequeued: [1, 'Task A']
Now: [ [2, 'Task B'], [3, 'Task C'] ]


## 📁 Project Structure


priority-queue/
├── priorityQueue.js   # Core PriorityQueue class
├── README.md          # Project documentation
└── test.js            # Example usage and test cases (optional)


