(function () {
  'use strict';

  var myGoals = [
    {icon: 'fa fa-laptop ', title: 'Improve Pure JavaScript Skills', description: 'Learn new frameworks, Master Design Patterns, Investigate ECMAScript 5'},
    {icon: 'fa fa-laptop ', title: 'Improve Pure JavaScript Skills', description: 'Learn new frameworks, Master Design Patterns, Investigate ECMAScript 4'},
    {icon: 'fa fa-laptop ', title: 'Improve Pure JavaScript Skills', description: 'Learn new frameworks, Master Design Patterns, Investigate ECMAScript 6'}
  ];

  var mountNode = document.querySelector('.wrapper');

  var Goal = React.createClass({displayName: 'Goal',
    render : function () {
      return React.createElement('div', {className: this.props.class}, null, [Icon, Title, Description]);
    }
  });

  var Icon = React.createElement('i', {className: 'fa fa-laptop'});
  var Title = React.createElement('span', null, 'Improve Pure JavaScript Skills');
  var Description = React.createElement('p', null, 'Learn new frameworks, Master Design Patterns, Investigate ECMAScript 6');

  React.render(React.createElement(Goal, {class: 'goal'}), mountNode);

})();