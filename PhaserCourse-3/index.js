const game = new Phaser.Game(640, 399, Phaser.AUTO)
let GameState = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

    },
    preload: function () {

        this.load.image('backyard', 'assets/images/backyard.jpg')
        this.load.image('apple', 'assets/images/apple.png')
        this.load.image('duck', 'assets/images/duck.png')
        this.load.image('candy', 'assets/images/candy.png')
        this.load.image('rotate', 'assets/images/rotate.png')
        this.load.spritesheet('spritesheet', 'assets/images/spritesheet.png', 150, 150, 7)
    },
    create: function () {

        this.backyard = this.game.add.sprite(0, 0, 'backyard')
        this.spritesheet = this.game.add.sprite(250, 250, 'spritesheet')
        this.spritesheet.anchor.setTo(0.5)
        this.candy = this.game.add.sprite(180, 330, 'candy')
        this.duck = this.game.add.sprite(250, 330, 'duck')
        this.apple = this.game.add.sprite(320, 330, 'apple')
        this.rotate = this.game.add.sprite(370, 330, 'rotate')
    

        this.spritesheet.customParams = {health: 100, fun: 100}
    },
    update: function () {

    }
}


game.state.add('GameState', GameState)
game.state.start('GameState')