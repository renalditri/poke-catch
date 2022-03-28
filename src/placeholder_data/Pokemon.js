const pokemonData = {
  "pokemon": [
    {
      "id": 1,
      "name": "bulbasaur",
      "generation_id": 1,
      "is_baby": false,
      "is_legendary": false,
      "is_mythical": false,
      "capture_rate": 45,
      "attributes": [
        {
          "types": [
            {
              "slot": 1,
              "type": {
                "name": "grass",
                "id": 12
              }
            },
            {
              "slot": 2,
              "type": {
                "name": "poison",
                "id": 4
              }
            }
          ],
          "abilities": [
            {
              "is_hidden": false,
              "id": 1,
              "slot": 1,
              "ability": {
                "name": "overgrow",
                "is_main_series": true,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "id": 130,
                    "short_effect": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
                    "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
                    "language_id": 9
                  }
                ]
              }
            },
            {
              "is_hidden": true,
              "id": 2,
              "slot": 3,
              "ability": {
                "name": "chlorophyll",
                "is_main_series": true,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "id": 68,
                    "short_effect": "Doubles Speed during strong sunlight.",
                    "effect": "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
                    "language_id": 9
                  }
                ]
              }
            }
          ]
        }
      ],
      "flavor_texts": [
        {
          "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
          "version": {
            "name": "red",
            "id": 1
          }
        },
        {
          "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
          "version": {
            "name": "blue",
            "id": 2
          }
        },
        {
          "flavor_text": "It can go for days\nwithout eating a\nsingle morsel.\fIn the bulb on\nits back, it\nstores energy.",
          "version": {
            "name": "yellow",
            "id": 3
          }
        },
        {
          "flavor_text": "The seed on its\nback is filled\nwith nutrients.\fThe seed grows\nsteadily larger as\nits body grows.",
          "version": {
            "name": "gold",
            "id": 4
          }
        },
        {
          "flavor_text": "It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.",
          "version": {
            "name": "silver",
            "id": 5
          }
        },
        {
          "flavor_text": "While it is young,\nit uses the\nnutrients that are\fstored in the\nseeds on its back\nin order to grow.",
          "version": {
            "name": "crystal",
            "id": 6
          }
        },
        {
          "flavor_text": "BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.",
          "version": {
            "name": "ruby",
            "id": 7
          }
        },
        {
          "flavor_text": "BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.",
          "version": {
            "name": "sapphire",
            "id": 8
          }
        },
        {
          "flavor_text": "BULBASAUR can be seen napping in bright\nsunlight. There is a seed on its back.\nBy soaking up the sun’s rays, the seed\ngrows progressively larger.",
          "version": {
            "name": "emerald",
            "id": 9
          }
        },
        {
          "flavor_text": "There is a plant seed on its back right\nfrom the day this POKéMON is born.\nThe seed slowly grows larger.",
          "version": {
            "name": "firered",
            "id": 10
          }
        },
        {
          "flavor_text": "A strange seed was planted on its back at\nbirth. The plant sprouts and grows with\nthis POKéMON.",
          "version": {
            "name": "leafgreen",
            "id": 11
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "diamond",
            "id": 12
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "pearl",
            "id": 13
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "platinum",
            "id": 14
          }
        },
        {
          "flavor_text": "The seed on its back is filled\nwith nutrients. The seed grows\nsteadily larger as its body grows.",
          "version": {
            "name": "heartgold",
            "id": 15
          }
        },
        {
          "flavor_text": "It carries a seed on its back right\nfrom birth. As it grows older, the\nseed also grows larger.",
          "version": {
            "name": "soulsilver",
            "id": 16
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "black",
            "id": 17
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "white",
            "id": 18
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "black-2",
            "id": 21
          }
        },
        {
          "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.",
          "version": {
            "name": "white-2",
            "id": 22
          }
        },
        {
          "flavor_text": "A strange seed was planted on its back at birth.\nThe plant sprouts and grows with this Pokémon.",
          "version": {
            "name": "x",
            "id": 23
          }
        },
        {
          "flavor_text": "For some time after its birth, it grows by gaining\nnourishment from the seed on its back.",
          "version": {
            "name": "y",
            "id": 24
          }
        },
        {
          "flavor_text": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
          "version": {
            "name": "omega-ruby",
            "id": 25
          }
        },
        {
          "flavor_text": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
          "version": {
            "name": "alpha-sapphire",
            "id": 26
          }
        },
        {
          "flavor_text": "It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy.",
          "version": {
            "name": "lets-go-pikachu",
            "id": 31
          }
        },
        {
          "flavor_text": "It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy.",
          "version": {
            "name": "lets-go-eevee",
            "id": 32
          }
        },
        {
          "flavor_text": "There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger.",
          "version": {
            "name": "sword",
            "id": 33
          }
        },
        {
          "flavor_text": "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow.",
          "version": {
            "name": "shield",
            "id": 34
          }
        }
      ]
    }
  ]
}


export default pokemonData;