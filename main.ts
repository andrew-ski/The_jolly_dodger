namespace SpriteKind {
    export const Cannon = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const Net = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
    export const Rowboat = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Number = SpriteKind.create()
    export const CannonTower = SpriteKind.create()
    export const FlagSprite = SpriteKind.create()
    export const Dock = SpriteKind.create()
    export const Reflag = SpriteKind.create()
    export const Caraval = SpriteKind.create()
    export const CaravalProjectile = SpriteKind.create()
    export const Wind = SpriteKind.create()
    export const TreasureHUD = SpriteKind.create()
    export const IronSides = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const East_Boss_Cannon = SpriteKind.create()
    export const Boss_Cannonball = SpriteKind.create()
    export const Boss_Wake = SpriteKind.create()
    export const Boss_Loot = SpriteKind.create()
    export const Intro = SpriteKind.create()
}
function Set_Cannons () {
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    if (Owns_Port_Cannon == true) {
        if (ShipDirection == North) {
            Port_Cannon = sprites.create(img`
                . . e 4 f f 
                b b b b f e 
                b b b b f e 
                . . e 4 f f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Port_Cannon = sprites.create(img`
                . b b . 
                . b b . 
                e b b e 
                4 b b 4 
                f f f f 
                f e e f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Port_Cannon = sprites.create(img`
                f f 4 e . . 
                e f b b b b 
                e f b b b b 
                f f 4 e . . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Port_Cannon = sprites.create(img`
                f e e f 
                f f f f 
                4 b b 4 
                e b b e 
                . b b . 
                . b b . 
                `, SpriteKind.Cannon)
        }
        Port_Cannon.z = 6
    }
    if (Owns_Starboard_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Cannon = sprites.create(img`
                f f 4 e . . 
                e f b b b b 
                e f b b b b 
                f f 4 e . . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Starboard_Cannon = sprites.create(img`
                f e e f 
                f f f f 
                4 b b 4 
                e b b e 
                . b b . 
                . b b . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Starboard_Cannon = sprites.create(img`
                . . e 4 f f 
                b b b b f e 
                b b b b f e 
                . . e 4 f f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Starboard_Cannon = sprites.create(img`
                . b b . 
                . b b . 
                e b b e 
                4 b b 4 
                f f f f 
                f e e f 
                `, SpriteKind.Cannon)
        }
        Starboard_Cannon.z = 6
    }
    if (Owns_Port_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Port_Bow_Cannon = sprites.create(img`
                b b . . e e 
                b b b e e e 
                . b b b e 4 
                . e b b b f 
                e e e b f f 
                e e 4 f f e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Port_Bow_Cannon = sprites.create(img`
                e e . . b b 
                e e e b b b 
                4 e b b b . 
                f b b b e . 
                f f b e e e 
                e f f 4 e e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Port_Bow_Cannon = sprites.create(img`
                e f f 4 e e 
                f f b e e e 
                f b b b e . 
                4 e b b b . 
                e e e b b b 
                e e . . b b 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Port_Bow_Cannon = sprites.create(img`
                e e 4 f f e 
                e e e b f f 
                . e b b b f 
                . b b b e 4 
                b b b e e e 
                b b . . e e 
                `, SpriteKind.Cannon)
        }
        Port_Bow_Cannon.z = 6
    }
    if (Owns_Starboard_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Bow_Cannon = sprites.create(img`
                e e . . b b 
                e e e b b b 
                4 e b b b . 
                f b b b e . 
                f f b e e e 
                e f f 4 e e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Starboard_Bow_Cannon = sprites.create(img`
                e f f 4 e e 
                f f b e e e 
                f b b b e . 
                4 e b b b . 
                e e e b b b 
                e e . . b b 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Starboard_Bow_Cannon = sprites.create(img`
                e e 4 f f e 
                e e e b f f 
                . e b b b f 
                . b b b e 4 
                b b b e e e 
                b b . . e e 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Starboard_Bow_Cannon = sprites.create(img`
                b b . . e e 
                b b b e e e 
                . b b b e 4 
                . e b b b f 
                e e e b f f 
                e e 4 f f e 
                `, SpriteKind.Cannon)
        }
        Starboard_Bow_Cannon.z = 6
    }
    if (Owns_Stern_Cannon == true) {
        if (ShipDirection == North) {
            Stern_Cannon = sprites.create(img`
                f e e f 
                f f f f 
                4 b b 4 
                e b b e 
                . b b . 
                . b b . 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == East) {
            Stern_Cannon = sprites.create(img`
                . . e 4 f f 
                b b b b f e 
                b b b b f e 
                . . e 4 f f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == South) {
            Stern_Cannon = sprites.create(img`
                . b b . 
                . b b . 
                e b b e 
                4 b b 4 
                f f f f 
                f e e f 
                `, SpriteKind.Cannon)
        } else if (ShipDirection == West) {
            Stern_Cannon = sprites.create(img`
                f f 4 e . . 
                e f b b b b 
                e f b b b b 
                f f 4 e . . 
                `, SpriteKind.Cannon)
        }
        Stern_Cannon.z = 6
    }
}
function Level_Reset () {
    for (let value of sprites.allOfKind(SpriteKind.East_Boss_Cannon)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Wind)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Boss_Wake)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Boss_Cannonball)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Boss)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.IronSides)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Caraval)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Reflag)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Dock)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.FlagSprite)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.CannonTower)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Treasure)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Rowboat)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.EnemyProjectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Net)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Cannon)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
}
function Init_Ship () {
    ShipDirection = North
    Ship.z = 5
    Ship.setFlag(SpriteFlag.BounceOnWall, false)
    scene.cameraFollowSprite(Ship)
    controller.moveSprite(Ship, Ship_Speed, Ship_Speed)
    Set_Cannons()
    for (let value2 of tiles.getTilesByType(myTiles.tile4)) {
        tiles.placeOnRandomTile(Ship, myTiles.tile4)
        tiles.setTileAt(value2, myTiles.transparency16)
    }
    HUDsprites()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss_Loot, function (sprite, otherSprite) {
    Names = [
    "Dreadful",
    "Seadog",
    "Black Jack",
    "Blackbeard",
    "Silver-Tongue",
    "Calico Jack",
    "Kidd",
    "Hook",
    "Nemo",
    "Barbossa",
    "Bones"
    ]
    if (Ships_Destroyed == 0) {
        Ranking = " The Immortal!"
    } else if (Ships_Destroyed < 3) {
        Ranking = " The Blackheart!"
    } else if (Ships_Destroyed < 5) {
        Ranking = " The Madman!"
    } else if (Ships_Destroyed < 10) {
        Ranking = " The salty..."
    } else {
        Ranking = " The swabbie..."
    }
    game.showLongText("Captain, You have destroyed the entire navy and struck fear into the landlubber's hearts! " + "We only had to rebuild the Jolly Dodger " + Ships_Destroyed + " times!", DialogLayout.Full)
    game.showLongText("You've earned a new reputation!" + " Captain " + Names[randint(0, 10)] + Ranking, DialogLayout.Full)
    game.over(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        ShipDirection = North
        OrientShip()
        Set_Cannons()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.startEffect(effects.warmRadial)
    Damaged_Sound()
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Player_Death()
    }
    HUDdigits()
})
sprites.onOverlap(SpriteKind.Caraval, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "Life") == 1) {
        sprite.destroy(effects.ashes, 500)
    } else {
        sprite.startEffect(effects.warmRadial)
        sprites.changeDataNumberBy(sprite, "Life", -1)
    }
    otherSprite.destroy()
})
function OrientShip () {
    if (ShipDirection == North) {
        animation.runImageAnimation(
        Ship,
        [img`
            ...........11...........
            ...........ee...........
            ..........eeee..........
            ........1ee44ee1........
            ........eee44eee........
            .......eee4ee4eee.......
            .....1eee4eeee4eee1.....
            .....eee4e4ee4e4eee.....
            ....eee4eeeeeeee4eee....
            ..1eee4eeeeeeeeee4eee1..
            ..eee4e4eeeeeeee4e4eee..
            ..ee4eeeeeeeeeeeeee4ee..
            .1e4ee44eeeeeeeeeeee4e1.
            ..e4e4e44eeeee44444e4e..
            ..e4e44e4eeeeee444d44e..
            .1e4ee44eeeeeeee4ddd4e1.
            ..e4eeeeeeeeeeee4ded4e..
            ..e4eeeeeeffffee4edede..
            ffff1ff111feef111ff1ffff
            fffffffffffeefffffffffff
            ..e4eeeeeeffffee4ded4d..
            .1e4eeeeeeeeeee44ede4d1.
            ..e4eeeeeeeeeeee4dedde..
            ..e4eeeeeeeeeeeeedde4e..
            .1e4e4eeeeeeeeeeee4e4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eee4eeee4eee4e4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..ee4444444444444444ee..
            ...eeeeeeeeeeeeeeeeee...
            .1....................1.
            `,img`
            ........................
            ..........1ee1..........
            ..........eeee..........
            .........ee44ee.........
            .......1eee44eee1.......
            .......eee4ee4eee.......
            ......eee4eeee4eee......
            ....1eee4e4ee4e4eee1....
            ....eee4eeeeeeee4eee....
            ...eee4eeeeeeeeee4eee...
            .1eee4e4eeeeeeee4e4eee1.
            ..ee4eeeeeeeeeeeeee4ee..
            ..e4ee44eeeeeeeeeeee4e..
            .1e4e4e44eeeee44444e4e1.
            ..e4e44e4eeeeee444d44e..
            ..e4ee44eeeeeeee4ddd4e..
            .1e4eeeeeeeeeeee4ded4e1.
            ..e4eeeeeeffffee4edede..
            ffff1ff111feef111ff1ffff
            fffffffffffeefffffffffff
            ..e4eeeeeeffffee4ded4d..
            ..e4eeeeeeeeeee44ede4d..
            .1e4eeeeeeeeeeee4dedde1.
            ..e4eeeeeeeeeeeeedde4e..
            ..e4e4eeeeeeeeeeee4e4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4e4eee4eeee4eee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1ee4444444444444444ee1.
            ...eeeeeeeeeeeeeeeeee...
            ........................
            `,img`
            ........................
            ...........ee...........
            .........1eeee1.........
            .........ee44ee.........
            ........eee44eee........
            ......1eee4ee4eee1......
            ......eee4eeee4eee......
            .....eee4e4ee4e4eee.....
            ...1eee4eeeeeeee4eee1...
            ...eee4eeeeeeeeee4eee...
            ..eee4e4eeeeeeee4e4eee..
            .1ee4eeeeeeeeeeeeee4ee1.
            ..e4ee44eeeeeeeeeeee4e..
            ..e4e4e44eeeee44444e4e..
            .1e4e44e4eeeeee444d44e1.
            ..e4ee44eeeeeeee4ddd4e..
            ..e4eeeeeeeeeeee4ded4e..
            .1e4eeeeeeffffee4edede1.
            ffff1ff111feef111ff1ffff
            fffffffffffeefffffffffff
            .1e4eeeeeeffffee4ded4d1.
            ..e4eeeeeeeeeee44ede4d..
            ..e4eeeeeeeeeeee4dedde..
            .1e4eeeeeeeeeeeeedde4e1.
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4e4eee4eeee4eee4e4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..ee4444444444444444ee..
            .1.eeeeeeeeeeeeeeeeee.1.
            ........................
            `],
        200,
        true
        )
    } else if (ShipDirection == East) {
        animation.runImageAnimation(
        Ship,
        [img`
            ..............ff..................
            1..1..1..1..1.ff..1..1............
            ..eeeeeeeeeeeeffeeeeeeee1.........
            .ee44444444444ff444444eee.........
            .e4eeeeeeeeeeef1eeeeee4eee........
            .e4e4eeee4eeeeffeee44ee4eee1......
            .e4eeeeeeeeeeeffee44e4ee4eee......
            .e4eeeeeeeeeeef1ee4e44e4e4eee.....
            .e4eeeeeeeeeeef1eee44eeeee4eee1...
            .e4e4eeeeeeeeef1eeeeeeeeeee4eee...
            .e4eeeeeeeeeeffffeeeeeeeee4e4eee..
            .e4eeeeeeeeeefeefeeeeeeeeeeee44ee1
            .e4eeeeeeeeeefeefeeeeeeeeeeee44ee1
            .e4eeeeeeeeeeffffeeeeeeeee4e4eee..
            .e4e4eeeeeeeeef1eeee4eeeeee4eee...
            .e4eeeeeeeee4ef1eee44eeeee4eee1...
            .e4eeeeeeee444f144444ee4e4eee.....
            .e4eeeeeeeddedffedd44eee4eee......
            .e4e4eeee4dedeffdedd4ee4eee1......
            .e4eeeeeeeededf1edd4ee4eee........
            .ee44444444d44ffd44444eee.........
            ..eeeeeeeeeeddffeeeeeeee1.........
            1..1..1..1..1.ff..1..1............
            ..............ff..................
            `,img`
            ..............ff..................
            ..1..1..1..1..ff.1..1..1..........
            ..eeeeeeeeeeeeffeeeeeeee..........
            .ee44444444444ff444444eee.........
            .e4eeeeeeeeeeef1eeeeee4eee1.......
            .e4e4eeee4eeeeffeee44ee4eee.......
            .e4eeeeeeeeeeeffee44e4ee4eee......
            .e4eeeeeeeeeeef1ee4e44e4e4eee1....
            .e4eeeeeeeeeeef1eee44eeeee4eee....
            .e4e4eeeeeeeeef1eeeeeeeeeee4eee...
            .e4eeeeeeeeeeffffeeeeeeeee4e4eee1.
            .e4eeeeeeeeeefeefeeeeeeeeeeee44ee.
            .e4eeeeeeeeeefeefeeeeeeeeeeee44ee.
            .e4eeeeeeeeeeffffeeeeeeeee4e4eee1.
            .e4e4eeeeeeeeef1eeee4eeeeee4eee...
            .e4eeeeeeeee4ef1eee44eeeee4eee....
            .e4eeeeeeee444f144444ee4e4eee1....
            .e4eeeeeeeddedffedd44eee4eee......
            .e4e4eeee4dedeffdedd4ee4eee.......
            .e4eeeeeeeededf1edd4ee4eee1.......
            .ee44444444d44ffd44444eee.........
            ..eeeeeeeeeeddffeeeeeeee..........
            ..1..1..1..1..ff.1..1..1..........
            ..............ff..................
            `,img`
            ..............ff..................
            .1..1..1..1..1ff1..1..1...........
            ..eeeeeeeeeeeeffeeeeeeee..........
            .ee44444444444ff444444eee1........
            .e4eeeeeeeeeeef1eeeeee4eee........
            .e4e4eeee4eeeeffeee44ee4eee.......
            .e4eeeeeeeeeeeffee44e4ee4eee1.....
            .e4eeeeeeeeeeef1ee4e44e4e4eee.....
            .e4eeeeeeeeeeef1eee44eeeee4eee....
            .e4e4eeeeeeeeef1eeeeeeeeeee4eee1..
            .e4eeeeeeeeeeffffeeeeeeeee4e4eee..
            .e4eeeeeeeeeefeefeeeeeeeeeeee44ee.
            .e4eeeeeeeeeefeefeeeeeeeeeeee44ee.
            .e4eeeeeeeeeeffffeeeeeeeee4e4eee..
            .e4e4eeeeeeeeef1eeee4eeeeee4eee1..
            .e4eeeeeeeee4ef1eee44eeeee4eee....
            .e4eeeeeeee444f144444ee4e4eee.....
            .e4eeeeeeeddedffedd44eee4eee1.....
            .e4e4eeee4dedeffdedd4ee4eee.......
            .e4eeeeeeeededf1edd4ee4eee........
            .ee44444444d44ffd44444eee1........
            ..eeeeeeeeeeddffeeeeeeee..........
            .1..1..1..1..1ff1..1..1...........
            ..............ff..................
            `],
        200,
        true
        )
    } else if (ShipDirection == South) {
        animation.runImageAnimation(
        Ship,
        [img`
            .1....................1.
            ...eeeeeeeeeeeeeeeeee...
            ..ee4444444444444444ee..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4e4eee4eeee4eee4e4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4e4eeeeeeeeeeee4e4e1.
            ..e4eddeeeeeeeeeeeee4e..
            ..edded4eeeeeeeeeeee4e..
            .1d4ede44eeeeeeeeeee4e1.
            ..d4ded4eeffffeeeeee4e..
            fffffffffffeefffffffffff
            ffff1ff111feef111ff1ffff
            ..edede4eeffffeeeeee4e.1
            ..e4ded4eeeeeeeeeeee4e..
            .1e4ddd4eeeeeeee44ee4e1.
            ..e44d444eeeeee4e44e4e..
            ..e4e44444eeeee44e4e4e..
            .1e4eeeeeeeeeeee44ee4e1.
            ..ee4eeeeeeeeeeeeee4ee..
            ..eee4e4eeeeeeee4e4eee..
            ..1eee4eeeeeeeeee4eee1..
            ....eee4eeeeeeee4eee....
            .....eee4e4ee4e4eee.....
            .....1eee4eeee4eee1.....
            .......eee4ee4eee.......
            ........eee44eee........
            ........1ee44ee1........
            ..........eeee..........
            ...........ee...........
            ...........11...........
            `,img`
            ........................
            ...eeeeeeeeeeeeeeeeee...
            .1ee4444444444444444ee1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eee4eeee4eee4e4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4e4eeeeeeeeeeee4e4e..
            ..e4eddeeeeeeeeeeeee4e..
            .1edded4eeeeeeeeeeee4e1.
            ..d4ede44eeeeeeeeeee4e..
            ..d4ded4eeffffeeeeee4e..
            fffffffffffeefffffffffff
            ffff1ff111feef111ff1ffff
            ..edede4eeffffeeeeee4e.1
            .1e4ded4eeeeeeeeeeee4e1.
            ..e4ddd4eeeeeeee44ee4e..
            ..e44d444eeeeee4e44e4e..
            .1e4e44444eeeee44e4e4e1.
            ..e4eeeeeeeeeeee44ee4e..
            ..ee4eeeeeeeeeeeeee4ee..
            .1eee4e4eeeeeeee4e4eee1.
            ...eee4eeeeeeeeee4eee...
            ....eee4eeeeeeee4eee....
            ....1eee4e4ee4e4eee1....
            ......eee4eeee4eee......
            .......eee4ee4eee.......
            .......1eee44eee1.......
            .........ee44ee.........
            ..........eeee..........
            ..........1ee1..........
            ........................
            `,img`
            ........................
            .1.eeeeeeeeeeeeeeeeee.1.
            ..ee4444444444444444ee..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4e4eee4eeee4eee4e4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4eeeeeeeeeeeeeeee4e..
            .1e4eeeeeeeeeeeeeeee4e1.
            ..e4eeeeeeeeeeeeeeee4e..
            ..e4e4eeeeeeeeeeee4e4e..
            .1e4eddeeeeeeeeeeeee4e1.
            ..edded4eeeeeeeeeeee4e..
            ..d4ede44eeeeeeeeeee4e..
            .1d4ded4eeffffeeeeee4e1.
            fffffffffffeefffffffffff
            ffff1ff111feef111ff1ffff
            .1edede4eeffffeeeeee4e11
            ..e4ded4eeeeeeeeeeee4e..
            ..e4ddd4eeeeeeee44ee4e..
            .1e44d444eeeeee4e44e4e1.
            ..e4e44444eeeee44e4e4e..
            ..e4eeeeeeeeeeee44ee4e..
            .1ee4eeeeeeeeeeeeee4ee1.
            ..eee4e4eeeeeeee4e4eee..
            ...eee4eeeeeeeeee4eee...
            ...1eee4eeeeeeee4eee1...
            .....eee4e4ee4e4eee.....
            ......eee4eeee4eee......
            ......1eee4ee4eee1......
            ........eee44eee........
            .........ee44ee.........
            .........1eeee1.........
            ...........ee...........
            ........................
            `],
        200,
        true
        )
    } else if (ShipDirection == West) {
        animation.runImageAnimation(
        Ship,
        [img`
            ..................ff..............
            ............1..1..ff.1..1..1..1..1
            .........1eeeeeeeeffddeeeeeeeeee..
            .........eee44444dff44d44444444ee.
            ........eee4ee4dde1fdedeeeeeeee4e.
            ......1eee4ee4ddedffeded4eeee4e4e.
            ......eee4eee44ddeffdeddeeeeeee4e.
            .....eee4e4ee444441f444eeeeeeee4e.
            ...1eee4eeeee44eee1fe4eeeeeeeee4e.
            ...eee4eeeeee4eeee1feeeeeeeee4e4e.
            ..eee4e4eeeeeeeeeffffeeeeeeeeee4e.
            1ee44eeeeeeeeeeeefeefeeeeeeeeee4e.
            1ee44eeeeeeeeeeeefeefeeeeeeeeee4e.
            ..eee4e4eeeeeeeeeffffeeeeeeeeee4e.
            ...eee4eeeeeeeeeee1feeeeeeeee4e4e.
            ...1eee4eeeee44eee1feeeeeeeeeee4e.
            .....eee4e4e44e4ee1feeeeeeeeeee4e.
            ......eee4ee4e44eeffeeeeeeeeeee4e.
            ......1eee4ee44eeeffeeee4eeee4e4e.
            ........eee4eeeeee1feeeeeeeeeee4e.
            .........eee444444ff44444444444ee.
            .........1eeeeeeeeffeeeeeeeeeeee..
            ............1..1..ff.1..1..1..1..1
            ..................ff..............
            `,img`
            ..................ff..............
            ..........1..1..1.ff..1..1..1..1..
            ..........eeeeeeeeffddeeeeeeeeee..
            .........eee44444dff44d44444444ee.
            .......1eee4ee4dde1fdedeeeeeeee4e.
            .......eee4ee4ddedffeded4eeee4e4e.
            ......eee4eee44ddeffdeddeeeeeee4e.
            ....1eee4e4ee444441f444eeeeeeee4e.
            ....eee4eeeee44eee1fe4eeeeeeeee4e.
            ...eee4eeeeee4eeee1feeeeeeeee4e4e.
            .1eee4e4eeeeeeeeeffffeeeeeeeeee4e.
            .ee44eeeeeeeeeeeefeefeeeeeeeeee4e.
            .ee44eeeeeeeeeeeefeefeeeeeeeeee4e.
            .1eee4e4eeeeeeeeeffffeeeeeeeeee4e.
            ...eee4eeeeeeeeeee1feeeeeeeee4e4e.
            ....eee4eeeee44eee1feeeeeeeeeee4e.
            ....1eee4e4e44e4ee1feeeeeeeeeee4e.
            ......eee4ee4e44eeffeeeeeeeeeee4e.
            .......eee4ee44eeeffeeee4eeee4e4e.
            .......1eee4eeeeee1feeeeeeeeeee4e.
            .........eee444444ff44444444444ee.
            ..........eeeeeeeeffeeeeeeeeeeee..
            ..........1..1..1.ff..1..1..1..1..
            ..................ff..............
            `,img`
            ..................ff..............
            ...........1..1..1ff1..1..1..1..1.
            ..........eeeeeeeeffddeeeeeeeeee..
            ........1eee44444dff44d44444444ee.
            ........eee4ee4dde1fdedeeeeeeee4e.
            .......eee4ee4ddedffeded4eeee4e4e.
            .....1eee4eee44ddeffdeddeeeeeee4e.
            .....eee4e4ee444441f444eeeeeeee4e.
            ....eee4eeeee44eee1fe4eeeeeeeee4e.
            ..1eee4eeeeee4eeee1feeeeeeeee4e4e.
            ..eee4e4eeeeeeeeeffffeeeeeeeeee4e.
            .ee44eeeeeeeeeeeefeefeeeeeeeeee4e.
            .ee44eeeeeeeeeeeefeefeeeeeeeeee4e.
            ..eee4e4eeeeeeeeeffffeeeeeeeeee4e.
            ..1eee4eeeeeeeeeee1feeeeeeeee4e4e.
            ....eee4eeeee44eee1feeeeeeeeeee4e.
            .....eee4e4e44e4ee1feeeeeeeeeee4e.
            .....1eee4ee4e44eeffeeeeeeeeeee4e.
            .......eee4ee44eeeffeeee4eeee4e4e.
            ........eee4eeeeee1feeeeeeeeeee4e.
            ........1eee444444ff44444444444ee.
            ..........eeeeeeeeffeeeeeeeeeeee..
            ...........1..1..1ff1..1..1..1..1.
            ..................ff..............
            `],
        200,
        true
        )
    }
}
function SunkenTreasure () {
    for (let value3 of tiles.getTilesByType(myTiles.tile14)) {
        Sunken_Treasure = sprites.create(img`
            ....................
            ....................
            .....6..............
            ..6.6...............
            ...6................
            ..6.6...............
            .6...6..............
            ......6.............
            .......6............
            6.......6.........66
            666.....6.6666666666
            66666666666666666666
            66666666666666..666.
            66.666666666666666..
            66..666666666666....
            .66666666666666.....
            `, SpriteKind.Treasure)
        Sunken_Treasure.z = 0
        tiles.placeOnTile(Sunken_Treasure, value3)
        tiles.setTileAt(value3, myTiles.transparency16)
    }
}
function level4 () {
    EnemyCount = 0
    tiles.setTilemap(tiles.createTilemap(hex`3c003c00010101010101010101010101010101010101010101010101010e0101010101010101010101010101010101010101010101010101010101010101011001010601010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f010101010101010d12120a01010101010101010101010101010101010101010101010101010101010101010d120a010101010101010101010101010101010101010d12020202020a01010101010101010101010101010101010106010101010101010101010d12020213010101010101010101010101010101010401011402020202021301010101010d0a0101010101010101010101010101010101010101010d0202080213010101010101010601010101010101010101010c02020202020b01010101010c0b0101010101010101010101010101010101010101010c11020202020a010101010101010101010101010101010101010c0208020b010101010101010101010101010101010101010101010d0a010101010101010c110202080a0101010101010101010101010101010101010114021301010101010101010101010101010101010101010101010c0b0101010101010101010c1102020a0101010101010101010101010101010101010c110b0101010101010101010103010101010109010101010101010101010101010101010101010c0213010101010301010101010101010101010101010101010101010101010101010101010101010101010101030101010101010101010101030101010c0b0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010110010101010101010101010101010101010101010101010101010101010e0101010101010101010101010101010101010101010101010301010101010f0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010e01010101010101010101010d120a0101010101010101010101010101010101010101010101010101010101010101010101010e01010101010101010101010101010101010101010c110b0101010601010101010101010101010101010101010101010101010101010901010101010106010101010101010101010101030101010101010101010101010101010101010101030101010d1212120a0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010114020802020a01010301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010d020202020213010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010114020202020202120a010101010101010101010101010101010101010101010101010101010101010101010e0101010101010101010101010101010d0202020202020202020a01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010d120202020202020202020213010101010101010101010101010101010101010101010101010101010101010101010101010101010101090101010114020202020202020202020213010101010101010101011001010101010101010101010101010101010101010101010d12120a01010101010101010114080202020202020202080213010101010103010101010f010101010101010101010101010101090101010101010d020202130101010101010101011402020202020202020202021301010101010101010101010101010101010101010101010101010101010101010114020208130101010101010101011402020202111111020202020b01010101010101010101010101010101010101010106010101010101010101010114020202130101010101010101010c0202020b0101010c11110b0101010101010101010101010101010101010101010101010101010101010101010d020202110b010101010101010101010c110b010101010101010101010101010101010101010101010101010101010101010101010101010101010d0202020b010101010101010101010101010101010115010101010101010101010101010101010101010101010e0101010101010101010d121212120202020b010101010101010101010101010101010101010101010101010101010101010101010109010101010101010101010101010101140208021111110b0101010101010101010e0101010101010101010101010101010e01010101010101010101010101010101010101010101010101010c11110b010101010101010101010101010101010101010101010101010101010101010101010d0a010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010c0b01010101010101010101010101010101010101010101010101010e0101010601010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010101010101010101010115010101010101010101010101010101010101010101010101010101010101010e0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010e010101010101010101010101010901010101010101010101010101010101010101010101010101010101100601010101010101010101010101010101010101010101010101010101010101010101010101010d0a0101010101010101010101010101010101010f01010101010101010101010105010101010101010101010101010101010101010601010101010d02130101010101010101010e010101010101010101010101010101010101010101010101010101010101010103010101010101010101010101010114081301010101010101010101010101010101010101010101010101010101010101010d120a0101010101010101010101010101010101010101010d02021301010101010101010101010101010101010101010101010101010101010101011402020a010101010101010101010101010101010101010d0202020b01010101010101010101010101010101030101010101010105010101010101010c0208020a0101010101010101010101010101010101011402020b010101010101011501010101010101010101010101010101010101010101010101011402021301010101010101010101010101010101010114021301010101010101010101010101010101010101010101010101010d0a0101011501010114020213010101010e0101010101010101010101010d0202020a0101010101010101010101010101010101010101010101010d02020a010101010101140202020a0101010101010101010101010101010d020208021301010101010101010101010101010101010101010101010114020213010101010101140202021301010101060101010101010101010d0202020202020a010101010101010101010101010101010101010e010101140208020a010101070d0202020213010101010101010101010101010114020202020202020a01010101010101010101010d0a0101010101010101010c020202021212121202020202021301010101010101010101030101010c0202020202020213010101010e0101010101010c0b010101010101010101010c0202020202020202020211110b0101010101010101010101010101010c0202020202020b0101010101010101010101010101010101010101010101010c02020202020208110b0101010101010101010101010101010101010114020202020b01010101010101010101010103010101010101010103010101010c11111111110b010101010101010101010101010101010101010101140208020b010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101011001010101010c11110b010101010101010301010101010101010101010101010101010101010101010101010101010101010e0101010101010101010f010101010101010101010301010101010101010101010101010101010e0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010101010101010101010101010101010901010101010101010101010101010101010e01010101010101010101010101010101010101010101010101090101010101010101010101010101010101010101010106010101010101010101010101010101100101010101010101010101010101010101010101060101010101010101010101010e010101010101010101010101010101010101010101010101010f01010101010101010101010101010101010101010101010101010101010101010101`, img`
        .........................2.................................2
        ...........................................................2
        ........22..................................2...............
        ......22222...............................2222..............
        .....2222222.....22......................22222..............
        ......22222......22.....................222222..............
        .......222.......................22........2222.............
        .......222.......................22..........222............
        ........2......................................22...........
        ...............................................2............
        ............................................................
        ...........2............................2...................
        ...........2................................................
        ............................................................
        ...2...........222....................................2.....
        ...............222..........................................
        ..................................222.......................
        .................................22222......................
        .................................222222.....................
        ................................22222222....................
        ...............2................222222222...................
        ..............................222222222222..................
        .............................2222222222222..........2.......
        .................22..........2222222222222..........2.......
        ................2222.........2222222222222..................
        ...............22222.........222222222222...................
        ...............22222..........222.....22....................
        ...............2222............2............................
        ..............222.........................................2.
        .........2222222............................................
        ........22.2222..........2...............2..................
        .........22...................................22............
        ..............................................22............
        ..............2.............................................
        ............................................................
        2...........................................................
        .................................................2..........
        ................................2...........................
        ............2...................2...........................
        ............22.........2....................................
        ...........2.2.................................2............
        ...........222................................222...........
        ..........222..................................222..........
        .........222...................................2222.........
        .........222..........................2........2222....2....
        .........222..........................22.......2222.........
        ........22222........................2222......22222........
        .......222222....................2...22.22.....22222........
        ......22222222............22..........22222222222222........
        .......22222222....2......22...........222222222222.........
        ........222222..........................22222222............
        ........22222............................22222..............
        ........2222................................................
        ..2......22.........................................2.......
        ..2............................2............................
        ............................................................
        ............................................................
        ....................2.......................................
        .........................2.................................2
        .........................2..................................
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile5,myTiles.tile7,myTiles.tile9,myTiles.tile11,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile8,myTiles.tile12,myTiles.tile6,myTiles.tile10,myTiles.tile22], TileScale.Sixteen))
    scene.setBackgroundColor(9)
    Init_Ship()
    rowBoat()
    Flag()
    SunkenTreasure()
    Dock2()
    CannonTower2()
    Caraval2()
    Ironside()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        if (game.runtime() > NetReload + 1500) {
            for (let value of sprites.allOfKind(SpriteKind.Net)) {
                value.destroy()
            }
            for (let value of sprites.allOfKind(SpriteKind.TreasureHUD)) {
                value.destroy()
            }
            Net2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Net)
            NetReload = game.runtime()
            if (ShipDirection == North) {
                Net2.setPosition(Ship.x + 19, Ship.y)
                animation.runImageAnimation(
                Net2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d . . . . . . . . . . . . . . . 
                    . d . . . . . . . . . . . . . . 
                    d d . . . . . . . . . . . . . . 
                    . d . . . . . . . . . . . . . . 
                    d . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d d d . . . . . . . . . . . . . 
                    . d . d . . . . . . . . . . . . 
                    d . d . d . . . . . . . . . . . 
                    . d . d d . . . . . . . . . . . 
                    d . d . d . . . . . . . . . . . 
                    . d . d . . . . . . . . . . . . 
                    d d d . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d d d d d d d . . . . . . . . . 
                    . d . d . d . d . . . . . . . . 
                    d . d . d . d . d . . . . . . . 
                    . d . d . d . d d . . . . . . . 
                    d . d . d . d . d . . . . . . . 
                    . d . d . d . d d . . . . . . . 
                    d . d . d . d . d . . . . . . . 
                    . d . d . d . d . . . . . . . . 
                    d d d d d d d . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . d d d d d d d . . . . . . . . 
                    d . d . d . d . d . . . . . . . 
                    . d . d . d . d . d . . . . . . 
                    d . d . d . d . d . d . . . . . 
                    . d . d . d . d . d . d . . . . 
                    d . d . d . d . d . d d . . . . 
                    . d . d . d . d . d . d . . . . 
                    d . d . d . d . d . d . . . . . 
                    . d . d . d . d . d . . . . . . 
                    d . d . d . d . d . . . . . . . 
                    . d d d d d d d . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . d d d d d d d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    d . d . d . d . d . d . d . d . 
                    d d . d . d . d . d . d . d d . 
                    d . d . d . d . d . d . d . d . 
                    d d . d . d . d . d . d . d d . 
                    d . d . d . d . d . d . d . d . 
                    d d . d . d . d . d . d . d d . 
                    d . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d d d d d d d . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . d d d d d d d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    d . d . d . d . d . d . d . d . 
                    d d . d . d . d . d . d . d d . 
                    d . d . d . d . d . d . d . d . 
                    d d . d . d . d . d . d . d d . 
                    d . d . d . d . d . d . d . d . 
                    d d . d . d . d . d . d . d d . 
                    d . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d d d d d d d . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d . . . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . . . d . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                false
                )
            } else if (ShipDirection == East) {
                Net2.setPosition(Ship.x, Ship.y + 19)
                animation.runImageAnimation(
                Net2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . d d d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . d . d . d . d . . . . 
                    . . . . . d d . d . d d . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . d d d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . d d . d . d . d . d d . . 
                    . . . d . d . d . d . d . d . . 
                    . . . d d . d . d . d . d d . . 
                    . . . d . d . d . d . d . d . . 
                    . . . d d . d . d . d . d d . . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . d . . . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . . . d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                false
                )
            } else if (ShipDirection == South) {
                Net2.setPosition(Ship.x + -19, Ship.y)
                animation.runImageAnimation(
                Net2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . d 
                    . . . . . . . . . . . . . . d . 
                    . . . . . . . . . . . . . . d d 
                    . . . . . . . . . . . . . . d . 
                    . . . . . . . . . . . . . . . d 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . d d d 
                    . . . . . . . . . . . . d . d . 
                    . . . . . . . . . . . d . d . d 
                    . . . . . . . . . . . d d . d . 
                    . . . . . . . . . . . d . d . d 
                    . . . . . . . . . . . . d . d . 
                    . . . . . . . . . . . . . d d d 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . d d d d d d d 
                    . . . . . . . . d . d . d . d . 
                    . . . . . . . d . d . d . d . d 
                    . . . . . . . d d . d . d . d . 
                    . . . . . . . d . d . d . d . d 
                    . . . . . . . d d . d . d . d . 
                    . . . . . . . d . d . d . d . d 
                    . . . . . . . . d . d . d . d . 
                    . . . . . . . . . d d d d d d d 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . d d d d d d d . 
                    . . . . . . . d . d . d . d . d 
                    . . . . . . d . d . d . d . d . 
                    . . . . . d . d . d . d . d . d 
                    . . . . d . d . d . d . d . d . 
                    . . . . d d . d . d . d . d . d 
                    . . . . d . d . d . d . d . d . 
                    . . . . . d . d . d . d . d . d 
                    . . . . . . d . d . d . d . d . 
                    . . . . . . . d . d . d . d . d 
                    . . . . . . . . d d d d d d d . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . d . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . d . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . d . d . d . d . d . . . . 
                    . . . . d . d . d . d . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d . . . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . d . d . d . . . . . . 
                    . . . . . . d . d . . . . . . . 
                    . . . . . . . d . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                false
                )
            } else if (ShipDirection == West) {
                Net2.setPosition(Ship.x, Ship.y + -19)
                animation.runImageAnimation(
                Net2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d d d . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d d d . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . d d . d . d d . . . . 
                    . . . . . d . d . d . d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . . d d . d . d . d . d d . . 
                    . . . d . d . d . d . d . d . . 
                    . . . d d . d . d . d . d d . . 
                    . . . d . d . d . d . d . d . . 
                    . . . d d . d . d . d . d d . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d d d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . d d . d . d . d . d . d . d d 
                    . d . d . d . d . d . d . d . d 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d d d d d d d . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . d . d . d . d . d . d . d . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . d . d . d . d . d . d . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . d . d . d . d . d . . . 
                    . . . . . d . d . d . d . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . d . . . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . d . d . d . . . . . 
                    . . . . . . . d . d . . . . . . 
                    . . . . . . . . d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                false
                )
            }
            Net2.z = 7
        }
    }
})
function level1 () {
    EnemyCount = 0
    tiles.setTilemap(tilemap`level`)
    scene.setBackgroundColor(9)
    Init_Ship()
    rowBoat()
    Flag()
    SunkenTreasure()
    Dock2()
    CannonTower2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dock, function (sprite, otherSprite) {
    if (EnemyCount == 0) {
        Level_Bonus = Level * 4
        Doubloons += Level_Bonus
        Level += 1
        game.showLongText("You plundered the port and received " + Level_Bonus + " gold doubloons!", DialogLayout.Bottom)
        Shop()
    } else if (game.runtime() > DockingTimer + 3000) {
        DockingTimer = game.runtime()
        game.showLongText("" + EnemyCount + " vessels are guarding this dock.", DialogLayout.Bottom)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Pause == true) {
        Pause = false
        Intro.destroy()
        game.showLongText("Captain, You've recruited a crew of swarthy vermin! Now outfit your ship and sail into enemy territory to plunder some booty and steal all the glory!", DialogLayout.Full)
        game.showLongText("Find sunken treasure and throw your net (B) to pull it in. Can't find any sunken treasure? Sink some with your cannons (A).", DialogLayout.Full)
        Shop()
    }
})
sprites.onOverlap(SpriteKind.Rowboat, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 500)
    otherSprite.destroy()
})
function Level2 () {
    EnemyCount = 0
    tiles.setTilemap(tiles.createTilemap(hex`32003200010101010602020202020202020202020e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0202020202020202020202020202020201080101010602020202020202020e0d01010101010101010101010101010101010106020202020202020202020202020202010101010101060e0e0202020e0d010101010101010101010101010101010101010101060202020202020202020202020202010101010101010101060e0d0101010101010101010101010101010101010108010101010602020202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010f020202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010f020202020202020202020202010101010104010101010101010101101111111111111111111105010101010101010101010f020202020202020202020202010101010101010101010101010110020202020202020202020202050101010101010101010f0202020202020202020202020101010101010101010101010110020202020202020202020202020205010101010101011002020202020202020202020202010101010101010101010101010f020a02020202020202020202020202110501010101100202020202020202020202020202010101010101010101010101010f0202020202020202020202020202020202111111110202020202020202020202020202020101010101010101010101010106020202020202020202020202020202020202020202020202020202020202020202020202010101010101010103010101010106020202020202020202020202020202020202020202020202020202020202020202020201010101010101010101010101010106020202020202020202020202020a0202020202020202020202020202020202020202010101010101010101010101010101010602020202020202020202020e0e0e0e0e020202020202020202020202020202020201010101030101010101010101010101010f0202020202020202020d0101010101060202020202020202020202020202020205010101010101010101010101010101100202020202020202020d01010101010101060202020202020202020202020202020c0101010101010101010101010101100202020202020202020d0101010101010101010602020202020202020202020202020205010101010101010101010101100202020202020202020d0101010101010101010101060202020202020202020202020202020501010101010101010101100202020202020202020d0101010101010801010101010106020202020202020202020202020202050101010101010101100202020202020202020d0101010101010101010101010101010602020202020202020202020202020c01010101030101010f0a020202020202020d010101010101030101010101010101010106020202020202020202020202020c01010101010101010f020202020202020d010101010101010101010101010101010101010f02020202020202020202020e0d01010101010101010f0202020202020d01010101010101010101010101010101010101010f020202020202020202020d010101010101010101010f02020202020d0101010101010101010101010101010101010101010f0202020202020202020c010101010101010101011002020202020d010101010101010101010101010101010101010101010f0202020202020202020c010101010101010101010f020202020c0101010101010101010101010101010101010101010110020a02020202020202020c010101010101010101010f020202020c0101010101010101010101010101010101010101010706020202020202020202020c010101010301010101010f020202020c01010101010101010101010801010101010101010101010602020202020202020202050101010101010101010f020202020c010101010101010101010101010101010101010101010101060202020202020202020c01010101010101010106020202020c010101010101010101010101010101010101010101010101010602020202020202020c010101010101010101010602020202050101010b0101010101010101010101010101010101010101010602020202020202020501010101010101010101060202020d010101010101010101010101070101010101010101010101010106020202020202020c01010101010101010101010f020c01010101010101010110111105010101010101010101010101010101060202020202020c01010101010101010101010f0a0c01010101010101011002020202050101010101010101030101010101010602020202020c01010101010801010101010f020c01010101010101010f020202020205010101010101010101010101010101060202020a0c01010101010101010101010f020c01010101010101010f020202020202050101010101010101010101010101010f0202020c01010101010101010101010f020c01010101010101010f020202020202020501010101010101010101010101010f0202020c01010301010101010101010f0202050101090101011002020202020202020205010101010101010101010101010f0202020d0101010101010101010110020202021111111111110202020202020202020202050101010101010101010101010f02020c01010101010101010101100202020e0e0e0e0a0202020202020202020202020202020501010101010101010101010602020c01010101010101010107060e0e0d01010101060e0e0e0e0e0e0e0e0e0e0e0e020a020d0101010101010101010101010f020c01010101010101010101010101010101080101010107010101010101010101060e0d010101010101010101010101010f020c01010101010101010101010101010101010101010101010101010101010101010101010701010101010101010801010f020c01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f020c010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101011002020c010101010101010101030101010101010101010101010101010101010101010103010101010101010101010101100202020c01010101010101010101010101010101101105010101010101010101010101010101010101010101010101011002020202020501011011111105010101011011111102020211111111111105010101010101010101010101010101100a11020202020202021111020202020211111111020202020202020202020202020211111111111111111111111111111102020202020202`, img`
        .....222222222222222222222222222222...............
        ......2.......2....................2..............
        .......222.22.......................2.............
        ..........2..........................2............
        .....................................2............
        .....................................2............
        ................2222222222...........2............
        ...............2..........2..........2............
        ..............2............2.........2............
        .............2..............22......2.............
        .............2................222222..............
        ..............2...................................
        ...............2..................................
        ................2.................................
        .................2.........2222222................
        .................2........2.......2...............
        .................2.......2.........2..............
        2...............2.......2...........2.............
        2..............2.......2.............2............
        .2............2.......2...............2...........
        ..2..........2.......2.................2..........
        ...2........2.......2...................2.........
        ...2........2......2....................2.........
        .22.........2.....2.....................2.........
        2...........2....2......................2.........
        2...........2...2.......................2.........
        2..........2....2.......................2.........
        2..........2....2......................22.........
        2..........2....2........................2........
        2..........2....2.........................2.......
        .2..........2...2..........................2......
        .2...........2..22..........................2.....
        .2............2.2............................2....
        ..2...........2.2..........22.................2...
        ..2...........2.2.........2..2.................2..
        ..2...........2.2........2....2.................2.
        ..2...........2.2........2.....2................2.
        ..2...........2.2........2......2...............2.
        ..2...........2.2........2.......2..............2.
        .2............2.222222222.........2.............2.
        .2..........22222222...............2.............2
        .2...........22......2222222222222.22............2
        .2................................2..............2
        .2...............................................2
        .2...............................................2
        .2...............................................2
        .2..............................................2.
        .2.................2...........................2..
        .2....222......222222222222.................222...
        ..2222...222222............2222222222222222222....
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile9,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen))
    scene.setBackgroundColor(9)
    Init_Ship()
    rowBoat()
    Flag()
    SunkenTreasure()
    Dock2()
    CannonTower2()
    Caraval2()
}
sprites.onDestroyed(SpriteKind.Rowboat, function (sprite) {
    if (!(blockMenu.isMenuOpen())) {
        Treasure_Rowboat = sprites.create(img`
            . . . . . . 
            . . 6 6 . . 
            . 6 6 6 6 . 
            . 6 6 6 6 . 
            6 6 6 6 6 6 
            6 6 6 6 6 6 
            6 6 6 6 6 6 
            6 6 6 6 6 6 
            6 6 6 6 6 6 
            6 6 6 6 6 6 
            6 6 6 6 6 6 
            . 6 6 6 6 . 
            . . 6 6 . . 
            `, SpriteKind.Treasure)
        Treasure_Rowboat.setPosition(sprite.x, sprite.y)
        Treasure_Rowboat.z = 0
        EnemyCount += -1
        if (EnemyCount == 0) {
            ReFlag()
        }
    }
})
sprites.onDestroyed(SpriteKind.CannonTower, function (sprite) {
    Tower_Treasure = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Treasure)
    Tower_Treasure.setPosition(sprite.x, sprite.y)
    Tower_Treasure.z = 0
    EnemyCount += -1
    if (EnemyCount == 0) {
        ReFlag()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        if (game.runtime() > ReloadCannon + Reload_Time) {
            ReloadCannon = game.runtime()
            Fire_Cannons()
            if (Cannon_Upgrade == true) {
                Fire_Cannons()
                for (let value6 of sprites.allOfKind(SpriteKind.Projectile)) {
                    value6.startEffect(effects.warmRadial, 75)
                }
            } else {
                for (let value6 of sprites.allOfKind(SpriteKind.Projectile)) {
                    value6.startEffect(effects.fire, 50)
                }
            }
            music.playTone(175, music.beat(BeatFraction.Sixteenth))
            music.playTone(147, music.beat(BeatFraction.Sixteenth))
            music.playTone(131, music.beat(BeatFraction.Sixteenth))
        }
    }
})
function ReFlag () {
    for (let value5 of sprites.allOfKind(SpriteKind.FlagSprite)) {
        value5.destroy()
        reflag = sprites.create(img`
            eefffeeeeeeeefffee
            ..ffffffffffffff..
            ..ff1ffffffff1ff..
            ..f11ffffffff11f..
            ..fff1f1111f1fff..
            ..ffff111111ffff..
            ..fff11111111fff..
            ..fff11f11f11fff..
            ..fff11111111fff..
            ..ffff111111ffff..
            ..fff1f1111f1fff..
            ..f11ff1ff1ff11f..
            ..ff1ffffffff1ff..
            ..ffffffc.ffffff..
            ..fffffc...fffff..
            ..ffffc.....ffff..
            ..fffc.......fff..
            ..ffc.........ff..
            ..fc...........f..
            ..................
            `, SpriteKind.Reflag)
        reflag.setPosition(value5.x, value5.y)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CannonTower, function (sprite, otherSprite) {
    if (sprites.readDataNumber(otherSprite, "Life") == 1) {
        otherSprite.destroy(effects.ashes, 500)
    } else {
        otherSprite.startEffect(effects.fire)
        sprites.changeDataNumberBy(otherSprite, "Life", -1)
    }
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Player_Death()
    }
    HUDdigits()
})
function Boss_Rowboats () {
    if (Boss_Stage == 0 || BossCannon_count == 3) {
        RowBoat = sprites.create(img`
            . . . . . . b b . . . . . . 
            . . . . . . b b . . . . . . 
            . . . . . f b b f . . . . . 
            . . . . . f f f f . . . . . 
            . . . . . e f f e . . . . . 
            . . . . e e d d e e . . . . 
            . . . . e d e e d e . . . . 
            . . . . f d d d d f . . . . 
            e e e e e e e e e e e e e e 
            . . . . f d d d d f . . . . 
            . . . . e d e e d e . . . . 
            . . . . e d d d d e . . . . 
            . . . . e e d d e e . . . . 
            . . . . . e f f e . . . . . 
            . . . . . . e e . . . . . . 
            `, SpriteKind.Rowboat)
        RowBoat.setPosition(130, 30)
        RowBoat.z = 6
        EnemyCount += 1
        RowBoat = sprites.create(img`
            . . . . . . b b . . . . . . 
            . . . . . . b b . . . . . . 
            . . . . . f b b f . . . . . 
            . . . . . f f f f . . . . . 
            . . . . . e f f e . . . . . 
            . . . . e e d d e e . . . . 
            . . . . e d e e d e . . . . 
            . . . . f d d d d f . . . . 
            e e e e e e e e e e e e e e 
            . . . . f d d d d f . . . . 
            . . . . e d e e d e . . . . 
            . . . . e d d d d e . . . . 
            . . . . e e d d e e . . . . 
            . . . . . e f f e . . . . . 
            . . . . . . e e . . . . . . 
            `, SpriteKind.Rowboat)
        RowBoat.setPosition(130, 65)
        RowBoat.z = 6
        EnemyCount += 1
        RowBoat = sprites.create(img`
            . . . . . . b b . . . . . . 
            . . . . . . b b . . . . . . 
            . . . . . f b b f . . . . . 
            . . . . . f f f f . . . . . 
            . . . . . e f f e . . . . . 
            . . . . e e d d e e . . . . 
            . . . . e d e e d e . . . . 
            . . . . f d d d d f . . . . 
            e e e e e e e e e e e e e e 
            . . . . f d d d d f . . . . 
            . . . . e d e e d e . . . . 
            . . . . e d d d d e . . . . 
            . . . . e e d d e e . . . . 
            . . . . . e f f e . . . . . 
            . . . . . . e e . . . . . . 
            `, SpriteKind.Rowboat)
        RowBoat.setPosition(130, 100)
        RowBoat.z = 6
        EnemyCount += 1
    } else if (Boss_Stage == 3 && BossCannon_count == 2) {
        CaravalShip = sprites.create(img`
            ..............f8..............
            ........bb....f1..bb..........
            ..eeeeeebbeeeef8eebbeee.......
            .ee44444bb4444f144bb44ee......
            .e4eeee4ff4eeef8e4ff4e4ee.....
            .e4eeeeffffeeef1effff4e4ee....
            .e4eeeeeeeeeeef8eeeee44e4ee...
            .e4eeeeeeeeeeef1eeeee4e4e4ee..
            .e4e4e4eeeeeeffffeeee44e4e4ee.
            .e4ee4eeeeeeefeefeeee4e4e4e4e.
            .e4e4e4eeeeeeffffeeee44e4e4ee.
            .e4eeeeeeeeeeef1eeeee4e4e4ee..
            .e4eeeeeeeeeeef8eeeee44e4ee...
            .e4eeeeffffeeef1effff4e4ee....
            .e4eeee4ff4eeef8e4ff4e4ee.....
            .ee44444bb4444f144bb44ee......
            ..eeeeeebbeeeef8eebbeee.......
            ........bb....f1..bb..........
            ..............f8..............
            `, SpriteKind.Caraval)
        CaravalShip.setPosition(100, 130)
        CaravalShip.z = 6
        sprites.setDataNumber(CaravalShip, "Life", 3)
        EnemyCount += 1
        CaravalShip = sprites.create(img`
            ..............f8..............
            ........bb....f1..bb..........
            ..eeeeeebbeeeef8eebbeee.......
            .ee44444bb4444f144bb44ee......
            .e4eeee4ff4eeef8e4ff4e4ee.....
            .e4eeeeffffeeef1effff4e4ee....
            .e4eeeeeeeeeeef8eeeee44e4ee...
            .e4eeeeeeeeeeef1eeeee4e4e4ee..
            .e4e4e4eeeeeeffffeeee44e4e4ee.
            .e4ee4eeeeeeefeefeeee4e4e4e4e.
            .e4e4e4eeeeeeffffeeee44e4e4ee.
            .e4eeeeeeeeeeef1eeeee4e4e4ee..
            .e4eeeeeeeeeeef8eeeee44e4ee...
            .e4eeeeffffeeef1effff4e4ee....
            .e4eeee4ff4eeef8e4ff4e4ee.....
            .ee44444bb4444f144bb44ee......
            ..eeeeeebbeeeef8eebbeee.......
            ........bb....f1..bb..........
            ..............f8..............
            `, SpriteKind.Caraval)
        CaravalShip.setPosition(100, 20)
        CaravalShip.z = 6
        sprites.setDataNumber(CaravalShip, "Life", 3)
        EnemyCount += 1
    } else if (Boss_Stage == 3 && BossCannon_count == 1) {
        IronSides = sprites.create(img`
            ..............f8..................
            1..1..1..1..1.f1..1..1............
            ..ccccccccccccf8cccccccc1.........
            .ccffffffffffff1ffffffccc.........
            .cfbbbbbbbbbbbf8bbbbbbfccc..bb....
            .cfbabbbbbbbbbf1bbbaabbfcccbbb....
            .cfffbbbbbbbbbf8bbaababffbbbb.....
            bbbfbbbbbbbbbbf1bbabaabaffbbc.....
            bbbfbbbbbbbbbbf8bbbaabbbfffbcc1...
            .cfffbbbbbbbbbf1bbbbbbbbbfffccc...
            .cfbabbbbbbbbffffbbbbbbbbbaffccc..
            .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
            .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
            .cfbabbbbbbbbffffbbbbbbbbbaffccc..
            .cfffbbbbbbbbbf1bbbbbbbbbfffccc...
            bbbfbbbbbbbbbbf8bbbbbbbbfffbcc1...
            bbbfbbbbbbbbbbf1bbbbbbbaffbbc.....
            .cfffbbbbbbbbbf8bbbbbbbffbbbb.....
            .cfbabbbbbbbbbf1bbbbbbbfcccbbb....
            .cfbbbbbbbbbbbf8bbbbbbfccc..bb....
            .ccffffffffffff1ffffffccc.........
            ..ccccccccccccf8cccccccc1.........
            1..1..1..1..1.f1..1..1............
            ..............f8..................
            `, SpriteKind.IronSides)
        IronSides.setPosition(130, 100)
        IronSides.z = 6
        sprites.setDataNumber(IronSides, "Life", 5)
        EnemyCount += 1
        IronSides = sprites.create(img`
            ..............f8..................
            1..1..1..1..1.f1..1..1............
            ..ccccccccccccf8cccccccc1.........
            .ccffffffffffff1ffffffccc.........
            .cfbbbbbbbbbbbf8bbbbbbfccc..bb....
            .cfbabbbbbbbbbf1bbbaabbfcccbbb....
            .cfffbbbbbbbbbf8bbaababffbbbb.....
            bbbfbbbbbbbbbbf1bbabaabaffbbc.....
            bbbfbbbbbbbbbbf8bbbaabbbfffbcc1...
            .cfffbbbbbbbbbf1bbbbbbbbbfffccc...
            .cfbabbbbbbbbffffbbbbbbbbbaffccc..
            .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
            .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
            .cfbabbbbbbbbffffbbbbbbbbbaffccc..
            .cfffbbbbbbbbbf1bbbbbbbbbfffccc...
            bbbfbbbbbbbbbbf8bbbbbbbbfffbcc1...
            bbbfbbbbbbbbbbf1bbbbbbbaffbbc.....
            .cfffbbbbbbbbbf8bbbbbbbffbbbb.....
            .cfbabbbbbbbbbf1bbbbbbbfcccbbb....
            .cfbbbbbbbbbbbf8bbbbbbfccc..bb....
            .ccffffffffffff1ffffffccc.........
            ..ccccccccccccf8cccccccc1.........
            1..1..1..1..1.f1..1..1............
            ..............f8..................
            `, SpriteKind.IronSides)
        IronSides.setPosition(130, 30)
        IronSides.z = 6
        sprites.setDataNumber(IronSides, "Life", 5)
    }
}
function NumberFun () {
    Numbers_array = [
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . . 5 4 . 
        . 5 5 4 . 
        . . 5 4 . 
        . . 5 4 . 
        . . 5 4 . 
        . . 5 4 . 
        . 5 5 5 4 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        . . . 5 4 
        . . 5 4 . 
        . 5 4 . . 
        5 4 . . . 
        5 5 5 5 4 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        . . . 5 4 
        . 5 5 4 . 
        . . . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        5 4 . 5 4 
        5 4 . 5 4 
        5 4 . 5 4 
        5 5 5 5 4 
        . . . 5 4 
        . . . 5 4 
        . . . 5 4 
        `,
    img`
        5 5 5 5 4 
        5 . . . . 
        5 5 5 4 . 
        . . . 5 4 
        . . . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . . . 
        5 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        5 5 5 5 4 
        . . . 5 4 
        . . . 5 4 
        . . 5 4 . 
        . . 5 4 . 
        . 5 4 . . 
        . 5 4 . . 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . 5 5 4 . 
        5 4 . 5 4 
        5 4 . 5 4 
        . 5 5 5 4 
        . . . 5 4 
        5 4 . 5 4 
        . 5 5 4 . 
        `,
    img`
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        `
    ]
    Integrity_First_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Integrity_Second_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Dubloon_First_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Dubloon_Second_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
    Dubloon_Third_Digit = sprites.create(Numbers_array[10], SpriteKind.Number)
}
sprites.onOverlap(SpriteKind.Wind, SpriteKind.Boss, function (sprite, otherSprite) {
    sprite.destroy()
})
function level5 () {
    BossCannon_count = 0
    EnemyCount = 0
    Boss_Stage = -1
    tiles.setTilemap(tiles.createTilemap(hex`0a000b000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010102010101010101010101`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile23,myTiles.tile4], TileScale.Sixteen))
    scene.setBackgroundColor(8)
    Init_Ship()
}
function Dock2 () {
    for (let value4 of tiles.getTilesByType(myTiles.tile15)) {
        Ship_Dock = sprites.create(img`
            .................
            .................
            .................
            .................
            .................
            .....eeeeeeeeee6.
            ....e4444444444e6
            ....eeeeeeeeeeee6
            ....e4444444444e6
            .eeeeeeeeeeeeeee6
            .eeee4444444444e6
            .666eeeeeeeeeeee6
            ....e4444444444e6
            ....eeeeeeeeeeee6
            ....e4444444444e6
            ....eeeeeeeeeeee6
            ....e4444444444e6
            ....eeeeeeeeeeee6
            ....e4444444444e6
            ....eeeeeeeeeeee6
            ....e4444444444e6
            ....eeeeeeeeeeee6
            ....e4444444444e6
            ....6eeeeeeeeee6.
            `, SpriteKind.Dock)
        tiles.placeOnTile(Ship_Dock, value4)
        tiles.setTileAt(value4, myTiles.tile1)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        ShipDirection = West
        OrientShip()
        Set_Cannons()
    }
})
function level3 () {
    EnemyCount = 0
    tiles.setTilemap(tiles.createTilemap(hex`32003200010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f010101010101010101010101010101010101010101010103010101010101010101010101010301010101010101010101010f010401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f010101010101010101010101010101010301010101010101010101010101010101010101010101010101010101010101010f0101010101010101060101010101010101010101010101010101010101010101030101010101010106010101010101011002011011110a01010101010110111111110a010101010101010101010101010101010101010101010101010101010101010f0210020208021111111111110202020208021111111111110a01010110111111110a0101010101010101010101010101010f02020202020202020202020202020202020202020202020202111111020202020802110a010101010101010101010301010f020202020202020202020202020202020202020202020202020202020202020202020202110a01010101010101010101010f02020202020202020202020202020202020202020202020202020202020202020202020202020a010101010101010101010f0202020202020202020202020202020202020202020202020202020202020202020202020202020a0101010101010101010f0202020202020202020202020202020202020202020202020202020202020202020202020202080b050101010101010110020202020202020202020202020202020202020202020d0d0d0d0d0d0d0d020202020202020202020c01010101010101010f080202020202020202020202020202020d0d0d0d0d0c01010101010101010e0d0d0d02020202020c0101010101010101010e020202020202020202020802020d0d0c0101010101010101010106010101010101010e0202020c01010101010101010101010f0202020202020d0d0d0d0d0c010101010101010101010101010101010101010101010e0d0c0101010101010101010101010f02020202020c010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f020202020c01010101010101010101010101010301010101010101010101010301010101010101010101010101010101010f0202020c0101060101010101010101010101010101010101010101010101010101010101010101010101010101010101010f02020c010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f020b01010101010101010101030101010101010101010101010101010101010101010101010101010101010101090101010e020b0101010101010101010101010101010101010101010101010301010101010101010101010301010101010101010101010f0b0103010101010101010101010101010101010101010101010101010101010101010101010101010101010101010601010f0b010101010101010101010110110a01010101010101010101010101010101010101010101010101010101010101010110020b010101010101010101011002020211110a01010101010101010101010101100a01010101100a01010101010110111102020b0101010101010105011002020202020202111111110a0101010110111111020211111111020211111111111102020202020b010101010101010110020802020202020202020202021111111102020202020202020202020202020202020202020202020b01010101010101010e0202020d0d0d02020d0d0208020202020202020202020202020202020202020202020202020202020b0101010101010101010e0d0c0101010e0c01010e0d0d0d02020d020202020d0202020202020202020202020202020202020b01010101010101010101010101060101010101010101010e0c010e02020c010e0d0202020202020d0d02020202020202020b0106010101010101010101010101010101010101010101010101010e0c010101010e0208020d0c01010e020202020202020b010101010101010101010101010101030101010101010101010101010101010101010e0d0c01010101010e0d02080202020b01010101010101010101010101010101010101010101010101010101010101030101010101010106010101010e0d0d0202020a010901010101010103010101010101010101010101030101010101010101010101010101010101010101010101010e0202020a010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f0202020a0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f020202021111110a0101010101010110110a010101010101010101060110110a01010101010101010101010101010101010f02020202020202020a0101011011110202021111110a0101010101011002020b01010101010101010101010101010101100202020202020202020211111102020202020202080202111111110a010f0208020a01010501010101010101010101011002020202020202080202020d0d0d0d0d0d0d0202020202020202020202110202020202110a0101010101010101030101010f0202020202020d0d0d0d0c010101050101010e0d0d0d0d0d020202020d0d0d0d0202020d0c0101010101010101010101010f02020202020c0101010101010101010106010101010101010e02020c010101010e0d0c01010101010101010101010101010e020202020c01010101010101010101010101010101010101010e0c01010101010101010101010101010101010101010101010e02020b01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f020b01010103010101010101010101010103010101010101010101010101010101010101090101010101010101010601010f020b010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101011002020b010101010101010101010101010101010101010101010101010101010101010101010101010101090101010101100202080b0101010101010101010101010101010101010101010101060101100a010101010101010101010101010101011002020202020a010701010110110a0105010101010101011011110a010101100202111111110a0101010101010101010110020802020202021111111111020802111111111111111111020202021111110202020202020202111111111111111111110202020202`, img`
        .................................................2
        .................................................2
        .................................................2
        .................................................2
        .................................................2
        ..22........2222................................2.
        .22222222222....2222222.....2222................2.
        2......................22222....22..............2.
        ..................................22............2.
        ....................................2...........2.
        .....................................2..........2.
        ......................................2.........2.
        ...................2222222222........2.........2..
        .............222222..........2222...2...........2.
        ..........222....................2.2............2.
        ....222222........................2.............2.
        ...2............................................2.
        ..2.............................................2.
        .2..............................................2.
        2...............................................22
        2................................................2
        2................................................2
        2................................................2
        2............2...................................2
        2...........2.222..............22....22.......2222
        2..........2.....22222......2222222222222222222222
        2........22...........222222......................
        2........222222222222.............................
        2..........2....22...2222222..222.................
        2.......................22..22...22....2222.......
        2...........................22.....2.22....2......
        2...................................2.......22....
        2.............................................222.
        2................................................2
        .2...............................................2
        .22..............................................2
        ..22222.........2.............2..................2
        .......2.....22222222........222.................2
        ........22222........22222..2..2................2.
        ........222222222.........222...222............22.
        ...22222.........222222..222222.222............22.
        ..2....................22......2................2.
        .2.....................22........................2
        .2...............................................2
        .2...............................................2
        .2...............................................2
        .2..............................................2.
        .2..........................22.................2..
        .2.......2...........22.....222222............2...
        ..2222222.222222222222222222......2222222222222...
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen))
    scene.setBackgroundColor(9)
    Init_Ship()
    rowBoat()
    Flag()
    SunkenTreasure()
    Dock2()
    CannonTower2()
    Caraval2()
}
function Ironside () {
    for (let value of tiles.getTilesByType(myTiles.tile22)) {
        IronSides = sprites.create(img`
            .....bb.......f8..................
            .....bb.......f1..................
            ..cccbbcccccccf8cccccccc..........
            .ccffbbffffffff1ffffffccc.........
            .cfaffffabbbbbf8bbbbbbfccc..bb....
            .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
            .cfbbbbbbbbbbbf8bbaababffbbbb.....
            .cfbbbbbbbbbbbf1bbabaabaffbbc.....
            .cfbbbbbbbbbbbf8bbbaabbbfffbcc....
            .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
            .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
            .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
            .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
            .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
            .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
            .cfbbbbbbbbbbbf8bbbbbbbbfffbcc....
            .cfbbbbbbbbbbbf1bbbbbbbaffbbc.....
            .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
            .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
            .cfaffffabbbbbf8bbbbbbfccc..bb....
            .ccffbbffffffff1ffffffccc.........
            ..cccbbcccccccf8cccccccc..........
            .....bb.......f1..................
            .....bb.......f8..................
            `, SpriteKind.IronSides)
        tiles.placeOnTile(IronSides, value)
        IronSides.z = 6
        sprites.setDataNumber(IronSides, "Life", 5)
        tiles.setTileAt(value, myTiles.transparency16)
        EnemyCount += 1
    }
}
function HUDsprites () {
    Integrity_HUD = sprites.create(img`
        55555555555555555555555555555
        54..........................5
        54......ec..................5
        54.fff1fff1fffc.............5
        54.ffff111ffffc.............5
        54.ffff111ffffc.............5
        54.ffff111ffffc.............5
        54.fff1f1f1fffc.............5
        54..fffffffffc..............5
        54...fffefffc...............5
        54......ec..................5
        54..........................5
        55555555555555555555555555555
        `, SpriteKind.HUD)
    Integrity_HUD.setFlag(SpriteFlag.Ghost, true)
    Integrity_HUD.setFlag(SpriteFlag.RelativeToCamera, true)
    Integrity_HUD.setPosition(scene.screenWidth() - 145, scene.screenHeight() - 8)
    Integrity_HUD.z = 50
    Doubloon_HUD = sprites.create(img`
        5555555555555555555555555555555554
        4...............................54
        4....5554.......................54
        4...555554......................54
        4..55444554.....................54
        4.5545454554....................54
        4.5544444554....................54
        4.5545454554....................54
        4..55444554.....................54
        4...555554......................54
        4....5554.......................54
        4...............................54
        5555555555555555555555555555555554
        `, SpriteKind.HUD)
    Doubloon_HUD.setFlag(SpriteFlag.Ghost, true)
    Doubloon_HUD.setFlag(SpriteFlag.RelativeToCamera, true)
    Doubloon_HUD.setPosition(scene.screenWidth() - 114, scene.screenHeight() - 8)
    Doubloon_HUD.z = 51
}
function Gulls () {
    Gull = sprites.create(img`
        . . . . . 
        1 . . . 1 
        . 1 . 1 . 
        . . 1 . . 
        . . . . . 
        `, SpriteKind.HUD)
    animation.runImageAnimation(
    Gull,
    [img`
        1 . . . 1 
        . 1 . 1 . 
        . . 1 . . 
        . . . . . 
        . . . . . 
        `,img`
        . . . . . 
        1 1 . 1 1 
        . . 1 . . 
        . . . . . 
        . . . . . 
        `,img`
        . . . . . 
        . . . . . 
        . . 1 . . 
        1 1 . 1 1 
        . . . . . 
        `,img`
        . . . . . 
        . . . . . 
        . . 1 . . 
        . 1 . 1 . 
        1 . . . 1 
        `,img`
        . . . . . 
        1 1 . 1 1 
        . . 1 . . 
        . . . . . 
        . . . . . 
        `],
    150,
    true
    )
    Gull.z = 40
    Gull.setFlag(SpriteFlag.Ghost, true)
    Gull.setFlag(SpriteFlag.AutoDestroy, true)
    if (Math.percentChance(50)) {
        Rand_x = Ship.x - 80
        Rand_y = Ship.y - randint(5, 115)
        Gull.setPosition(Rand_x, Rand_y)
        Gull.vx = randint(25, 45)
        if (Math.percentChance(50)) {
            Gull.vy = randint(10, 25)
        } else {
            Gull.vy = randint(-10, -25)
        }
    } else {
        Rand_y = Ship.y + 60
        Rand_x = Ship.x + randint(-60, 60)
        Gull.setPosition(Rand_x, Rand_y)
        Gull.vy = randint(-25, -45)
        if (Math.percentChance(50)) {
            Gull.vx = randint(10, 25)
        } else {
            Gull.vx = randint(-10, -25)
        }
    }
}
function Gusts () {
    Gust = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `, SpriteKind.Wind)
    animation.runImageAnimation(
    Gust,
    [img`
        ....................................
        .............11...11................
        ........11111bb111bb1...............
        ......11bb11bbbbbbbb11111111........
        ...111bbbbbb111b1111b1bb1bb1........
        ..11b1111111bb1bbbb11b1bbbb1.111....
        ..1bb1bbbbb1bbbcbbbbbbbcbb1b11bb1...
        .cbbbbbbbbbbbbcbbbbbbbcbbb11bbbbbc..
        ..cbbbcbbccbbbcccbccbcbbbbb11bbbc...
        ..ccbbccccbbbbbbcbbbccbcccbbbbccc...
        ...ccccbbcccbbbcbbbbbccccccbcc......
        ......cbcccccbccbccccc.cccccc.......
        ......ccc....cc.ccccc....cc.........
        ......1......1b...111.11............
        ........................1.1.........
        ........1.................1b........
        ........1.1.........................
        ...........1b..............1........
        .............11.1..........1........
        ..................1..1..11b.........
        ...........1.......1..1.............
        ...............1b.......1...........
        .........11...............1.........
        ............1.............1.........
        .............1.1....................
        ...............1..1.11.11...........
        .......1........11..1.11b...........
        .......................1............
        .........1....1..........1..........
        ...........1.........1...1.1b.......
        ...........1.1......................
        .............1.11.......11..........
        .........1b......1.1.11.1...........
        ...........1.1.....1b...............
        .............1.11.1.........1.......
        ....................................
        `,img`
        .............11...11................
        ........11111bb111bb1...............
        ......11bb11bbbbbbbb11111111........
        ...111bbbbbb111b1111b1bbbbb1........
        ..11bbb11111bb1bbbb11b1b11b1.111....
        ..1bb111bbbbbbbcbbbb1bbcb11b11bb1...
        .cbbbbbbbbbbbbcbbbbbbbcbbb1bbb11bc..
        ..cbbbbccbcccbcccbcbbcbbcbbbbbbbc...
        ..ccbbbbccbbbbbccbccbcbbcccbbcccc...
        ...ccccbbcccbbbcbbbbbccccbbbcc......
        ......cbcccccbccbccccc.cccccc.......
        ......ccc....cc.ccccc11..cc.........
        ....................................
        ..........1.1........b.1.1..........
        .........................1..........
        ................11...1....1.........
        .......1b.................1.........
        ...............1.........1..........
        ................1.1.1...11b.........
        ............1.11.1.b.1..............
        ...........1.b..........1...........
        .........................1..........
        ........................1...........
        ....................................
        ...........1.11..1b1.1.11...........
        ............1...1....1.....1........
        .......1..1............1............
        ........................1b..........
        ....................................
        ...............1....................
        .......1b...1.1.b.......1...........
        .................1..1..1............
        ..................1.................
        ........1.....11.1........1.........
        ....................................
        ....................................
        `,img`
        .............11...11................
        .........11111bb11bb1...............
        .......11bb11bbbbbbb1111111.........
        ....111bbbbbb111b11bb1bbbb1.........
        ...11bbbbb11bbb1bb11bb1bbb1.111.....
        ...1bb1111111bbbbbbbbbbcb1b11bb1....
        ..cbbb1bbbbbbbbcbbbbbbcbbbbb11bbc...
        ...cbbbbbbbbbbbccbbbbcbbbbbbbbbc....
        ...ccbbcccccbbbbcbcbccbbccbccccc....
        ....cbbbbbbcccbbcbcbbcbbbcccc.......
        ....ccccbbcccbbbbbbbbcccbbbcc.......
        .......cbcccccbcbccccc.ccccc........
        .......ccc.1b1ccccccc..1cc..........
        .........1...............1..........
        ..........1.........................
        ......1....1..............1.........
        ..........................1.........
        .......................1.1..........
        ...........1.1.1b.11.11.............
        .........1b1............1...........
        .........................1..........
        ..........1......1......1...........
        ....................................
        .......................11...........
        ...........11b1..1.1.1.....1........
        .......................1............
        .....1.....1............1...........
        ...........1.1......................
        ...................1b...1...........
        ............1..1.......1............
        ..........1b....1...................
        .......1...1......1.................
        .............1............1.........
        ....................................
        ....................................
        ....................................
        `,img`
        .............11...11................
        ........11111bb111bb1...............
        ......11bb11bbbbbbbb11111111........
        ...111bbbbbb111b111bb1bbbbb1........
        ..11bbbbb11bbb1bbb1bbb1b1bb1.111....
        ..1bbb1111b1bbbcbb11bbbcb11b11bb1...
        .cbbb11bbbbbbbcbbbbbbbcbbb11bbb1bc..
        ..cbbbbcbbbbbbcccbccccbbbbb1bbbbc...
        ..ccbbbccbbbcccccbbbccbcccbbbbccc...
        ...cbbbbbccccbbccbcbbcbbbccbbc......
        ...ccccbbcccbbbcbbbbbccccbbbcc......
        ......cbcccccbccbccccc.cccccc.......
        ......ccc....cc1ccccc....cc.........
        .........11.1..............1........
        .........................1..........
        .......b.11.........................
        ...........1b............1..........
        ............1.1.1b1..11.1...........
        ...................1................
        ............1.1.1...................
        ..........1.............1...........
        ......1b........1...................
        ..........11...........11...........
        .............1.11.1..1..............
        ..................1.1.....1.........
        ..........11.11b......1.............
        .......................1............
        ..........1............1............
        ............1.......1.1.............
        .............1.1.1.1.1..............
        ........1b............1.............
        ....................................
        .....................11.............
        ............1.11..11.......1........
        ....................................
        ....................................
        `,img`
        ....................................
        .............11...11................
        .........1111bb111bb1...............
        .......11bb1bbbbbbbb1111111.........
        ....111bbbbb111b111bb1bbbb1.........
        ...11bbbbb11bb1bbb111b1b1b1.111.....
        ..c1bbb111111bbcbbbb1bbcbbb11bb1....
        ..cbbb1bbbbbbbcbbbbbbbcb111bcbbbc...
        ...cbbbbbbcccbccbcbbbcbbbbccccbc....
        ....cbbbcccbbbbcbcccccbbbccbc.c.....
        ....ccccbbccbbbcbbbbbcccbbbcc.......
        .......cbccccbccbccccc1ccccc........
        .......ccc.11cc.ccccc...cc..........
        .........11b........................
        .......1....1......1................
        ............1.1.....................
        ........1b....1.11.11...............
        ..........................1.........
        ..............11.1b11.11............
        ...........1........................
        ........1...........................
        ............1b......................
        .........1....1.1.11..11............
        .....................1..............
        ............1.11.1.1b.11............
        ....................................
        .........1..1.......................
        ..............11......1..1..........
        ..................1.11..............
        .........1b.1.1.1...................
        ........................1.1.........
        ............1b........1.1...........
        ..............1.11.11.1.............
        ...........1........................
        ....................................
        ....................................
        `],
    120,
    true
    )
    Gust.z = 40
    Gust.setFlag(SpriteFlag.AutoDestroy, true)
    if (Boss_Stage == 3) {
        Gust.lifespan = 3000
    } else {
        Gust.setFlag(SpriteFlag.BounceOnWall, true)
    }
    if (Math.percentChance(50)) {
        Rand_x = Ship.x - 80
        Rand_y = Ship.y - randint(5, 115)
        Gust.setPosition(Rand_x, Rand_y)
        Gust.vx = randint(25, 45)
        if (Math.percentChance(50)) {
            Gust.vy = randint(10, 25)
        } else {
            Gust.vy = randint(-10, -25)
        }
    } else {
        Rand_y = Ship.y + 60
        Rand_x = Ship.x + randint(-60, 60)
        Gust.setPosition(Rand_x, Rand_y)
        Gust.vy = randint(-25, -45)
        if (Math.percentChance(50)) {
            Gust.vx = randint(10, 25)
        } else {
            Gust.vx = randint(-10, -25)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.East_Boss_Cannon, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    otherSprite,
    [img`
        ......................1..
        ................1....111.
        ............111.111111111
        .111111111111111111111111
        1555555555555555111111111
        1555554444444444111111111
        1544444444444444111......
        144444444444444411.......
        144444444444444411.......
        144444444222222211.......
        1444222222222222111......
        1422222222222222111111111
        1222222222222222111111111
        .111111111111111111111111
        ............111.111111111
        ................1....111.
        ......................1..
        `,img`
        ......................f..
        ................f....fff.
        ............fff.fffffffff
        .ffffffffffffffffffffffff
        fdddddddddddddddfffffffff
        fdddddbbbbbbbbbbfffffffff
        fdbbbbbbbbbbbbbbfff......
        fbbbbbbbbbbbbbbbff.......
        fbbbbbbbbbbbbbbbfc.......
        fbbbbbbbbcccccccff.......
        fbbbccccccccccccfff......
        fbccccccccccccccfffffffff
        fcccccccccccccccfffffffff
        .ffffffffffffffffffffffff
        ............fff.fffffffff
        ................f....fff.
        ......................f..
        `],
    100,
    false
    )
    sprites.changeDataNumberBy(otherSprite, "Life", -1)
    if (sprites.readDataNumber(otherSprite, "Life") == 0) {
        BossCannon_count += -1
        Boss_Cannon_Reload += -200
        otherSprite.destroy(effects.fire, 500)
        Boss_Rowboats()
    }
})
sprites.onOverlap(SpriteKind.Wind, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite.x > otherSprite.x) {
        otherSprite.vx += -50
    } else if (sprite.x < otherSprite.x) {
        otherSprite.vx += 50
    }
    if (sprite.y > otherSprite.y) {
        otherSprite.vy += -50
    } else if (sprite.y < otherSprite.y) {
        otherSprite.vy += 50
    }
    controller.moveSprite(Ship, -70, -70)
    pause(2000)
    controller.moveSprite(Ship, Ship_Speed, Ship_Speed)
})
function Shop () {
    Level_Reset()
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16], TileScale.Sixteen))
    scene.setBackgroundColor(15)
    scene.centerCameraAt(0, 0)
    Ship_Damage = Ship_Max_Integrity - Ship_Integrity
    Ship = sprites.create(img`
        ...........ee...........
        ..........eeee..........
        .........ee44ee.........
        ........eee44eee........
        .......eee4ee4eee.......
        ......eee4eeee4eee......
        .....eee4e4ee4e4eee.....
        ....eee4eeeeeeee4eee....
        ...eee4eeeeeeeeee4eee...
        ..eee4e4eeeeeeee4e4eee..
        ..ee4eeeeeeeeeeeeee4ee..
        ..e4ee44eeeeeeeeeeee4e..
        ..e4e4e44eeeee44444e4e..
        ..e4e44e4eeeeee444d44e..
        ..e4ee44eeeeeeee4ddd4e..
        ..e4eeeeeeeeeeee4ded4e..
        ..e4eeeeeeffffee4edede..
        ffff1ff111feef111fff1fff
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        ..e4eeeeeeeeeee44ede4d..
        ..e4eeeeeeeeeeee4dedde..
        ..e4eeeeeeeeeeeeedde4e..
        ..e4e4eeeeeeeeeeee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4e4eee4eeee4eee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        ..ee4444444444444444ee..
        ...eeeeeeeeeeeeeeeeee...
        ........................
        ........................
        `, SpriteKind.Player)
    animation.runImageAnimation(
    Ship,
    [img`
        ...........11...........
        ...........ee...........
        ..........eeee..........
        ........1ee44ee1........
        ........eee44eee........
        .......eee4ee4eee.......
        .....1eee4eeee4eee1.....
        .....eee4e4ee4e4eee.....
        ....eee4eeeeeeee4eee....
        ..1eee4eeeeeeeeee4eee1..
        ..eee4e4eeeeeeee4e4eee..
        ..ee4eeeeeeeeeeeeee4ee..
        .1e4ee44eeeeeeeeeeee4e1.
        ..e4e4e44eeeee44444e4e..
        ..e4e44e4eeeeee444d44e..
        .1e4ee44eeeeeeee4ddd4e1.
        ..e4eeeeeeeeeeee4ded4e..
        ..e4eeeeeeffffee4edede..
        ffff1ff111feef111fff1fff
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        .1e4eeeeeeeeeee44ede4d1.
        ..e4eeeeeeeeeeee4dedde..
        ..e4eeeeeeeeeeeeedde4e..
        .1e4e4eeeeeeeeeeee4e4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4e4eee4eeee4eee4e4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..ee4444444444444444ee..
        ...eeeeeeeeeeeeeeeeee...
        .1....................1.
        `,img`
        ........................
        ..........1ee1..........
        ..........eeee..........
        .........ee44ee.........
        .......1eee44eee1.......
        .......eee4ee4eee.......
        ......eee4eeee4eee......
        ....1eee4e4ee4e4eee1....
        ....eee4eeeeeeee4eee....
        ...eee4eeeeeeeeee4eee...
        .1eee4e4eeeeeeee4e4eee1.
        ..ee4eeeeeeeeeeeeee4ee..
        ..e4ee44eeeeeeeeeeee4e..
        .1e4e4e44eeeee44444e4e1.
        ..e4e44e4eeeeee444d44e..
        ..e4ee44eeeeeeee4ddd4e..
        .1e4eeeeeeeeeeee4ded4e1.
        ..e4eeeeeeffffee4edede..
        ffff1ff111feef111fff1fff
        fffffffffffeefffffffffff
        ..e4eeeeeeffffee4ded4d..
        ..e4eeeeeeeeeee44ede4d..
        .1e4eeeeeeeeeeee4dedde1.
        ..e4eeeeeeeeeeeeedde4e..
        ..e4e4eeeeeeeeeeee4e4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4e4eee4eeee4eee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1ee4444444444444444ee1.
        ...eeeeeeeeeeeeeeeeee...
        ........................
        `,img`
        ........................
        ...........ee...........
        .........1eeee1.........
        .........ee44ee.........
        ........eee44eee........
        ......1eee4ee4eee1......
        ......eee4eeee4eee......
        .....eee4e4ee4e4eee.....
        ...1eee4eeeeeeee4eee1...
        ...eee4eeeeeeeeee4eee...
        ..eee4e4eeeeeeee4e4eee..
        .1ee4eeeeeeeeeeeeee4ee1.
        ..e4ee44eeeeeeeeeeee4e..
        ..e4e4e44eeeee44444e4e..
        .1e4e44e4eeeeee444d44e1.
        ..e4ee44eeeeeeee4ddd4e..
        ..e4eeeeeeeeeeee4ded4e..
        .1e4eeeeeeffffee4edede1.
        ffff1ff111feef111fff1fff
        fffffffffffeefffffffffff
        .1e4eeeeeeffffee4ded4d1.
        ..e4eeeeeeeeeee44ede4d..
        ..e4eeeeeeeeeeee4dedde..
        .1e4eeeeeeeeeeeeedde4e1.
        ..e4e4eeeeeeeeeeee4e4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4eeeeeeeeeeeeeeee4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..e4eeeeeeeeeeeeeeee4e..
        .1e4e4eee4eeee4eee4e4e1.
        ..e4eeeeeeeeeeeeeeee4e..
        ..ee4444444444444444ee..
        .1.eeeeeeeeeeeeeeeeee.1.
        ........................
        `],
    200,
    true
    )
    ShipDirection = North
    Ship.setPosition(80, 90)
    HUDsprites()
    HUDdigits()
    Set_Cannons()
    Orient_Cannons()
    blockMenu.setControlsEnabled(true)
    blockMenu.setColors(4, 15)
    if (Level == 0) {
        Shop_1 = ["Landlubber", "Scurvy Dog (Survival)"]
    }
    if (Level > 3 && !(Update_Shop_3)) {
        Update_Shop_3 = true
        Shop_1.shift()
        Shop_1.unshift("+ Ship Speed 30¤ ")
        Shop_1.unshift("Repair Ship " + Ship_Damage + "¤")
    }
    if (Level > 2 && !(Update_Shop_2)) {
        Update_Shop_2 = true
        Shop_1.shift()
        Shop_1.unshift("+ Cannon Damage 25¤")
        Shop_1.unshift("+ Cannon Reload 25¤ ")
        Shop_1.unshift("Repair Ship " + Ship_Damage + "¤")
    }
    if (Level > 1 && !(Update_Shop_1)) {
        Update_Shop_1 = true
        Shop_1.shift()
        Shop_1.unshift("+ Ship Armor " + (Ship_Max_Integrity + 4) + "¤")
        Shop_1.unshift("Repair Ship " + Ship_Damage + "¤")
    } else if (Level > 0) {
        Shop_1[0] = "Repair Ship " + Ship_Damage + "¤"
    }
    blockMenu.showMenu(Shop_1, MenuStyle.List, MenuLocation.TopHalf)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        ShipDirection = East
        OrientShip()
        Set_Cannons()
    }
})
sprites.onOverlap(SpriteKind.CannonTower, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "Life") == 1) {
        sprite.destroy(effects.ashes, 500)
    } else {
        sprite.startEffect(effects.fire)
        sprites.changeDataNumberBy(sprite, "Life", -1)
    }
    otherSprite.destroy()
})
function Caraval2 () {
    for (let value of tiles.getTilesByType(myTiles.tile17)) {
        CaravalShip = sprites.create(img`
            ..............f8..............
            ........bb....f1..bb..........
            ..eeeeeebbeeeef8eebbeee.......
            .ee44444bb4444f144bb44ee......
            .e4eeee4ff4eeef8e4ff4e4ee.....
            .e4eeeeffffeeef1effff4e4ee....
            .e4eeeeeeeeeeef8eeeee44e4ee...
            .e4eeeeeeeeeeef1eeeee4e4e4ee..
            .e4e4e4eeeeeeffffeeee44e4e4ee.
            .e4ee4eeeeeeefeefeeee4e4e4e4e.
            .e4e4e4eeeeeeffffeeee44e4e4ee.
            .e4eeeeeeeeeeef1eeeee4e4e4ee..
            .e4eeeeeeeeeeef8eeeee44e4ee...
            .e4eeeeffffeeef1effff4e4ee....
            .e4eeee4ff4eeef8e4ff4e4ee.....
            .ee44444bb4444f144bb44ee......
            ..eeeeeebbeeeef8eebbeee.......
            ........bb....f1..bb..........
            ..............f8..............
            `, SpriteKind.Caraval)
        tiles.placeOnTile(CaravalShip, value)
        CaravalShip.z = 6
        sprites.setDataNumber(CaravalShip, "Life", 3)
        tiles.setTileAt(value, myTiles.transparency16)
        EnemyCount += 1
    }
}
function Orient_Cannons () {
    if (Owns_Port_Cannon == true) {
        if (ShipDirection == North) {
            Port_Cannon.setPosition(Ship.x + -9, Ship.y + 10)
        } else if (ShipDirection == East) {
            Port_Cannon.setPosition(Ship.x + -10, Ship.y + -9)
        } else if (ShipDirection == South) {
            Port_Cannon.setPosition(Ship.x + 9, Ship.y + -10)
        } else if (ShipDirection == West) {
            Port_Cannon.setPosition(Ship.x + 10, Ship.y + 9)
        }
    }
    if (Owns_Starboard_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Cannon.setPosition(Ship.x + 9, Ship.y + 10)
        } else if (ShipDirection == East) {
            Starboard_Cannon.setPosition(Ship.x + -10, Ship.y + 9)
        } else if (ShipDirection == South) {
            Starboard_Cannon.setPosition(Ship.x + -9, Ship.y + -10)
        } else if (ShipDirection == West) {
            Starboard_Cannon.setPosition(Ship.x + 10, Ship.y + -9)
        }
    }
    if (Owns_Port_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Port_Bow_Cannon.setPosition(Ship.x + -5, Ship.y + -10)
        } else if (ShipDirection == East) {
            Port_Bow_Cannon.setPosition(Ship.x + 10, Ship.y + -5)
        } else if (ShipDirection == South) {
            Port_Bow_Cannon.setPosition(Ship.x + 5, Ship.y + 10)
        } else if (ShipDirection == West) {
            Port_Bow_Cannon.setPosition(Ship.x + -10, Ship.y + 5)
        }
    }
    if (Owns_Starboard_Bow_Cannon == true) {
        if (ShipDirection == North) {
            Starboard_Bow_Cannon.setPosition(Ship.x + 5, Ship.y + -10)
        } else if (ShipDirection == East) {
            Starboard_Bow_Cannon.setPosition(Ship.x + 10, Ship.y + 5)
        } else if (ShipDirection == South) {
            Starboard_Bow_Cannon.setPosition(Ship.x + -5, Ship.y + 10)
        } else if (ShipDirection == West) {
            Starboard_Bow_Cannon.setPosition(Ship.x + -10, Ship.y + -5)
        }
    }
    if (Owns_Stern_Cannon == true) {
        if (ShipDirection == North) {
            Stern_Cannon.setPosition(Ship.x + 0, Ship.y + 15)
        } else if (ShipDirection == East) {
            Stern_Cannon.setPosition(Ship.x + -15, Ship.y + 0)
        } else if (ShipDirection == South) {
            Stern_Cannon.setPosition(Ship.x + 0, Ship.y + -15)
        } else if (ShipDirection == West) {
            Stern_Cannon.setPosition(Ship.x + 15, Ship.y + 0)
        }
    }
}
sprites.onDestroyed(SpriteKind.IronSides, function (sprite) {
    TreasureCaraval = sprites.create(img`
        ..................................
        ..................................
        .......66.....66..................
        .......66.....66..................
        ....666666666666666666............
        ...66666666666666666666...........
        ...666666666666666666666..66......
        ...6666666666666666666666666......
        ...666666666666666666666666.......
        ...666666666666666666666666.......
        ...6666666666666666666666666......
        ...66666666666666666666666666.....
        ...666666666666666666666666666....
        ...66666666666666666666666666.....
        ...6666666666666666666666666......
        ...666666666666666666666666.......
        ...666666666666666666666666.......
        ...6666666666666666666666666......
        ...666666666666666666666..66......
        ...66666666666666666666...........
        ....666666666666666666............
        .......66.....66..................
        .......66.....66..................
        ..................................
        `, SpriteKind.Treasure)
    TreasureCaraval.setPosition(sprite.x, sprite.y)
    TreasureCaraval.z = 0
    EnemyCount += -1
    if (EnemyCount == 0) {
        ReFlag()
    }
})
function Player_Death () {
    if (Adventure == true) {
        Ship.destroy(effects.ashes, 500)
        Ships_Destroyed += 1
        if (Level == 5) {
            Ship_Integrity = Ship_Max_Integrity
        } else {
            Ship_Integrity = Ship_Max_Integrity / 2
        }
        Shop()
    } else if (Survival == true) {
        game.over(false)
    }
}
function IntegrityCheck () {
    if (Ship_Integrity < Ship_Max_Integrity) {
        Ship_Integrity += 1
    }
}
sprites.onOverlap(SpriteKind.Net, SpriteKind.Treasure, function (sprite, otherSprite) {
    otherSprite.destroy()
    Chest = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 4 . . . 
        . . . 5 e e e e e e e e 5 4 . . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e 5 5 e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.TreasureHUD)
    Chest.setPosition(otherSprite.x, otherSprite.y)
    Chest.z = 10
    animation.runImageAnimation(
    Chest,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 4 . . . 
        . . . 5 e e e e e e e e 5 4 . . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e 5 5 e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 4 . . . 
        . . . 5 e e e e e e e e 5 4 . . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e 5 5 e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . f f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 4 . . . 
        . . . 5 5 e e e e e e e 5 4 . . 
        . . . 5 e e e 5 5 e e e e 5 4 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 e e 5 5 e e e 5 5 4 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 e e 5 5 e e e 5 5 4 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 e e e e e e e e e e 5 4 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    if (Math.percentChance(50)) {
        Coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.TreasureHUD)
        animation.runImageAnimation(
        Coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . 5 5 4 4 4 4 4 5 5 4 . . . 
            . . . 5 5 4 5 4 5 4 5 5 4 . . . 
            . . . . 5 5 4 4 4 5 5 4 . . . . 
            . . . . . 5 5 5 5 5 4 . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        Coin.setPosition(Chest.x, Chest.y + -5)
        Coin.z = 11
        Doubloons += 1
    } else if (Math.percentChance(30)) {
        Sail = sprites.create(img`
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            . . . . . e c . . . . . 
            `, SpriteKind.TreasureHUD)
        Sail.setPosition(Chest.x, Chest.y + -10)
        Sail.z = 11
        animation.runImageAnimation(
        Sail,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            . . . . . e c . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            . . . . . e c . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            . . . . . e c . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            . . . . . e c . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . e c . . . . . 
            f f f 1 f f f 1 f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f f 1 1 1 f f f f c 
            f f f 1 f 1 f 1 f f f c 
            . f f f f f f f f f c . 
            . . f f f e f f f c . . 
            . . . . . e c . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `],
        150,
        false
        )
        IntegrityCheck()
    } else {
        Coins = sprites.create(img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            `, SpriteKind.TreasureHUD)
        animation.runImageAnimation(
        Coins,
        [img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            ...................
            ...................
            `,img`
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ..1..1........1....
            ...5554554554554.1.
            1.555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            1.555554554554554.1
            ...5554554554554...
            ..1.............1..
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ...................
            ...5554554554554...
            ..555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            ..555554554554554..
            ...5554554554554...
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ..1..1........1....
            ...5554554554554.1.
            1.555554554554554..
            .55444554554554554.
            5545454554554554554
            5544444554554554554
            5545454554554554554
            .55444554554554554.
            1.555554554554554.1
            ...5554554554554...
            ..1.............1..
            ...................
            ...................
            ...................
            ...................
            ...................
            `,img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `],
        200,
        false
        )
        Coins.setPosition(Chest.x, Chest.y + -5)
        Coins.z = 11
        Doubloons += 5
    }
    HUDdigits()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(blockMenu.isMenuOpen()) && Pause == false) {
        ShipDirection = South
        OrientShip()
        Set_Cannons()
    }
})
sprites.onOverlap(SpriteKind.IronSides, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "Life") == 1) {
        sprite.destroy(effects.ashes, 500)
    } else {
        sprite.startEffect(effects.fire)
        sprites.changeDataNumberBy(sprite, "Life", -1)
    }
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Caraval, function (sprite, otherSprite) {
    if (sprites.readDataNumber(otherSprite, "Life") == 1) {
        otherSprite.destroy(effects.ashes, 500)
    } else {
        otherSprite.startEffect(effects.fire)
        sprites.changeDataNumberBy(otherSprite, "Life", -1)
    }
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Player_Death()
    }
    Damaged_Sound()
    HUDdigits()
})
function CannonTower2 () {
    for (let value7 of tiles.getTilesByType(myTiles.tile13)) {
        let Tower_ID = 0
        TowerHealth = 2
        Cannon_Tower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . 6 6 6 b b 6 6 6 . . . . 
            . . . 6 c f c c c c f c 6 . . . 
            . . 6 c f b f f f f b f c 6 . . 
            . . 6 f b f b b b b f b f 6 . . 
            . . 6 c f b f c c f b f c 6 . . 
            . b b c f b c b b c b f c b b . 
            . b b c f b c c b c b f c b b . 
            . . 6 c f b f c c f b f c 6 . . 
            . . 6 f b f b b b b f b f 6 . . 
            . . 6 c f b f f f f b f c 6 . . 
            . . . 6 c f c c c c f c 6 . . . 
            . . . . 6 6 6 b b 6 6 6 . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.CannonTower)
        tiles.placeOnTile(Cannon_Tower, value7)
        sprites.setDataNumber(Cannon_Tower, "ID", Tower_ID)
        sprites.setDataNumber(Cannon_Tower, "Life", TowerHealth)
        tiles.setTileAt(value7, myTiles.transparency16)
        EnemyCount += 1
    }
}
function rowBoat () {
    for (let value8 of tiles.getTilesByType(myTiles.tile3)) {
        RowBoat = sprites.create(img`
            . . . . . . b b . . . . . . 
            . . . . . . b b . . . . . . 
            . . . . . f b b f . . . . . 
            . . . . . f f f f . . . . . 
            . . . . . e f f e . . . . . 
            . . . . e e d d e e . . . . 
            . . . . e d e e d e . . . . 
            . . . . f d d d d f . . . . 
            e e e e e e e e e e e e e e 
            . . . . f d d d d f . . . . 
            . . . . e d e e d e . . . . 
            . . . . e d d d d e . . . . 
            . . . . e e d d e e . . . . 
            . . . . . e f f e . . . . . 
            . . . . . . e e . . . . . . 
            `, SpriteKind.Rowboat)
        tiles.placeOnTile(RowBoat, value8)
        RowBoat.z = 6
        tiles.setTileAt(value8, myTiles.transparency16)
        EnemyCount += 1
    }
}
function Boss_Script2 () {
    if (EnemyCount == 0 && Boss_Stage == -1) {
        TIMER = game.runtime()
        Boss_Stage = 0
    } else if (game.runtime() > TIMER + 5000 && (EnemyCount == 0 && Boss_Stage == 0)) {
        Boss_Rowboats()
        Boss_Stage = 1
    }
    if (EnemyCount == 0 && Boss_Stage == 1) {
        Dreadship_East = sprites.create(img`
            ....................facfbbbbbbbb
            ...................faccfbbbbbbbb
            ...................facfbbbbbbbbc
            ..................faccfbbbbbbbbc
            ..................facfbbbbbbbbcd
            .................faccfbbbbbbbbcd
            .................facfbbbbbbbbcdc
            ................faccfbbbbbbbbcdc
            ................facfbbbbbbbbcdcb
            ................facfbbbbbbbbcdcb
            ...............faccfbbbbbbbbcdcb
            ...............faccfbbbbbbbbcdcb
            ..............faccfbbbbbbbbcdcbb
            ..............faccfbbbbbbbbcdcbb
            ..............faccfbbbbbbbbcdcbb
            .............facccfbbbbbbbbcdcbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbbbbbbb
            .............faccfbbbbbbbbcccccc
            .............faccfbbbbbbbbcddddd
            .............faccfbbbbbbbbcdcccc
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            .............faccfbbbbbbbbcdcbbb
            `, SpriteKind.Boss)
        Dreadship_East.setPosition(244, 88)
        animation.runMovementAnimation(
        Dreadship_East,
        animation.animationPresets(animation.easeLeft),
        4000,
        false
        )
        Dreadship_East.z = 10
        Boss_Cannon_East1 = sprites.create(img`
            ......................f..
            ................f....fff.
            ............fff.fffffffff
            .ffffffffffffffffffffffff
            fdddddddddddddddfffffffff
            fdddddbbbbbbbbbbfffffffff
            fdbbbbbbbbbbbbbbfff......
            fbbbbbbbbbbbbbbbff.......
            fbbbbbbbbbbbbbbbfc.......
            fbbbbbbbbcccccccff.......
            fbbbccccccccccccfff......
            fbccccccccccccccfffffffff
            fcccccccccccccccfffffffff
            .ffffffffffffffffffffffff
            ............fff.fffffffff
            ................f....fff.
            ......................f..
            `, SpriteKind.East_Boss_Cannon)
        sprites.setDataNumber(Boss_Cannon_East1, "Life", 14)
        Boss_Cannon_East1.z = 11
        Boss_Cannon_East2 = sprites.create(img`
            ......................f..
            ................f....fff.
            ............fff.fffffffff
            .ffffffffffffffffffffffff
            fdddddddddddddddfffffffff
            fdddddbbbbbbbbbbfffffffff
            fdbbbbbbbbbbbbbbfff......
            fbbbbbbbbbbbbbbbff.......
            fbbbbbbbbbbbbbbbfc.......
            fbbbbbbbbcccccccff.......
            fbbbccccccccccccfff......
            fbccccccccccccccfffffffff
            fcccccccccccccccfffffffff
            .ffffffffffffffffffffffff
            ............fff.fffffffff
            ................f....fff.
            ......................f..
            `, SpriteKind.East_Boss_Cannon)
        sprites.setDataNumber(Boss_Cannon_East2, "Life", 14)
        Boss_Cannon_East2.z = 11
        Boss_Cannon_East3 = sprites.create(img`
            ......................f..
            ................f....fff.
            ............fff.fffffffff
            .ffffffffffffffffffffffff
            fdddddddddddddddfffffffff
            fdddddbbbbbbbbbbfffffffff
            fdbbbbbbbbbbbbbbfff......
            fbbbbbbbbbbbbbbbff.......
            fbbbbbbbbbbbbbbbfc.......
            fbbbbbbbbcccccccff.......
            fbbbccccccccccccfff......
            fbccccccccccccccfffffffff
            fcccccccccccccccfffffffff
            .ffffffffffffffffffffffff
            ............fff.fffffffff
            ................f....fff.
            ......................f..
            `, SpriteKind.East_Boss_Cannon)
        sprites.setDataNumber(Boss_Cannon_East3, "Life", 14)
        Boss_Cannon_East3.z = 11
        Boss_Cannon_East4 = sprites.create(img`
            ......................f..
            ................f....fff.
            ............fff.fffffffff
            .ffffffffffffffffffffffff
            fdddddddddddddddfffffffff
            fdddddbbbbbbbbbbfffffffff
            fdbbbbbbbbbbbbbbfff......
            fbbbbbbbbbbbbbbbff.......
            fbbbbbbbbbbbbbbbfc.......
            fbbbbbbbbcccccccff.......
            fbbbccccccccccccfff......
            fbccccccccccccccfffffffff
            fcccccccccccccccfffffffff
            .ffffffffffffffffffffffff
            ............fff.fffffffff
            ................f....fff.
            ......................f..
            `, SpriteKind.East_Boss_Cannon)
        sprites.setDataNumber(Boss_Cannon_East4, "Life", 14)
        Boss_Cannon_East4.z = 11
        Boss_Cannon_Reload = 1500
        Dreadship_Wake = sprites.create(img`
            ...............1..1.............
            ..............1...1.............
            ..............1..1..............
            .............1...1..............
            .............1..1...............
            ............1...1...............
            ............1..1................
            ...........1...1................
            ...........1..1.................
            ...........1..1.................
            ..........1...1.................
            ..........1...1.................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            ........1....1..................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            .........1...1..................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            .......1...1....................
            ........1...1...................
            ........1...1...................
            ........1...1...................
            `, SpriteKind.Boss_Wake)
        Dreadship_Wake.setPosition(Dreadship_East.x + -64, Dreadship_East.y)
        animation.runMovementAnimation(
        Dreadship_Wake,
        animation.animationPresets(animation.easeLeft),
        5000,
        false
        )
        TIMER = game.runtime()
        Boss_Stage = 2
    } else if (game.runtime() > TIMER + 5000 && (EnemyCount == 0 && Boss_Stage == 2)) {
        animation.runMovementAnimation(
        Dreadship_East,
        animation.animationPresets(animation.bobbing),
        4000,
        true
        )
        Dreadship_Wake.setPosition(Dreadship_East.x, Dreadship_East.y)
        animation.runMovementAnimation(
        Dreadship_Wake,
        animation.animationPresets(animation.waveLeft),
        4000,
        true
        )
        Boss_Stage = 3
        BossCannon_count = 4
    } else if (Boss_Stage == 3 && BossCannon_count == 0) {
        TIMER = game.runtime()
        Dreadship_Wake.destroy()
        Dreadship_Wake.setPosition(Dreadship_East.x, Dreadship_East.y)
        animation.runMovementAnimation(
        Dreadship_Wake,
        animation.animationPresets(animation.waveLeft),
        2000,
        false
        )
        Dreadship_East.destroy(effects.disintegrate, 2000)
        Boss_Stage = 4
    } else if (Boss_Stage == 4 && game.runtime() > TIMER + 2000) {
        Dreadship_Wake.destroy()
        Boss_Loot = sprites.create(img`
            ............5555555555555555555555............
            ...........55eeeeeeeeeeeeeeeeeeee55...........
            ..........55e44444444444444444444e55..........
            .........55e4555555555555555555554e55.........
            ........55e455555555555555555555554e55........
            .......55e45555555555555555555555554e55.......
            ......55e4555555555555555555555555554e55......
            .....55e455555555555555555555555555554e55.....
            ....55e45555555555555555555555555555554e55....
            ...55e4555555555555555555555555555555554e55...
            ..55e455555555555555555555555555555555554e55..
            .55e455554e5555555555555555555555554e55554e55.
            55e45555544e555555555555555555555544e555554e55
            5e455555444e5555555555555555555555444e555554e5
            5e455544444e555555555555555555555544444e5554e5
            5e4555544444e5555555555555555555544444e55554e5
            5e45555555444e555555555555555555444e55555554e5
            5e455555555444e55554444444e5555444e555555554e5
            5e4555555555444e55444444444e55444e5555555554e5
            5e4555555555544e544444444444e544e55555555554e5
            5e455555555555554445e4445e444e55555555555554e5
            5e4555555555555544555e4555e44e55555555555554e5
            5e4555555555555544555e4555e44e55555555555554e5
            5e455555555555554445e4445e444e55555555555554e5
            5e45555555555555444444e444444e55555555555554e5
            5e4555555555555554444e4e4444e555555555555554e5
            5e45555555555555544444444444e555555555555554e5
            5e45555555555555544444444444e555555555555554e5
            5e455555555555555554444444e55555555555555554e5
            5e455555555555555554e4e4e4e55555555555555554e5
            5e455555555555544e555555555544e5555555555554e5
            5e455555555554444e55555555554444e55555555554e5
            5e45555555555444e555555555555444e55555555554e5
            55e4555555555544e55555555555544e55555555554e55
            .55e45555555555555555555555555555555555554e55.
            ..55e455555555555555555555555555555555554e55..
            ...55e4555555555555555555555555555555554e55...
            ....55e45555555555555555555555555555554e55....
            .....55e455555555555555555555555555554e55.....
            ......55e4555555555555555555555555554e55......
            .......55e45555555555555555555555554e55.......
            ........55e455555555555555555555554e55........
            .........55e4555555555555555555554e55.........
            ..........55e44444444444444444444e55..........
            ...........55eeeeeeeeeeeeeeeeeeee55...........
            ............5555555555555555555555............
            `, SpriteKind.Boss_Loot)
        Boss_Loot.startEffect(effects.halo)
        Boss_Loot.setPosition(Ship.x, Ship.y + -100)
        scene.cameraFollowSprite(Boss_Loot)
        Boss_Loot.follow(Ship, 25)
        Ship.setPosition(80, 120)
        Boss_Stage = 5
    }
}
sprites.onOverlap(SpriteKind.Boss_Cannonball, SpriteKind.Player, function (sprite, otherSprite) {
    Ship_Integrity += -2
    HUDdigits()
    sprite.destroy(effects.fire, 200)
    scene.cameraShake(4, 200)
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    music.playTone(131, music.beat(BeatFraction.Eighth))
    music.playTone(131, music.beat(BeatFraction.Eighth))
    otherSprite.x += -10
    if (Ship_Integrity <= 0) {
        otherSprite.destroy()
        Player_Death()
    }
})
function StartGame () {
    HUDdigits()
    Pause = false
    if (Level == 1) {
        level1()
    } else if (Level == 2) {
        Level2()
    } else if (Level == 3) {
        level3()
    } else if (Level == 4) {
        level4()
    } else if (Level == 5) {
        level5()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rowboat, function (sprite, otherSprite) {
    otherSprite.destroy()
    Damaged_Sound()
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Player_Death()
    }
    HUDdigits()
})
function Damaged_Sound () {
    music.playTone(196, music.beat(BeatFraction.Sixteenth))
    music.playTone(196, music.beat(BeatFraction.Sixteenth))
    music.playTone(185, music.beat(BeatFraction.Sixteenth))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.IronSides, function (sprite, otherSprite) {
    if (sprites.readDataNumber(otherSprite, "Life") == 1) {
        otherSprite.destroy(effects.ashes, 500)
    } else {
        otherSprite.startEffect(effects.fire)
        sprites.changeDataNumberBy(otherSprite, "Life", -1)
    }
    if (Ship_Integrity > 1) {
        Ship_Integrity += -1
    } else {
        Player_Death()
    }
    Damaged_Sound()
    HUDdigits()
})
sprites.onDestroyed(SpriteKind.Caraval, function (sprite) {
    TreasureCaraval = sprites.create(img`
        ..............................
        ..............................
        .........66......66...........
        ...6666666666666666666........
        ..666666666666666666666.......
        ..6666666666666666666666......
        ..66666666666666666666666.....
        ..666666666666666666666666....
        ..6666666666666666666666666...
        ..66666666666666666666666666..
        ..6666666666666666666666666...
        ..666666666666666666666666....
        ..66666666666666666666666.....
        ..6666666666666666666666......
        ..666666666666666666666.......
        ...6666666666666666666........
        .........66......66...........
        ..............................
        ..............................
        `, SpriteKind.Treasure)
    TreasureCaraval.setPosition(sprite.x, sprite.y)
    TreasureCaraval.z = 0
    EnemyCount += -1
    if (EnemyCount == 0) {
        ReFlag()
    }
})
function Fire_Cannons () {
    if (Owns_Port_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, -100, 0)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, 0, -100)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, 100, 0)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Cannon, 0, 100)
        }
    }
    if (Owns_Starboard_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, 100, 0)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, 0, 100)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, -100, 0)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Cannon, 0, -100)
        }
    }
    if (Owns_Port_Bow_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, -75, -75)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, 75, -75)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, 75, 75)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Port_Bow_Cannon, -75, 75)
        }
    }
    if (Owns_Starboard_Bow_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, 75, -75)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, 75, 75)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, -75, 75)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Starboard_Bow_Cannon, -75, -75)
        }
    }
    if (Owns_Stern_Cannon == true) {
        if (ShipDirection == North) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, 0, 100)
        } else if (ShipDirection == East) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, -100, 0)
        } else if (ShipDirection == South) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, 0, -100)
        } else if (ShipDirection == West) {
            CannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, Stern_Cannon, 100, 0)
        }
    }
}
function Flag () {
    for (let value9 of tiles.getTilesByType(myTiles.tile16)) {
        FlagSprite2 = sprites.create(img`
            ee111eeeeeeee111ee
            ..11111111111111..
            ..88888888888888..
            ..88888888888888..
            ..11111111111111..
            ..11111111111111..
            ..88888888888888..
            ..88888888888888..
            ..11111111111111..
            ..11111111111111..
            ..88888888888888..
            ..88888888888888..
            ..11111111111111..
            ..111111c.111111..
            ..88888c...88888..
            ..8888c.....8888..
            ..111c.......111..
            ..11c.........11..
            ..8c...........8..
            ..................
            `, SpriteKind.FlagSprite)
        tiles.placeOnTile(FlagSprite2, value9)
        tiles.setTileAt(value9, myTiles.tile2)
    }
}
function HUDdigits () {
    for (let value10 of sprites.allOfKind(SpriteKind.Number)) {
        value10.destroy()
    }
    NumberFun()
    if (Ship_Integrity / 10 >= 1) {
        Integrity_First_Digit.setImage(Numbers_array[Math.trunc(Ship_Integrity / 10)])
        Integrity_Second_Digit.setImage(Numbers_array[Ship_Integrity % 10])
        Integrity_Second_Digit.setFlag(SpriteFlag.Ghost, true)
        Integrity_Second_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
        Integrity_Second_Digit.setPosition(scene.screenWidth() - 135, scene.screenHeight() - 8)
        Integrity_Second_Digit.z = 50
    } else {
        Integrity_First_Digit.setImage(Numbers_array[Ship_Integrity])
    }
    Integrity_First_Digit.setFlag(SpriteFlag.Ghost, true)
    Integrity_First_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
    Integrity_First_Digit.setPosition(scene.screenWidth() - 141, scene.screenHeight() - 8)
    Integrity_First_Digit.z = 50
    if (Doubloons / 10 >= 10) {
        Dubloon_First_Digit.setImage(Numbers_array[Math.trunc(Doubloons / 100)])
        Dubloon_Second_Digit.setImage(Numbers_array[Math.trunc(Doubloons / 10) % 10])
        Dubloon_Second_Digit.setPosition(scene.screenWidth() - 109, scene.screenHeight() - 8)
        Dubloon_Second_Digit.setFlag(SpriteFlag.Ghost, true)
        Dubloon_Second_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
        Dubloon_Second_Digit.z = 50
        Dubloon_Third_Digit.setImage(Numbers_array[Doubloons % 10])
        Dubloon_Third_Digit.setFlag(SpriteFlag.Ghost, true)
        Dubloon_Third_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
        Dubloon_Second_Digit.z = 50
        Dubloon_Third_Digit.setPosition(scene.screenWidth() - 103, scene.screenHeight() - 8)
    } else if (Doubloons / 10 >= 1) {
        Dubloon_First_Digit.setImage(Numbers_array[Math.trunc(Doubloons / 10)])
        Dubloon_Second_Digit.setImage(Numbers_array[Doubloons % 10])
        Dubloon_Second_Digit.setFlag(SpriteFlag.Ghost, true)
        Dubloon_Second_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
        Dubloon_Second_Digit.setPosition(scene.screenWidth() - 109, scene.screenHeight() - 8)
        Dubloon_Second_Digit.z = 50
    } else {
        Dubloon_First_Digit.setImage(Numbers_array[Doubloons])
    }
    Dubloon_First_Digit.setFlag(SpriteFlag.Ghost, true)
    Dubloon_First_Digit.setFlag(SpriteFlag.RelativeToCamera, true)
    Dubloon_First_Digit.setPosition(scene.screenWidth() - 115, scene.screenHeight() - 8)
    Dubloon_First_Digit.z = 50
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (blockMenu.selectedMenuOption() != "Set Sail") {
        if (blockMenu.selectedMenuOption() == "Port Cannon 10¤") {
            Owns_Port_Cannon = true
            Doubloons += -10
            Shop_1.removeAt(index)
        } else if (blockMenu.selectedMenuOption() == "Starboard Cannon 10¤" && Doubloons >= 10) {
            Owns_Starboard_Cannon = true
            Doubloons += -10
            Shop_1.removeAt(index)
        } else if (blockMenu.selectedMenuOption() == "Bow Port Cannon 10¤" && Doubloons >= 10) {
            Owns_Port_Bow_Cannon = true
            Doubloons += -10
            Shop_1.removeAt(index)
        } else if (blockMenu.selectedMenuOption() == "Bow Starboard Cannon 10¤" && Doubloons >= 10) {
            Owns_Starboard_Bow_Cannon = true
            Doubloons += -10
            Shop_1.removeAt(index)
        } else if (blockMenu.selectedMenuOption() == "Rear Cannon 10¤" && Doubloons >= 10) {
            Owns_Stern_Cannon = true
            Doubloons += -10
            Shop_1.removeAt(index)
        } else if (blockMenu.selectedMenuOption() == "Repair Ship " + Ship_Damage + "¤" && Doubloons >= 1) {
            while (Doubloons >= 1 && Ship_Damage > 0) {
                Doubloons += -1
                Ship_Integrity += 1
                Ship_Damage = Ship_Max_Integrity - Ship_Integrity
            }
            Shop_1[index] = "Repair Ship  " + Ship_Damage + "¤"
        } else if (blockMenu.selectedMenuOption() == "+ Ship Armor " + (Ship_Max_Integrity + 4) + "¤" && Doubloons >= Ship_Max_Integrity + 4) {
            Doubloons += 0 - (Ship_Max_Integrity + 4)
            Ship_Max_Integrity += 2
            Ship_Integrity = Ship_Max_Integrity
            Shop_1[index] = "+ Ship Armor " + (Ship_Max_Integrity + 4) + "¤"
            if (Ship_Max_Integrity >= 40) {
                Shop_1.removeAt(index)
            }
        } else if (blockMenu.selectedMenuOption() == "Landlubber") {
            Adventure = true
            Survival = false
            Level = 1
            Shop_1 = [
            "Repair Ship " + Ship_Damage + "¤",
            "Port Cannon 10¤",
            "Starboard Cannon 10¤",
            "Bow Port Cannon 10¤",
            "Bow Starboard Cannon 10¤",
            "Rear Cannon 10¤",
            "No Sea Shanties!",
            "Set Sail"
            ]
        } else if (blockMenu.selectedMenuOption() == "Scurvy Dog (Survival)") {
            Survival = true
            Adventure = false
            Level = 1
            Shop_1 = [
            "Repair Ship " + Ship_Damage + "¤",
            "Port Cannon 10¤",
            "Starboard Cannon 10¤",
            "Bow Port Cannon 10¤",
            "Bow Starboard Cannon 10¤",
            "Rear Cannon 10¤",
            "No Sea Shanties!",
            "Set Sail"
            ]
        } else if (blockMenu.selectedMenuOption() == "+ Cannon Damage 25¤" && Doubloons >= 25) {
            Cannon_Upgrade = true
            Doubloons += -25
            Shop_1.removeAt(index)
        } else if (blockMenu.selectedMenuOption() == "+ Cannon Reload 25¤ " && Doubloons >= 25) {
            Doubloons += -25
            Reload_Time += -200
            if (Reload_Time == 600) {
                Shop_1.removeAt(index)
            }
        } else if (blockMenu.selectedMenuOption() == "+ Ship Speed 30¤ " && Doubloons >= 30) {
            Doubloons += -30
            Ship_Speed += 7.5
            if (Ship_Speed >= 67.5) {
                Shop_1.removeAt(index)
            }
        } else if (blockMenu.selectedMenuOption() == "No Sea Shanties!") {
            if (Shanties == true) {
                game.showLongText("Captain, Your order for silence has been received, but nobody can make these salty sea dogs stop in the middle of a shanty...", DialogLayout.Full)
                Shanties = false
                Shop_1[index] = "More Sea Shanties!"
            }
        } else if (blockMenu.selectedMenuOption() == "More Sea Shanties!") {
            Shanties = true
            Shop_1[index] = "No Sea Shanties!"
        }
        Shop()
    } else if (blockMenu.selectedMenuOption() == "Set Sail") {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        StartGame()
    }
})
sprites.onOverlap(SpriteKind.Boss_Wake, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.x += -5
    otherSprite.setVelocity(-75, randint(-50, 50))
})
let Caraval_Projectile: Sprite = null
let Boss_CannonBall: Sprite = null
let EnemyCannonBall: Sprite = null
let FlagSprite2: Sprite = null
let CannonBall: Sprite = null
let Boss_Loot: Sprite = null
let Dreadship_Wake: Sprite = null
let Boss_Cannon_East4: Sprite = null
let Boss_Cannon_East3: Sprite = null
let Boss_Cannon_East2: Sprite = null
let Boss_Cannon_East1: Sprite = null
let Dreadship_East: Sprite = null
let TIMER = 0
let Cannon_Tower: Sprite = null
let TowerHealth = 0
let Coins: Sprite = null
let Sail: Sprite = null
let Coin: Sprite = null
let Chest: Sprite = null
let Survival = false
let Adventure = false
let TreasureCaraval: Sprite = null
let Update_Shop_1 = false
let Update_Shop_2 = false
let Update_Shop_3 = false
let Shop_1: string[] = []
let Ship_Damage = 0
let Boss_Cannon_Reload = 0
let Gust: Sprite = null
let Rand_y = 0
let Rand_x = 0
let Gull: Sprite = null
let Doubloon_HUD: Sprite = null
let Integrity_HUD: Sprite = null
let Ship_Dock: Sprite = null
let Dubloon_Third_Digit: Sprite = null
let Dubloon_Second_Digit: Sprite = null
let Dubloon_First_Digit: Sprite = null
let Integrity_Second_Digit: Sprite = null
let Integrity_First_Digit: Sprite = null
let Numbers_array: Image[] = []
let IronSides: Sprite = null
let CaravalShip: Sprite = null
let RowBoat: Sprite = null
let BossCannon_count = 0
let Boss_Stage = 0
let reflag: Sprite = null
let ReloadCannon = 0
let Tower_Treasure: Sprite = null
let Treasure_Rowboat: Sprite = null
let Level_Bonus = 0
let DockingTimer = 0
let Net2: Sprite = null
let NetReload = 0
let EnemyCount = 0
let Sunken_Treasure: Sprite = null
let Ranking = ""
let Names: string[] = []
let Ship: Sprite = null
let Stern_Cannon: Sprite = null
let Starboard_Bow_Cannon: Sprite = null
let Port_Bow_Cannon: Sprite = null
let Starboard_Cannon: Sprite = null
let Port_Cannon: Sprite = null
let ShipDirection = 0
let Owns_Stern_Cannon = false
let Owns_Starboard_Bow_Cannon = false
let Owns_Port_Bow_Cannon = false
let Owns_Starboard_Cannon = false
let Owns_Port_Cannon = false
let Cannon_Upgrade = false
let Shanties = false
let Doubloons = 0
let Ship_Integrity = 0
let Ship_Max_Integrity = 0
let West = 0
let South = 0
let East = 0
let North = 0
let Level = 0
let Ship_Speed = 0
let Reload_Time = 0
let Ships_Destroyed = 0
let Intro: Sprite = null
let Pause = false
Pause = true
Intro = sprites.create(img`
    999999999999999999999999999999999999999999999999999999999999999999999cbbbbddddddddddddddddddddcbddddddddddddddddddddddddddddddddddddddddddccbdddddddddddddbddddd
    99999999999999999999999999999999999999999999999999999999999999999999cbbbbdddddddddddddddddddddcbdddddddddddddddddddddddddddddddddddddddddcbbdddddddddddddddddddd
    99999999999999999999999999999999999999999999999999999999999999999999cbbbddddddddddddddddddddddcbdddddddddddddddddddddddddddddddddddddddddcbddddddddddddddddddddd
    99999999955554999999999999999999999999999999999999999999999999999999cbbbbddddddddddddddddddddcbddddddddddddddddddddddddddddddddddddddddddcbddddddddddddddddddddd
    9999999955554549999999999999999999999999999999999999999999999999999cbbbbdddddddddddddddddddddcbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999995554554999999999999fffff99999999999999999999999999999999999cbbbddddddddddddddddddddddcbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    99999999555555499999999ffffffffffff99999999999999999999999999999999cbbddddddddddddddddddddddddcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    9999999955555549999ffffffffffffffff99999999999999fff999999999999999cbbdddddddddddddddddddddddddcbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999555549999fffffffffffffffffff9999999ffffffffff9999999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee499ffffff1ffffffffffffffffff99fffff1fffffff999999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee4ffffffff11fffffffffffffffffffffff11ffffffff99999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee4fffffff111fffffffffffffffffffffff111fffffff99999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee4fffff11111fffffffffffffffffffffff11111ffff999999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee4ffffff11111fffffffffffffffffffff11111ffff99999999999999cbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee4fffffffff111fffffffffffffffffff111ffffff999999999999999cbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999fee4ffffffffff111fffff1111111fffff111fffffff9999999999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb
    999999999fee4fffffffffff111fff111111111fff111fffffffff9999999999999999cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
    999999999fee4ffffffffffff11ff11111111111ff11fffffffffff999999999999999cbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbc
    999999999fee4fffffffffffffff111ff111ff111ffffffffffffff9999999999999999cbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddbbbbbbbbbbbc9
    999999999fee4fffffffffffffff11ffff1ffff11ffffffffffffff99999999999999999cbdddddddddddddddddddddddddddddddbddddddddddddddbbddddddddddddddbcbddddddbbbcccccccccc99
    999999999fee4fffffffffffffff11ffff1ffff11ffffffffffffff999999999999999999cbddddddddddddddddddddddddddddddbdddddddddddddbcbdddddddddddddbcbdddddbbbcc999999999999
    999999999fee4fffffffffffffff111ff111ff111fffffffffffff9999999999999999999cbdddddddddddddddddddddddddddbbdbbbddddddddddbcbbbbddddddddddbcbbbbbbbbcc99999999999999
    999999999fee4fffffffffffffff111111f111111ffffffffffff999999999999999999999cbbddddddddddddddddddddddddbbcbccbddddddddbbcccccbddddddddbbcccccccccc9999999999999999
    999999999fee4ffffffffffffffff1111f1f1111ffffffffffffff999999999999999999999ccbddddddddddddddddddddddbbcccc9cbbbbbbbbbc99999cbbbbbbbbbc99999999999999999999999999
    999999999fee4ffffffffffffffff11111111111fffffffffffffff9999999999999999999999cbbbdddddddddddddddddbbbccc9999ccccccccc9999999ccccccccc999999999999999999999999999
    999999999fee4ffffffffffffffff11111111111fffffffffffffff99999999999999999999999ccbbbdddddddddddddbbbcc99999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffffffffff1111111fffffffffffffffff9999999999999999999999999ccbbbbddddddddbbccc9999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffffffffff1f1f1f1fffffffffffffffff999999999999999999999999999cccbbbbbbbbbbc9999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffffff11fffffffffff11ffffffffffff9999999999999999999999999999999cccccccccc99999999999999999999999999999999999999999999999999999999999999999
    999999999fee4fffffffffffff111fffffffffff111ffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4fffffffffff1111fffffffffffff1111ffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffff1111fffffffffffffff1111ffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffff11fffffffffffffff11fffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffff1fffffffffffffffff1fffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4fffffffffffffffbbffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4fffffffffffbbbb99bbffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffffffffbbb99999999fffffffffffffffffbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4fffffbbb99999999999bbbffffffffffffbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4ffbbb99999999999999999bbbbfffffbbb99999999999999999999999999999955559999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999fee4bb999999999999999999999999bbbbb99999999999999999999999999999955555559999999999999999999999999555999999999999999999999999999999999999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999995555555555559999999999999999999999999555999999999999999999999999999999999999999999999999999
    999999999fee4999999999999999999999999999999999999999995559999995555555555555555549999999999999999999999999555599999999999999999999999999999999999999999999999999
    999999999fee4999999999999999999999999999999999999999995555555555555555555555444499999999999999999999555999555599999999999999999999999955599999999999999999999999
    999999999fee4999999999999999999999999999999999999999995555555555555555555444999999999999999999999999555999455599999999999999999999999955599999999999999999999999
    999999999fee4999999999999999999999999999999999999999994445555555544445555999999999999999999999999999555999955599999999999999999999999955599999999999999999999999
    999999999fee4999999999999999999999999999999999999999999994444444499994555599999999999999999999999999555599955599999999999999999999999955559999999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999555559999999999999999999999999555599955599999999999999999999999555559999999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999455559999999999999999999999999455599955599999999999999999999999555555999999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999945555999999999999999999999999955599955599999999999999999999999555555999999999999999999999
    999999999fee4999999999999999999999999999559999999999999999999999999999995555999999999999999999999999955599955599999999999999999999999555555999999999999999999999
    999999999fee4999999999999999999999999955449999999999999999999999999999994555999999999995555999999999955599955599999999999999999999999555555999999999999999999999
    999999999fee4999999999999999999999995544995999999999999999999999999999999555599999999955555599999999955599955559999999999999999999995555555599999999999999999999
    999999999fee4999999999999999999999554599995999999995559999999999999999999555599999999555555555999999955599955559999555599999999999995555555599999999999999999999
    999999999fee4999999999999999999995449599995999999955455999999999999999999455599999955555555555599999955599945559999555599999999999995554455599999999999999999999
    999999999fee4999999999999999999994999599995555999954955999999999999999999955599999955555555455599999955559995559999555559999999999995559955559999999999999999999
    999999999fee4999999999999999999999999599995444599955544999999999555999999955599999955554555955559999955559995559999455559999999999955559955559999999999999999999
    999999999fee4999999999999999999999999599995999599954495999999955555999999955599999555549444955559999945559995559999945555999999999955559945559999999999999999999
    999999999fee4999999999999999999999999599995999599955555999999955555999999555599999555599999945559999995559995559999995555999999999955549995559999999999999999999
    999999999fee4999999999999999999999999499994999499944444999999555554999995555599999555559999995559999995559995555999994555599999999955599995559999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999555549999955555499999455555599995559999995559995555999999555599999999555599995559999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999555559995555554999999945555555555559999995559994555999999455559999999555599995559999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999555555555555549999999994555555555559999995559999555599999955555999995555499995559999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999455555555555499999999999445555555549999995559999555599999945555599995555999995555999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999944555555544999999999999994444444499999995559999455599999994555599955554999995555999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999444444499999999999999999999999999999995559999955599999999455559555559999994555999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555999955559999999955555555549999999555999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555999955559999999945555555499999999555999999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555999945555999999994555555999999999555599999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999994555999995555999999999444444999999999555599999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555999994555999999999999999999999999455599999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999955599999999999999999999999999999999444999999444999999999999999999999999955559999999999999999
    999999999fee4999999999999999999999999999999999999999999999999999999955599999999999999999999999999999999999999999999999999999999999999999999955559999999999999999
    999999999fee4999999999999999955555599999999999999999999999999999999955599999999999999999999999999999999999999999999999999999999999999999999945559999999999999999
    999999999fee4999999999999999955555555999999999999999999999999999999955599999999999999999999999999999999999999999999999999999999999999999999995559999999999999999
    999999999fee4999999999999999955555555559999999999999999999999999999955599999999999999999999999999999999999999999999999999999999999999999999995559999999999999999
    999999999fee4999999999999999955545555555999999999999999999999999999955599999999999999999999999999999999999999999999999999999999999999999999995559999999999999999
    999999999fee4999999999999999955554455555599999999999999999999999999955559999999999999999999999999999999999999999999999999999999999999999999995559999999999999999
    999999999fee4999999999999999955559944555559999999999999999999999999955559999999999999999999999999999999999999999999999999999995559999999999995559999999999999999
    999999999fee4999999999999999945559999455555999999999999999999999999945559999999999999999999999999999999999999999999999999999955559999999999995559999999999999999
    999999999fee4999999999999999995559999945555999999999999999999999999995559999999999999999999999999999999999999999999999999999955559999999999995559999999999999999
    999999999fee4999999999999999995559999994555599999999999999999999999995559999999999999999999999999999999999999999999999999999955559999999999995555999999999999999
    999999999fee4999999999999999995559999999555599999999999999999999999995559999999999999999999999999999999999999999999999999999955559999999999995555999999999999999
    999999999fee4999999999999999995559999999455599999999999999999999999995559999999999999999999999999999999999999999999999999999945555999999999994555999999999999999
    999999999fee4999999999999999995559999999955599999999999999999999999995559999999999999999999999999999999999999999999999999999995555599999999999555999999999999999
    999999999fee4999999999999999995559999999955599999999999999999999999995555999999999999999999999999999999999999999999999999999994555559999999999555999999999999999
    999999999fee4999999999999999995559999999955599999999999999999999999995555999999999999999999999999999999999999999999999999999999455555599999999555999999999999999
    999999999fee4999999999999999995559999999955599999999999999999999999994555999999999999999999999999999999999999999955555555599999945555559999999555999999999999999
    999999999fee4999999999999999995559999999955599999999999999999999999999555999999999999999999999999999999999999995555555555555999994555555999999555999999999999999
    999999999fee4999999999999999995559999999955599999999999999999999999999555999999999999999999999999999999999999955555555555555999999445555559999555999999999999999
    999999999fee4999999999999999995559999999555599999999999999999999999999555999999999999999999999999999999999999955555444445555999999994555555599555999999999999999
    999999999fee4999999999999999995559999999555599999999999999999999999999555999999999999999999999999999999999999955544999994444999999999455555559555999999999999999
    999999999fee4999999999999999995559999999555499999995559999999999999999555999999999999999999999555555999999999555599999999999999999999944555555555999999999999999
    999999999fee4999999999999999995559999999555999999995555599999555555559555999999999999999999995555555599999995555599999999999999999999999445555555999999999999999
    999999999fee4999999999999999995559999999555999999555555559995555555555555999999999955599999955544455599999995555599999999999999999999999994555554999999999999999
    999999999fee4999999999999999995559999995555999955555555555995555555555555995555555955599995555499555599999995555599999999999999999999999999445559999999999999999
    999999999fee4999999999999999995559999955555995555555545555995555444444555955555555555559955555955555599999995555599999999999999999999999999994449999999999999999
    999999999fee4999999999999999955559999955554995555554494555995554999999555955555555555559955555555554499999995555599999999999999999999999999999999999999999999999
    999999999fee4999999999999999955559999555549995555449999555995559999999555955554444455559955555554449999999995555599999999999999999999999999999999999999999999999
    999999999fee4999999999999999955549995555599995555999999555995559999999555955555599955559955555449999999999995555599999999999999999999999999999999999999999999999
    999999999fee4999999999999999555599995555499995555999999555995555999999555955555559555559955544999999999999995555599999999999999999999999999999999999999999999999
    999991999fee4999999999999999555599555554999995555599999555995555559995555944555555555559955559999999999955594555599999999999999999999999999999999999999999999999
    999111119fee4999911199999999555555555559999994555555595555914555555995555999445555555559955555599999999555599555599999999999111999999999999999999911199999999999
    999988811fee4999988119999995555555555549999999455555555555981455555555554999994555555559945555555999955555511555599999999999881199999999999999999988119999999999
    999999881fee4999998811999995555555554499999911145555555554998844555555559999999444445559994555555555555555581555599999999999988119999991119999999998811999999999
    999999988fee4999998881199995555555541999999986114555555549998811455555549999999999995559999445555555555554486555599999999999988811999998881999999998881199999999
    999999988fee4999998888119994445555481199999998811455554499998881144444499955555999995559999884455555555449998644419999999999888881199999888199999998888119999999
    999999888fee4199988888811999994444888119999998881144449999988888119999995555555999995559999988844444444999999888819999999999888888119999888819999999888811999999
    999988888fee4199888888881999999988888811999988881119999999888888811999995555555999995559999988881199999999998888811999999998888888819998888881999999888881999999
    888888888fee4818888888881199999888888881199988888111999998888888881199915555444119985551999888888811999999998888881199999888888888881998888888199999888888119999
    888888888fee4818888888888111988888888888199888888881999988888888888811185555588818885558198888888888119999988888888811198888888888881988888888199998888888881199
    888888888fee4188888888888881888888888888811888888888118888888888888888184555558888885558188888888888881119888888888888888888888888888188888888818888888888888819
    888888888fee4888888888888888188888888888881888888888881888888888888888818455555888885558888888888888888818888888888888888888888888888188888888881888888888888881
    888888888fee4888888888888888888888888888888188888888888188888888888888888845555555555558888888888888888818888888888888888888888888888888888888888888888888888888
    888888888fee4888888888888888888888888888888888888888888888888888888888888884555555555558888888888888888888888888888888888888888888888888888888888888888888888888
    888888888fee4888888888888888888888888888888888888888888888888888888888888888455555555548888888888888888888888888888888888888888888888888888888888888888888888888
    888888888fee4888888888888888888888888888888888888888888888888888888888888888844455555488888888888888888888888888888888888888888888888888888888888888888888888888
    888888888fee4888888888888888888888888888888888888888888888888888888888888888888844444888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888fee4888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `, SpriteKind.Intro)
Ships_Destroyed = 0
Reload_Time = 1000
Ship_Speed = 52.5
Level = 0
North = 0
East = 1
South = 2
West = 3
Ship_Max_Integrity = 12
Ship_Integrity = 12
Doubloons = 20
Shanties = true
music.setVolume(42)
Cannon_Upgrade = false
Owns_Port_Cannon = false
Owns_Starboard_Cannon = false
Owns_Port_Bow_Cannon = false
Owns_Starboard_Bow_Cannon = false
Owns_Stern_Cannon = false
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 4 . . . . . . 
    . . . . . 5 5 5 5 5 4 . . . . . 
    . . . . 5 5 4 4 4 5 5 4 . . . . 
    . . . 5 5 4 5 4 5 4 5 5 4 . . . 
    . . . 5 5 4 4 4 4 4 5 5 4 . . . 
    . . . 5 5 4 5 4 5 4 5 5 4 . . . 
    . . . . 5 5 4 4 4 5 5 4 . . . . 
    . . . . . 5 5 5 5 5 4 . . . . . 
    . . . . . . 5 5 5 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    e e e e e e e e e e e e e e e 
    e 5 5 5 5 5 5 5 5 5 5 5 5 5 e 
    e 5 4 4 4 4 4 4 4 4 4 4 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 f f f f f f f f f 4 5 e 
    e 5 4 4 4 4 4 4 4 4 4 4 4 5 e 
    e 5 5 5 5 5 5 5 5 5 5 5 5 5 e 
    e e e e e e e e e e e e e e e 
    `)
game.setDialogTextColor(4)
game.onUpdate(function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        if (Level == 5) {
            Boss_Script2()
            if (Boss_Stage >= 2) {
                Boss_Cannon_East1.setPosition(Dreadship_East.x + -2, Dreadship_East.y + -61)
                Boss_Cannon_East2.setPosition(Dreadship_East.x + -2, Dreadship_East.y + -18)
                Boss_Cannon_East3.setPosition(Dreadship_East.x + -2, Dreadship_East.y + 25)
                Boss_Cannon_East4.setPosition(Dreadship_East.x + -2, Dreadship_East.y + 68)
            }
        }
    }
})
game.onUpdate(function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        Orient_Cannons()
    }
})
game.onUpdateInterval(1000, function () {
    for (let value11 of sprites.allOfKind(SpriteKind.Rowboat)) {
        if (Math.abs(Ship.x - value11.x) < 100 && (Math.abs(Ship.x - value11.x) > 25 && (Math.abs(Ship.y - value11.y) < 90 && Math.abs(Ship.y - value11.y) > 25))) {
            value11.follow(Ship, 25)
            for (let value12 of sprites.allOfKind(SpriteKind.Rowboat)) {
                if (value12.y < Ship.y) {
                    animation.runImageAnimation(
                    value12,
                    [img`
                        . . . . . . e e . . . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . e d d d d e . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . f d d d d f . . . . 
                        . . . . e e d d e e . . . . 
                        . . . e f d d d d f e . . . 
                        . . e . e d e e d e . e . . 
                        . e . . e e d d e e . . e . 
                        e . . . . e f f e . . . . e 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `,img`
                        . . . . . . e e . . . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . e d d d d e . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . f d d d d f . . . . 
                        e e e e e e d d e e e e e e 
                        . . . . f d d d d f . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `,img`
                        . . . . . . e e . . . . . . 
                        . . . . . e f f e . . . . . 
                        e . . . e e d d e e . . . e 
                        . e . . e d d d d e . . e . 
                        . . e . e d e e d e . e . . 
                        . . . e f d d d d f e . . . 
                        . . . . e e d d e e . . . . 
                        . . . . f d d d d f . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `,img`
                        . . . . . . e e . . . . . . 
                        . . . . . e f f e . . . . . 
                        e . . . e e d d e e . . . e 
                        . e . . e d d d d e . . e . 
                        . . e . e d e e d e . e . . 
                        . . . e f d d d d f e . . . 
                        . . . . e e d d e e . . . . 
                        . . . . f d d d d f . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        `],
                    150,
                    true
                    )
                } else {
                    animation.runImageAnimation(
                    value12,
                    [img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        e . . . . e f f e . . . . e 
                        . e . . e e d d e e . . e . 
                        . . e . e d e e d e . e . . 
                        . . . e f d d d d f e . . . 
                        . . . . e e d d e e . . . . 
                        . . . . f d d d d f . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . e d d d d e . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . . . e e . . . . . . 
                        `,img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . f d d d d f . . . . 
                        e e e e e e d d e e e e e e 
                        . . . . f d d d d f . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . e d d d d e . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . . . e e . . . . . . 
                        `,img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . f d d d d f . . . . 
                        . . . . e e d d e e . . . . 
                        . . . e f d d d d f e . . . 
                        . . e . e d e e d e . e . . 
                        . e . . e d d d d e . . e . 
                        e . . . e e d d e e . . . e 
                        . . . . . e f f e . . . . . 
                        . . . . . . e e . . . . . . 
                        `,img`
                        . . . . . . b b . . . . . . 
                        . . . . . . b b . . . . . . 
                        . . . . . f b b f . . . . . 
                        . . . . . f f f f . . . . . 
                        . . . . . e f f e . . . . . 
                        . . . . e e d d e e . . . . 
                        . . . . e d e e d e . . . . 
                        . . . . f d d d d f . . . . 
                        . . . . e e d d e e . . . . 
                        . . . e f d d d d f e . . . 
                        . . e . e d e e d e . e . . 
                        . e . . e d d d d e . . e . 
                        e . . . e e d d e e . . . e 
                        . . . . . e f f e . . . . . 
                        . . . . . . e e . . . . . . 
                        `],
                    150,
                    true
                    )
                }
            }
        } else {
            value11.follow(null)
        }
    }
    for (let value13 of sprites.allOfKind(SpriteKind.Rowboat)) {
        if (Math.abs(Ship.x - value13.x) < 80 && (Math.abs(Ship.x - value13.x) > 0 && (Math.abs(Ship.y - value13.y) < 80 && Math.abs(Ship.y - value13.y) > 0))) {
            EnemyCannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value13, (Ship.x - value13.x) * 1.1, (Ship.y - value13.y) * 1.1)
            EnemyCannonBall.setKind(SpriteKind.EnemyProjectile)
        }
    }
    for (let value14 of sprites.allOfKind(SpriteKind.CannonTower)) {
        if (Math.abs(Ship.x - value14.x) < 80 && (Math.abs(Ship.x - value14.x) > 0 && (Math.abs(Ship.y - value14.y) < 80 && Math.abs(Ship.y - value14.y) > 0))) {
            EnemyCannonBall = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value14, (Ship.x - value14.x) * 1.25, (Ship.y - value14.y) * 1.25)
            EnemyCannonBall.setKind(SpriteKind.EnemyProjectile)
        }
    }
})
game.onUpdateInterval(1500, function () {
    if (Boss_Stage == 3 && (!(blockMenu.isMenuOpen()) && BossCannon_count > 2)) {
        if (sprites.readDataNumber(Boss_Cannon_East1, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East1, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
        if (sprites.readDataNumber(Boss_Cannon_East2, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East2, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
        if (sprites.readDataNumber(Boss_Cannon_East3, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East3, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
        if (sprites.readDataNumber(Boss_Cannon_East4, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East4, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
    }
})
game.onUpdateInterval(1500, function () {
    if (!(blockMenu.isMenuOpen()) && !(Pause)) {
        if (BossCannon_count == 1 && Math.percentChance(100)) {
            Gusts()
        } else if (BossCannon_count == 2 && Math.percentChance(50)) {
            Gusts()
        } else if (BossCannon_count == 3 && Math.percentChance(20)) {
            Gusts()
        }
        if (Level >= 4 && Math.percentChance(20)) {
            Gusts()
        }
        if (Level < 5 && Math.percentChance(25)) {
            Gulls()
        } else if (Math.percentChance(5)) {
            Gulls()
            Gulls()
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.IronSides)) {
        if (Math.abs(Ship.x - value.x) < 80 && (Math.abs(Ship.x - value.x) > 0 && (Math.abs(Ship.y - value.y) < 80 && Math.abs(Ship.y - value.y) > 0))) {
            if (Ship.x > value.x) {
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, 75, -75)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
                Caraval_Projectile.setPosition(value.x + 9, value.y + 0)
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, 0, -100)
                Caraval_Projectile.setPosition(value.x + -11, value.y)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, 75, 75)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
                Caraval_Projectile.setPosition(value.x + 9, value.y + 0)
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, 0, 100)
                Caraval_Projectile.setPosition(value.x + -11, value.y)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
            } else {
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, -75, -75)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
                Caraval_Projectile.setPosition(value.x + -9, value.y + 0)
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, 0, -100)
                Caraval_Projectile.setPosition(value.x + 11, value.y)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, -75, 75)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
                Caraval_Projectile.setPosition(value.x + -9, value.y + 0)
                Caraval_Projectile = sprites.createProjectileFromSprite(img`
                    f f 
                    f f 
                    `, value, 0, 100)
                Caraval_Projectile.setPosition(value.x + 11, value.y)
                Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
            }
        }
    }
})
forever(function () {
    if (Shanties == true) {
        music.playMelody(music.convertRTTTLToMelody("MAUI1:d=4,o=5,b=0:c,c,f,f,e,8c,8c,g#,g#,g,8c6,8a#,g#,f,8g,8f,d#,2f.,8c,8c,f,8f,8f,e,8c,8c,g#,g#,g,8c6,8a#,g#,f,g,d#,2f.,8g#,8a#,c6,c6,c6,8a#,8g#,a#,a#,a#,8g,8g,g#,g#,g,f,2g,c6,8c,8c,f,8f,8f,e,8c,8c,g#,g#,g,8c6,8a#,g#,f,g,g,2f.,8g#,8a#,c.6,8c6,c6,g#,a#.,8a#,a#,8c6,8a#,g#,g#,g#,f,2g,c6,c,f,f,e,8c,8c,g#,g#,g,8c6,8a#,g#,f,8g,8f,d#,2f."), 200)
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
    }
    if (Shanties == true) {
        music.playMelody(music.convertRTTTLToMelody("drunken_sa:d=4,o=5,b=120:f4,8a,8a,a,8a,8a,8p,8p,f4,d,f,a,p,p,e4,8g,8g,g,8g,8g,8p,8p,e4,c,e,g,p,p,f4,8a,8a,a,8a,8a,8p,8p,f4,b,c6,d6,p,p,e4,a,g,e,p,p,2f4,2p,2p,2f4,2p,2p,2f4,a.,8a,8p,8p,f4,d,f,a,p,p,2e4,g.,8g,8p,8p,e4,c,e,g,p,p,2f4,a.,8a,8p,8p,f4,b,c6,d6,p,p,e4,a,p,p,e4,e,p,p,2f4,2p,2p,2f4"), 220)
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
    }
    if (Shanties == true) {
        music.playMelody(music.convertRTTTLToMelody("HIGHBRB1:d=4,o=5,b=0:8d,d,8g,g,8a,a#.,c6,8a#,a.,a#,8a,d.,p,8d,2d,8d,2d6,8d,g,8a,a#,8c6,2d6,8a#,d6,8d6,a#,8d6,c6,8c6,a,8c6,a#,8a#,a,8g,d.,a#4,8c,d,8g,a#,8a,g.,g,8f,d.,g,8f#,2g"), 200)
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
    }
    if (Shanties == true) {
        music.playMelody(music.convertRTTTLToMelody("pirates:d=4,o=5,b=0:2p,8a4,8b4,8p,8p,e4,p,p,e4,8b4,8a4,8p,e4,e4,8b4,8c,8p,e4,p,e4,8c,8b4,8p,8p,e4,p,e4,8a4,8b4,8p,8p,e4,p,p,e4,8b4,8a4,8p,e4,e4,8b4,8c,8p,e4,p,8e4,8d,8c,8b4,8p,8p,e4,p,e4,8c,8d,8p,8p,g4,p,p,g4,8d,8c,8p,8p,d4,p,d4,8d,8e,8p,8p,a4,p,p,a4,8e,8d,8p,8p,e4,p,e4,8c,8d,8p,8p,e4,p,p,e4,8d,8c,8p,8p,d4,p,p,d4,8c,8b4,8p,8p,e4,8a3,8e4,8a3,8e4,a3,8a3,8e4,8a3,8e4,a3,8a3,8e4,8a3,8e4,a3,8a3,8e4,8a3,8e4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,g3,p,8g3,8d4,8p,8g3,8d4,8p,a3,8a3,8e4,8a3,8e4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,g3,p,p,8g3,8d4,8p,8p,8g3,8d4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,a3,8a3,8e4,8a3,8e4,8p,8p,g3,p,8g3,8d4,8p,8g3,8d4,8p,a3,8a3,8e4,8a3,8e4,8p,8p,g3,p,p,8g3,8d4,8p,8g3,8d4,8p,8p,g3,p,p,8g3,8d4,8p,8g3,8d4,8p,8p,g3,p,p,8g3,8d4,8p,8g3,8d4,8g3,8d4,8g3,8d4,8p,8g3,8p,8d4,8p,8p,e4,p,p,e4,8b6,8a6,8p,8p,b4,p,b4,8b6,8c7,8p,8p,b4,p,p,b4,8c7,8b6,8p,8p,e4,p,e4,8a6,8b6,8p,8p,e4,p,p,e4,8b6,8a6,8p,8p,b4,p,b4,8b6,8c7,8p,8p,b4,p,p,8b4,8d7,8c7,8b6,8p,8p,e4,p,e4,8c7,8d7,8p,8p,g4,p,p,g4,8d7,8c7,8p,8p,d4,p,d4,8d7,8e7,8p,8p,a4,p,p,a4,8e7,8d7,8p,8p,e4,p,e4,8c7,8d7,8p,8p,e4,p,p,e4,8d7,8c7,8p,8p,d4,p,p,d4,8c7,8b6,8p,8p,e4,8a3,8e4,8a3,8e4,a3,8a3,8e4,8a3,8e4,8p,a3,p,8a3,8p,8e4,8p,8a3,8p,8e4,8p,a3,p,8a3,8p,8e4,8p,8a3,8p,8e4,8p,8p,8p,16e4"), 200)
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
    }
    if (Shanties == true) {
        music.playMelody(music.convertRTTTLToMelody("pirate_pol:d=4,o=5,b=120:1p,8c.,54d,34p.,16d#,16p,16f,16p,16g,16p,16g#,16p,16a#,16p,16b,16p,8c.6,54d6,34p.,16d#6,16p,16c6,16p,16a#,16p,16g,16p,8a#,85d#,34p,256g,26p,256a#,26p,256c6,8p.,54d6,34p.,16d#6,16p,16c6,16p,16a#,16p,16g,16p,8a#,85d#,34p,256g,26p,256a#,26p,256c6,8p.,54d6,34p.,16d#6,16p,16f6,16p,16g6,16p,16d#6,16p,g6,16f6,16p,16d6,16p,8f6,85a#,34p,256c6,26p,256d6,26p,16d#6,16p,16c6,16p,d#6,d6,16a#,16p,16a#,24p,47b,1p,24d#,256g,26p,256a#,26p,256c6,8p.,16d6,16d#6,16p,16d6,16p,16c6,16p,16g#,16p,c6,16d6,16p,16a#,16p,8d6,85d#6,34p,256f6,26p,256g6,26p,256g#6,p,41g6,p,41f6,1p.,24d#,256g,26p,256a#,26p,256c6,8p,16b,16p,16a#,16p,16a,16p,16a#,16p,16b,16p,16c6,16p,16c#6,16p,16d6,1p,8d.6,54e6,34p.,16f6,16p,16d6,16p,16c6,16p,16a,16p,8c6,85f,34p,256a,26p,256c6,26p,256d6,8p.,54e6,34p.,16f6,16p,16d6,16p,16c6,16p,16a,16p,8c6,85f,34p,256a,26p,256c6,26p,256d6,8p.,54e6,34p.,16f6,16p,16g6,16p,16a6,16p,16f6,16p,a6,16g6,16p,16e6,16p,8g6,85c6,34p,256d6,26p,256e6,26p,16f6,16p,16d6,16p,f6,e6,16c6,16p,16c6,16p,16d6,1p,16d6,171a,18p,171f,18p,16c,16p,16c,16p,16d,2p,16a6,8p.,16f6,8p.,16a6,16p,16f6,16p,16d6,1p,16a6,8p.,16f6,8p.,16a6,16p,16f6,16p,16d6,1p,16a#6,8p.,16g6,8p.,16a#6,16p,16g6,16p,16d6,1p,16a#6,8p.,16g6,8p.,16a#6,16p,16g6,16p,16d6,1p,16a6,8p.,16d7,8p.,16a6,16p,24g6,256a6,26p,256g6,26p,256f6,p,16a6,16p,16c7,171a6,18p,171g6,28p,256a6,26p,256g6,26p,256e6,8p,16d6,16p,16c6,16p,16d6,8p.,16a#,16p,16a,16p,16a#,8p.,16a,16p,16g,16p,16a,8p.,16g#,16p,16f,16p,16g#,16p,16f#,171f,18p,16d#,1p,16d#,16p,16d#,171f,18p,171f#,18p,171f,18p,171d#,8p,16c#,16p,16c#,171d#,18p,171f,18p,171d#,18p,171c#,1p,16f#,16p,16f#,171g#,18p,171a#,18p,171g#,18p,171f#,8p,16f,16p,16f,171f#,18p,171g#,18p,171f#,18p,171f,1p,16a#,171g#,18p,171f#,8p,16g#,16p,16f,16p,16f#,171f,18p,171d#,8p,16f,16p,16c#,16p,16d#,171c#,18p,171d#,18p,171f#,18p,16d#,16p,16c#,16p,2a#4,16f#,8p.,16g#,8p.,16a#,8p.,16c#6,8p.,16d#6,1p,16d#,16p,16d#,171f,18p,171f#,18p,171f,18p,171d#,8p,16c#,16p,16c#,171d#,18p,171f,18p,171d#,18p,171c#,1p,16f#,16p,16f#,171g#,18p,171a#,18p,171g#,18p,171f#,8p,16f,16p,16f,171f#,18p,171g#,18p,171f#,18p,171f,1p,16a#,171g#,18p,171f#,8p,16g#,16p,16f,16p,16f#,171f,18p,171d#,8p,16f,16p,16c#,16p,16d#,171c#,18p,171d#,18p,171f#,18p,16d#,16p,16c#,16p,2a#4,16f#,8p.,16g#,8p.,16a#,8p.,16c#6,8p.,8d#.6,54f6,34p.,16f#6,16p,16d#6,16p,16c#6,16p,16a#,16p,8c#6,85f#,34p,256a#,26p,256c#6,26p,256d#6,8p.,54f6,34p.,16f#6,16p,16d#6,16p,16c#6,16p,16a#,16p,8c#6,85f#,34p,256a#,26p,256c#6,26p,256d#6,8p.,54f6,34p.,16f#6,16p,16g#6,16p,16a#6,16p,16f#6,16p,a#6,16g#6,16p,16f6,16p,8g#6,85c#6,34p,256d#6,26p,256f6,26p,16f#6,16p,16d#6,16p,f#6,f6,16c#6,16p,16c#6,24p,47d6,1p,24f#,256a#,26p,256c#6,26p,256d#6,8p.,16f6,16f#6,16p,16f6,16p,16d#6,16p,16b,16p,d#6,16f6,16p,16c#6,16p,8f6,85f#6,34p,256g#6,26p,256a#6,26p,256b6,p,41a#6,p,41g#6,1p.,24f#,256a#,26p,256c#6,26p,256d#6,1p,16d#6,8p,16d6,16c#6,16p,16b,16p,16a#,16p,16g#,16p,16f#,16p,16f,16p,16d#,1p,16f#,8p.,16d#"), 120)
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
    }
    if (Shanties == true) {
        music.playMelody(music.convertRTTTLToMelody("SPANLAD1:d=4,o=5,b=0:2p,d,g,g,f#,2g,8g,8a,a#,a,g,f#,d.,8d,g,g,f#,2g,8g,8a,a#,a,g,2a,8a,8a,a#,a,g,c6,a#,a,d6,g,8g,8a,8f#,8e,d,8d6,8c6,a#,a,g,f#,d,d,d,g,f#,2g"), 200)
        music.rest(music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Breve))
    }
})
game.onUpdateInterval(150, function () {
    for (let value of sprites.allOfKind(SpriteKind.IronSides)) {
        if (Math.abs(Ship.x - value.x) < 90 && (Math.abs(Ship.x - value.x) > 25 && (Math.abs(Ship.y - value.y) < 90 && Math.abs(Ship.y - value.y) > 15))) {
            if (Ship.x > 50 + value.x) {
                if (value.vx < 30) {
                    value.vx += 30
                }
            } else if (Ship.x < -50 + value.x) {
                if (value.vx > -30) {
                    value.vx += -30
                }
            }
            if (Ship.y > 50 + value.y) {
                if (value.vy < 40) {
                    value.vy += 40
                }
            } else if (Ship.y < -50 + value.y) {
                if (value.vy > -40) {
                    value.vy += -40
                }
            }
            if (value.x < Ship.x) {
                animation.runImageAnimation(
                value,
                [img`
                    .....bb.......f8..................
                    1..1.bb..1..1.f1..1..1............
                    ..cccbbcccccccf8cccccccc1.........
                    .ccffbbffffffff1ffffffccc.........
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
                    .cfbbbbbbbbbbbf8bbaababffbbbb.....
                    .cfbbbbbbbbbbbf1bbabaabaffbbc.....
                    .cfbbbbbbbbbbbf8bbbaabbbfffbcc1...
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbbf8bbbbbbbbfffbcc1...
                    .cfbbbbbbbbbbbf1bbbbbbbaffbbc.....
                    .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
                    .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .ccffbbffffffff1ffffffccc.........
                    ..cccbbcccccccf8cccccccc1.........
                    1..1.bb..1..1.f1..1..1............
                    .....bb.......f8..................
                    `,img`
                    .....bb.......f8..................
                    ..1..bb.1..1..f1.1..1..1..........
                    ..cccbbcccccccf8cccccccc..........
                    .ccffbbffffffff1ffffffccc.........
                    .cfaffffabbbbbf8bbbbbbfccc1.bb....
                    .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
                    .cfbbbbbbbbbbbf8bbaababffbbbb.....
                    .cfbbbbbbbbbbbf1bbabaabaffbbc1....
                    .cfbbbbbbbbbbbf8bbbaabbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc1.
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc1.
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbbf8bbbbbbbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbaffbbc1....
                    .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
                    .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
                    .cfaffffabbbbbf8bbbbbbfccc1.bb....
                    .ccffbbffffffff1ffffffccc.........
                    ..cccbbcccccccf8cccccccc..........
                    ..1..bb.1..1..f1.1..1..1..........
                    .....bb.......f8..................
                    `,img`
                    .....bb.......f8..................
                    .1..1bb1..1..1f11..1..1...........
                    ..cccbbcccccccf8cccccccc..........
                    .ccffbbffffffff1ffffffccc1........
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
                    .cfbbbbbbbbbbbf8bbaababffbbbb.....
                    .cfbbbbbbbbbbbf1bbabaabaffbbc.....
                    .cfbbbbbbbbbbbf8bbbaabbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc1..
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc1..
                    .cfbbbbbbbbbbbf8bbbbbbbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbaffbbc.....
                    .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
                    .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .ccffbbffffffff1ffffffccc1........
                    ..cccbbcccccccf8cccccccc..........
                    .1..1bb1..1..1f11..1..1...........
                    .....bb.......f8..................
                    `],
                150,
                true
                )
            } else {
                animation.runImageAnimation(
                value,
                [img`
                    ..................8f.......bb.....
                    ............1..1..1f.1..1..bb.1..1
                    .........1cccccccc8fcccccccbbccc..
                    .........cccffffff1ffffffffbbffcc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    ....bbbcccfbbaabbb1fbbbbbbfbbfbfc.
                    .....bbbbffbabaabb8fbbbbbbbbbbbfc.
                    .....cbbffabaababb1fbbbbbbbbbbbfc.
                    ...1ccbfffbbbaabbb8fbbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    1ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    1ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ...1ccbfffbbbbbbbb8fbbbbbbbbbbbfc.
                    .....cbbffabbbbbbb1fbbbbbbbbbbbfc.
                    .....bbbbffbbbbbbb8fbbbbbbbbbbbfc.
                    ....bbbcccfbbbbbbb1fbbbbbbfbbfbfc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    .........cccffffff1ffffffffbbffcc.
                    .........1cccccccc8fcccccccbbccc..
                    ............1..1..1f.1..1..bb.1..1
                    ..................8f.......bb.....
                    `,img`
                    ..................8f.......bb.....
                    ..........1..1..1.1f..1..1.bb..1..
                    ..........cccccccc8fcccccccbbccc..
                    .........cccffffff1ffffffffbbffcc.
                    ....bb.1cccfbbbbbb8fbbbbbaffffafc.
                    ....bbbcccfbbaabbb1fbbbbbbfbbfbfc.
                    .....bbbbffbabaabb8fbbbbbbbbbbbfc.
                    ....1cbbffabaababb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbaabbb8fbbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    .1cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    .1cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbbbbbb8fbbbbbbbbbbbfc.
                    ....1cbbffabbbbbbb1fbbbbbbbbbbbfc.
                    .....bbbbffbbbbbbb8fbbbbbbbbbbbfc.
                    ....bbbcccfbbbbbbb1fbbbbbbfbbfbfc.
                    ....bb.1cccfbbbbbb8fbbbbbaffffafc.
                    .........cccffffff1ffffffffbbffcc.
                    ..........cccccccc8fcccccccbbccc..
                    ..........1..1..1.1f..1..1.bb..1..
                    ..................8f.......bb.....
                    `,img`
                    ..................8f.......bb.....
                    ...........1..1..11f1..1..1bb1..1.
                    ..........cccccccc8fcccccccbbccc..
                    ........1cccffffff1ffffffffbbffcc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    ....bbbcccfbbaabbb1fbbbbbbfbbfbfc.
                    .....bbbbffbabaabb8fbbbbbbbbbbbfc.
                    .....cbbffabaababb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbaabbb8fbbbbbbbbbbbfc.
                    ..1cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    ..1cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbbbbbb8fbbbbbbbbbbbfc.
                    .....cbbffabbbbbbb1fbbbbbbbbbbbfc.
                    .....bbbbffbbbbbbb8fbbbbbbbbbbbfc.
                    ....bbbcccfbbbbbbb1fbbbbbbfbbfbfc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    ........1cccffffff1ffffffffbbffcc.
                    ..........cccccccc8fcccccccbbccc..
                    ...........1..1..11f1..1..1bb1..1.
                    ..................8f.......bb.....
                    `],
                150,
                true
                )
            }
        } else if (Math.abs(Ship.x - value.x) < 25 && Math.abs(Ship.y - value.y) < 15) {
            if (Ship.x > value.x) {
                if (value.vx >= 0) {
                    value.vx += -30
                }
            } else if (Ship.x < value.x) {
                if (value.vx <= 0) {
                    value.vx += 30
                }
            }
            if (Ship.y > value.y) {
                if (value.vy >= 0) {
                    value.vy += -30
                }
            } else if (Ship.y < value.y) {
                if (value.vy <= 0) {
                    value.vy += 30
                }
            }
            if (value.x < Ship.x) {
                animation.runImageAnimation(
                value,
                [img`
                    .....bb.......f8..................
                    1..1.bb..1..1.f1..1..1............
                    ..cccbbcccccccf8cccccccc1.........
                    .ccffbbffffffff1ffffffccc.........
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
                    .cfbbbbbbbbbbbf8bbaababffbbbb.....
                    .cfbbbbbbbbbbbf1bbabaabaffbbc.....
                    .cfbbbbbbbbbbbf8bbbaabbbfffbcc1...
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc1
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbbf8bbbbbbbbfffbcc1...
                    .cfbbbbbbbbbbbf1bbbbbbbaffbbc.....
                    .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
                    .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .ccffbbffffffff1ffffffccc.........
                    ..cccbbcccccccf8cccccccc1.........
                    1..1.bb..1..1.f1..1..1............
                    .....bb.......f8..................
                    `,img`
                    .....bb.......f8..................
                    ..1..bb.1..1..f1.1..1..1..........
                    ..cccbbcccccccf8cccccccc..........
                    .ccffbbffffffff1ffffffccc.........
                    .cfaffffabbbbbf8bbbbbbfccc1.bb....
                    .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
                    .cfbbbbbbbbbbbf8bbaababffbbbb.....
                    .cfbbbbbbbbbbbf1bbabaabaffbbc1....
                    .cfbbbbbbbbbbbf8bbbaabbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc1.
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc1.
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc...
                    .cfbbbbbbbbbbbf8bbbbbbbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbaffbbc1....
                    .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
                    .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
                    .cfaffffabbbbbf8bbbbbbfccc1.bb....
                    .ccffbbffffffff1ffffffccc.........
                    ..cccbbcccccccf8cccccccc..........
                    ..1..bb.1..1..f1.1..1..1..........
                    .....bb.......f8..................
                    `,img`
                    .....bb.......f8..................
                    .1..1bb1..1..1f11..1..1...........
                    ..cccbbcccccccf8cccccccc..........
                    .ccffbbffffffff1ffffffccc1........
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .cfbfbbfbbbbbbf1bbbaabbfcccbbb....
                    .cfbbbbbbbbbbbf8bbaababffbbbb.....
                    .cfbbbbbbbbbbbf1bbabaabaffbbc.....
                    .cfbbbbbbbbbbbf8bbbaabbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc1..
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbfccfbbbbbbbbbbbbffcc.
                    .cfbbbbbbbbbbffffbbbbbbbbbaffccc..
                    .cfbbbbbbbbbbbf1bbbbbbbbbfffccc1..
                    .cfbbbbbbbbbbbf8bbbbbbbbfffbcc....
                    .cfbbbbbbbbbbbf1bbbbbbbaffbbc.....
                    .cfbbbbbbbbbbbf8bbbbbbbffbbbb.....
                    .cfbfbbfbbbbbbf1bbbbbbbfcccbbb....
                    .cfaffffabbbbbf8bbbbbbfccc..bb....
                    .ccffbbffffffff1ffffffccc1........
                    ..cccbbcccccccf8cccccccc..........
                    .1..1bb1..1..1f11..1..1...........
                    .....bb.......f8..................
                    `],
                150,
                true
                )
            } else {
                animation.runImageAnimation(
                value,
                [img`
                    ..................8f.......bb.....
                    ............1..1..1f.1..1..bb.1..1
                    .........1cccccccc8fcccccccbbccc..
                    .........cccffffff1ffffffffbbffcc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    ....bbbcccfbbaabbb1fbbbbbbfbbfbfc.
                    .....bbbbffbabaabb8fbbbbbbbbbbbfc.
                    .....cbbffabaababb1fbbbbbbbbbbbfc.
                    ...1ccbfffbbbaabbb8fbbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    1ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    1ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ...1ccbfffbbbbbbbb8fbbbbbbbbbbbfc.
                    .....cbbffabbbbbbb1fbbbbbbbbbbbfc.
                    .....bbbbffbbbbbbb8fbbbbbbbbbbbfc.
                    ....bbbcccfbbbbbbb1fbbbbbbfbbfbfc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    .........cccffffff1ffffffffbbffcc.
                    .........1cccccccc8fcccccccbbccc..
                    ............1..1..1f.1..1..bb.1..1
                    ..................8f.......bb.....
                    `,img`
                    ..................8f.......bb.....
                    ..........1..1..1.1f..1..1.bb..1..
                    ..........cccccccc8fcccccccbbccc..
                    .........cccffffff1ffffffffbbffcc.
                    ....bb.1cccfbbbbbb8fbbbbbaffffafc.
                    ....bbbcccfbbaabbb1fbbbbbbfbbfbfc.
                    .....bbbbffbabaabb8fbbbbbbbbbbbfc.
                    ....1cbbffabaababb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbaabbb8fbbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    .1cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    .1cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    ...cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbbbbbb8fbbbbbbbbbbbfc.
                    ....1cbbffabbbbbbb1fbbbbbbbbbbbfc.
                    .....bbbbffbbbbbbb8fbbbbbbbbbbbfc.
                    ....bbbcccfbbbbbbb1fbbbbbbfbbfbfc.
                    ....bb.1cccfbbbbbb8fbbbbbaffffafc.
                    .........cccffffff1ffffffffbbffcc.
                    ..........cccccccc8fcccccccbbccc..
                    ..........1..1..1.1f..1..1.bb..1..
                    ..................8f.......bb.....
                    `,img`
                    ..................8f.......bb.....
                    ...........1..1..11f1..1..1bb1..1.
                    ..........cccccccc8fcccccccbbccc..
                    ........1cccffffff1ffffffffbbffcc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    ....bbbcccfbbaabbb1fbbbbbbfbbfbfc.
                    .....bbbbffbabaabb8fbbbbbbbbbbbfc.
                    .....cbbffabaababb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbaabbb8fbbbbbbbbbbbfc.
                    ..1cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    .ccffbbbbbbbbbbbbfccfbbbbbbbbbbfc.
                    ..cccffabbbbbbbbbffffbbbbbbbbbbfc.
                    ..1cccfffbbbbbbbbb1fbbbbbbbbbbbfc.
                    ....ccbfffbbbbbbbb8fbbbbbbbbbbbfc.
                    .....cbbffabbbbbbb1fbbbbbbbbbbbfc.
                    .....bbbbffbbbbbbb8fbbbbbbbbbbbfc.
                    ....bbbcccfbbbbbbb1fbbbbbbfbbfbfc.
                    ....bb..cccfbbbbbb8fbbbbbaffffafc.
                    ........1cccffffff1ffffffffbbffcc.
                    ..........cccccccc8fcccccccbbccc..
                    ...........1..1..11f1..1..1bb1..1.
                    ..................8f.......bb.....
                    `],
                150,
                true
                )
            }
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Caraval)) {
        if (Math.abs(Ship.x - value.x) < 90 && (Math.abs(Ship.x - value.x) > 0 && (Math.abs(Ship.y - value.y) < 90 && Math.abs(Ship.y - value.y) > 0))) {
            if (Ship.x > value.x) {
                if (value.vx < 30) {
                    value.vx += 30
                }
            } else if (Ship.x < value.x) {
                if (value.vx > -30) {
                    value.vx += -30
                }
            }
            if (Ship.y > 50 + value.y) {
                if (value.vy < 40) {
                    value.vy += 40
                }
            } else if (Ship.y < 50 + value.y) {
                if (value.vy > -40) {
                    value.vy += -40
                } else {
                    value.vy = 0
                }
            }
            if (value.x < Ship.x) {
                animation.runImageAnimation(
                value,
                [img`
                    ..............f8..............
                    ..1..1..bb.1..f1.1bb1.........
                    ..eeeeeebbeeeef8eebbeee1......
                    .ee44444bb4444f144bb44ee......
                    .e4eeee4ff4eeef8e4ff4e4ee.....
                    .e4eeeeffffeeef1effff4e4ee1...
                    .e4eeeeeeeeeeef8eeeee44e4ee...
                    .e4eeeeeeeeeeef1eeeee4e4e4ee..
                    .e4e4e4eeeeeeffffeeee44e4e4ee1
                    .e4ee4eeeeeeefeefeeee4e4e4e4e.
                    .e4e4e4eeeeeeffffeeee44e4e4ee1
                    .e4eeeeeeeeeeef1eeeee4e4e4ee..
                    .e4eeeeeeeeeeef8eeeee44e4ee...
                    .e4eeeeffffeeef1effff4e4ee1...
                    .e4eeee4ff4eeef8e4ff4e4ee.....
                    .ee44444bb4444f144bb44ee......
                    ..eeeeeebbeeeef8eebbeee1......
                    ..1..1..bb.1..f1.1bb1.........
                    ..............f8..............
                    `,img`
                    ..............f8..............
                    .1..1..1bb1..1f11.bb..1.......
                    ..eeeeeebbeeeef8eebbeee.......
                    .ee44444bb4444f144bb44ee......
                    .e4eeee4ff4eeef8e4ff4e4ee1....
                    .e4eeeeffffeeef1effff4e4ee....
                    .e4eeeeeeeeeeef8eeeee44e4ee...
                    .e4eeeeeeeeeeef1eeeee4e4e4ee1.
                    .e4e4e4eeeeeeffffeeee44e4e4ee.
                    .e4ee4eeeeeeefeefeeee4e4e4e4e.
                    .e4e4e4eeeeeeffffeeee44e4e4ee.
                    .e4eeeeeeeeeeef1eeeee4e4e4ee1.
                    .e4eeeeeeeeeeef8eeeee44e4ee...
                    .e4eeeeffffeeef1effff4e4ee....
                    .e4eeee4ff4eeef8e4ff4e4ee1....
                    .ee44444bb4444f144bb44ee......
                    ..eeeeeebbeeeef8eebbeee.......
                    .1..1..1bb1..1f11.bb..1.......
                    ..............f8..............
                    `,img`
                    ..............f8..............
                    1..1..1.bb..1.f1..bb.1........
                    ..eeeeeebbeeeef8eebbeee.......
                    .ee44444bb4444f144bb44ee1.....
                    .e4eeee4ff4eeef8e4ff4e4ee.....
                    .e4eeeeffffeeef1effff4e4ee....
                    .e4eeeeeeeeeeef8eeeee44e4ee1..
                    .e4eeeeeeeeeeef1eeeee4e4e4ee..
                    .e4e4e4eeeeeeffffeeee44e4e4ee.
                    .e4ee4eeeeeeefeefeeee4e4e4e4e.
                    .e4e4e4eeeeeeffffeeee44e4e4ee.
                    .e4eeeeeeeeeeef1eeeee4e4e4ee..
                    .e4eeeeeeeeeeef8eeeee44e4ee1..
                    .e4eeeeffffeeef1effff4e4ee....
                    .e4eeee4ff4eeef8e4ff4e4ee.....
                    .ee44444bb4444f144bb44ee1.....
                    ..eeeeeebbeeeef8eebbeee.......
                    1..1..1.bb..1.f1..bb.1........
                    ..............f8..............
                    `],
                150,
                true
                )
            } else {
                animation.runImageAnimation(
                value,
                [img`
                    ..............8f..............
                    .........1bb1.1f..1.bb..1..1..
                    ......1eeebbee8feeeebbeeeeee..
                    ......ee44bb441f4444bb44444ee.
                    .....ee4e4ff4e8feee4ff4eeee4e.
                    ...1ee4e4ffffe1feeeffffeeee4e.
                    ...ee4e44eeeee8feeeeeeeeeee4e.
                    ..ee4e4e4eeeee1feeeeeeeeeee4e.
                    1ee4e4e44eeeeffffeeeeee4e4e4e.
                    .e4e4e4e4eeeefeefeeeeeee4ee4e.
                    1ee4e4e44eeeeffffeeeeee4e4e4e.
                    ..ee4e4e4eeeee1feeeeeeeeeee4e.
                    ...ee4e44eeeee8feeeeeeeeeee4e.
                    ...1ee4e4ffffe1feeeffffeeee4e.
                    .....ee4e4ff4e8feee4ff4eeee4e.
                    ......ee44bb441f4444bb44444ee.
                    ......1eeebbee8feeeebbeeeeee..
                    .........1bb1.1f..1.bb..1..1..
                    ..............8f..............
                    `,img`
                    ..............8f..............
                    .......1..bb.11f1..1bb1..1..1.
                    .......eeebbee8feeeebbeeeeee..
                    ......ee44bb441f4444bb44444ee.
                    ....1ee4e4ff4e8feee4ff4eeee4e.
                    ....ee4e4ffffe1feeeffffeeee4e.
                    ...ee4e44eeeee8feeeeeeeeeee4e.
                    .1ee4e4e4eeeee1feeeeeeeeeee4e.
                    .ee4e4e44eeeeffffeeeeee4e4e4e.
                    .e4e4e4e4eeeefeefeeeeeee4ee4e.
                    .ee4e4e44eeeeffffeeeeee4e4e4e.
                    .1ee4e4e4eeeee1feeeeeeeeeee4e.
                    ...ee4e44eeeee8feeeeeeeeeee4e.
                    ....ee4e4ffffe1feeeffffeeee4e.
                    ....1ee4e4ff4e8feee4ff4eeee4e.
                    ......ee44bb441f4444bb44444ee.
                    .......eeebbee8feeeebbeeeeee..
                    .......1..bb.11f1..1bb1..1..1.
                    ..............8f..............
                    `,img`
                    ..............8f..............
                    ........1.bb..1f.1..bb.1..1..1
                    .......eeebbee8feeeebbeeeeee..
                    .....1ee44bb441f4444bb44444ee.
                    .....ee4e4ff4e8feee4ff4eeee4e.
                    ....ee4e4ffffe1feeeffffeeee4e.
                    ..1ee4e44eeeee8feeeeeeeeeee4e.
                    ..ee4e4e4eeeee1feeeeeeeeeee4e.
                    .ee4e4e44eeeeffffeeeeee4e4e4e.
                    .e4e4e4e4eeeefeefeeeeeee4ee4e.
                    .ee4e4e44eeeeffffeeeeee4e4e4e.
                    ..ee4e4e4eeeee1feeeeeeeeeee4e.
                    ..1ee4e44eeeee8feeeeeeeeeee4e.
                    ....ee4e4ffffe1feeeffffeeee4e.
                    .....ee4e4ff4e8feee4ff4eeee4e.
                    .....1ee44bb441f4444bb44444ee.
                    .......eeebbee8feeeebbeeeeee..
                    ........1.bb..1f.1..bb.1..1..1
                    ..............8f..............
                    `],
                150,
                true
                )
            }
        } else {
            value.follow(null)
        }
    }
})
game.onUpdateInterval(1250, function () {
    for (let value of sprites.allOfKind(SpriteKind.Caraval)) {
        if (Math.abs(Ship.x - value.x) < 80 && (Math.abs(Ship.x - value.x) > 0 && (Math.abs(Ship.y - value.y) < 80 && Math.abs(Ship.y - value.y) > 0))) {
            Caraval_Projectile = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value, 0, -100)
            Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
            Caraval_Projectile.setPosition(value.x + 4, value.y)
            Caraval_Projectile = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value, 0, -100)
            Caraval_Projectile.setPosition(value.x + -6, value.y)
            Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
            Caraval_Projectile = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value, 0, 100)
            Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
            Caraval_Projectile.setPosition(value.x + 4, value.y)
            Caraval_Projectile = sprites.createProjectileFromSprite(img`
                f f 
                f f 
                `, value, 0, 100)
            Caraval_Projectile.setPosition(value.x + -6, value.y)
            Caraval_Projectile.setKind(SpriteKind.EnemyProjectile)
        }
    }
})
game.onUpdateInterval(1200, function () {
    if (Boss_Stage == 3 && (!(blockMenu.isMenuOpen()) && BossCannon_count <= 2)) {
        if (sprites.readDataNumber(Boss_Cannon_East1, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East1, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
        if (sprites.readDataNumber(Boss_Cannon_East2, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East2, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
        if (sprites.readDataNumber(Boss_Cannon_East3, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East3, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
        if (sprites.readDataNumber(Boss_Cannon_East4, "Life") > 0 && Math.percentChance(75)) {
            Boss_CannonBall = sprites.createProjectileFromSprite(img`
                . . b b b b b . . 
                . b c c c c c b . 
                b c c c c b b c b 
                b c c c c c b c b 
                b c c c c c c c b 
                b c c c c c c c b 
                b c b c c c c c b 
                . b c c c c c b . 
                . . b b b b b . . 
                `, Boss_Cannon_East4, -75, 0)
            Boss_CannonBall.setKind(SpriteKind.Boss_Cannonball)
            Boss_CannonBall.z = 4
        }
    }
})
