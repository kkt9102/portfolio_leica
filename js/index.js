function main_slide() {
    $('.main-slider > .slider > .nav-text-box > .nav-text').click(function(){
        var $btnActive = $('.main-slider > .slider > .nav-text-box').find('>.active');
        var index = $(this).index();
        var $slide = $('.main-slider > .slider > ul');
        var li_width = $('.main-slider > .slider > ul > li').width();


        $btnActive.removeClass('active');
        $(this).addClass('active');
        $slide.css('margin-left', -li_width * index);

    })
    
}
setInterval(function auto_slide(){
    var $slide_btn = $('.f1f3f5 > .main-slider > .slider > .nav-text-box');
    var $active = $('.f1f3f5 > .main-slider > .slider > .nav-text-box').find('>.active');
    var $next = $active.next();


            console.log($next.length);
        if ( $next.length == 0 ){
            $('.f1f3f5 > .main-slider > .slider > .nav-text-box > div:first-child').click();
        }
        else {
            $next.click();
        }

},5000);



function item(){
    $('.slider-2').slick({
        slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
        dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,		// 세로 방향 슬라이드 옵션
        draggable : true, 	//드래그 가능 여부
        centerMode: true,
        variableWidth: true 
    });
  }

  function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}

$(function(){
    main_slide();
    item();
    alerted();
})