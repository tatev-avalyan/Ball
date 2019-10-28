let GameState = {
    preload: function(){
          this.load.image('background', 'assets/images/background.jpg')
          this.load.image('chicken', 'assets/images/chicken.png')
          this.load.image('horse', 'assets/images/horse.png')
          this.load.image('pig', 'assets/images/pig.png')
          this.load.image('sheep', 'assets/images/sheep.png')
          this.load.image('arrow', 'assets/images/arrow.png')

    },
    create: function(){


    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true


    this.background = this.game.add.sprite(0, 0, 'background');

    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
    this.chicken.anchor.setTo(0.5, 0.5)

    this.rightArrow = this.game.add.sprite(550, this.game.world.centerY,'arrow')
    this.rightArrow.anchor.setTo(0.5)
    this.rightArrow.customParams = {direction: 1}

    this.leftarrow = this.game.add.sprite(70, this.game.world.centerY,'arrow')       
    this.leftarrow.anchor.setTo(0.5)
    this.leftarrow.scale.x = -1
    this.leftarrow.customParams = {direction: -1}


    },
    update: function(){

    }
};

let game = new Phaser.Game(640, 360, Phaser.AUTO)
game.state.add('GameState', GameState)
game.state.start('GameState')