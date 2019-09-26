const API_BASE_URL = 'http://pokeapi.co/api/v2/';
const MAX_LOCATION = 781;

$.ajaxSetup({
  type: 'GET',
  dataType: "json",
  rossDomain: true,
});

$(document).ready(function() {
  loadingImg();

  $('#pokemonizer-btn').click(function() {
    // clear table before displaying new location
    $('#poke-grid').find('tr:gt(0)').remove();

    getLocationById(Math.floor(Math.random() * MAX_LOCATION)).done(
      function(location) {
        $('#pokemonizer-div > p').html(location.name + '<br>');
        $('#pokemonizer-div > p').show();

        if (location.areas.length > 0) {
          $('#poke-none').hide();
          for (var area of location.areas) {
            getAreaByURL(area.url).done(
              function(_area) {
                $('#poke-grid').show();
                for (var pokeEnc of _area.pokemon_encounters) {
                  getPokemonByURL(pokeEnc.pokemon.url).done(pokemonsGridFill)
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
    url: areaUrl,
  });
}

function pokemonsGridFill(pokemon) {
  $('#poke-grid > table').find('tbody')
    .append(
      '<tr>' +
        `<td><img src="${pokemon.sprites.front_default}"></td>` +
        `<td>${pokemon.name}</td>` +
        `<td>${pokemon.base_experience}</td>` +
      '</tr>'
    );
}

function pokemonsGridReset() {

}

function getPokemonByURL(pokeUrl) {
  return $.ajax({
    url: pokeUrl,
  });
}

function loadingImg() {
  $(document).ajaxStart(function() {
    $("#loading-img").show();
  });
  $(document).ajaxComplete(function() {
    $("#loading-img").hide();
  });
}
