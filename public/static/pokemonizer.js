const API_BASE_URL = 'http://pokeapi.co/api/v2/';
const MAX_LOCATION = 781;

$.ajaxSetup({
  type: 'GET',
  dataType: "json",
  rossDomain: true,
});

$(document).ready(function() {
  $('#pokemonizer-btn').click(function() {
    getLocationById(Math.floor(Math.random() * MAX_LOCATION)).done(
      function(location) {
        for (var area of location.areas) {
          getAreaByURL(area.url).done(
            function(_area) {
              for (var pokeEnc of _area.pokemon_encounters) {
                getPokemonByURL(pokeEnc.pokemon.url)
              }
          })
        }
      }
    );
  });

});

function getLocationById(id) {
  return $.ajax({
    url: API_BASE_URL + 'location/' + id
  });
}

function getAreaByURL(areaUrl) {
  return $.ajax({
    url: areaUrl,
  });
}

function getPokemonByURL(pokeUrl) {
  return $.ajax({
    url: pokeUrl,
    success: function (pokemon) {
      $('#pokemonizer-div').append('<h2>' + pokemon.name + '</h2>');
    }
  });
}
