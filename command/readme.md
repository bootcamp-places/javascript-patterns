# Command pattern

```mermaid
class TaskManager extends invokerClass {
    +addTask(task:String)
    +removeTask(task:String)
    +completeTask(task:String)
    +commands:Command[]
}
class AddTaskCommand extends commandClass {
    +execute()
}
class RemoveTaskCommand extends commandClass {
    +execute()
}
class CompleteTaskCommand extends commandClass {
    +execute()
}
TaskManager --> AddTaskCommand
TaskManager --> RemoveTaskCommand
TaskManager --> CompleteTaskCommand
```

## Example:

It is defined three concrete command classes AddNoteCommand, RemoveNoteCommand and CompleteNoteCommand that all implement the execute method and each constructor that takes the note.

There is NoteManager class that is responsible for creating the appropriate command object based on the action taken by the user, and it stores commands in an array for later use.

The execute method in each command class is will perform the specific actions like adding, removing or completing a note.

The NoteManager class as an invoker, it's an object that knows how to execute a command and it's decoupled from the objects that invoke the operation.

This pattern allows to separate the logic of different actions and the objects that execute them. It also makes it easy to add new functionality, since you can create new command classes without modifying the existing code. Also, allows you to undo or redo an action of the corresponding command.

```js
// Define the command interface
class Command {
 execute() {}
}

// Define concrete command classes
class AddNoteCommand extends Command {
 constructor(note) {
  super();
  this.note = note;
 }

 execute() {
  console.log(`Adding note: ${this.note}`);
 }
}

class RemoveNoteCommand extends Command {
 constructor(note) {
  super();
  this.note = note;
 }

 execute() {
  console.log(`Removing note: ${this.note}`);
 }
}

class CompleteNoteCommand extends Command {
 constructor(note) {
  super();
  this.note = note;
 }

 execute() {
  console.log(`Completing note: ${this.note}`);
 }
}

// Define the invoker class
class NoteManager {
 constructor() {
  this.commands = [];
 }

 addNote(note) {
  const command = new AddNoteCommand(note);
  this.commands.push(command);
  command.execute();
 }

 removeNote(note) {
  const command = new RemoveNoteCommand(note);
  this.commands.push(command);
  command.execute();
 }

 completeNote(note) {
  const command = new CompleteNoteCommand(note);
  this.commands.push(command);
  command.execute();
 }
}

// Usage
const manager = new NoteManager();
manager.addNote('Buy milk');
manager.addNote('Walk the dog');
manager.completeNote('Buy milk');
manager.removeNote('Walk the dog');
```
