// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle,validatePriority,validateDueDate } from "./3_validator.js";
const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
    if (!validateTitle() || !validatePriority() || !validatePriority()){
        return "Invalid task!"
    }
    tasks.push({title,priority,dueDate})
}

// 2. Get all tasks
function getAllTasks() {
    return tasks
}

// 3. Mark task as complete
function completeTask(taskId) {
    if(taskId != 0){
        return "Task completed"
    }
    return "Task was not completed"
}

export {addTask,getAllTasks,completeTask}
