$(function() {
    $('.start').click(function() {
        $('.start').css('display', 'none');
        start();
    });

    function start() {
        if ($('div').hasClass('is_show')) {
            $('.is_show').removeClass('is_show');
        }
        $('div').removeClass('is_active');
        $('.answer').empty();
        swipe();
        var rand = Math.floor(Math.random() * 4);
        console.log(rand);
        switch (rand) {
            case 0:
                $('.side-center .top').addClass('is_show');
                break;
            case 1:
                $('.side-center .left').addClass('is_show');
                break;
            case 2:
                $('.side-center .right').addClass('is_show');
                break;
            case 3:
                $('.side-center .under').addClass('is_show');
                break;
        }

    }

    function swipe() {
        var controllerOptions = { enableGestures: true };
        Leap.loop(controllerOptions, function(frame) {

            // Display Gesture object data
            if (frame.gestures.length > 0) {
                for (var i = 0; i < frame.gestures.length; i++) {
                    var gesture = frame.gestures[i];
                    if (gesture.type == "swipe") {
                        //Classify swipe as either horizontal or vertical
                        var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
                        //Classify as right-left or up-down
                        if (isHorizontal) {
                            if (gesture.direction[0] > 0) {
                                swipeDirection = "right";
                            } else {
                                swipeDirection = "left";
                            }
                        } else { //vertical
                            if (gesture.direction[1] > 0) {
                                swipeDirection = "up";
                            } else {
                                swipeDirection = "down";
                            }
                        }
                        console.log(swipeDirection);
                        if ($('div').hasClass('is_active')) {
                            $('div').removeClass('is_active');
                        }
                        $('.answer').empty();
                        if (swipeDirection === "up") {
                            $('.up').addClass('is_active');
                            if ($('.l-side .top').hasClass('is_show')) {
                                $('.answer').append('<span>ok</span>');
                                $('div').removeClass('is_active');
                                start();
                            } else {
                                $('.answer').append('<span>but</span>');

                            }

                        }
                        if (swipeDirection === "left") {
                            $('.left').addClass('is_active');
                            if ($('.l-side .left').hasClass('is_show')) {
                                $('.answer').append('<span>ok</span>');
                                $('div').removeClass('is_active');
                                start();
                            } else {
                                $('.answer').append('<span>but</span>');

                            }
                        }
                        if (swipeDirection === "right") {
                            $('.right').addClass('is_active');
                            if ($('.l-side .right').hasClass('is_show')) {
                                $('.answer').append('<span>ok</span>');
                                $('div').removeClass('is_active');
                                start();
                            } else {
                                $('.answer').append('<span>but</span>');

                            }
                        }
                        if (swipeDirection === "down") {
                            $('.under').addClass('is_active');
                            if ($('.l-side .under').hasClass('is_show')) {
                                $('.answer').append('<span>ok</span>');
                                $('div').removeClass('is_active');
                                start();
                            } else {
                                $('.answer').append('<span>but</span>');

                            }
                        }
                    }
                }
            }

        });
    };
});