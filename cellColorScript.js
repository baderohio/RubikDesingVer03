
/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 09, 2019
* File       : cellColorScript.js
* Purpose    : color each cells separatelly
*/

function colorCellsFunction(matrixDimension, cL, colorFace) {
	
 //Define variables and array
  var i, j, k, temp;

  
for (k=0; k< 6; k++) {	
    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
 
					 $("#"+cL[k]+temp).css("background-color", colorFace[k]); // give green color for other cells
					 
                                            } 
                                        }
										
                         }	
}