//jQuery for page scroll to top
$('#scroll-top').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1200, 'swing');
})

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    $('#scroll-top').fadeIn();
  }
  else {
    $('#scroll-top').fadeOut();
  }
})

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
//Stop Video Carousel from auotplaying
$('#videoCarousel').carousel({
pause: true,
interval: false
});
//jQuery for Contact Form
$(document).ready(function(){
 $("#contactform").submit(function(e){
  e.preventDefault();
  var name = $("#name");
  var phone = $("#phone");
  var company = $("#company");
  var email = $("#email");
  var website = $("#website");
  var message = $("#message");
  var flag = false;
  if(name.val()==''){
   name.closest('.form-group').addClass('error');
   name.focus();
   flag = false;
   return false;
  } else {
   name.closest('.form-group').removeClass('error').addClass('success');
  }
  if(email.val()==''){
   email.closest('.form-group').addClass('error');
   email.focus();
   flag = false;
   return false;
  } else {
   email.closest('.form-group').removeClass('error').addClass('success');
  }
  if(message.val()==''){
   message.closest('.form-group').addClass('error');
   message.focus();
   flag = false;
   return false;
  } else {
   message.closest('.form-group').removeClass('error').addClass('success');
   flag=true;
  }
   var dataString = "name="+name.val()+"&email="+email.val()+"&phone="+phone.val()+"&company="+company.val()+"&website="+website.val()+"&message="+message.val();
   $('.loading').fadeIn('slow').html('Loading...');
   $.ajax({
    type: 'POST',
    data: dataString,
    url: 'scripts/REMOVE-THESE-WORDS-mailer.php',
    cache: false,
    success: function(d){
     $('.form-group').removeClass('success');
     if(d=='success')
       $('.loading').fadeIn('slow').html('<font color="green">Thank you for contacting us!</font>').delay(3000).fadeOut('slow');
     else
       $('.loading').fadeIn('slow').html('<font color="red">We experienced an error with our contact form, please try again.</font>').delay(3000).fadeOut('slow');
    }
   });
  return false;
 });
 $('#reset').click(function(){
     $('.form-group').removeClass('success').removeClass('error');
 });
})