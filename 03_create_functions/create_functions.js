function createFunctions(n){
	var answer = [];
	console.log(n);
	for (var i = 0; i < n; i++) {
		console.log(i);
		answer.push(function(){return i});
	}

	return answer;
}