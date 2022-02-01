const input = document.querySelector('.todo__add-input');
const addBtn = document.querySelector('.todo__add-btn');
const list = document.querySelector('.todo__list');

function render() {
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = task;

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'X';
        deleteBtn.addEventListener('click', () => handleClickRemove(index))

        list.appendChild(li);
        li.appendChild(deleteBtn);
    })
}

function handleClickRemove(index) {
    tasks.splice(index, 1);
    list.innerHTML = '';
    render();
}

function handleClickAdd() {
    let task = input.value;
    tasks.push(task)
    input.value = '';
    list.innerHTML = '';
    render();
}

let tasks = [];

window.onload = render();
addBtn.addEventListener('click', handleClickAdd);
