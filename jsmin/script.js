$(function(){function s(){$("div").hasClass("is_show")&&$(".is_show").removeClass("is_show"),$("div").removeClass("is_active"),$(".answer").empty(),e();var s=Math.floor(4*Math.random());switch(console.log(s),s){case 0:$(".side-center .top").addClass("is_show");break;case 1:$(".side-center .left").addClass("is_show");break;case 2:$(".side-center .right").addClass("is_show");break;case 3:$(".side-center .under").addClass("is_show")}}function e(){var e={enableGestures:!0};Leap.loop(e,function(e){if(e.gestures.length>0)for(var a=0;a<e.gestures.length;a++){var i=e.gestures[a];if("swipe"==i.type){var n=Math.abs(i.direction[0])>Math.abs(i.direction[1]);n?i.direction[0]>0?swipeDirection="right":swipeDirection="left":i.direction[1]>0?swipeDirection="up":swipeDirection="down",console.log(swipeDirection),$("div").hasClass("is_active")&&$("div").removeClass("is_active"),$(".answer").empty(),"up"===swipeDirection&&($(".up").addClass("is_active"),$(".l-side .top").hasClass("is_show")?($(".answer").append("<span>ok</span>"),$("div").removeClass("is_active"),s()):$(".answer").append("<span>but</span>")),"left"===swipeDirection&&($(".left").addClass("is_active"),$(".l-side .left").hasClass("is_show")?($(".answer").append("<span>ok</span>"),$("div").removeClass("is_active"),s()):$(".answer").append("<span>but</span>")),"right"===swipeDirection&&($(".right").addClass("is_active"),$(".l-side .right").hasClass("is_show")?($(".answer").append("<span>ok</span>"),$("div").removeClass("is_active"),s()):$(".answer").append("<span>but</span>")),"down"===swipeDirection&&($(".under").addClass("is_active"),$(".l-side .under").hasClass("is_show")?($(".answer").append("<span>ok</span>"),$("div").removeClass("is_active"),s()):$(".answer").append("<span>but</span>"))}}})}$(".start").click(function(){$(".start").css("display","none"),s()})});