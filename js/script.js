// event saat tombol di klik
$(window).on('load', function(){
    $('pKiri').addClass('pMuncul');
    $('pKanan').addClass('pMuncul');
});


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

// parallax
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
     
// jumbotron  
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'% )' 
  });

  $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+wScroll/2 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+wScroll/1.2 +'%)'
});

// portofolio
  // if(wScroll > $('.portofolio').offset().top - 250) {
  //     $('.portofolio.img-thumbnail').each(function(i) {
  //         setTimeout(function() {
  //           $('.portofolio .img-thumbnail').eq(i).addClass('muncul');       
  //         },300 * (i+1));
  //     });

  //   //  
  // }
  
});