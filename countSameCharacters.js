	// in:  wwwwaaadexxxxxxywww
    // out: 4w3a1d1e6x1y3w  > counting same character 
    
function a(str) {
	let n = str.length;
	var result = '';
	for (let i = 0; i < n; i++) {
		// Count occurrences of current character
		let count = 1;
		while (i < n - 1 && str[i] == str[i + 1]) {
			count++;
			i++;
		}

		result += count + str[i];
	}
	return result;
}

console.log(a("wwwwaaadexxxxxxywww"));

