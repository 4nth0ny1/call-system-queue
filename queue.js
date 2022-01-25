function CallSystem () {
    collection = [];
    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (element) => {
        collection.push(element);
        allCallers.append(collection);
    }

    this.dequeue = () => {
        // we want to remove someone everytime the attendent is done with someone. we'll say that is every minute. 
        return collection.shift();
    } 

    // this.size = () => {
    //     return collection.length;
    // }

    // this.front = () => {
    //     return collection[0];
    // }
}

const allCallers = document.querySelector('.all-callers');
const position = document.querySelector('.position');
const enter = document.querySelector('.enter');
const exit = document.querySelector('.exit');

enter.addEventListener('click', CallSystem.enqueue);

const callsys = new CallSystem();
callsys.enqueue('Anthony');
callsys.enqueue('Susan');
callsys.enqueue('Debolina');
callsys.enqueue('Raj');
callsys.enqueue('Kumar');
callsys.enqueue('Steven');
callsys.dequeue();
console.log(callsys.print());
console.log(callsys.size());
console.log(callsys.front());

