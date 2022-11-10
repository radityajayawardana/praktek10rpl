
let panjang = 45
let lebar = 45
//luas
function luas(a,b) {
  console.log("Luas " + a * b)
}
//keliling
function keliling(a,b) {
	for (var i = 1; i <= 2; i++) {
	console.log("keliling " + (a + b) * i)	
	}
}
//output
console.log("Persegi Panjang")
console.log(`Panjang ${panjang}`)
console.log(`Lebar ${lebar}`)
luas(panjang,lebar)
keliling(panjang,lebar)