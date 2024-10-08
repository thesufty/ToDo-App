const addNewInput = document.querySelector('#addNewInput');
const addNewButton = document.querySelector('#addNewButton')
const theApp = document.querySelector('.theApp')
const span = document.querySelector('#span')

var allTodos = []

function addRemoveButton(li) {
    let removeButton = document.createElement('button')
    removeButton.className = 'remove';
    removeButton.textContent = 'Done';
    li.appendChild(removeButton)
}

function addCheckbox(li) {
    var input = document.createElement('input')
    input.type = 'checkbox'
    input.id = 'checkbox'
    li.appendChild(input) 

    input.addEventListener('click', () => {
        if (input.checked == true) {
            li.className = "strikethrough"
        } else if (input.checked == false) {
            li.classList.remove("strikethrough")
        }
    })
}
    

addNewButton.addEventListener('click', () => {
    let firstList = document.getElementById('firstList')
    var li = document.createElement('li')
    firstList.appendChild(li)
    li.textContent = addNewInput.value;
    addCheckbox(li)
    addRemoveButton(li);
    addNewInput.value = '';
    allTodos.push(li.textContent)
    // saveTodos();
    // getTodos()
})

theApp.addEventListener('click', (event) => {
    if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        firstList.removeChild(li);
        for (i = 0; i <= allTodos.length; i++) {
            if (allTodos[i] == li) {
                allTodos.splice(li[i])
            }
        }
    }
})

// const getToadd = document.getElementById('getToAdd')
// const toP = document.getElementById('toP')
// const add = document.getElementById('add')

// saveToLocaleStorage(li)
// var storedInput = localStorage.getItem('Todos')
// if(storedInput) {
//     li.textContent = storedInput
// }

//     const saveToLocaleStorage = (li) => {
//         localStorage.setItem('Todos', li.textContent)
//     }

// function saveTodos() {
//     var str =JSON.stringify(allTodos);
//     localStorage.setItem('allTodos', str)
// }

// function getTodos() {
//     var str = localStorage.getItem('allTodos');
//     allTodos = JSON.parse(str);
//     if (!allTodos) {
//         allTodos = []
//     }
// }

// add.addEventListener('click', () => {
//     toP.textContent = getToadd.value;
//     saveToLocaleStorage()
// })