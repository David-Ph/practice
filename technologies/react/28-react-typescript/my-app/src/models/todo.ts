// creating data model for react props
// we can use type, interface, or class
interface Todo {
  id: number;
  text: string;
}

export default Todo;

/*
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

*/
