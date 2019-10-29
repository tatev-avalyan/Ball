let game = new Phaser.Game(800, 600, Phaser.AUTO)

let sprite
let GameState = {
    preload: function () {
        game.load.spritesheet('ms', 'assets/images/mumy_spritesheet.png', 37, 45, 5)
    },
    create: function () {

        sprite = game.add.sprite(40, 100, 'ms')
        sprite.animations.add('walk')
        sprite.animations.play('walk', 50, true)
        game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true)
    },

    update: function () {
        if (sprite.x >= 300) {
            sprite.scale.x += 0.01
            sprite.scale.y += 0.01
        }
    }
};

game.state.add('GameState', GameState)
game.state.start('GameState')