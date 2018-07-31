$(document).ready(function(){
	function amountscrolled(){
	    var winheight = $(window).height();
	    var docheight = $(document).height();
	    var scrollTop = $(window).scrollTop();
	    var trackLength = docheight - winheight;
	    var pctScrolled = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
	    var arrw = $("#arw");
	    var newOp = 1 - (pctScrolled/100);
	    var opa = newOp.toString();
	    console.log(opa);
	    arrw.css('opacity', opa);
	    console.log(arrw.css('opacity'));
	}
	 
	$(window).on("scroll", function(){
	    amountscrolled();
	});
});