
class Task {
    constructor(title, deadline) {
        this.title = title
        this.deadline = deadline
        this.assignee = null // reference to an User{} object 
    }
}

class User {
    constructor (name, job) {
        this.name = name 
        this.job = job

        this.tasks = []
    }
    assignTask (task) {
        // validation
        if (task instanceof Task) {
            this.tasks.push(task)
            task.assignee = this 
        } else {
            console.error( "Only objects of type Task can be assigned!")
        }
    }
}

//give 2 tasks to a user
let userDev = new User ("John Davis", "developer")

let taskProj1 = new Task ("Finish project 1", "01-07-2024", userDev)
let taskProj2 = new Task ("Finish project 2", "01-08-2024", userDev)

userDev.assignTask(taskProj1)
userDev.assignTask(taskProj2)

/* 

HW1: modify the class adding "done" property, which by default will be false;
     add the method "markAsDone()" in the Task class which sets true in "done"

HW2: add the method "allDoneTasks()"  in User class which should return an array with the tasks with "done" true;
     add the method "allPendingTasks()" which should return an array with the tasks with "done" false

add the methos "unassignTask(title)" in User which will remove the task with this title


*/