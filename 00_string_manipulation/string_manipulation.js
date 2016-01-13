function vowelsCount(str){
	var vowel = "aeiou";
	var answer = 0;
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < vowel.length; j++) {
			if (str[i]==vowel[j]){
				answer++;
			}
		}
	}

	return answer;
}