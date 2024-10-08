// Declare variables
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskInfo = document.querySelector("#taskInfo");
const todoList = document.querySelector("#todoList");
const noInput = document.querySelector(".noInput")
const tasksArray = [];
let completedCount = 0;



addBtn.addEventListener(
    "click", function() {
        //get value from input
        const text = taskInput.value.trim();

        console.log("Task input value:", text);
        
        // condition: ceck input not empty (if-sats)
        if (text.length === 0){
            noInput.innerHTML = "Input must not be empty";
            noInput.classList.add("blink"); //add blink class to p-element
            return;
        }
        else {
            noInput.innerHTML = "";
            noInput.classList.remove("blink"); //remove blink class from p-element if input is not empty
        }

        
        
        //pushing input to array and the task is not completed
        const task = {
            text: text,
            completed: false
        };
        tasksArray.push(task);


        // add new html element in ul, li and span
        const listItem = document.createElement("li");
        todoList.appendChild(listItem);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;
        itemLabel.setAttribute("class", "task")
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
    
            // remove item from array. 
            const taskIndex = tasksArray.indexOf(task);
            if (taskIndex > -1) {
                tasksArray.splice(taskIndex, 1); // remove task from array
            }

            // remove list item from DOM
            listItem.remove();
            
        });
       
        // Clearing inputfield
        taskInput.value = "";

    }
);








