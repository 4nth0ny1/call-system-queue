let helping; 
let currentCollection;
const callersWaiting = document.querySelector('#caller-collection');

const showCurrentCallers = (array) => {
    for (let i = 0; i < array.length; i++) {
        const caller = document.createElement('li');
        caller.append(array[i]);
        callersWaiting.append(caller);
    };
};

const acceptNewCaller = (e) => {
    helping = collection.shift();
    currentCollection = collection;
    currentlyHelping();
    callersWaiting.append(currentCollection);
}

const currentlyHelping = () => {
    const currentCaller = document.querySelector('.current-caller');
    currentCaller.textContent = `You're currently helping ${helping}`;
}

const accept = document.querySelector('.accept-caller')
accept.addEventListener('click', acceptNewCaller);

// const refreshCollectionButton = document.querySelector('.refresh-collection');
// refreshCollectionButton.addEventListener('click', updateCollection);