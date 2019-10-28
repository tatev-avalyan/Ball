let GameState = {
    preload: function(){
          this.load.image('background', 'assets/images/background.jpg')
          this.load.image('chicken', 'assets/images/chicken.png')
          this.load.image('horse', 'assets/images/horse.png')
          this.load.image('pig', 'assets/images/pig.png')
          this.load.image('sheep', 'assets/images/sheep.png')
    },
    create: function(){


    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true


    this.background = this.game.add.sprite(0, 0, 'background');
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
    this.horse = this.game.add.sprite(120, 80, 'horse')
    this.pig = this.game.add.sprite(500, 280, 'pig')
    this.sheep = this.game.add.sprite(520, 120, 'sheep')
        
    this.chicken.anchor.setTo(0.5, 0.5)
    this.horse.anchor.setTo(0.5, 0.5)
    this.pig.anchor.setTo(0.5, 0.5)
    this.sheep.anchor.setTo(0.5, 0.5)

    this.chicken.scale.setTo(2,1 )
    this.pig.scale.setTo(-1,1)

  
    this.sheep.angle = - 45

    },
    update: function(){

        this.sheep.angle+= 0.5
    }
};

let game = new Phaser.Game(640, 360, Phaser.AUTO)
game.state.add('GameState', GameState)
game.state.start('GameState')