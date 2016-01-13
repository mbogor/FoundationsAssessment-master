function interleave(str, str2){
	var answer = ""

	if(str.length>str2.length){
		var s1 = str.slice(0,str2.length);
		var rems1 = str.slice(str2.length);
		for (var i = 0; i < str2.length; i++) {
			answer+= s1[i]+str2[i];
		}
		answer+=rems1;
		return answer;
	} else if(str.length<str2.length){
		var s2 = str2.slice(0,str.length);
		var rems2 = str2.slice(str.length);
		for (var i = 0; i < str.length; i++) {
			answer+= str[i]+s2[i];
		}
		answer+=rems2;
		return answer;
	} else if (str.length===str2.length){
		for (var i = 0; i < str.length; i++) {
			answer+= str[i]+str2[i];
		}
		return answer;
	}

}

//refactor to be w no parameters and use arguments instead
