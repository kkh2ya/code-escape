var gamestage6 = function(game){
	var layer;
	var player;
}
 
gamestage6.prototype = {
  	create: function(){
  		this.game.physics.startSystem(Phaser.Physics.ARCADE);
  		
  		this.game.stage.backgroundColor = "#3a5963"; // 배경컬러 설정

  		var map = this.game.add.tilemap('map2', 32, 32); // 타일맵 추가
  		map.addTilesetImage('tiles'); // 타일셋 이미지를 맵에 추가
  		
  		layer = map.createLayer(0); // 맵 레이어 생성
  		layer.resizeWorld(); // 레이어 페이저 화면에 맞게 리사이저
  		
  		map.setCollision([97]); // 충돌 범위 설정
  		
  		var smile = this.game.add.sprite(300, 300, 'smile');
  		
  		var nextButton = this.game.add.button(200,200,"button",this.moveNextStage6,this);
  		nextButton.anchor.setTo(0.5,0.5);
  		
  		player = this.game.add.sprite(100, 200, 'dude');
  		player.animations.add('down', [4], 10, true);
  		player.animations.add('left', [0,1,2,3], 10, true);
  		player.animations.add('right', [5,6,7,8], 10, true);
  		player.animations.add('up', [7,8], 10, true);
  		
  		this.game.physics.arcade.enable(player);
  		player.body.setSize(64, 64, 20, 87);
  		player.body.immovable = true;
  		
	},
	update: function(){
		if(this.game.physics.arcade.collide(player, layer)){
			console.log("%cupdate", "color:pink; background:green");
			this.user('stop');//일단 멈춤
			//값을 받아 넣어둔 배열의 인덱스 증가
			arrActionNum++;//충돌했을때 다음 인덱스로
			alert(arrActionNum);
			command = "stop";//플래그주고
		}
		if(command === "stop") {	
			console.log("%cgamestage1 if stop", "color:pink; background:green");
			if(actionFlag){
				if(arrActionNum === arrAction.length-1) {
					console.log("????");
					actionFlag = false;//동작
				}
				//user 함수에 값 전달(clickCode에서 받아온 리스트를 배열에 담아두었으므로, 실행되어야할 코드의 인덱스 번호를 찾아서 전달)
				alert(arrAction);//배열출력
				command = arrAction[arrActionNum];
				this.user(command);//실행 부분
			}
		}
	},
	moveNextStage6: function(){
		console.log("%cmoveNextStage2", "color:pink; background:yellow");
		this.game.state.start("SelectStage");
	},
	user: function(command) {
		if(command === 'left'){
			player.body.velocity.y=0;
			player.body.velocity.x = -150;
			player.animations.play('left');
		} else if(command === 'right'){
			player.body.velocity.y=0;
			player.body.velocity.x += 150;
			player.animations.play('right');
		} else if(command === 'up'){
			player.body.velocity.x=0;
			player.body.velocity.y=-150;
			player.animations.play('up');
		} else if(command === 'down'){
			player.body.velocity.x=0;
			player.body.velocity.y=150;
			player.animations.play('down');
		} else if(command === 'stop') {
			player.body.velocity.y=0;
			player.body.velocity.x=0;
			player.animations.stop();
			player.animations.play('stop', 5, true);
		}
	}
	
}