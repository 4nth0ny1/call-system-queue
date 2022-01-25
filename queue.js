function CallSystem () {
    collection = [];
    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (e) => {
        const addNewCaller = collection.push(e.target.textContent);
        allCallers.append(addNewCaller);
    }

    this.dequeue = () => {
        // we want to remove someone everytime the attendent is done with someone. we'll say that is every minute. 
        return collection.shift();
    } 

    this.size = () => {
        return collection.length;
        position.append(collection.length);
    }

    this.front = () => {
        return collection[0];
    }
}

const callsys = new CallSystem();

const allCallers = document.querySelector('.all-callers');
const position = document.querySelector('.position');
const enter = document.querySelector('.enter');
const exit = document.querySelector('.exit');
const callerName = document.querySelector('.name-input');

enter.addEventListener('click', callsys.enqueue);

callsys.enqueue('Anthony');
callsys.enqueue('Susan');

// callsys.dequeue();
console.log(callsys.print());
console.log(callsys.size());
console.log(callsys.front());

