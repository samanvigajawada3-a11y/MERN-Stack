// TODO: Import task functions
// import { ... } from './task.js';
import {addTask,completeTask,getAllTasks} from "./3_task.js"
// Test your module system
//  Add some tasks
addTask("code","High","2024-09-23")
addTask("eat","medium","2026-03-3")
// Display all tasks
console.log(getAllTasks())
// Complete a task
console.log(completeTask(getAllTasks().length))
// Display all the tasks agian
console.log(getAllTasks())