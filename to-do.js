
let todoRay = [];



function rendering(){
let todoListHTML = '';

for (let i = 0; i < todoRay.length; i++){
    const todoObject = todoRay[i];
    //const name = todoObject.name;
   // const Duedate =todoObject.Duedate;
    let {name, duedate} = todoObject;

    const html =`
    <div>${name}</div>
    <div>${duedate}</div>
     <div>
    <button onclick="
    todoRay.splice(${i}, 1)
    rendering();
    "  class="delete-btn">
    delete
    </button>
    </div>
    `;
    todoListHTML += html;
};


document.querySelector('.display-todos').innerHTML = todoListHTML;

}

function addToDo(){
//calling the input element from html
 const inputElement = document.querySelector('.todo');

 //create a variable to get the value of the input element
 const name = inputElement.value;

 // date selector variable

 const dateInput = document.querySelector('.duedate-input');

 const dueDate = dateInput.value;

 todoRay.push({
              name: name,
              duedate: dueDate,
            });
 console.log(todoRay);

 inputElement.value = '';


 rendering();
}



