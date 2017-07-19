$(document).ready(function ($) {

	$('.trigger-1').click(function(event){
	   var code_details = $('.code-details')[0];

	    if( '0' == $('.code-details').height() ){
	    	$(function () {
		        $('.code-details').animate({
		        	height: '200px',
		        	opacity: '1'
		    	},	{duration: "slow", queue: false});
		    	$('.video-details').animate({
		        	height: '0px',
		        	opacity: '.3'
		    	},	{duration: "slow", queue: false});
		    	$('.design-details').animate({
		        	height: '0px',
		        	opacity: '.3'
		    	},	{duration: "slow", queue: false});

		    });
	    }else{
	        $('.code-details').animate({
	        	height: '0px',
	        	opacity: '0.3'
	    	},	"slow");

	    }

	    event.preventDefault();
	});

	$('.trigger-2').click(function(event){
	    var video_details = $('.video-details')[0];

	    if( '0' == $('.video-details').height() ){
	        $(function () {
		        $('.code-details').animate({
		        	height: '0px',
		        	opacity: '.3'
		    	},	{duration: "slow", queue: false});
		    	$('.video-details').animate({
		        	height: '200px',
		        	opacity: '1'
		    	},	{duration: "slow", queue: false});
		    	$('.design-details').animate({
		        	height: '0px',
		        	opacity: '.3'
		    	},	{duration: "slow", queue: false});
		    });
	    }else{
	        $('.video-details').animate({
	        	height: '0px',
	        	opacity: '0.3'
	    	},	"slow");
	    }

	    event.preventDefault();
	});

	$('.trigger-3').click(function(event){
	    var design_details = $('.design-details')[0];

	    if( '0' == $('.design-details').height() ){
	       $(function () {
		        $('.code-details').animate({
		        	height: '0px',
		        	opacity: '.3'
		    	},	{duration: "slow", queue: false});
		    	$('.video-details').animate({
		        	height: '0px',
		        	opacity: '.3'
		    	},	{duration: "slow", queue: false});
		    	$('.design-details').animate({
		        	height: '200px',
		        	opacity: '1'
		    	},	{duration: "slow", queue: false});
		    });
	    }else{
	        $('.design-details').animate({
	        	height: '0px',
	        	opacity: '0.3'
	    	},	"slow");
	    }

	    event.preventDefault();
	});
});