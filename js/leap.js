function showFlame(flame) {
    console.log(flame);
}

function concatData(data) { return "" + data + "<br>"; }

function getHandName(hand) {
    switch (hand) {
        case 'right':
            return "[右手]";
            break;
        case 'left':
            return "[左手]";
            break;
    }
}

function getFingerName(fingerType) {
    return ["親指　 : ", "人差指: ", "中指　: ", "薬指　: ", "小指　: "][fingerType];
}
(function(win, doc) {
    //synth.triggerAttackRelease(100, '1m');
    var synth = new Tone.SimpleSynth().toMaster();
    var controllerOptions = { enableGestures: true };
    Leap.loop(controllerOptions, function(frame) {
        frameString = "";

        for (var i = 0, len = frame.hands.length; i < len; i++) {
            // 「手」単位の処理
            hand = frame.hands[i];
            frameString += concatData(getHandName(hand.type));

            // 「指」単位の処理hide
            finger = hand.fingers[3];
            fingerString = ""
            fingerString += finger.tipPosition[1]; // 指先の位置
            frameString += concatData(fingerString);
            if ($('li').hasClass('is_show')) {
                $('.is_show').removeClass('is_show');
            }
            showFlame(fingerString)
            if (fingerString > 300) {
                synth.triggerAttackRelease('C4', '1m');
                $('.bottom-do').addClass('is_show');
            } else if (fingerString > 250) {
                synth.triggerAttackRelease('B3', '1m');
                $('.si').addClass('is_show');
            } else if (fingerString > 200) {
                synth.triggerAttackRelease('A3', '1m');
                $('.ra').addClass('is_show');
            } else if (fingerString > 150) {
                synth.triggerAttackRelease('G3', '1m');
                $('.so').addClass('is_show');
            } else if (fingerString > 100) {
                synth.triggerAttackRelease('F3', '1m');
                $('.fa').addClass('is_show');
            } else if (fingerString > 50) {
                synth.triggerAttackRelease('E3', '1m');
                $('.mi').addClass('is_show');
            } else if (fingerString > 1) {
                synth.triggerAttackRelease('D3', '1m');
                $('.re').addClass('is_show');
            }
            //「C5」の音を「2分音符」で発音
            //synth.triggerAttackRelease(100, '1m');
        }
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
                    if (swipeDirection === "right") {

                    }
                    if (swipeDirection === "left") {

                    }
                }
            }
        }

    });
})(this, document);