// TODO: Export these validation functions
// 1. Validate task title (not empty, min 3 chars) 
function validateTitle(title){
    if(!title){
        return "Title required"
    }
    else if(title.length < 3){
        return "Min 3 characters required"
    }
    return true
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const priorities = ['Low','High','Medium']
  let result = priorities.includes(priority)
  if(result === false){
    return "Priority is not valid"
  }
  return true
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  let dueDate = new Date('2024-1-23') //yyyy-mm--dd
  let today = new Date() 
  if (dueDate > today){
    return "Invalid Due Date"
  }
  return true
}
export {validateTitle,validatePriority,validateDueDate}