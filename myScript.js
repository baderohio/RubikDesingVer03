/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 08,2019
* File       : myScript.js
* Purpose    : Read reqiured faces dimension(number of cells in each faces)
*/
/*
// Gives faces color
var colorFace = ["#08960A", "#CD9834", "#3364FB", "#BC0B00", "#FFFB03", "#FFFDFF"];
var classFace = [".back", ".rightside", ".front", ".leftside", ".top", ".bottom"];

$(document).ready(function(){

for (i=0; i < colorFace.length; i++){ 
   
   $(classFace[i]).css("background-color", colorFace[i]);
 }
 });
*/

// Create and color cell for each face
function dimensionInputFunction() {
 
  //Define variables and array
  var i, j, k, temp, matrixDimension, text;
  //var arr =[];
  var cL = ["ba", "ri","fr","le","to","bo"];
  var fL = ["back", "rightside","front","leftside", "top", "bottom"]; 
  var colorFace = ["#08960A", "#CD9834", "#3364FB", "#BC0B00", "#FFFB03", "#FFFDFF"];
  
  // Get the value of the input field with id="numb"
  matrixDimension = document.getElementById("numb").value;

  // If matrixDimension is Not a Number or less than one or greater than 10
  if (isNaN(matrixDimension) || matrixDimension < 1 || matrixDimension > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
  
// Function call  
createFaceFunction(matrixDimension, cL, fL);
colorCellsFunction(matrixDimension, cL, colorFace);

}   





