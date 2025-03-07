function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do laundry", "🧺");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
