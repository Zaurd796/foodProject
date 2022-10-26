"use strict";
import tabs from "./modules/tabs.js";
import timer from "./modules/timer.js";
import card from "./modules/card.js";
import modal from "./modules/modal.js";
import form from "./modules/form.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import { openModal } from "./modules/modal.js";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 50000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  timer(".timer", "2022-09-06");
  card();
  modal("[data-modal]", ".modal", modalTimerId);
  form("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  calc();



});
