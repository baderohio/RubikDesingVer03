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
 numStepRot = $( "#stepRotation" ).val();    // number step of rotation
 cellLocation = $( "#cellRotation" ).val();  // location to rotate
 matrixDimension = document.getElementById("numb").value;

// initialize matrix face color a number matching type of color
for (i = 0; i < matrixDimension*matrixDimension; i++) {
backArr[i]= colorCode[0];
rightsideArr[i] = colorCode[1];
frontArr[i] = colorCode[2];
leftsideArr[i] = colorCode[3];
topArr[i] = colorCode[4];
bottomArr[i] = colorCode[5];
}
 
 // k repsent step rotation in middle in clock wise dircetion
 // axisVar = Z, numStepRot = 1, cellLocation = middle; 
 for(k=0; k < numStepRot; k++){
   for (i = matrixDimension; i< (2*matrixDimension); i++) {	
	 temp=backArr[i];
	 backArr[i] = rightsideArr[i];
	 rightsideArr[i] = frontArr[i];
	 frontArr[i] = leftsideArr[i];
	 leftsideArr[i] = temp;	 
                                                          }
                             }
 
 // k represent the face
 for (k=0; k< 4; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   j = cellLocation-1;
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);

					 tempVar = i + parseInt(matrixDimension);
					 if(k==0) tempColor= backArr[tempVar];
						else if(k==1) tempColor= rightsideArr[tempVar];
						  else if(k==2) tempColor= frontArr[tempVar];
							else tempColor =  leftsideArr[tempVar];
		
		
					 $("#"+cL[k]+temp).css("background-color", colorFace[tempColor]);				 
                                            }              										
                         }	
 
                       }


