

function decode(bits) {
	if(bits.length === 4){
		var z4=parity(bits[3]+bits[4]+bits[5]+bits[6]);
		var z2=parity(bits[1]+bits[2]+bits[5]+bits[6]);
		var z1=parity(bits[0]+bits[2]+bits[4]+bits[6]);
		var z0=parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]);
		console.log(z1 + " " + z2 + " " + z4);

		var errorPosition=z1*1+z2*2+z4*4;
	}else if(bits.length === 8){
		var z4=parity(bits[8]+bits[9]+bits[10]+bits[11]+bits[12]);//8, 9 ,10, 11, 12 poziitiile din bit.data[0 - 12]
		var z3=parity(bits[4]+bits[5]+bits[6]+bits[7]+bits[12]);
		var z2=parity(bits[2]+bits[3]+bits[6]+bits[7]+bits[12]);
		var z2=parity(bits[1]+bits[3]+bits[5]+bits[7]+bits[9]+bits[11]);
		var z0=parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]);
		var errorPosition=z1*1+z2*2+z4*4;
	}
	//verificare cazuri pe z0
	var errorDetected=false;
	
	if (errorPosition!=0) errorDetected=true;
	
	if((z0 == 0) && (errorDetected == false)) {
		return { 
			errorCorrected: errorDetected, errorPosition: errorPosition-1+1 , bits: bits
		};
	} else if ((z0 == 0) && (errorDetected == true)) {
		return {
			 errorCorrected: errorDetected, errorPosition: errorPosition-1+1 , bits: bits 
			};
	} else if ((z0 == 1) && (errorDetected == false)){
		return { 
			errorCorrected: errorDetected, errorPosition: 0, bits: bits 
		};
	} else if ((z0 == 1) && (errorDetected == true)){
		return { 
			errorCorrected: errorDetected, errorPosition: errorPosition-1+1 , bits: bits 
		};
	}
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
