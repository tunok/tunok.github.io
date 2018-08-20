const buttonAdd = document.getElementById('add');
const mainUl = document.getElementById('mainUl');
const newTask = document.getElementById('newTask');

buttonAdd.onclick = function () {
    if(newTask.value) {
        const toDoLi = document.createElement('li');
        toDoLi.innerHTML = newTask.value;
        mainUl.appendChild(toDoLi);
    }
};