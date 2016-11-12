function showFlame(flame){
  console.log(flame);
}
function setPlay(time, note) {
  synth.triggerAttackRelease(note, '8n', time);
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

            // 「指」単位の処理hide
            finger = hand.fingers[3];
            fingerX = finger.tipPosition[0];
            fingerY = finger.tipPosition[1]; // 指先の位置
            fingerZ = finger.tipPosition[2];
            showFlame(fingerZ)

            var ySound="";
            if(fingerY>271){
              ySound = "C4"
            }else if(fingerY>233){
              ySound = "B3"
            }else if(fingerY>195){
              ySound = "A3"
            }else if(fingerY>157){
              ySound = "G3"
            }else if(fingerY>119){
              ySound = "F3"
            }else if(fingerY>81){
              ySound = "E3"
            }else if(fingerY>43){
              ySound = "D3"
            }else if(fingerY>6){
              ySound = "C3"
            }

            var xSound="";
            if(fingerX>140){
              xSound = "C4"
            }else if(fingerX>105){
              xSound = "B3"
            }else if(fingerX>70){
              xSound = "A3"
            }else if(fingerX>35){
              xSound = "G3"
            }else if(fingerX>0){
              xSound = "F3"
            }else if(fingerX>-35){
              xSound = "E3"
            }else if(fingerX>-70){
              xSound = "D3"
            }else{
              xSound = "C3"
            }

            var zSound="";
            if(fingerZ>100){
              zSound = "C4"
            }else if(fingerZ>50){
              zSound = "B3"
            }else if(fingerZ>0){
              zSound = "A3"
            }else if(fingerZ>-50){
              zSound = "G3"
            }else if(fingerZ>-100){
              zSound = "F3"
            }else if(fingerZ>-150){
              zSound = "E3"
            }else if(fingerZ>-200){
              zSound = "D3"
            }else{
              zSound = "C3"
            }
            
            //synth.triggerAttackRelease(xSound, '4n');
            //synth.triggerAttackRelease(ySound, '4n');
            synth.triggerAttackRelease(ySound, '4n');
            break;
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
                    console.log(swipeDirection)
                }
            }
        }

    });
})(this, document);
