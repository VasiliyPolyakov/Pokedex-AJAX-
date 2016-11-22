(function() {

	'use strict';

	var offsetNum = 0;
	var dataEndpoint = 'http://pokeapi.co/api/v2/pokemon?limit=12&offset=' + offsetNum + '';

	$('.select-pokemon').on("click", function(e) {
		console.log('klick');
		var b = $(e.target).val();
		console.log(b);
	});

	function requestDate(url) { // sends a request to the server
		$.get(url).then(function(result) {
			console.log('result', result);
			addPokemonList(result);
			return result;
		}).catch(function() {
			alert('error');
		});
	}

	requestDate(dataEndpoint);

	function addPokemonList(data) { // Pokemon adds to the list

		var template = $('#pokemon-template').html();
		var rendered = Mustache.render(template, {
			pokemons: data.results
		});
		$('.pokemon-name__list').append(rendered);
	}

	function getPokemon(link) {
		$.get(link).then(function(data) {
			console.log('getPokemon', data);
			var template = $('#pokemon-name-item').html();
			var rendered = Mustache.render(template, {
				pokemons: data
			});
			$('.pokemon-information__show').html(rendered);
		}).catch(function() {
			alert('error');
		});
	}

	function getUrl() {
		offsetNum += 12;
		dataEndpoint = 'http://pokeapi.co/api/v2/pokemon?limit=12&offset=' + offsetNum + '';
		return dataEndpoint;
	}

	$(".pokemon-name__button").on("click", function() { // when you click to load 12 Pokemon
		getUrl();
		requestDate(dataEndpoint);
	});

	$(".pokemon-name__list").on("click", function(e) { // displays information about a specific Pokemon
		var pokemonLink = $(e.target).attr('value');
		//console.log(pokemonLink);
		getPokemon(pokemonLink);
	});

	$(document).ajaxSend(function() {
		$(".ajax-loader").show();
	});

	$(document).ajaxComplete(function() {
		$(".ajax-loader").hide();
	});
}());