export class StoreClass {
    static lastPokemon = 'lastPokemon';
    static getLastPokemon() {
        return localStorage.getItem(StoreClass.lastPokemon)
            ? localStorage.getItem(StoreClass.lastPokemon)
            : '10';
    }
    static setLastPokemon(last) {
        localStorage.setItem(this.lastPokemon, last);
    }
}
