export class HttpStoreClass {
    url;
    constructor() {
        this.url = '';
    }
    getTasks() {
        fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
    getTask(task) {
        fetch(this.url + `/${task.id}`);
    }
    setTask() { }
    updateTask() { }
    deleteTask() { }
}
