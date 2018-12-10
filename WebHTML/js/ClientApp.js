import React from "react";
import ReactDOM from "react-dom";

import MyTitle from "./MyTitle";

var ce = React.createElement;

var MyFirstComponent = () => {
  return ce(
    "div",
    null,
    ce(MyTitle, { color: "rebeccapurple", title: "House of Cars" }),
    ce(MyTitle, { color: "peru", title: "Orange is the New Black" }),
    ce(MyTitle, { color: "burlwood", title: "Stranger Things" })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));

/*

  var MyFirstComponent = function () {
    return (
      React.createElement('div', null,
        React.createElement(MyTitle, null),
        React.createElement(MyTitle, null),
        React.createElement(MyTitle, null)
      )
    );
  };
*/
