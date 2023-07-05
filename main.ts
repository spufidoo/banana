input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        sound += 25
    }
    sound = 440
})
let sound = 0
sound = 440
