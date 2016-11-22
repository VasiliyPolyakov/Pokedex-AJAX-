# Pokedex-AJAX-

On click of ‘Load More’ another chunk of the list is being loaded and displayed on the page. Pokemon details should be displayed after clicking on the single pokemon in list. Previously shown pokemon details should disappear. 

Regarding API:
Get chunk of pokemon list
http://pokeapi.co/api/v1/pokemon/?limit=12
Get information about single pokemon
http://pokeapi.co/api/v1/pokemon/{{id}}
Image of pokemon
http://pokeapi.co/media/img/{{id}}.png  (or available through sprites.resource_uri resource)
All possible types
http://pokeapi.co/api/v1/type/?limit=999
You can find out more information from the docs


Bonus points for implementing:
- Adaptive styling (able to view this on all screen widths)
