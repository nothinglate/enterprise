// JavaScript Document
$(function(){
	if($(window).width()>=768)
		{
			var ht1=($(".auto").eq(0).height()-$(".text").eq(0).height())/2 + "px";
			$(".text").eq(0).css("marginTop",ht1);
			var ht2=($(".auto").eq(1).height()-$(".text").eq(1).height())/2 + "px";
			$(".text").eq(1).css("marginTop",ht2);
		}
	$(window).resize(function(){
		if($(window).width()>=768)
			{
				var ht1=($(".auto").eq(0).height()-$(".text").eq(0).height())/2 + "px";
				$(".text").eq(0).css("marginTop",ht1);
				var ht2=($(".auto").eq(1).height()-$(".text").eq(1).height())/2 + "px";
				$(".text").eq(1).css("marginTop",ht2);
			}
		else
			{
				$(".text").eq(0).css("marginTop","30px");
				$(".text").eq(1).css("marginTop","30px");
			}
	});
});
	