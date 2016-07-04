var React = require('react');

var GotDisplay = require("./GotDisplay.jsx")
var GotQuestion = require('./GotQuestion.jsx')
var GotGuess = require('./GotGuess.jsx')

var Data = require('../data.js')

var Gotbox = React.createClass({

  getInitialState: function() {
    return {
      CharData: Data,
      Who: undefined,
      Win: undefined,
      TrueFalse: undefined
    };
  },

  componentDidMount: function() {
    this.setState({
      Who: _.sample(this.state.CharData)
    });
  },

  whittleDown: function(cat, query){
    // var c = cat.toLowerCase();
    if (cat === "hair"){
      cat = "hair colour"
    }
    if (this.state.Who[cat] === query){
      this.setState({
        TrueFalse: <p>{query} is the correct {cat}.</p>
      });
    }
    else{
      this.setState({
        TrueFalse: <p>{query} is the incorrect {cat}.</p>
      });
    }
  }, 

  handleGuess: function(character){
    if (character === this.state.Who.name){
      this.setState({
        Win: <p>You have won the game of Thrones</p>
      });
    }
    else { 
      this.setState({
        Win: <p>A man does not know {character}</p>
      });
    }
  },

  render: function() {
    return (
      <div>
      <h1 id="title">Game of Thrones Guess Who</h1>
      <GotDisplay 
        charData={this.state.CharData}
      />
      <GotQuestion
        whittleDown={this.whittleDown}
        answer={this.state.TrueFalse}
      />
      <GotGuess 
        charData={this.state.CharData}
        handleGuess={this.handleGuess}
        win={this.state.Win}
      />
      <form id="new" onSubmit={this.newGame}>
      <input type="submit" value="New Game"></input>
      </form>
      </div>
    );
  }

});

module.exports = Gotbox;