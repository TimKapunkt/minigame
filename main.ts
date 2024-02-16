input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let punkty = 0
let punktx = 0
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
    if (sprite.get(LedSpriteProperty.X) == punktx && sprite.get(LedSpriteProperty.Y) == punkty) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
        basic.showString("GEWONNEN!!!")
        control.reset()
    }
    if (x == 0) {
        punktx = 0
    }
    if (y == 0) {
        punkty = 0
    }
    if (x == 1) {
        punktx = 1
    }
    if (y == 1) {
        punkty = 1
    }
    if (x == 3) {
        punktx = 3
    }
    if (y == 3) {
        punkty = 3
    }
    if (x == 4) {
        punktx = 4
    }
    if (y == 4) {
        punkty = 4
    }
})
