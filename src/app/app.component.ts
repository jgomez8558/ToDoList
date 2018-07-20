import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variables
  title = 'app';
  name = "Jon";

  // Variable use to get input from user
  toDoInput = "";
  
  // Array of tasks
  tasks = [
    {
      chore: "clean room",
      isCompleted: false
    },
    {
      chore: "clean PC",
      isCompleted: false
    },
    {
      chore: "change oil in car",
      isCompleted: false
    }, 
    {
      chore: "wash car",
      isCompleted: false
    },
    { 
      chore: "get supplies for work",
      isCompleted: false
    }
  ];

  // Gets new task from user
  createToDo() {

    // Removes spaces at the front and rear ends
    let trimmedInput = this.toDoInput.trim();
    
    // Tests to see if its not blank before inserting
    if(trimmedInput != "") {
      this.tasks.push({
        chore: this.toDoInput,
        isCompleted: false
      });
    }

    // Resets the toDoInput field
    this.toDoInput = "";

  }

  //Get and edit current task
  editToDo(errand) {

    let index = this.tasks.indexOf(errand);

    // Holds the current tasks
    let tempErrand = this.tasks[index].chore;

    this.tasks[index].chore = prompt("Please edit your item?", this.tasks[index].chore)
    this.tasks[index].isCompleted = false;

    // Checks if user hits cancel
    if (this.tasks[index].chore == null) {
      this.tasks[index].chore = tempErrand;
    }

  }

  // Get and complete current task
  completeToDo(errand) {

    errand.isCompleted = !errand.isCompleted;
    
  }

  // Complete all items in the array
  completeAllToDo() {

    for(let x = 0; x < this.tasks.length; x++) {
      this.tasks[x].isCompleted = true;
    }

  }

  // Deletes the current task
  deleteToDo(errand) {

    let index = this.tasks.indexOf(errand);

    this.tasks.splice(index, 1);

  }

  // Deletes all items in the array
  deleteAllToDo() {

    this.tasks = [];

  }
  
}
