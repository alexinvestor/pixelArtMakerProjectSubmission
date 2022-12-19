const grid = document.getElementById("pixelCanvas");

// Select size input

document.querySelector("#sizePicker").addEventListener("submit", function(e) {
  makeGrid(inputHeight.value, inputWidth.value);
  e.preventDefault();
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  // Erase existing table
  while(grid.rows.length > 0) {
    grid.deleteRow(0);
  }
  // Create new table using submitted height and width
  for (let h=0; h < height; h++) {
    let gridRow = document.createElement("tr");
    for (let w=0; w < width; w++) {
       let cellInRow = document.createElement("td");
       // Add listener for each added cell
       cellInRow.addEventListener("click", function() {
         var chosenColor = document.getElementById("colorPicker").value;
         cellInRow.style.backgroundColor = chosenColor;
       });
       gridRow.appendChild(cellInRow);
    }
    grid.appendChild(gridRow);
  }
}
