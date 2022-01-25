const allCallers = document.querySelector('.all-callers');
const position = document.querySelector('.position');
const enter = document.querySelector('.enter');
const exit = document.querySelector('.exit');
const callerName = document.querySelector('.name-input');
const whoIsFirst = document.querySelector('.who-is-first');

function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
        allCallers.append(collection);
    };

    this.enqueue = function(element) {
        collection.push(element);
    };

    this.dequeue = function() {
        return collection.shift(); 
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length; 
    };

    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();


const form = document.addEventListener('.input-container');
form.addEventListener('click', (nameInput) => {
    q.enqueue(nameInput);
})