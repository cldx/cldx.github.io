

     $(document).ready(function(){



		$.darkboxProps = new Object();
		$.darkboxProps.currentImage = "";
		$.darkboxProps.nextImage = "";
		$.darkboxProps.previousImage = "";
		$.darkboxProps.initial = true;
		$.darkboxProps.offset = "";
		$.darkboxProps.height = "";
		
		$.Collection = new Object();
		$.Albums = new Array("Sketchbook","Pencil","Color","Illustration","Miscellaneous","Wallpapers");
		
		$("#article-wrapper article").css("display","none");
		$("#article-wrapper article:first").css("display","block");

		//we'll be needing this
		var anchor = window.location.hash;
        //alert(anchor);

		
		function showDarkbox(){
			var $win = $(window);
			$('.darkbox').css({ 'top': $win.scrollTop() , 'height': $win.height() });
			//$('.container-wrapper').css({ 'margin-top': $.darkboxProps.offset, "height" : $.darkboxProps.height });
			
			if($.darkboxProps.initial == true){
				$('.darkbox').removeClass("hideDarkbox").addClass("showDarkbox");
				$.darkboxProps.initial = false;	
				}else{
				$('.darkbox').removeClass("hideDarkbox");
				}
			
		}
		
		function updateDarkbox(currentImage){
			
			$.darkboxProps.offset = Math.round(($(window).height()/100)*5);
			$.darkboxProps.height = Math.round(($(window).height()/100)*90);
						
			$(".imageBox").css({"background" : "url('" + currentImage.attr("href") + "') no-repeat center center", "background-size": "contain" });
						
			var index = $(".tile a").index(currentImage);
			$.darkboxProps.currentImage = currentImage;
			
			var previous = $(".tile a").eq(index-1);	
			$.darkboxProps.previousImage = previous;
				
			var next = $(".tile a").eq(index+1);
			$.darkboxProps.nextImage = next;
				
			}
/*
		$(".nextPost").toggle(
			function(){
				$("#article-wrapper article").css("display","block");
				$(".morePostsButton").addClass("minus");
				$(this).attr("title", "Hide older Posts");
				return false;
					},
			function(){
				$("#article-wrapper article").css("display","none");
				$("#article-wrapper article:first").css("display","block");
				$(".morePostsButton").removeClass("minus");
				$(this).attr("title", "Show older Posts");
				return false;
				}
		);

*/	
		
		$(document).on('click', '.tile a', function(){ 
				updateDarkbox($(this));
				showDarkbox();
				return false;
		}); 
		
	
		
		$(".closeBox").click(function(){
			$(".darkbox").removeClass("showDarkbox").addClass("hideDarkbox");
			$('.darkbox').css({ 'height': "0%" });
			$.darkboxProps.initial = true;	
			});
			
		$(".previous").click(function(){
				updateDarkbox($.darkboxProps.previousImage);
			});
		
		$(".next").click(function(){
				updateDarkbox($.darkboxProps.nextImage);
			});
		
		});

		$(function () {
    			var count = $("#slideshow .bg-image").length;
    			var current = 1;
			console.log("Count:"+count);
		    function nextBackground() {
			console.log("runnings");
			$("#slideshow .bg-image").removeClass('active');
			if(current >= count){ current = 1; }else{ current++; }
			console.log(current);
			$("#slideshow .bg-image:nth-child("+current+")").addClass('active');
			setTimeout(nextBackground, 8000);
		    }

		    $("#slideshow .bg-image:nth-child(1)").addClass('active');
		    setTimeout(nextBackground, 8000);
		});
		
 
		 $(window).scroll(function(){
			var $win = $(window);
			$('.darkbox').css('top', $win.scrollTop());
			if($win.scrollTop() >= 300){
				$("#slideshow").fadeOut();
				}
			
			if($win.scrollTop() <= 300){
				$("#slideshow").fadeIn();
				}	
			
		});
		$(window).bind('touchmove', function(){
			var $win = $(window);
			$('.darkbox').css('top', $win.scrollTop());
			});
		
		
		 
