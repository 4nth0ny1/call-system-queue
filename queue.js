const button = document.querySelector('#push')
let tasks = document.querySelector('#tasks');
const newTask = document.querySelector('#newtask');

const enqueue = (e) => {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        tasks.innerHTML += `
             <div class="task">
                 <span id="taskname">
                     ${document.querySelector('#newtask input').value}
                 </span>
                 <button class="delete">
                     <i class="delete">delete</i>
                 </button>
             </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

button.addEventListener('click', enqueue);
