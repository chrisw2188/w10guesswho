var React = require('react');

var GotQuestion = React.createClass({

  getInitialState: function() {
    return {
      char: ["Male", "Female"],
      cat: "Sex",
      query: "Male" 
    };
  },

    setCat: function(cat){
      this.setState({
        cat: cat 
      });
    },

    setQuery: function(e){
      this.setState({
        query: e.target.value
      })
    },

    query: function(e){
      e.preventDefault();
      this.props.whittleDown(this.state.cat, this.state.query)
    },

    options: function(e){
      this.setCat(e.target.value)
      if(e.target.value === "sex"){
        this.setState({
          char:["Male", "Female"],
          query: "Male"
        });
      }
      if(e.target.value === "hair"){
        this.setState({
          char:["Blonde", "Brown", "Red"],
          query: "Blonde"
        });
      }
      if(e.target.value === "house"){
        this.setState({
          char:["Stark", "Lannister", "Tyrell"],
          query: "Stark"
        });
      }     
    },

  render: function() {
    var cheese = this.state.char.map(function(info){
      return <option key={info}>{info}</option>
    })

    return (
      <div>
      <form onSubmit={this.query}>
      <h4 className="label">Ask a question:</h4>
        <select onChange={this.options}>
          <option value="sex">Sex</option>
          <option value="hair">Hair Colour</option>
          <option value="house">House</option>
        </select>
        <select onChange={this.setQuery}>{cheese}</select>
        <input type="submit" value="Ask?"/>
        {this.props.answer}
      </form>
      </div>
    );
  }

});

module.exports = GotQuestion;