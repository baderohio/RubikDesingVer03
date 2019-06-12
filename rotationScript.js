/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 09, 2019
* File       : rotationScript.js
* Purpose    : rotate cells between different faces
*/ 

function rotationInputFunction() {
	
 //Define variables and array
 var i, j, k, temp, tempVar, tempColor; 
 var axisVar, directionRot, numStepRot, cellLocation, matrixDimension;
 var backArr =[], rightsideArr =[], frontArr =[], leftsideArr =[], topArr =[], bottomArr =[];
 
 var colorCode=["0", "1", "2", "3", "4", "5"];  
 var cL = ["ba", "ri","fr","le","to","bo"];
 var colorFace = ["Green", "Tan", "RoyalBlue", "DarkRed", "Yellow", "White"];
 
 //Read data
 axisVar = $( "#axisRotation" ).val();       //name of axis
 directionRot = $( "#typeRotation" ).val(); // direction of rotation here
 numStepRot = parseInt($( "#stepRotation" ).val());    // number step of rotation
 cellLocation = parseInt($( "#cellRotation" ).val());  // location to rotate
 matrixDimension = parseInt(document.getElementById("numb").value);




// initialize matrix face color a number matching type of color
for (i = 0; i < matrixDimension*matrixDimension; i++) {
backArr[i]= colorCode[0];
rightsideArr[i] = colorCode[1];
frontArr[i] = colorCode[2];
leftsideArr[i] = colorCode[3];
topArr[i] = colorCode[4];
bottomArr[i] = colorCode[5];
}
/*
// rotation around Y-axis
if ( axisVar == "y") { 
// rotate matrix around Z axis for selected cell in the middle not edge
matrixYaxisRotationFunction(numStepRot, matrixDimension, backArr, rightsideArr, frontArr, leftsideArr);
} 
*/
// rotation around Z-axis
if ( axisVar == "z") {
// rotate matrix around Z axis for selected cell in the middle not edge
matrixZaxisRotationFunction(cellLocation, numStepRot, matrixDimension, backArr, rightsideArr, frontArr, leftsideArr);
// rotate cell color around Z axis for selected cell in the middle not edge
cellColorZaxisRotationFunction(cL, cellLocation, matrixDimension, backArr, rightsideArr,frontArr, leftsideArr, colorFace);	
                    }
 
                       }


