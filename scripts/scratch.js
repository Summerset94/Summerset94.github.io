// getting up our field

const playfield = document.querySelector(".tilefield tbody");

// creating tiles

function createTiles(number = 16) {
  playfield.innerHTML = ''; // Clear existing content

  for (let i = 0; i < number; i++) {
    let row = playfield.insertRow(i);
    for (let j = 0; j < number; j++) {
      let cell = row.insertCell(j);
      cell.classList.add("scratchTile");
      cell.addEventListener("pointerdown", function() {
        this.style.backgroundColor = colorValue;
      });
    }
  }
}

createTiles();

let colorPicker = document.getElementById("colorpicker");
let colorValue = colorPicker.value;

let tileToPaint = document.getElementsByClassName("scratchTile");

for (let i = 0; i < tileToPaint.length; i++) {
  tileToPaint[i].addEventListener("pointerdown", function() {
    this.style.backgroundColor = colorValue;
  });
}

let eraser = document.querySelector("#eraser-btn");
eraser.addEventListener('click', function() {
  colorValue = "#ffffff";
});

let deleter = document.querySelector("#reset-btn");
deleter.addEventListener('click', function() {
  for (let i = 0; i < tileToPaint.length; i++) {
    tileToPaint[i].style.backgroundColor = "#ffffff";
  }
});