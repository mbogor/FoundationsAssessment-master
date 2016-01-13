function keyAdder(obj){
	var total = 0;
	console.log(obj);

	for(var keys in obj){
		console.log(keys);
		if (typeof obj[keys]=='number'){
			console.log(obj[keys]);
			total+=obj[keys];
		}
	}

	return total;
}