let GameState = {
	preload: function () {

		this.load.image('background', 'assets/images/background.jpg')
		this.load.image('chicken', 'assets/images/chicken.png')
		this.load.image('horse', 'assets/images/horse.png')
		this.load.image('pig', 'assets/images/pig.png')
		this.load.image('sheep', 'assets/images/sheep.png')
		this.load.image('arrow', 'assets/images/arrow.png')

	},
	create: function () {

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		this.scale.pageAlignHorizontally = true
		this.scale.pageAlignVertically = true

		this.background = this.game.add.sprite(0, 0, 'background')

		let animalData = [
			{ key: 'chicken', text: 'CHICKEN' },
			{ key: 'horse', text: 'HORSE' },
			{ key: 'pig', text: 'PIG' },
			{ key: 'sheep', text: 'SHEEP' }
		]

		this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
		this.chicken.anchor.setTo(0.5, 0.5)
		this.chicken.inputEnabled = true
		this.chicken.input.pixelPerfectClick = true
		this.chicken.events.onInputDown.add(this.animateAnimal, this)

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

	update: function () {

	},
	switchAnimal: function (sprite, event) {
		console.warn('move animal')
	},
	animateAnimal: function (sprite, event) {
		console.warn('animate animal')
	}

};

let game = new Phaser.Game(640, 360, Phaser.AUTO)
game.state.add('GameState', GameState)
game.state.start('GameState')