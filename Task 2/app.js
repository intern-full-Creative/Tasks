function zoomin() {
  let GFG = document.getElementById("image");
  let currWidth = GFG.clientWidth;
  GFG.style.width = currWidth + 100 + "px";
}

function zoomout() {
  let GFG = document.getElementById("image");
  let currWidth = GFG.clientWidth;
  GFG.style.width = currWidth - 100 + "px";
}

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

// function clearCoor() {
//   document.getElementById("demo").innerHTML = "";
// }
