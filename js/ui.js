$(function(){
  
  fnKatalk();
  fnmainNav();
  gridSystem();

  // skip menu
  $('.skip>a').focus(function(){
    $('.skip').addClass('active');
  });
  $('.skip>a').blur(function(){
    $('.skip').removeClass('active');
  });

  // 1066px pos_fix katalk / mainNav
  $(window).resize(function(){
    fnKatalk();
    fnmainNav();
  });

  // fn Katalk
  function fnKatalk(){
    var winWidth=$(this).width();
    if(winWidth>=1066){
      $('#katalk').text('카카오톡');
    }else{
      $('#katalk').text('카카오톡 상담');
    }
  };

  // header tgl button
  $('.tgl_btn').click(function(){
    $('.nav_box').slideToggle(200);
  });

  // fn mainNav
  function fnmainNav(){
    var winWidth=$(window).width();
    if(winWidth>=801){
      $('.nav_box').show();
    }else{
      $('.nav_box').hide();
    };
  };

  // banner slider
  var mySwiper=new Swiper('.mo_banner,.tab_banner',{
    speed:400,
    loop:true,
    autoplay:{
      delay:3000,
    },
    pagination:{
      el:'.swiper-pagination',
      type:'bullets',
    },
  });

  // slider play/stop

  // scroll
  $(window).scroll(function(){
    var winTop=$(window).scrollTop();
    var winWidth=$(window).width();
    // 모바일 scrolltop 200이상 조건
    if(winTop>=200 && winWidth<=1065){
      $('.pos_fix>p').css('display','flex');
      // 모바일  scrolltop 200미만 조건
    }else if(winTop<200 && winWidth<=1065){
      $('.pos_fix>p').css('display','none');
      // PC  scrolltop 200이상 조건
    }else if(winTop>=200 && winWidth>=1066){
      $('.pos_fix>ul').css('display','block');
      $('.pos_fix>p').css('display','flex');
      // PC  scrolltop 200미만 조건
    }else if(winTop<200 && winWidth>=1066){
      $('.pos_fix>ul').css('display','none');
      $('.pos_fix>p').css('display','none');
    }    
  });

  // window resize
  $(window).resize(function(){
    gridSystem();
    var winWidth=$(window).width();
    if(winWidth<=800){
      $('.pos_fix>ul').css('display','block');
    }else if(winWidth<=1065){
      $('.pos_fix>ul').css('display','none');
    }
  });
  
  // smooth scroll
  var scroll = new SmoothScroll('a[data-scroll]', {
    speed:300,
  });

  // grid
  function gridSystem(){
    var winWidth=$(window).width();
    if(winWidth<=800){
      // mobile
      $('.top3>li').removeClass('pc_g4');
    }else{
      $('.top3>li').addClass('pc_g4');
    };
  };

});