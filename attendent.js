let helping; 
const callersWaiting = document.querySelector('#caller-collection');

const acceptNewCaller = (e) => {
    helping = collection.shift();
    currentlyHelping();
    updateCollection(collection);
}

const updateCollection = (collection) => {
    callersWaiting.append(collection);
}

const currentlyHelping = () => {
    const currentCaller = document.querySelector('.current-caller');
    currentCaller.textContent = `You're currently helping ${helping}`;
}

const accept = document.querySelector('.accept-caller')
accept.addEventListener('click', acceptNewCaller);

const refreshCollectionButton = document.querySelector('.caller-collection');
refreshCollectionButton.addEventListener('click', (e) => updateCollection);