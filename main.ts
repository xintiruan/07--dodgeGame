input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let enemy3: game.LedSprite = null
let enemy2: game.LedSprite = null
let enemy1: game.LedSprite = null
let list: number[] = []
let a2 = 0
let a1 = 0
let a0 = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    a0 = randint(0, 4)
    a1 = randint(0, 4)
    a2 = randint(0, 4)
    while (a0 == a1 || (a0 == a2 || a1 == a2)) {
        a1 = randint(0, 4)
        a2 = randint(0, 4)
    }
    list = [a0, a1, a2]
    enemy1 = game.createSprite(list[0], 0)
    enemy2 = game.createSprite(list[1], 0)
    enemy3 = game.createSprite(list[2], 0)
    basic.pause(300)
    for (let index = 0; index < 4; index++) {
        enemy1.change(LedSpriteProperty.Y, 1)
        enemy2.change(LedSpriteProperty.Y, 1)
        enemy3.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (enemy1.isTouching(player) || (enemy2.isTouching(player) || enemy3.isTouching(player))) {
        game.gameOver()
    } else {
        enemy1.delete()
        enemy2.delete()
        enemy3.delete()
    }
})
