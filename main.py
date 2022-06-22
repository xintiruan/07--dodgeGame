input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let enemy4: game.LedSprite = null
let enemy3: game.LedSprite = null
let enemy2: game.LedSprite = null
let enemy1: game.LedSprite = null
let list: number[] = []
let player: game.LedSprite = null
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    list = [
    randint(0, 4),
    randint(0, 4),
    randint(0, 4),
    randint(0, 4),
    randint(0, 4)
    ]
    enemy1 = game.createSprite(list[0], 0)
    enemy2 = game.createSprite(list[1], 0)
    enemy3 = game.createSprite(list[2], 0)
    enemy4 = game.createSprite(list[3], 0)
    basic.pause(300)
    for (let index = 0; index < 4; index++) {
        enemy1.change(LedSpriteProperty.Y, 1)
        enemy2.change(LedSpriteProperty.Y, 1)
        enemy3.change(LedSpriteProperty.Y, 1)
        enemy4.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (enemy1.isTouching(player) || (enemy2.isTouching(player) || enemy3.isTouching(player))) {
    	
    } else {
        enemy1.delete()
        enemy2.delete()
        enemy3.delete()
        enemy4.delete()
    }
})
