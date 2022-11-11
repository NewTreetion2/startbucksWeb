import React, { Component, useState } from "react";
import "./css/App.css";
import GlobalStyles from "./css/GlobalStyles";

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
            event.target.style.backgroundColor = "gray";
          }
        }}
        onMouseLeave={(event) => {
          event.target.style.textDecoration = "none";
          event.target.style.backgroundColor = "#f6f5ef";
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
  return (
    <>
      <GlobalStyles />
      <div className="main-info">
        <div className="info-container">
          <img
            src="https://www.starbucks.co.kr/common/img/common/logo.png"
            alt="스타벅스로고"
          />
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
              <Button id={id} title={menuName} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
