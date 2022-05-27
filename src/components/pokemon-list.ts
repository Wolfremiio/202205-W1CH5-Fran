/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { PokemonModel } from '../models/Pokemon.js';

//import { StoreClass } from '../services/store.class.js';
//import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemPokemon } from './pokemon.js';
import { POKEMONS } from '../models/data.js';

export class PokemonList extends Component implements iComponent {
    pokemons!: Array<PokemonModel>;
    constructor(public selector: string) {
        super();
        this.pokemons = POKEMONS;
       // this.tasks = new StoreClass().getTasks();
        this.updateComponent();
    }
    createTemplate() {
        let html = `
     
        <ul class="list__container-list">`;
        this.pokemons.forEach((item) => {
            html += new ItemPokemon('', item).template;

        });
        html += `</ul>`;
        return html;
    }
    private manageComponent() {
      /*  document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) =>
                item.addEventListener('change', this.handlerChange.bind(this))
            );*/
    }
    private updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        //new StoreClass().setTasks(this.tasks);
        //new AddTask('slot.addTask', this.addTask.bind(this));
    }
    /*private handlerButton(ev: Event) {
        const deletedId = (<HTMLElement>ev.target).dataset.id;
        console.log('click', deletedId);
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.updateComponent();
    }*/

   /* private handlerChange(ev: Event) {
        const changeId = (<HTMLElement>ev.target).dataset.id;
        console.log('change', changeId);
        this.tasks = this.tasks.map((item) => ({
            ...item,
            isComplete:
                item.id === changeId ? !item.isComplete : item.isComplete,
        }));
        this.updateComponent();
    } */

    
}
