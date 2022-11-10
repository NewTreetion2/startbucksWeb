// import logo from "./logo.svg";
import React, { Component, useState } from "react";
import "./css/App.css";
import Header from "./component/Header";
import Article from "./component/Article";
import GlobalStyles from "./css/GlobalStyles";
function OnButton(props) {
  return <article>ddd</article>;
}
function App() {
  const [id, setId] = useState(1);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header></Header>
        <a
          href={"/nav/" + id}
          onClick={(event) => {
            event.preventDefault();
          }}
          onMouseOver={(event) => {
            OnButton(id);
          }}
        >
          aa
        </a>
        <Article></Article>
      </div>
    </>
  );
}

export default App;
