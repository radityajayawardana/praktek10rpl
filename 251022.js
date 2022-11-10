// ini KODE
let jurusan = ["TKJ", "RPL", "AKL"]
console.log(jurusan)
jurusan.unshift("OTKP")
console.log(jurusan)
jurusan.push("BDP")
console.log(jurusan)
jurusan.sort()
console.log(jurusan)
for (var i = 0; i < 99999999; i++) {
	jurusan.push(i)
}
for (var i = 0; i < 99999999; i++) {
	console.log(i + ". Jurusan di SMK BATIK PERBAIK : " + jurusan[i] + " PEMESINAN " + jurusan[i] +  " TKRO " + jurusan[i])
}
