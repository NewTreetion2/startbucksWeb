import React, { Component, useState } from "react";
import "./css/App.css";
import GlobalStyles from "./css/GlobalStyles";

function BtnNav(props) {
  if (Number(props.navNum) === props.direction) {
    return (
      <section>
        <article style={{}} className="onmouse-space"></article>
      </section>
    );
  }
}

function Button(props) {
  const newButton = [];
  for (let i = 0; i < props.title.length; i++) {
    newButton.push(
      <a
        key={props.id[i]}
        className={i + 1}
        href={"/" + i}
        onClick={(event) => {
          event.preventDefault();
        }}
        onMouseOver={(event) => {
          if (Number(event.target.className) === props.id[i]) {
            event.target.style.textDecoration = "underline";
            event.target.style.color = "#669900";
            event.target.style.backgroundColor = "#2c2a29";
            props.setnavNum(Number(event.target.className));
            props.deriction(props.id[i]);
          }
        }}
        onMouseLeave={(event) => {
          event.target.style.textDecoration = "none";
          event.target.style.color = "black";
          event.target.style.backgroundColor = "#f6f5ef";
          props.setnavNum(0);
        }}
      >
        {props.title[i].title}
      </a>
    );
  }
  return newButton;
}

function App() {
  const menuName = [
    { id: 1, title: "COFFEE" },
    { id: 2, title: "MENU" },
    { id: 3, title: "STORE" },
    { id: 4, title: "RESPONSIBILITY" },
    { id: 5, title: "STARBUCKS REWARDS" },
    { id: 6, title: "WHAT'S NEW" },
  ];
  const id = [];
  for (let i = 0; i < menuName.length; i++) {
    id.push(menuName[i].id);
  }
  const [navNumver, setnavNumver] = useState(1);
  const [direction, setDirection] = useState(1);
  return (
    <>
      <header>
        <GlobalStyles />
        <div className="main-info">
          <div className="info-container">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <img
                src="https://www.starbucks.co.kr/common/img/common/logo.png"
                alt="스타벅스로고"
              />
            </a>
            <div className="button-container">
              <div className="up-nav">
                <a href="/">Sign in</a>
                <a href="/">My Starbucks</a>
                <a href="/">Customer Service & Ideas</a>
                <a href="/">Find a Store</a>
                <img
                  src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png"
                  alt="돋보기"
                ></img>
              </div>
              <div className="down-nav">
                <Button
                  id={id}
                  title={menuName}
                  setnavNum={setnavNumver}
                  deriction={setDirection}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <BtnNav navNum={navNumver} direction={direction}></BtnNav>
      <footer></footer>
    </>
  );
}

export default App;
