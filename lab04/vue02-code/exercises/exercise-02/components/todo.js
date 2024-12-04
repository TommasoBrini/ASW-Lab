const todo = {
    template: `
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Todo List</h3>
                    <div class="form-group">
                        <input type="text" v-model="newTask" class="form-control" placeholder="Add a new task">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" @click="addTask">Add Task</button>
                    </div>
                    <ul class="list-group">
                        <li v-for="(task, index) in tasks" :key="index" class="list-group-item">
                            <input type="checkbox" v-model="task.done">
                            <span :style="task.done ? 'text-decoration-line: line-through' : ''">{{ task.text }}</span>
                            <button class="btn btn-danger btn-sm float-right" @click="removeTask(index)">Remove</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            newTask: '',
            tasks: []
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask, done: false });
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
};