var React = require('react');
var ReactDOM = require('react-dom');
var GotBox = require('./components/GotBox.jsx')


window.onload = function(){
  ReactDOM.render(
    <GotBox/>,
    document.getElementById('app')
  );
}
