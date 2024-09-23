// Js code for Todo app
// Declare variables
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskInfo = document.querySelector("#taskInfo");
const todoList = document.querySelector("#todoList");
const tasksArray = [];
let completedCount = 0;



addBtn.addEventListener(
    "click", function() {
        //get value from input
        const text = taskInput.value; 
        
        // condition: ceck input not empty (if-sats)
        if (text.length === 0){
            alert("You have to write something!");
            return;
        };
        
        const task = {
            text: text,
            completed: false
        };
        tasksArray.push(task);

        taskInput.addEventListener("keypress", function(event){
            if(event.key === "Enter") {
                event.preventDefault();
            }
        });

        // add new html element in ul, li and span
        const listItem = document.createElement("li");
        todoList.appendChild(listItem);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;
        listItem.appendChild(itemLabel);

        const trashcan = document.createElement("span")
        trashcan.innerHTML = "&#128465";
        trashcan.setAttribute("class", "trashcan");
        listItem.appendChild(trashcan);

        // add eventlistener to new span-elemnet
        itemLabel.addEventListener(
            "click", function() {
            task.completed = !task.completed;
            itemLabel.classList.toggle("completed");
        //update completed task count
            if(task.completed){     
                completedCount++;
            }
            else {
                completedCount--;
            }
            //update task info display
            taskInfo.innerHTML = completedCount;
                
            }
        );
            //event listener for trashcan. 
        trashcan.addEventListener("click", function() {
            // check if task was completed before removing
            if (task.completed) {
                completedCount--;
            }
    
            // update task info display
            taskInfo.innerHTML = completedCount;
    
            // remove item from array. This part was hard but its nice to have google as a friend
            const taskIndex = tasksArray.indexOf(task);
            if (taskIndex > -1) {
                tasksArray.splice(taskIndex, 1); // remove task from array
            }

            // remove list item from DOM
            listItem.remove();
            
        });
       
        // Clearing iputfield
        taskInput.value = "";

    }
);








