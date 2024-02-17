input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let x = randint(0, 4)
let y = randint(0, 4)
if (x == 2 || y == 2) {
    x = randint(0, 4)
    y = randint(0, 4)
}
basic.showString("A=links")
basic.showString("B=rechts")
basic.showString("A+B=runter")
basic.showString("Logo=hoch")
sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == x && sprite.get(LedSpriteProperty.Y) == y) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
        basic.showString("GEWONNEN!!!")
        control.reset()
    }
})
