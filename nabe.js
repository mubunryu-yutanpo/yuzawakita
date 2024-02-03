
/*スクロールヒント*/

new ScrollHint('.js-scrollable',{
  i18n:{
    scrollable: 'スクロールできます'
  }
});

/*=============================
ヘッダーがスクロールに応じて出現
=============================*/
$(window).on('scroll', function(){
  $('.js-header').toggleClass('active', $(this).scrollTop() > 400);
});



/*メニューボタン　on-off切り替え*/


$(function(){
 $('.js-button').on('click',function(){
   $('.top-nav-ul,.button-line').toggleClass('open');
 })
});

  $(function(){
    $('.js-nav-accordion').each(function(){
      $(this).on('click',function(){
        $(this).toggleClass('on');
        $('+.nav-submenu',this).slideToggle();
        return false;
      });
    });
  });


/*メニュー内「自費メニュー」on-off切り替え*/


  $(function(){
    $('.js-menu-list-link').each(function(){
      $(this).on('click',function(){
        $(this).toggleClass('on');
        $('+.submenu-list',this).slideToggle();
        return false;
      });
    });
  });



/*店舗紹介　トップ画像スライドショー*/


const img_src = ["img15.jpg","img2.jpeg","img14.jpg"];
let num = -1;

function slide_time(){
  if(num === 2){
    num = 0;
  }else{
    num++;
  }
  document.getElementById('js-img-src').src = img_src[num];
}
setInterval(slide_time, 2500);




/*メールフォーム　内容入力文字数チェック


window.addEventListener('DOMContentLoaded',
 function(){
   var textarea = document.getElementById('count-textarea');

   textarea.addEventListener('keyup',function(){
    var count = this.value.length;

    var showCount = document.querySelector('.text-counter');

     showCount.innerText = count;

     if(count > 300){
       showCount.style.color = 'red';
     }else{
       showCount.style.color = 'black';
     };

   },false);
 },false
);
*/

//ピラティス動画のボタン
var $videoBtn = $('.js-video-btn');
 $videoBtn.on('click',function(){
  var $videoHide = $(this).parent();
  $(this).toggleClass('start');
  $videoHide.toggleClass('start');
  $videoHide.next().toggleClass('start');
});
