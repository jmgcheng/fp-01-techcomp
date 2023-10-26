$(document).ready(function(){

	/**/
	$('#visual').addClass('show');

	/**/
	var animationLock = {};
	animationLock.service = false;
	animationLock.member = false;
	animationLock.portfolio = false;

	/**/
	var el = $("<div>");
    $.support.transform  = typeof el.css("transform") === "string";
    $.support.transition = typeof el.css("transitionProperty") === "string";
    if($.support.transform && $.support.transition) {
		/**/
		$('.member-list-item .member-list-card .member-list-name').each(function() {
			var str = $(this).text();
			var arr = new Array();
			for(var i = 0; i < str.length; i++){
				arr[i] = str.substr(i,1);
			}
			var html = ('<span class="member-list-name-letter">'+ arr.join('</span><span class="member-list-name-letter">') +'</span></span>');
			//$(this).html(html.replace('<span class="title-letter"> </span>', '<span class="title-letter"> </span><span class="fw_b">'));
			$(this).html(html);
		});
		/**/
		$(window).on("load scroll", function(){
			var i_screen = $(window).scrollTop() + $(window).height();
			//
			try {
				if( i_screen > $('#portfolio').position().top && !animationLock.portfolio ){
					var i = 0;
					animationLock.portfolio = true;
					$('.portfolio-list-item').each(function(index, e){
						var o_target_card = $(this).find('.portfolio-list-card');
						if( i_screen > ( o_target_card.offset().top + o_target_card.height() ) && !o_target_card.hasClass('show')){
							delay = 0.15 * i++;
							o_target_card.css('transition-delay',(delay)+'s');
							o_target_card.addClass('show');
						}
						animationLock.portfolio  = animationLock.portfolio && $(this).hasClass('show');
					});		
				}
			}
			catch (e) {}
			//
			try {
				if( i_screen > $('#service').position().top && !animationLock.service ){
					var i = 0;
					var delay;
					animationLock.service  = true;
					$('.service-list-item').each(function(){
						var o_target_card = $(this).find('.service-list-card');
						if( i_screen > ( o_target_card.offset().top + o_target_card.height()/2 ) && !o_target_card.hasClass('show')){
							delay = 0.15 * i++;
							o_target_card.find('.service-list-portrait').css('transition-delay', (delay)+'s');
							o_target_card.find('.service-list-name').css('transition-delay', (delay)+'s');
							o_target_card.find('.service-list-txt').css('transition-delay', (delay+0.1)+'s');
							o_target_card.addClass('show');
						}
						animationLock.service = animationLock.service && o_target_card.hasClass('show');
					});
				}
			}
			catch (e) {}
			//
			try {
				if( i_screen > $('#member').position().top && !animationLock.member ){
					animationLock.member = true;
					$('.member-list-item').each(function(){
						var o_target_card = $(this).find('.member-list-card');
						if( i_screen > ( o_target_card.offset().top + o_target_card.height()/3 ) && !o_target_card.hasClass('show')){
							o_target_card.children('.member-list-name').each(function() {
								$(this).find('.member-list-name-letter').each(function(index, element){
									$(this).css('transition-delay',(0.1*index)+'s');
								});					
							});
							o_target_card.addClass('show');
						}
						animationLock.member = animationLock.member && o_target_card.hasClass('show');
					});		
				}
			}
			catch (e) {}

		});
    }
    else
    {
    	$('.portfolio-list-card, .service-list-card, .member-list-card').addClass('show');
    }


	$('.portfolio-list-card').hover(
		function(){
			$(this).addClass('hover');
			$(this).css('transition-delay','0s');
		},function(){
			$(this).removeClass('hover');
		}
	);


	/**/
	$(window).on('load resize',function(){
		$('#visual').height($(window).height());
	});

	






	/*menu button*/
	$('#js-nav-button').on('click', function(){
		var o_nav_button = $(this);
		o_nav_button.toggleClass('nav-button-close');
		if( o_nav_button.hasClass('nav-button-close') )
		{
			o_nav_button.next('.nav-menu').addClass('nav-menu-show');
		}
		else
		{
			o_nav_button.next('.nav-menu').removeClass('nav-menu-show');
		}
	});

	/*menu scrolldown to target*/
	$('a[href^=#]').click(function() {
		var speed = 1200;
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'easeOutBacksss');
		$('#js-nav-button').next('.nav-menu').removeClass('nav-menu-show');
		$('#js-nav-button').removeClass('nav-button-close');
		return false;
	});



});

angular.module('siteApp', [])
.controller('contactCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.status = 'default';

	$scope.submitInquiry = function() {
		// no php for firebase
		$scope.status = 'sending';
		$scope.status = 'sent';


		/* console.log('submitInquiry');
		$scope.status = 'sending';
		var o_params = {
			's_name'				:$scope.frm_contact.name,
			's_email'				:$scope.frm_contact.email,
			's_inquiry'				:$scope.frm_contact.inquiry
		};
		$http({
			method	:'POST',
			url		:'contact-inquiry.php',
			data	:$.param(o_params),
			headers	:{'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function successCallback(response) {
			if( response.data.result == true )
			{
				$scope.status = 'sent';
			}
			else
			{
				$scope.status = 'default';
			}
		}, function errorCallback(response) {
			console.log(response);
		}); */
	}



}]);