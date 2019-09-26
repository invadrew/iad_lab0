const API_BASE_URL = 'https://pokeapi.co/api/v2/';
const MAX_LOCATION = 781;

var loadedPokemons = new Set();

$.ajaxSetup({
  type: 'GET',
  dataType: "json",
  crossDomain: true,
  beforeSend: function() {
    $("#loading-img").show();
  },
  complete: function() {
    $("#loading-img").hide();
  }
});

$(document).ready(function() {
  $('#pokemonizer-btn').click(function() {
    resetPokemonizer();

    getLocationById(Math.floor(Math.random() * MAX_LOCATION)).done(
      function(location) {
        // show location name
        $('#pokemonizer-div > p').html(location.name + '<br>');
        $('#pokemonizer-div > p').show();

        if (location.areas.length > 0) {
          $('#poke-none').hide();
          for (var area of location.areas) {
            getAreaByURL(area.url).done(
              function(_area) {
                $('#poke-grid').show();
                for (var pokeEnc of _area.pokemon_encounters) {
                    getPokemonByURL(pokeEnc.pokemon.url).done(displayPokemon);
                }
            })
          }
        } else {
          $('#poke-grid').hide();
          $('#poke-none').show();
        }
      }
    );
  });
});

function getLocationById(id) {
  return $.ajax({
    url: API_BASE_URL + 'location/' + id,
  });
}

function getAreaByURL(areaUrl) {
  return $.ajax({
    url: areaUrl
  });
}

function getPokemonByURL(pokeUrl) {
  return $.ajax({
    url: pokeUrl,
  });
}

function displayPokemon(pokemon) {
  if (!loadedPokemons.has(pokemon.name)) {
    $('#poke-grid > table').children('tbody').append(
      '<tr>' +
        `<td><img src="${pokemon.sprites.front_default}"></td>` +
        `<td>${pokemon.name}</td>` +
        `<td>${pokemon.base_experience}</td>` +
      '</tr>'
    );
    loadedPokemons.add(pokemon.name);
  }
}

function resetPokemonizer() {
  // clear table before displaying new location
  $('#poke-grid').find('tr:gt(0)').remove();
  // hide grid header
  $('#poke-grid').hide();
  // hide "no pokemon" message
  $('#poke-none').hide();
  // clear set after all pokemons displayed
  loadedPokemons.clear();
}
