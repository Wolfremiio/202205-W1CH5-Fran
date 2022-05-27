import { PokemonModel } from "../models/data.js"

export class HttpStoreClass {
    url: string 
    constructor(){
        this.url = ''
    }
    getTasks() {
        fetch(this.url).then((resp) =>{
            console.log(resp.status)
          return  resp.json()  
    });
}
    
    getTask(task:TaskModel){
        fetch(this.url + `/${task.id}`);
    }
    setTask(){}
    updateTask(){}
    deleteTask(){}
}