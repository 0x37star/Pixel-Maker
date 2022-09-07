// Create empty table

const table = document.createElement("TABLE");

// select color as per the colorPicker
// set target for a specific cell to be colored


function addColor (event) {
  const color = document.getElementById('colorPicker').value;
  event.target.style.backgroundColor = color;
  event.preventDefault();
};


// reset background color of Canvas back to white

function resetColor () {
  const pixelCanvas = document.getElementById('pixelCanvas').value;
  pixelCanvas.style.backgroundColor = rbg(100, 100, 100),
  color.Picker.style.color = "white"
};

// create a table based on width and height input

function makeGrid(height, width) {

      table.innerHTML = "";
      for (let r = 0; r < height; r++){
        var row = document.createElement("tr")
        for (let c = 0; c < width; c++){
          var column = document.createElement("td");
          row.appendChild(column);
          }
      table.appendChild(row);
      }
      pixelCanvas.appendChild(table);
      event.preventDefault();
      table.addEventListener('click', addColor)
};

sizePicker.addEventListener('submit', function(event) {
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;
  event.preventDefault();
  table.addEventListener('submit', resetColor);
  event.preventDefault();
  makeGrid(height, width);
})
