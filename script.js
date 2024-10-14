// var namainput = prompt("masukan nama anda");
// alert("selamat datang" + namainput + "di website kami");

// alert('hai');
// alert('kenalin');
// alert('aku derry dwi dadrmawan');

// var umur = prompt ('berapa umur anda?',0);
// if(umur < 20 ){
//     alert ('anda belum dewasa')
// } else {
//     alert('anda sudah dewasa ya');
// }
// document.write(`umur anda saat ini adalah ${umur} tahun ya `);

// while(true){
//     console.log('hello world');
// }

// var ngulang = true;
// while(ngulang){
//     console.log('hello centaurian');
//     ngulang = confirm('lagi nih?');
// }

// var angka = 1;
// while (angka<=7){
//     document.write('<b><i>Hilan punya ' + angka + ' batang besar <br>');
//     angka++;
// }
// console.log('selesai!');

// alert('hello, world')

// var jmlhkls = 7;
// var kelasberfungsi = 4;
// var nokelas = 1;
// while (nokelas <= kelasberfungsi) {
//   console.log(`speaker di kelas ` + nokelas + ` berfungsi dengan baik`);
//   nokelas++;
// }
// for (
//   var kelasberfungsi = kelasberfungsi + 1;
//   jmlhkls >= kelasberfungsi;
//   kelasberfungsi++
// ) {
//   console.log(`speaker di kelas ` + kelasberfungsi + ` tidak berfungsi`);
// }'

// var enak = 10
// while (1 <= enak) {
//   console.log('punya kelvin' + enak + 'enak');
//   enak++;
// }

// let nilai = prompt('nilai kamu berapa');
// if (nilai>=100){
//   alert("nilai kamu sampoerna")
// }
// else if (nilai>=90){
//   alert("nilai kamu bagus")
// }
// else if (nilai>=70){
//   alert("nilai kamu oke")
// }
// else {
//   alert("kamu kurang belajar")
// }

let ruangan = 1;
for (ruangan; ruangan <= 7; ruangan++) {
  if (ruangan <= 3) {
    document.write(`${ruangan} berfungsi`);
  } else if (ruangan == 4) {
    document.write(`${ruangan} sedang diperbaiki`);
  } else {
    document.write(`${ruangan} tidak berfungsi`);
  }
}
