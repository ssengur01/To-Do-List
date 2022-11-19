//Global Selectors
const form = document.querySelector("#addTaskForm");
const input = document.getElementById("txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList =document.getElementById("task-list");
const replaceAnListItem = document.getElementById("task-list");

const replaceItem = document.getElementById("task-list");



let items;


//EventListeners

eventListeners();

function eventListeners(){
    
    
    //delete all item
    btnDeleteAll.addEventListener("click",deleteAllItem);


     // form submit event
    form.addEventListener("submit",addNewItem);

    //delete an item
    taskList.addEventListener('click',deleteAnItem);
    
    //replace
    replaceItem.addEventListener('dblclick',replace);

}

function replace(e){
     e.target.innerText=input.value;
     const a= document.createElement('a');
     a.classList ='delete-item float-end'
     a.setAttribute('href','#');
     a.innerHTML= '<i class="bi bi-x-circle"></i>'

     e.target.appendChild(a);
}


function deleteAnItem(e){
    if(e.target.className==="bi bi-x-circle"){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        
        }
    
    }
}

 function deleteAllItem(e){
    if(confirm('Are you sure?')){
        taskList.innerHTML ='';
    }
   
     e.preventDefault();
}


function addNewItem(e){
    e.preventDefault();

    if(input.value===''){
        alert('please type a task!');
        return;
    }
    const li =document.createElement('li');
    li.className= 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a= document.createElement('a');
    a.classList ='delete-item float-end'
    a.setAttribute('href','#');
    a.innerHTML= '<i class="bi bi-x-circle"></i>'

   
    li.appendChild(a);
    taskList.appendChild(li);
    
}
