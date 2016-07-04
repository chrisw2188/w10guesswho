var React = require('react');

var GotGuess = React.createClass({

  getInitialState: function() {
    return {
      character: this.props.charData[0].name
    };
  },

  changer: function(e){
    this.setState({
      character: e.target.value  
    });
  },

  answer: function(e){
    e.preventDefault();
    this.props.handleGuess(this.state.character)
  },

  render: function() {
    var guess = this.props.charData.map(function(data){
      return <option key={data.name} >{data.name}</option>
    })

    return (
      <div id="guess">
      <form onSubmit={this.answer}>
      <h4 className="label">Make your guess:</h4>
        <select onChange={this.changer}>
          {guess}
        </select>
        <input type="submit" value="Guess Who?"></input>
      {this.props.win}
      </form>
      </div>
    );
  }

});

module.exports = GotGuess;