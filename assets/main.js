$(function(){
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);
  

    function check_if_in_view() {
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
  
      $.each(animation_elements, function() {
  

        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);
  
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
  
    }
    $(window).on('scroll resize', function() {
        check_if_in_view()
      })
    $(window).trigger('scroll');

// MY element
window.addEventListener('scroll', function(e) {
  if( isOnScreen( jQuery( '#list-projects' ) ) ) { 
   }	
   else{
    var div_el = $('#list-projects').children();
    $(div_el).removeClass('portfolio-focus');
   }
});

    function isOnScreen(elem) {
      // if the element doesn't exist, abort
      if( elem.length == 0 ) {
        return;
      }
      var $window = jQuery(window)
      var viewport_top = $window.scrollTop()
      var viewport_height = $window.height()
      var viewport_bottom = viewport_top + viewport_height
      var $elem = jQuery(elem)
      var top = $elem.offset().top
      var height = $elem.height()
      var bottom = top + height
    
      return (top >= viewport_top && top < viewport_bottom) ||
      (bottom > viewport_top && bottom <= viewport_bottom) ||
      (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
  // for card with image
  let menu = $('.menu li')
  menu.on('click', function () {

    let click_li = $(this);

    if(click_li.is('.selected') ) {
        return;
    }

    click_li.addClass('selected');
    click_li.siblings('li').removeClass('selected');
    showContent(click_li);
});

function showContent (selected) {
    let content = $('section'),
        nonActualCard = content.find('.show-card');

	let nameCard = selected.attr('data-card'),
        nameCardId = '#'+nameCard,
        actualCard = content.find(nameCardId),
        boxArea = $('#box_area');

    nonActualCard.addClass('hide-card').delay(1000).queue(function(){
        actualCard.addClass('show-card');
        actualCard.siblings().removeClass('show-card').removeClass('hide-card').dequeue();

    })
    boxArea.removeClass().addClass(nameCard+'-bg');
}
// for my portfolio
$('.project-nav').on('click',function(e) {
  let target = $(e.target.attributes);
  let thislist = $(target[1]).val();

  if(thislist == 'wordpress'){
    $('.project-nav').children().removeClass('active');
    $('.wordpress').addClass('active');
    $('.shopify').hide('100');
    $('.laravel').hide('100');
    $('.vuejs').hide('100');
    $('.'+thislist).fadeIn()

  }
  else if(thislist == 'shopify'){
    $('.shopify').addClass('active');
    $('.list-of-projects').children().not($('.'+thislist)).hide('1000');
    $('.'+thislist+'.shopify').show('1000')
  }
  else if(thislist == 'laravel'){
    $('.laravel').addClass('active');
    $('.list-of-projects').children().not($('.'+thislist)).hide('1000');
    $('.laravel').show();
  }
  else if(thislist == 'vuejs'){
    $('.vuejs').addClass('active');
    $('.list-of-projects').children().not($('.'+thislist)).hide('1000');
    $('.vuejs').show();
  }
  else{
    $('.list-of-projects').children().show('1000');
    
  }
})
// Contact Form 1
$(document).on('submit','#contact-form-1',function(event){
  event.preventDefault();
  var $form = $(this);
  var name = $form.find('#name').val();
  var email = $form.find('#email').val();
  var message = $form.find('#message').val();
  MyDate = new Date();
  var formated_date = format_date(MyDate);
  var serializedData = {
    name:name,
    email:email,
    message:message,
    date:formated_date 
  }
  writedatonfile(serializedData)
})
// Contact Form 2
$(document).on('submit','#contact-form-2',function(event){
event.preventDefault();
var $form = $(this);
var name = $form.find('#name').val();
var email = $form.find('#email').val();
var message = $form.find('#message').val();
MyDate = new Date();
var formated_date = format_date(MyDate)

if(name.length == 0){

}
var serializedData = {
  name:name,
  email:email,
  message:message,
  date:formated_date 
}
writedatonfile(serializedData)
})
// AJAX POST FUNCTION
function writedatonfile(serializedData)
{
$.ajax({ url: 'contact.php',
     data: serializedData,
     type: 'post',
     dataType:'json',
     beforeSend: function () {
    },
     success: function(response) {
      alert('done')
      },
     complete: function(response) {
      //Contact form 1
      $( '#sent-btn' ).text('your enquiry has been sent');
      $( '#sent' ).removeClass('fas fa-paper-plane');
      $( '#sent' ).toggleClass('fas fa-envelope');
      $( '#contact-form-1' ).each(function(){ this.reset();});
      // Contact form 2
      $( '#sent-btn-2' ).text('your enquiry has been sent');
      $( '#sent-2' ).removeClass('fas fa-paper-plane');
      $( '#sent-2' ).toggleClass('fas fa-envelope');
      $( '#contact-form-2' ).each(function(){
        this.reset();
    });
      },
    
});
}
// FORMAT DATE FUNCTION 
function format_date(date) {
  month=date.getMonth();
  month=month+1; //javascript date goes from 0 to 11
  if (month<10) month="0"+month; //adding the prefix

  year=date.getFullYear();
  day=date.getDate();
  hour=date.getHours();
  minutes=date.getMinutes();
  seconds=date.getSeconds();
  return day+"-"+month+"-"+year+" "+hour+":"+minutes+":"+seconds;
}
$(document).on('click','#download-cv',function(e) {
  e.preventDefault();  //stop the browser from following
  window.location.href = 'jhomcv.pdf';
});
});