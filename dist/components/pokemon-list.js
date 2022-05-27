//import { StoreClass } from '../services/store.class.js';
//import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemPokemon } from './pokemon.js';
import { POKEMONS } from '../models/data.js';
export class PokemonList extends Component {
    selector;
    pokemons;
    constructor(selector) {
        super();
        this.selector = selector;
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
    manageComponent() {
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
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        //new StoreClass().setTasks(this.tasks);
        //new AddTask('slot.addTask', this.addTask.bind(this));
    }
}
