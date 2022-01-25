
console.log(collection);
console.log(averageTime);

let helping; 

const callersWaiting = document.querySelector('#callers');

const acceptNewCaller = (e) => {
    helping = collection.shift();
    console.log(helping);
    callersWaiting.append(collection)
    currentlyHelping();
}

const currentlyHelping = () => {
    const currentCaller = document.querySelector('.current-caller');
    currentCaller.textContent = `You're currently helping ${helping}`;
}

const accept = document.querySelector('.accept-caller')
accept.addEventListener('click', acceptNewCaller);
console.log(collection);