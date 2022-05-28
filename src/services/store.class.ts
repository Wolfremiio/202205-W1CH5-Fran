

export class StoreClass {
   static lastPokemon: string = 'lastPokemon';
 

   static getLastPokemon(): string {
        return localStorage.getItem(StoreClass.lastPokemon)
            ? <string>localStorage.getItem(StoreClass.lastPokemon)
            : '10';
    }

    static setLastPokemon(last: string) {
        localStorage.setItem(this.lastPokemon, last);
    }

   /* deleteTasks() {
        localStorage.removeItem(this.lastPokemon);
    }*/
}
