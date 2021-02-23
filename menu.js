"use strict";
const menu = document.querySelector("#menu");
const container = document.querySelector(".container");

document.querySelector(".c-gamburger").addEventListener("click", function (e) {
  e.preventDefault();
  //   this.classList.toggle("is-active");
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    menu.classList.remove("nav-active");
    container.classList.remove("body-active");
  } else {
    this.classList.add("is-active");
    menu.classList.add("nav-active");
    container.classList.add("body-active");
  }
});
