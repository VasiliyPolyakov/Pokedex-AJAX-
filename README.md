# Pokedex-AJAX-

On click of ‘Load More’ another chunk of the list is being loaded and displayed on the page. Pokemon details should be displayed after clicking on the single pokemon in list. Previously shown pokemon details should disappear. 

Regarding API:
1) Get chunk of pokemon list - 
http://pokeapi.co/api/v1/pokemon/?limit=12
2) Get information about single pokemon - 
http://pokeapi.co/api/v1/pokemon/{{id}}
3) Image of pokemon - 
http://pokeapi.co/media/img/{{id}}.png  (or available through sprites.resource_uri resource)
4) All possible types -
http://pokeapi.co/api/v1/type/?limit=999

Bonus points for implementing:
- Adaptive styling (able to view this on all screen widths)

