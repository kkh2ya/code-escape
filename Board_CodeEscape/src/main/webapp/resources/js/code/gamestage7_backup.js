var gamestage7 = function(game){
	var layer;
	var player;
	
	var cursors;
	var logo1;
	var logo2;
	
	var nextButton;
	var mouseButtonClick = false;
	
	var offsetX = 0;
	var offsetY = 0;
}

gamestage7.prototype = {
	preload: function(){
		this.game.stage.backgroundColor = '#0022cc';
	},
	create: function(){
	//  Modify the world and camera bounds
		this.game.world.setBounds(-1000, -1000, 2000, 2000);

	    for (var i = 0; i < 15; i++)
	    {
	    	this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'button');
	    }

	    this.game.add.text(0, 0, "this text scrolls\nwith the background", { font: "32px Arial", fill: "#f26c4f", align: "center" });

	    logo1 = this.game.add.sprite(0, 0, 'six');
	    logo1.fixedToCamera = true;
	    logo1.cameraOffset.setTo(100, 100);

	    logo2 = this.game.add.sprite(0, 0, 'seven');
	    logo2.fixedToCamera = true;
	    logo2.cameraOffset.setTo(500, 100);
	    
	    nextButton = this.game.add.button(0,0,"button",this.moveNextStage7,this);
	    nextButton.fixedToCamera = true;
	    nextButton.cameraOffset.setTo(100, 400);

	    var t = this.game.add.text(0, 0, "this text is fixed to the camera", { font: "32px Arial", fill: "#ffffff", align: "center" });
	    t.fixedToCamera = true;
	    t.cameraOffset.setTo(200, 500);

	    this.game.add.tween(logo2.cameraOffset).to( { y: 400 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);

	    cursors = this.game.input.keyboard.createCursorKeys();
  		
	    var temp1 = this.game.input.onDown.add(this.mouseOnDownEvent, this);//한번클릭
	    var temp2 = this.game.input.onUp.add(this.mouseOnUpEvent, this);//한번클릭
	},
	update: function(){
//		if (cursors.up.isDown)
//	    {
//			this.game.camera.y -= 4;
//	    }
//	    else if (cursors.down.isDown)
//	    {
//	    	this.game.camera.y += 4;
//	    }
//
//	    if (cursors.left.isDown)
//	    {
//	    	this.game.camera.x -= 4;
//	    }
//	    else if (cursors.right.isDown)
//	    {
//	    	this.game.camera.x += 4;
//	    }
	    
//		if(this.game.input.onDown.add(this.mouseOnDownEvent, this)){
//	    	console.log("%cbuttondown", "color:blue; background:green");
//	    	mouseButtonclick = true;
//	    	this.game.camera.x += this.game.input.activePointer.position.x;
//	    	this.game.camera.y += this.game.input.activePointer.position.y;
//	    }
	    
//	    if(this.game.input.activePointer.leftButton.isUp){
//	    	console.log("%cbuttonup", "color:blue; background:green");
//	    	mouseButtonclick = false;
//	    }
	    if(this.mouseButtonClick){
	    	console.log("%cmouseButtonClick", "color:blue; background:yellow");
	    	console.log(this.game.input.activePointer.position.x);//현재 포지션
	    	console.log(this.game.input.activePointer.positionDown.x);//클릭한 포지션, 다시 클릭할 때까지 안바뀜
	    	offsetX = this.game.input.activePointer.positionDown.x - this.game.input.activePointer.position.x;
	    	offsetY = this.game.input.activePointer.positionDown.y - this.game.input.activePointer.position.y;
	    	this.game.camera.x += offsetX;
	    	this.game.camera.y += offsetY;
	    	offsetX = 0;
	    	offsetY = 0;
	    	//여기선 this.game.camera.x와y를 오프셋과의 연산으로 바꿔주기만 하자
	    }
	},
	render: function() {
		this.game.debug.cameraInfo(this.game.camera, 32, 32);
	},
	
	moveNextStage7: function(){
		console.log("%cmoveNextStage3", "color:blue; background:green");
		actionFlag = false;
		command = "stop";
		this.game.state.start("SelectStage");
	},
	mouseOnDownEvent: function(){
		console.log("%cmouseondownevent", "color:blue; background:pink");
		this.mouseButtonClick = true;
		console.log(this.mouseButtonClick);
	},
	mouseOnUpEvent: function(){
		console.log("%cmouseonupevent", "color:blue; background:orange");
		this.mouseButtonClick = false;
		console.log(this.mouseButtonClick);
	}
	
}