let GameState = {
    preload: function () {

        this.load.image('background', 'assets/images/background.jpg')
        this.load.image('chicken', 'assets/images/chicken.png')
        this.load.image('horse', 'assets/images/horse.png')
        this.load.image('pig', 'assets/images/pig.png')
        this.load.image('sheep', 'assets/images/sheep.png')
        this.load.image('arrow', 'assets/images/arrow.png')
				this.load.spritesheet('mumy_spritesheet', 'assets/images/mumy_spritesheet.png', 139.8, 170, 5)
				
				this.load.audio('soundZombie', ['assets/audio/soundZombie.ogg','assets/audio/soundZombie.mp3'])
    },
    create: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

        this.background = this.game.add.sprite(0, 0, 'background')

        const animalData = [
            { key: 'chicken', text: 'CHICKEN' },
            { key: 'horse', text: 'HORSE' },
            { key: 'pig', text: 'PIG' },
            { key: 'sheep', text: 'SHEEP' },
            { key: 'mumy_spritesheet', text: 'MUMMY' , audio: 'soundZombie'}
        ]

        this.animals = this.game.add.group()

        let self = this
				let animal
        animalData.forEach(function(element) {
						animal = self.animals.create(-1000, self.game.world.centerY, element.key, 0)	// 0 nshanakum e skzbnakan index
            animal.customParams = { text: element.text , sound: self.game.add.audio(element.audio)}
            animal.anchor.setTo(0.5, 0)
            animal.animations.add('animate',[], 5, false)  //correct this!!!   //corrected

            animal.inputEnabled = true
            animal.input.pixelPerfectClick = true
            animal.events.onInputDown.add(self.animateAnimal, self)

        })

        this.currentAnimal = this.animals.next()
        this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY)

        this.showText(this.currentAnimal)

        this.rightArrow = this.game.add.sprite(550, this.game.world.centerY, 'arrow')
        this.rightArrow.anchor.setTo(0.5)
        this.rightArrow.customParams = { direction: 1 }
        this.rightArrow.inputEnabled = true
        this.rightArrow.input.pixelPerfectClick = true
        this.rightArrow.events.onInputDown.add(this.switchAnimal, this)

        this.leftArrow = this.game.add.sprite(70, this.game.world.centerY, 'arrow')
        this.leftArrow.anchor.setTo(0.5)
        this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = { direction: -1 }
        this.leftArrow.inputEnabled = true
        this.leftArrow.input.pixelPerfectClick = true
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this)

    },

    switchAnimal: function (sprite, event) {
        if (this.isMoving) {
            return false
        }
				this.isMoving = true
				this.animalText.visible = false
        let newAnimal, endX
        if (sprite.customParams.direction > 0) {
            newAnimal = this.animals.next()
            newAnimal.x = - newAnimal.width / 2
            endX = 640 + this.currentAnimal.width / 2
        } else {
            newAnimal = this.animals.previous()
            newAnimal.x = 640 + newAnimal.width / 2
            endX = -this.currentAnimal.width / 2
        }

        let newAnimalMovement = game.add.tween(newAnimal)
        newAnimalMovement.to({ x: this.game.world.centerX }, 1000)
        newAnimalMovement.onComplete.add(function () {
						this.isMoving = false
						this.showText(newAnimal)
						
        }, this)
        newAnimalMovement.start()

        let currentAnimalMovement = this.game.add.tween(this.currentAnimal)
        currentAnimalMovement.to({ x: endX }, 1000)
        currentAnimalMovement.start()

        this.currentAnimal = newAnimal
		},
		showText: function(animal) {
      if(!this.animalText) {
				let style = {
					font: 'italic 20pt Arial',
					fill: 'red',
					align: 'center'
				}
				this.animalText = this.game.add.text(this.game.width/2, this.game.height * 0.85, '', style)
				this.animalText.anchor.setTo(0.5, 6)
			}
			this.animalText.setText(animal.customParams.text)
			this.animalText.visible = true
		},
    animateAnimal: function (sprite, event) {
				sprite.play('animate')
				sprite.customParams.sound.play()
    },

    update: function () {

    }
};

let game = new Phaser.Game(640, 360, Phaser.AUTO)
game.state.add('GameState', GameState)
game.state.start('GameState')