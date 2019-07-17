var React = require('react');

//Banana is the pageof the name. Use it for the class and the module.exports.
// all the HTML goes between the bracket.

class Banana extends React.Component {
  render() {
    if( this.props.pokemonKey.caught === true ){
        var message = "You caught this!";
    }else{
        var message = "You need to catch this!";
    }

    let pokemonImg = this.props.pokemonKey.img + "?foo=bar";

    {/*THIS IS A COMMENT*/}
    {/* to loop over an array use the map syntax  */}
    const people = this.props.people.map( person => {
      return <p>{person}</p>
    });

    return (
      <html>
        <body>
          <div>
            <h1>Hello React Wow</h1>
            {/* this.props refer to the 2nd argument in the response.render  */}
            <h2>Pokemon name: {this.props.pokemonKey.name}</h2>
            <img src={pokemonImg}/>
            <p>{message}</p>
            {/* <img src={this.props.pokemonKey.img}/>*/}
            <div>{people}</div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Banana;
