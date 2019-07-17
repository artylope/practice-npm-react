console.log("hello");

const express = require('express');
const app = express();


// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/banana/:id',(request, response)=>{

  console.log("a request!");

  const pokedex = [
    {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "caught":true,
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png"
    },
    {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "caught":false,
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    }
  ];





  const pokemon = pokedex[request.params.id];
  console.log(pokemon.name);

  const data = {
    pokemonKey : pokemon,
    people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley"
    ]
  };

  response.render('banana',data);
});

app.get('/myform',(request, response)=>{
  response.render('myform');
});


app.listen(4000, () => console.log('~~~ Tuning in to the waves of port 4000 ~~~'));
