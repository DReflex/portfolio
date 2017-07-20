$(document).ready(function(){
//buttons scroll
$("#home").on("click", function(){
  $('html, body').animate({
        scrollTop: $("#this-home").offset().top
    }, 2000);
});
$("#project").on("click", function(){
  $('html, body').animate({
        scrollTop: $("#this-project").offset().top
    }, 2000);
});
$("#contact").on("click", function(){
  $('html, body').animate({
        scrollTop: $("#this-contact").offset().top
    }, 2000);
});

//manual scroll
var project = $('.projects').height();
var home = $('.home').height();
var offset = project - home;
var contact = $('.info').height();
var COffset = (contact + home);

function navText() {
  var scroll_Top = $(window).scrollTop();
  if(scroll_Top >= offset){
    $('#show').text('Projects');
    $("#project").addClass('active');
    $("#contact").removeClass('active');
    $("#home").removeClass('active');

  }
  if(scroll_Top > 0 && scroll_Top < home/2){
    $('#show').text('Home');
    $("#project").removeClass('active');
    $("#contact").removeClass('active');
    $("#home").addClass('active');
  }
  if(scroll_Top >= COffset){
    $('#show').text('Info');
    $("#project").removeClass('active');
    $("#contact").addClass('active');
    $("#home").removeClass('active');
  }
}
$(window).scroll(navText);

//home text
var change =['To build future', 'To create value for others', 'Because it\'s fun'];

var i = 0;
var text = function() {
  $('#change').fadeOut(1000, function() {
        $(this).text(change[i]).fadeIn(1000);
    });
      if(i < change.length){
            setTimeout(text, 2500);
            i++;
      }
    if(i == change.length){
      i=0;
    }

  };
text();

});
