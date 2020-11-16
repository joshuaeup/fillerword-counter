"use strict";

// DOM
let gridContainer = document.getElementById("main-container");
let resultContainer = document.getElementById("results");
let results = document.querySelector(".results-text");

// Variables
let fillerWords = ["Umm", "And", "Like", "Well", "So", "But", "Uhh", "Pause"];
let counterArr = [0, 0, 0, 0, 0, 0, 0, 0];

// Checks which index was chosen then updates that index in counter array.
function switchValue(id, symbol) {
    // Checks if symbol is addition or subtraction
    if (symbol === "+") {
        //Update varible and UI
        counterArr[id]++;
        document.querySelector(`.counter-${id}`).textContent = counterArr[id];
    } else {
        //Update varible and UI
        counterArr[id]--;
        document.querySelector(`.counter-${id}`).textContent = counterArr[id];
    }
}

// Loops through filler word arr then creates an element for each
fillerWords.forEach(function (word, i) {
    const html = `
    <section class="sub-container">
        <h4 class="sub-counter counter-${i}">0</h4>
        <p class="sub-title">${word}</p>
        <div class="btn-container">
            <button class="btn increment" onclick="decrement(${i})">
                -
            </button>
            <button class="btn decrement" onclick="increment(${i})">
                +
            </button>
        </div>
    </section>
    `;
    gridContainer.insertAdjacentHTML("beforeend", html);
});

// Increment function
function increment(id) {
    switchValue(id, "+");
}
// Decrement function
function decrement(id) {
    switchValue(id, "-");
}

// Resets all values back to start
function clear() {
    fillerWords.forEach(function (word, i) {
        document.querySelector(`.counter-${i}`).textContent = 0;
        counterArr[i] = 0;
    });
    document.getElementById("name").value = "";
}

// Captures all values then prints message to results container
function done() {
    let name = document.getElementById("name").value;
    // Checks if current array value is equal to 0
    let isEmpty = (currentValue) => currentValue === 0;
    if (counterArr.every(isEmpty)) {
        const result = `
        <p class="results-text">
            In total ${name ? name : "The Speaker"} did not use any!
        </p>
        `;
        resultContainer.insertAdjacentHTML("beforeend", result);
    } else {
        const result = `
        <p class="results-text">
            In total ${name ? name : " The Speaker"}  used: 
            ${
                counterArr[0] > 0
                    ? counterArr[0] + ` ${fillerWords[0]}(s)`
                    : " "
            } 
            ${
                counterArr[1] > 0
                    ? counterArr[1] + ` ${fillerWords[1]}(s)`
                    : " "
            } 
            ${
                counterArr[2] > 0
                    ? counterArr[2] + ` ${fillerWords[2]}(s)`
                    : " "
            } 
            ${
                counterArr[3] > 0
                    ? counterArr[3] + ` ${fillerWords[3]}(s)`
                    : " "
            } 
            ${
                counterArr[4] > 0
                    ? counterArr[4] + ` ${fillerWords[4]}(s)`
                    : " "
            } 
            ${
                counterArr[5] > 0
                    ? counterArr[5] + ` ${fillerWords[5]}(s)`
                    : " "
            } 
            ${
                counterArr[6] > 0
                    ? counterArr[6] + ` ${fillerWords[6]}(s)`
                    : " "
            } 
            ${
                counterArr[7] > 0
                    ? counterArr[7] + ` ${fillerWords[7]}(s)`
                    : " "
            } 
        </p>
        `;
        resultContainer.insertAdjacentHTML("beforeend", result);
    }

    // Reset function
    clear();
}
