export default class PokemonFetch {
  static async fetchPokemonListByID(id) {
    const query = `
    query samplePokeAPIquery {
      pokemonList: pokemon_v2_generation(order_by: {id: asc}, where: {id: {_eq: ${id}}}) {
        id
        name
        pokemon: pokemon_v2_pokemonspecies(order_by: {id: asc}) {
          id
          name
          is_baby
          is_legendary
          is_mythical
          capture_rate
          attributes: pokemon_v2_pokemons {
            types: pokemon_v2_pokemontypes {
              slot
              type: pokemon_v2_type {
                name
                id
              }
            }
            abilities: pokemon_v2_pokemonabilities {
              is_hidden
              id
              slot
              ability: pokemon_v2_ability {
                name
                is_main_series
                pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                  id
                  short_effect
                  effect
                  language_id
                }
              }
            }
          }
          flavor_texts: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
            flavor_text
            version: pokemon_v2_version {
              name
              id
            }
          }
        }
      }
    }
    
    `;

    return fetchGraphQL(query);
  }

  static async fetchPokemonByID(id) {
    const query = `
    query samplePokeAPIquery {
      pokemon: pokemon_v2_pokemonspecies(where: {id: {_eq: ${id}}}) {
        id
        name
        generation_id
        is_baby
        is_legendary
        is_mythical
        capture_rate
        attributes: pokemon_v2_pokemons {
          types: pokemon_v2_pokemontypes {
            slot
            type: pokemon_v2_type {
              name
              id
            }
          }
          abilities: pokemon_v2_pokemonabilities {
            is_hidden
            id
            slot
            ability: pokemon_v2_ability {
              name
              is_main_series
              pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                id
                short_effect
                effect
                language_id
              }
            }
          }
        }
        flavor_texts: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
          flavor_text
          version: pokemon_v2_version {
            name
            id
          }
        }
      }
    }
    `;

    return fetchGraphQL(query);
  }

  static async fetchRandomPokemon() {
    const query = `
    query samplePokeAPIquery {
      pokemon_count: pokemon_v2_pokemonspecies_aggregate {
        count: aggregate {
          count
        }
      }
    }
    `;
    const randomNumber = async () => {
      const length = await fetchGraphQL(query);
      return getRandomInt(1, length.data.pokemon_count.count.count);
    }
    const rand = await randomNumber();
    return this.fetchPokemonByID(rand);
  }
  
}

async function fetchGraphQL(query) {
  const result = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
      })
    })
  return await result.json();
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}