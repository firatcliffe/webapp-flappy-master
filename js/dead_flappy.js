var stateActions = { preload: preload, create: create, update: update };
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var labelScore;
var gapStart = game.rnd.integerInRange(1, 5);
var pipes = [];
//Variables
var score = 0;

function preload() {
  game.load.image("playerImg", "../assets/jamesBond.gif");
  game.load.audio("score", "../assets/point.ogg");
  game.load.image("pipeBlock","../assets/pipe_mint.png");
}

game.stage.setBackgroundColor("#F3D3A3");
}
  //var background = game.add.image(0, 0, "backgroundImg");
  //background.width = 790;
  //background.height = 400;

  //Game GFX and Physics
  game.stage.setBackgroundColor("#F3D3A3");
  game.add.sprite(100, 200, "playerImg");

  //Event Handlers
  game.input
    .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(spaceHandler);

    //alert(score);

    //Score Handlers
    labelScore = game.add.text(20, 20, "0");

    //Player Handlers
      player = game.add.sprite(100, 200, "playerImg");

    //
      game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
                     .onDown.add(moveRight);

      game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
                     .onDown.add(moveLeft);

      game.input.keyboard.addKey(Phaser.Keyboard.UP)
                      .onDown.add(moveUp);

      game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
                      .onDown.add(moveDown);


  function generatePipe() {
      var gap = game.rnd.integerInRange(1 ,5);
      for (var count=0; count<8; count++) {
        if (count != gap && count != gap+1) {
            addPipeBlock(40, count*50);
    }
  }
}

  for(var count=0; count<8; count++){
      if(count != 4){
          game.add.sprite(0, 50 * count, "pipeBlock");
    }
}

  for (var count=2; count<10; count+=2) {
      game.add.sprite(count * 50, 200, "pipeBlock");
}

  if (count<5) {
        alert("count is smaller than 5!");
}

  function addPipeBlock(x, y) {
      var block = game.add.sprite(x,y,"pipeBlock");
        pipes.push(block);
      }

  function update(){
    }




//START Custom Functions
  function changeScore() {

      score = score + 1;
    labelScore.setText(score.toString());
  }

  function clickHandler(event) {
        alert("The position is: " + event.x + "," + event.y);
    }

  function spaceHandler() {
        game.sound.play("score");
    }

  function moveRight() {
    	player.x = player.x + 10;
    }

  function moveLeft() {
      	player.x = player.x - 10;
    }

  function moveUp() {
      	player.y = player.y - 10;
    }

  function moveDown() {
      	player.y = player.y + 10;
    }

  player.body.velocity.x = 100;
  player.body.velocity.y = -100;
  player.body.gravity.y = 200;
  //END Custom Functions

  // player is the name of the sprite
  player.kill();
