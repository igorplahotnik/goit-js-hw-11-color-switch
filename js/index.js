'use strict';

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const body = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]')

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval = null;

const changeBackground = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  body.style.backgroundColor = color;
};

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  interval = setInterval(() => changeBackground(), 1000)
});
stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(interval)
})