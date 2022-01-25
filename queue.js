const allCallers = document.querySelector('.all-callers');
const position = document.querySelector('.position');
const enter = document.querySelector('.enter');
const exit = document.querySelector('.exit');
const callerName = document.querySelector('.name-input');
const whoIsFirst = document.querySelector('.who-is-first');

function CallSystem () {
    collection = [];
    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (element) => {
        console.log(element);
        // const addNewCaller = collection.push(e.target.textContent);
        const newCaller = collection.push(element);
        allCallers.append(collection.push(newCaller));
    }

    this.dequeue = () => {
        console.log('you clicked the dequeue button');
        // // we want to remove someone everytime the attendent is done with someone. we'll say that is every minute. 
        return collection.shift();
    } 

    this.size = () => {
        return collection.length;
        position.append(collection.length);
    }

    this.front = () => {
        return collection[0];
        whoIsFirst.append(collection[0]);

    }
}

const callsys = new CallSystem();
callsys.enqueue('Anthony');
callsys.enqueue('Susan');
callsys.enqueue('Jim');
callsys.enqueue('Debolina');
callsys.enqueue('Kavya');
// callsys.dequeue();
console.log(callsys.print());
console.log(callsys.size());
console.log(callsys.front());

