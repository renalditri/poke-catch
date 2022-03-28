class LocalStorageManager {
  static get() {
    return JSON.parse(localStorage.pokemon);
  }

  static getById(id) {
    const pokemon = JSON.parse(localStorage.pokemon);
    return pokemon.myPokemon[id];
  }

  static insert(data) {
    if (localStorage.pokemon) {
      const pokemon = JSON.parse(localStorage.pokemon);
      pokemon.myPokemon.push(data);
      localStorage.pokemon = JSON.stringify(pokemon);
      return JSON.parse(localStorage.pokemon);
    } else {
      localStorage.pokemon = JSON.stringify({ myPokemon: [data] })
      return JSON.parse(localStorage.pokemon);
    }
  }

  static delete(id) {
    const pokemon = JSON.parse(localStorage.pokemon);
    const index = pokemon.myPokemon.indexOf(id);
    if (index > -1) {
      pokemon.myPokemon.splice(index, 1);
    }
    return JSON.parse(localStorage.pokemon);
  }
}

export default LocalStorageManager;