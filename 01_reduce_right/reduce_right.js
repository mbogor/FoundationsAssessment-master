function reduceRight(arr, sp, func){
	var answer = sp;

	for (var i = arr.length - 1; i >= 0; i--) {
		answer += func(sp, arr[i]);
	}

	return answer;

}


function reduceRightRecursive(arr, sp, func){

	var answer = sp;
	if(arr.length===0){
		return answer;
	}else{
		answer+=func(sp,arr[arr.length-1]);
	}

	var arrr = arr.slice(0, arr.length-1);
	return answer+reduceRightRecursive(arrr,sp,func);
}