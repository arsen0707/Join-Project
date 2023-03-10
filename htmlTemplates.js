function boardHtmlTemplate() {
    document.getElementById('rightContainer').innerHTML = `
        <div class="board" id="board">
            <div id="notClickabel"></div>
            <div class="bgColor" ondrop="moveTo('todo')" ondragover="allowDrop(event)">
                <h2>TO DO</h2>
                <div id="todo"></div>
            </div>

            <div class="bgColor" ondrop="moveTo('inProgress')" ondragover="allowDrop(event)"> 
                <h2>IN PROGRESS</h2>
                <div id="inProgress"></div>
            </div>

            <div class="bgColor" ondrop="moveTo('testing')" ondragover="allowDrop(event)">
                <h2>TESTING</h2>
                <div id="testing"></div>
            </div>

            <div class="bgColor" ondrop="moveTo('done')" ondragover="allowDrop(event)">
                <h2>DONE</h2>
                <div id="done"></div>
            </div>
        </div>`
}

function todoHTMLTemplate() {
    let todoCat = board.filter(t => t['taskCategory'] == 'todo');
    document.getElementById('todo').innerHTML = '';
    for (let i = 0; i < todoCat.length; i++) {
        document.getElementById('todo').innerHTML += `
        <div class="todoBox" draggable="true" onclick="taskPopup(${todoCat[i]['id']})" ondragstart="startDragging(${todoCat[i]['id']})" >
        <div class="taskTopline">
                <div>Due Date: <b>${todoCat[i]['dates']}</b></div>
                <img class="firstDeleteButton" onclick="deleteBoardTask(${todoCat[i]['id']})" src="img/delete-48.png">
        </div>
            
            <div><b>${todoCat[i]['titles']}</b></div>
            <div>Assigned to: <b>${todoCat[i]['userName']}</b></div>
        </div>`      
    }
}

function inProgressHTMLTemplate() {
    let todoCat = board.filter(t => t['taskCategory'] == 'inProgress');
    document.getElementById('inProgress').innerHTML = '';
    for (let i = 0; i < todoCat.length; i++) {
        document.getElementById('inProgress').innerHTML += `
        <div class="todoBox" draggable="true" onclick="taskPopup(${todoCat[i]['id']})" ondragstart="startDragging(${todoCat[i]['id']})" style="
        background-color: #ef3939;">
        <div class="taskTopline">
        <div>Due Date: ${todoCat[i]['dates']}</div>
        <img class="firstDeleteButton" onclick="deleteBoardTask(${todoCat[i]['id']})" src="img/delete-48.png">
</div>
            <div>${todoCat[i]['titles']}</div>
            <div>Assigned to: ${todoCat[i]['userName']}</div>
        </div>`      
    }
}

function testingHTMLTemplate() {
    let todoCat = board.filter(t => t['taskCategory'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let i = 0; i < todoCat.length; i++) {
        document.getElementById('testing').innerHTML += `
        <div class="todoBox" draggable="true" onclick="taskPopup(${todoCat[i]['id']})" ondragstart="startDragging(${todoCat[i]['id']})" style="
        background-color: orange">
        <div class="taskTopline">
        <div>Due Date: ${todoCat[i]['dates']}</div>
        <img class="firstDeleteButton" onclick="deleteBoardTask(${todoCat[i]['id']})" src="img/delete-48.png">
</div>
            <div>${todoCat[i]['titles']}</div>
            <div>Assigned to: ${todoCat[i]['userName']}</div>
        </div>`      
    }
}

function doneHTMLTemplate() {
    let todoCat = board.filter(t => t['taskCategory'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let i = 0; i < todoCat.length; i++) {
        document.getElementById('done').innerHTML += `
        <div class="todoBox" draggable="true" onclick="taskPopup(${todoCat[i]['id']})" ondragstart="startDragging(${todoCat[i]['id']})" style="
        background-color: #22c90a;">
        <div class="taskTopline">
        <div>Due Date: ${todoCat[i]['dates']}</div>
        <img class="firstDeleteButton" onclick="deleteBoardTask(${todoCat[i]['id']})" src="img/delete-48.png">
</div>
            <div>${todoCat[i]['titles']}</div>
            <div>Assigned to: ${todoCat[i]['userName']}</div>
        </div>`      
    }
}

function backlogHtmlTemplate() {
    document.getElementById('rightContainer').innerHTML = `
        <div class="backlog">
            <div class="headBacklog">
                <div><h2>Backlog</h2></div>
                <div class="headBacklog2ndRow">Learning Management System Project</div>
            </div>
            <div class="backlogBody">
                <div class="descriptions">
                    <div class="width33">ASSIGNED TO</div>
                    <div class="width33 categoryHead">CATEGORY</div>
                    <div class="width33">DETAILS</div>
                </div>
                <div class="tasks" id="tasks">                
                </div>
            </div>   
        </div>
    `
}

function loadTasksHtmlTemplate(i){
    document.getElementById('tasks').innerHTML += `
        <div class="task">
            <div class="underTask">
                <div class="width33 userDiv"id="name">
                    <div id="userImg${i}"></div> 
                    <div class="userName" id="userName${i}">${backlog[i]['userNames']}</div>    
                </div>
                <div id="category${i}" class="width33" required>
                    ${backlog[i]['category']}
                </div>
                
                <div class="descriptionDetails" id="description${i}">
                    ${backlog[i]['description']}            
                </div>
            </div>    
            <div id="backlogBtn${i}" class="backlogBtnGroup">
                <img class="backlogBtn" id="sendTo${i}" onclick="pushToBoardArray(${i})" src="img/send-file-48.png">
                <img class="backlogBtn" id="delete${i}" onclick="deleteTask(${i})" src="img/delete-48.png">
                <img class="backlogBtn" id="edit${i}" onclick="editBacklog(${i})" src="img/edit-8-48.png">
            </div>
            
        </div>`
                    
}




function addTaskHTMLTemplate() {
    document.getElementById('rightContainer').innerHTML = `
    
    <div class="headAddTask">
        <h2>Add Task</h2>
        <div class="headBacklog2ndRow">Learning Management System Project</div>
    </div>
    <form id="inputContain " onsubmit="createNewTask(); return false " class="inputContain">
            <div class="inputBox">
                <div>
                    <p><b>TITLE</b></p>
                    <input class="inputFieldSize" id="inputTitel" required="" type="text" placeholder="Management meeting preparation">
                </div>
                <div>
                    <p><b>CATEGORY</b></p>
                    <select id="inputCategory"class="inputFieldSize" required="">
                        <option value="" disabled="" selected="" hidden="">Please select</option>
                        <option value="Sale">Sale</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Product">Product</option>
                        <option value="Distribution">Distribution</option>
                    </select>
                </div>
                <div>
                    <p><b>DESCRIPTION</b></p>

                    <textarea  maxlength="50" class="inputDescriptionField" type="text" id="inputDescription" cols="34" rows="10" required="" placeholder="Note"></textarea>
                </div>
            </div>


            <div class="inputBox">
                <div>
                    <p><b>DUE DATE</b></p>
                    <input id="inputDate" class="inputFieldSize" required="" type="date">
                </div>
                <div>
                    <p><b>URGENCY</b></p>
                    <select id="inputUrgency" class="inputFieldSize" placeholder="Urgency" required="">
                        <option value="" disabled="" selected="" hidden="">Please select </option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Important">Important</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div>
                    <p><b>ASSIGNED TO</b></p>
                    <div id="avatarPicker" class="avatarPickerMain">
                    <div id="usersAccount"></div>
                   <button class="addButtonAvatar" onclick="addUserNew()" type="button"> <img id="addUser"  class="addButtonAvatar" src="img/add-48.png" required=""></button>
                </div>
            </div>
            <div class="buttons">
                <button type="reset" id="cancel"><b>Cancel</b></button>
                <button type="submit" id="create"><b>Create Task</b></button>
            </div>
            </div>  
            
        </form>

    
    
    `
}

function addUserNew() {
    document.getElementById('rightContainer').innerHTML = `
    <div id="secondNotClickabel" class="secondNotClickabel"></div>   
    <div class="createdTaskPopup" id="createdTaskPopup" >
            <div class="secondPopup">
                <img class="newExitStyle  " onclick="closePopupInfo()" src="img/cancel-48.png">
                
            </div>
            <div class="textpopup">
                <p>New Task Is Created !</p>
                <p>Please follow the next step by clicking Backlog</p>
            </div>
        
    </div> 
    `
}

function taskIsCreated(){
    document.getElementById('rightContainer').innerHTML += `
    
    <div id="secondNotClickabel" class="secondNotClickabel"></div>   
        <div class="createdTaskPopup" id="createdTaskPopup" >
                <div class="secondPopup">
                    <img class="newExitStyle  " onclick="closePopupInfo()" src="img/cancel-48.png">
                    
                </div>
                <div class="textpopup">
                    <p>New Task Is Created !</p>
                    <p>Please follow the next step by clicking Backlog</p>
                </div>
            
        </div> 
           
    ` 
}



function closePopupInfo(){

   document.getElementById('createdTaskPopup').classList.add('d-none');
   document.getElementById('secondNotClickabel').classList.add('d-none');
   showAddTast();
}

function showHelpHtmlTemplate() {
    document.getElementById('rightContainer').innerHTML = `
    <div class="headHelpSection">
        <h2>Help</h2>
        <p class="headHelp2ndRow">Learning Management System Project</p>
    </div>
    <div class="helpSection">
            <h3>
                In the "Add task" tab, fill in the specified fields. 
                Then click the "Create task" button to create the task. 
                <p>Don't forget to assign your task to the right user.</p>
            </h3>
            <h3>
                After that your task will now appear in the tab "Backlog". 
                There you can click on a task to edit it or to move it to the board.
            </h3>
            <h3>
                Once the task is moved to the board, you can now see the task in the tab "Board",
                where it is now in the column "To Do".
            </h3>
            <h3>
                You can now drag the task to one of the other columns ("In progress", "Testing" or "Done") 
                <p>and drop it there to show the progress you've made so far with the specific task.</p>
            </h3>
    </div>
    
    `
}

function renderUsers() {
    let usersAccount = document.getElementById("usersAccount");
    usersAccount.innerHTML = '';
    for (let i=0; i<users.length; i++){
        const userName = users[i]['firstName'];
        const userImg = users[i]['userImg'];
        usersAccount.innerHTML += `
        <div class="avatarbox">
            <p class="userName">${userName}</p>  
            <img required onclick="selectAvatar(${i})" class="profile profileBorder" id='user${i}' src='${userImg}'>
        </div>`
        
    }
}

function editBacklog(i) {
    const category = document.getElementById(`category${i}`);
    const description = document.getElementById(`description${i}`);
    category.innerHTML = `<select id="inputCategory${i}"class="inputFieldSize" required>
    <option value="" disabled="" selected="" hidden="">${backlog[i]['category']}</option>
    <option value="Sale">Sale</option>
    <option value="Marketing">Marketing</option>
    <option value="Product">Product</option>
    <option value="Distribution">Distribution</option>
</select>`
description.contentEditable = true;
category.contentEditable = true;
     
    document.getElementById(`backlogBtn${i}`).innerHTML = `
        <div id="${i}">
            <button type="reset" onclick="resetBacklog(${i})">Cancel</button>
            <button type="submit" onclick="saveBacklog(${i})">Save</button>
        </div>
    `
    
}

function resetBacklog(i) {
    const category = document.getElementById(`category${i}`);
    const description = document.getElementById(`description${i}`);
   
    category.contentEditable = false;
    description.contentEditable = false;
    document.getElementById(`backlogBtn${i}`).innerHTML = `
        <img class="backlogBtn" id="sendTo${i}" onclick="pushToBoardArray(${i})" src="./img/sendTo.jpg">
        <img class="backlogBtn" id="delete${i}" onclick="deleteTask(${i})" src="./img/trash.jpg">
        <img class="backlogBtn" id="edit${i}" onclick="editBacklog(${i})" src="./img/edit.png">
    `
   loadBacklog();
}

function saveBacklog(i) {
    const category = document.getElementById(`inputCategory${i}`);
    const description = document.getElementById(`description${i}`);
   
    category.contentEditable = false;
    description.contentEditable = false;
    document.getElementById(`backlogBtn${i}`).innerHTML = `
        <img class="backlogBtn" id="sendTo${i}" onclick="pushToBoardArray(${i})" src="./img/sendTo.jpg">
        <img class="backlogBtn" id="delete${i}" onclick="deleteTask(${i})" src="./img/trash.jpg">
        <img class="backlogBtn" id="edit${i}" onclick="editBacklog(${i})" src="./img/edit.png">
    `
    backlog[i].category = category.value;
    backlog[i].description = description.innerText;
    setItem();
    loadBacklog();
}


