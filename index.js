$(function(){
  
  var projectLoc = $('#current').offset().top;
  var aboutLoc = $('#one').offset().top;
  var contactLoc = $('#four').offset().top;
  
  function scrollClick(){
    $('.desktop-nav ul li a, footer .copyright ul li a').click((evt) => {
      var target = evt.target;
      var hrefLoc = $(target).prop('href');
      var sliceIndex = hrefLoc.indexOf('#');
      var id = hrefLoc.slice(sliceIndex, hrefLoc.length);
      animateScroll(id);
    });
  }
  function animateScroll(id){
    var scrollLength = $(id).offset().top;
    $('html,body').animate({
      scrollTop: scrollLength
    }, 600)
  }
  scrollClick();
  
  $(".hamburger-menu-desktop").click(function() {
    $("#right-nav").animate({right: '-100px'}, 500);
  });
  $(".close").click(function() {
    $("#right-nav").animate({right: '-500px'}, 500);
  });
  //MOBILE MENU DROP DOWN ANIMATIONS
  $(".black-menu").click(function() {
    $("#mobile-menu").animate({top: '0px'}, 500);
  });
  $(".hamburger-menu").click(function() {
    $("#mobile-menu").animate({top: '0px'}, 500);
  });


  $(".white-x").click(function(){
    $("#mobile-menu").animate({top: '-400px'}, 500);
  });

  //Change the main content on the homepage to slowly load
  //Add Animation Function
  var animateComplete = function(){
    $('#homepage-content').addClass('animate-complete');
  };
  var addOpacity = function(){
    $('#homepage-content').css({'opacity':'1'})
  };
  var skillAppear = function(){
    $('#header-skills').css({'opacity':'1'});
  };

  setTimeout(animateComplete, 400) ;
  setTimeout(addOpacity, 450);
  var headerSkills = $('#header-skills li');
  function skillsAppear(i){
    setTimeout(function(){
      headerSkills.eq(i).css({'opacity':'1'})
    }, 1000)
  }
  for(var i = 0; i < headerSkills.length; i++){
    skillsAppear(i);
  }
});  
