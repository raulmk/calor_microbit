input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
