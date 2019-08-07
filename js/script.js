// event saat tombol di klik

$('.page-scroll').on('click', function(e){

    // ambil href

var tujuan = $(this).attr('href');
var elemenTujuan = $(tujuan);

// pindah scroll
$('body').animate({
    scrollTop: elemenTujuan.offset().top -50
}, 1300, 'easeInOutExpo');
e.preventDefault();

});