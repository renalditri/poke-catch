class LocalStorage {
  static get() {
    return JSON.parse(localStorage.pokemon);
  }

  static getById(id) {

  }

  static insert(data) {
    if(localStorage.pokemon) {
      const pokemon = JSON.parse(localStorage.pokemon);
      pokemon.myPokemon.push(data);
      localStorage.pokemon = pokemon;
      return JSON.parse(localStorage.pokemon);
    } else {
      localStorage.pokemon = JSON.stringify({myPokemon: [data]})
      return JSON.parse(localStorage.pokemon);
    }
  }

  static delete(id) {

  }
}

export default LocalStorage;