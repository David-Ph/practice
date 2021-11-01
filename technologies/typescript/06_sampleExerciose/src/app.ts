import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

const newInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");

/* 
Hi it took me about an hour to figure it out. I will make it crystal clear.

Step 1: Instantiation of ProjectList Class

When you first instantiate ProjectList Class

    projectState.addListener((projects: any[]) => {
          this.assignedProjects = projects;
          this.renderProjects();
        });

above block of code will be executed, means that anonymous function will go and sit (no-execution will happen) inside listeners[] array. Because, the work of addListener() function is just to add a new function inside listeners[] array every time it get called.

Step 2:  When new project is added / after user click submit button

    for (const listenerFn of this.listeners) {
          listenerFn(this.projects.slice());
        }

Have a look in the above code, we are iterating through every functions inside listenerFn() and executing them by passing brand new array[] of projects. That means our anonymous function (shown below) which is already inside listener[] array will be executed. It will get brand new projects[] array as an argument, which is what it needs. Eventually, after execution  this.assignedProjects will store a brand new array of projects, and will render it in screen.

    (projects: any[]) => {
          this.assignedProjects = projects;
          this.renderProjects();
        }

*/
