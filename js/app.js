(function () {
  'use strict';

  var myGoals = [
    {icon: 'fa fa-laptop ', title: 'Improve Pure JavaScript Skills', description: 'Learn new frameworks, Master Design Patterns, Investigate ECMAScript 6'},
    {icon: 'fa fa-github ', title: 'Enhance Github profile', description: 'Help open source community by sharing more code to Github'},
    {icon: 'fa fa-sitemap ', title: 'Node.js', description: 'Aquire skills in node.js, learn express, jade, sockets, etc'}
  ];

  var mountNode = document.querySelector('.wrapper');

  var Goals = React.createClass({displayName: 'Goals',
    render : function () {
      var goalsArr = [];

      this.props.goals.forEach(function (elem) {
        goalsArr.push(React.createElement(Goal, {goal: elem}));
      });

      return (
        React.createElement("div", {className: "test"}, 
          goalsArr
        )
      )
    }
  });

  var Goal = React.createClass({displayName: 'Goal',
    render : function () {
      return (
        React.createElement("div", {className: "goal"}, 
          React.createElement("i", {className: this.props.goal.icon}), 
          React.createElement("span", null, this.props.goal.title), 
          React.createElement("p", null, this.props.goal.description)
        )
      );
    }
  });

  React.render(React.createElement(Goals, {goals: myGoals}), mountNode);

})();