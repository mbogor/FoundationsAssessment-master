function alternate(func){
	var counter = 1;
	
	return function(){
		counter++;
		if (counter%2===0){
			return func.apply(this);
		}
	}
}


function twice(func){
	var counter = 0;
	return function(){
		if(counter<2){
			counter++
			return func.apply(this);
		} else {
			return 0;
		}
	}
}