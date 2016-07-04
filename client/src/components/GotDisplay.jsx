var React = require('react');
var _ = require('lodash');

var GotImage = require("./GotImage.jsx")
var GotDisplay = React.createClass({

  newGame: function(){
    console.log("new game")
  },

  render: function() {

    var imageDisplay = this.props.charData.map(function(info){
      return <GotImage key={info.name} data={info}/>
    })
  
    
    return (
      <div id="images">
      {imageDisplay}
      </div>
    );
  }

});

module.exports = GotDisplay;