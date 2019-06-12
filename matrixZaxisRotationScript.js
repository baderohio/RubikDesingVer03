/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : June 10, 2019
* File       : rotationScript.js
* Purpose    :  rotate matrix around Z-axis for cell in middle not edge give color
*/ 

function matrixZaxisRotationFunction(cellLocation, numStepRot, matrixDimension, backArr, rightsideArr, frontArr, leftsideArr) {
 // k repsent step rotation in middle in clock wise dircetion
 // axisVar = Z, numStepRot = 1, cellLocation = middle;
 var i, k, temp;
 //console.log(backArr);	 
 for(k=0; k < numStepRot; k++){
	 
   for (i = (cellLocation-1)*matrixDimension; i<(matrixDimension+matrixDimension*(cellLocation-1)); i++) {	
 
	 temp=backArr[i];
	 backArr[i] = rightsideArr[i];
	 rightsideArr[i] = frontArr[i];
	 frontArr[i] = leftsideArr[i];
	 leftsideArr[i] = temp;	 
                                                          }
                             }
		 console.log(backArr);	
 		 
}