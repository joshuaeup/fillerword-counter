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
    const result = `
        <p class="results-text">
            In total ${name ? name : "Speaker"}  had: 
            ${counterArr[0] > 0 ? counterArr[0] + " Umm(s)" : " "} 
            ${counterArr[1] > 0 ? counterArr[1] + " And(s)" : " "} 
            ${counterArr[2] > 0 ? counterArr[2] + " Like(s)" : " "} 
            ${counterArr[3] > 0 ? counterArr[3] + " Well(s)" : " "} 
            ${counterArr[4] > 0 ? counterArr[4] + " So(s)" : " "} 
            ${counterArr[5] > 0 ? counterArr[5] + " But(s)" : " "} 
            ${counterArr[6] > 0 ? counterArr[6] + " Uhh(s)" : " "} 
            ${counterArr[7] > 0 ? counterArr[7] + " Pause(s)" : " "} 
        </p>
        `;

    resultContainer.insertAdjacentHTML("beforeend", result);

    // Reset function
    clear();
}