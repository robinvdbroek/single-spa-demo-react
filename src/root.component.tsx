import React from "react";

export default function Root(props) {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Hello, React Application!</h1>
      <p class="lead">
        Deze applicatie wordt ingeladen zodra we op route '/react' zitten, wat
        we dus de parent-URL vinden van deze applicatie. Binnen de React app
        werkt routing gewoon zoals je gewend ben. Router is op dit moment niet
        actief...{" "}
      </p>
    </div>
  );
}
