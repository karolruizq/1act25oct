music.setTempo(122)
basic.forever(function () {
    music.setVolume(255)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    music.setVolume(70)
    music.playTone(740, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
