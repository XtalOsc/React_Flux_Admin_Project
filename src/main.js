$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homepage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
  render: function(){
    var Child;

    switch(this.props.route) {
      case 'about': Child = About; break;
      default: Child = Home;
    }//end switch
    return (
      <div>
        <Child/>
      </div>
    );//end return
  }//end render function
});//end React.createClass

function render (){
  var route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
