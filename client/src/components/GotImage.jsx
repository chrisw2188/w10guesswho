var React = require('react');

var GotImage = React.createClass({
  imageChanger: function(e){
    if (this.props.data.image === e.target.src){
      e.target.src = "http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg"
    }
    else {
      e.target.src = this.props.data.image
    }
  },


  render: function() {
    return (
      <div className="image">
      <img onClick={this.imageChanger} className="char-image" src={this.props.data.image}/>
      <h4 className="char-name">{this.props.data.name}</h4>
      </div>
    );
  }

});

module.exports = GotImage;