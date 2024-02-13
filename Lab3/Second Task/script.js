document.getElementById('add-button').addEventListener('click', function() {
    let taskList = document.getElementById('task-list');
    let newTaskInput = document.getElementById('new-task');
    let newTaskValue = newTaskInput.value.trim();
    
    if (newTaskValue) {
        let li = document.createElement('li');
        let textSpan = document.createElement('span');
        let deleteButton = document.createElement('button');
        let checkBox = document.createElement('input');

        textSpan.textContent = newTaskValue;
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        checkBox.type = 'checkbox';
        checkBox.addEventListener('change', function() {
            if (checkBox.checked) {
                li.classList.add('completed');
            }
            else {
                li.classList.remove('completed');
            }
        });

        li.appendChild(checkBox);
        li.append(textSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        newTaskInput.value = '';
    }
});