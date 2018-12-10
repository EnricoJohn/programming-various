import React from "react";
var ce = React.createElement;

var MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

ReactDOM.render(ce(MyTitle), document.getElementById("app"));

export default MyTitle;
