//Menambahkan Pilihan Computer dengan logika di suit jepang v1.0
function pilihanComputer() {
  const comp = Math.random();
  if( comp < 0.33 ) return 'batu';
  if ( comp >= 0.33 && comp <= 0.57 ) return 'gunting';
  return 'kertas';
}

//Menambahkan rules hasil dengan logika di suit jepang v1.0
function rules(comp, player) {
  if ( player == comp ) return 'SERI!'
  if ( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
  if ( player == 'gunting') return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!'
  if ( player == 'kertas' ) return ( comp == 'batu' ) ? 'MENANG!' : 'KALAH!'
}

//Seleksi semua pilihan player
const pilihan = document.querySelectorAll('li img');
//Looping tiap2 pilihan player
pilihan.forEach(function(i) {
  i.addEventListener('click',function() {
    //Pilihan komputer = fungsi yang sudah kita buat diatas
    const pilihanComp = pilihanComputer();
    //Pilihan player = sesuai class di htmlnya
    const pilihanPlayer = i.className;
    //Hasil = fungsi rules yang sudah kita buat diatas
    const hasil = rules(pilihanComp, pilihanPlayer);
    //Seleksi Gambar Komputer
    const imgComputer = document.querySelector('.comp');
    //Manipulasi attribute untuk mengubah gambarnya sesuai komputer pilih
    imgComputer.setAttribute('src', 'assets/' + pilihanComp + '.jpg')
    //Seleksi Hasil
    const info = document.querySelector('.info');
    //Manipulasi text untuk mengubah hasil sesuai rules
    info.innerHTML = hasil;
  })
})
