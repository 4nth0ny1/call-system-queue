const button = document.querySelector('#push')
let callers = document.querySelector('#callers');
const newTask = document.querySelector('#newtask');

let collection = ['Anthony', 'John', 'Denny'];
let averageTime = 1; 

const enqueue = (e) => {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        collection.push(document.querySelector('#newtask input').value);
        const newCallerContainer = document.createElement('div');
        const thanks = document.createElement('div');
        thanks.textContent = `Thank you, ${document.querySelector('#newtask input').value}.`
        newCallerContainer.append(thanks);
        callers.append(newCallerContainer);

        const position = document.createElement('div');
        position.textContent = `Your current position is ${collection.length}.`
        newCallerContainer.append(position);

        averageTime = `Your wait time is ${collection.length * 5} minutes`;
        newCallerContainer.append(averageTime);
        showCurrentCallers(collection)
    }
}

button.addEventListener('click', enqueue);
