create an html file structure with an input feild , a button ,and a conatainer to hold the todo items
- Add a class  to conatainer ()
## Javascript setup
select the necessory DOM elements and store refernce (e.g `mainTOdoList` and `inputValue`)


 ## Add click Event

 - add a click event listner to the "Add Todo" button (`btn`)
 -In the event listners , call a function (e.g., `addToDoList`)
  to handle new todo

  ## step 4 Add todo Function

in the `addToDoList`  function prevent the defalt form submisson
-create a new todo element (e.g., `div` with the class (`main_todo_div`) )with the input value and add a delte button
- apeend the new new todo element to the conatainer (`main todo elemnet`)   
-store the todo data in an array (`localTodoLists`) and update localstorage using `localStorage.setitem`

## 5 Get TOdo from local stoarage 
 -Create a function (e.g., `getTodoListFromLocal`) to remove todo data from local Storage using `localStorage.getItem`.
 use `JSON.parse` to convert thw sorted string into an array.

##  Show Todos
-create a function (e.g., `ShowLists`) to display on page load.
-   Retrive todo data from local storage using `getTotoListFromLocal`.
- Itrate through array and dynmically and todos to the container

## Remove todo function
 - create a functii=on  (e.g., `removeeTodo`) to handle removing a todo.
- use event delegation by adding aclick event listner to the container  ('main To do ELeme)
- Check if the clicked element has a class of "deleteBtn" and call the `removeTodo` function

## Update Local Storage on Remove
 - In the `removeTodo` function, update the `LocalTodoLists` array by filtering out the removeTodo.
 - Update Local Storage using `localStorage.setItem` .