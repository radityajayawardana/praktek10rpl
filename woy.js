for (var i = 2; i <= 10; i++) {
	let flag = 0;
	for (var ii = 2; ii < i; ii++) {
		if (i % ii == 0) {
			flag = 1
			break;
		}
	}
	if (i > 1 && flag == 0) {
		console.log(i)
	}
}