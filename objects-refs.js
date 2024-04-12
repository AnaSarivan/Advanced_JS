
class Task {
    constructor(title, deadline) {
        this.title = title
        this.deadline = deadline
        this.done = false
        this.assignee = null // reference to an User{} object 
    }

    markAsDone() {
        this.done = true
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

    allDoneTasks() {
        return this.tasks.filter(task => task.done)
    }
}

//give 2 tasks to a user
let userDev = new User ("John Davis", "developer")

let taskProj1 = new Task ("Finish project 1", "01-07-2024")
let taskProj2 = new Task ("Finish project 2", "01-08-2024")
let taskProj3 = new Task ("Finish project 3", "01-09-2024")

userDev.assignTask(taskProj1)
userDev.assignTask(taskProj2)
userDev.assignTask(taskProj3)


/* 

HW1: modify the class adding "done" property, which by default will be false;
     add the method "markAsDone()" in the Task class which sets true in "done"

HW2: add the method "allDoneTasks()"  in User class which should return an array with the tasks with "done" true;
     add the method "allPendingTasks()" which should return an array with the tasks with "done" false

add the methos "unassignTask(title)" in User which will remove the task with this title


*/