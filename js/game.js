var anim;
var timer;
var music;

class Example extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.path = 'assets/images/';

    for (let index = 1; index < 505; index++) {
      this.load.image('frame_' + index, index + '.png');
    }
    this.load.path = 'assets/sounds/';
    this.load.audio('theme', 'do_the_toothie.mp3');
  }

  create() {
    anim = this.anims.create({
      key: 'toothy',
      frames: [],
      frameRate: 16,
      repeat: -1
    });
    for (let index = 1; index < 506; index++) {
      anim.addFrame([{ key: "frame_" + index }]);
    }

    this.add.sprite(400, 300, 'tooth')
      .play('toothy')
      .setScale(2);

      music = this.sound.add('theme');
      timer = this.time.addEvent({
        delay: 5000,
        callback: ()=>{music.play()},
        loop: false
    });
      
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: Example
};

const game = new Phaser.Game(config);
