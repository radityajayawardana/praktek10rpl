function cariTerbesar(a,b) {
	if (a > b) {
		return a
	} else if (a < b){
		return b
	} else {
		return "Nilai sama"
	}
}
let hasil = cariTerbesar(100,100)
console.log(hasil)

function urutan(a,b) {
	if (a > b) {
		return a + " Lebih besar dari " + b
	} else {
		return b + " Lebih besar dari " + a
		
	}
}
let hasil1 = urutan(900,1000)
console.log(hasil1)