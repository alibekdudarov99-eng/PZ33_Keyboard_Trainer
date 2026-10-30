"use strict";

const input = document.querySelector("#keyboard-input");
const lastKey = document.querySelector("#last-key");
const keyCode = document.querySelector("#key-code");
const keyState = document.querySelector("#key-state");
const keyCount = document.querySelector("#key-count");
let count = 0;

input.addEventListener("keydown", (event) => {
    lastKey.textContent = event.key;
    keyCode.textContent = event.code;
    
    keyState.textContent = "Клавиша нажата";

    if (!event.repeat) {
        count++;
        keyCount.textContent = count;
    }
});

input.addEventListener("keyup", () => {
    keyState.textContent = "Клавиша отпущена";
});

input.addEventListener("keypress", (event) => {
    console.log(event.key);
});
