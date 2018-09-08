var gamestage7 = function(game){
	/*맵, 레이어, 캐릭터 변수*/
	var map;
	var layer1;
	var layer2;
	var layer3;
	var layer4;
	var player;
	var enemy;
	/*맵, 레이어, 캐릭터 변수*/
	
	var door3;//문짝
	
	var enemyFlag = false;
	var moveEnemy;
	var moveEnemyIndex;
	/*맵 드래그 이동을 위한 지역변수*/
	var mouseButtonClick = false;
	var offsetX = 0;
	var offsetY = 0;
	var curX;
	var curY;
	/*맵 드래그 이동을 위한 지역변수*/
	
	/*if문 사용을 위한 오브젝트 스테이지7 바닥부분, 네모 분홍*/
	var ob_north1;
	var ob_west1;
	var ob_east1;
	var ob_south1;
	var ob_north2;
	var ob_west2;
	var ob_east2;
	var ob_south2;
	var ob_north3;
	var ob_west3;
	var ob_east3;
	var ob_south3;
	
	var star1;
	var star2;
	var star3;
	/*if문 사용을 위한 오브젝트 스테이지7 바닥부분, 네모 분홍*/
	
	var sadari;//사다리
	
	/*pause 버튼*/
	var w = 800; 
	var h = 600;
	var pause_label;
	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	var clearMenu; //클리어 하면 뜸
	var gameoverMenu //사망하면 뜸
	var choiseLabel;
	
	//pause눌렀을때 pause=true조건 말고 더 강력하게
	var pauseFlag1 = false;
	//gameoverFlag...죽었을때 true로 바뀜
	var gameoverFlag = false;
	//문 열고 나서 사다리 타는 순간 true로 바뀜
	var clearFlag = false;
	
	//문을 열지 않으면 false...문열면 true로 바꿔주자
	var ifClearFlag = false;
	
	/*if문 적용 여부 플래그 ground, 다음 명령에 true가 있으면 if문 있는것으로 간주함 -> true로 바뀜*/
	var iFlag = false;
	
}
/*스크립트 변수 선언*/
var portrait;
var scriptBar;
var script_item;
var tutorial_window;
var scriptText;

/*대사 변수*/
var stage7IntroScript = ["... ... ... ...", "스테이지7시작"];
var stage7IntroScriptFlag = false;
var stage7OpenDoorScript = ["!!!", "누군가 있어"];
var stage7OpenDoorScriptFlag = false;
var stage7SadariScript = ["... ... ... ...", "사다리가 필요할 것 같은데", "저 문 뒤에 있을지도....?"];
var stage7SadariScriptFlag = false;
var scriptIndex = 0;


gamestage7.prototype = {
	preload: function(){
//		this.game.stage.backgroundColor = '#0022cc';
		this.game.load.tilemap('map7', './resources/assets/stage7/map7.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles_tileset', './resources/assets/stage7/tileset.png');
		this.game.load.spritesheet('character_player', './resources/assets/stage7/player1.png', 86, 150);
		this.game.load.image('ob', './resources/assets/stage7/obstacle_big.png');
		this.game.load.image('star', './resources/assets/stage7/star.png');
		this.game.load.image('trans', './resources/assets/stage7/trans.png');
		this.game.load.image('door3', './resources/assets/stage7/door.png');//문짝 이미지
		
		this.game.load.spritesheet('enemy', './resources/assets/stage7/dudu.png', 108, 172);
		
	},
	create: function(){
		compilerNum = 7;//컴파일 구분하기 위해!!!!!!!!!!
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = "#000000";			// 배경컬러 설정
		
		this.map = this.game.add.tilemap('map7');
		this.map.addTilesetImage('tileset', 'tiles_tileset');	//첫번째에는 타일셋의 이름, 두번째는 타일셋의 키
		
		this.layer3 = this.map.createLayer('Tile Layer 3'); // 맵 레이어 생성
		this.layer2 = this.map.createLayer('Tile Layer 2'); // 맵 레이어 생성
		this.layer1 = this.map.createLayer('Tile Layer 1'); // 맵 레이어 생성
	  	
		this.layer1.resizeWorld(); // 레이어 페이저 화면에 맞게 리사이저
		this.layer2.resizeWorld(); // 레이어 페이저 화면에 맞게 리사이저
		this.layer3.resizeWorld(); // 레이어 페이저 화면에 맞게 리사이저
		
		this.game.physics.arcade.enable(this.layer3);
//	  	this.game.physics.arcade.enable(this.layer2);
	  
		this.map.setCollisionByExclusion([],true,this.layer3); //collides on every tile  [..]
//		this.map.setCollision([12,311,312,327,328]);
		//this.layer3.setCollisionRange(0, collision_water.total - 1, true, true, true, true);

		this.star1 = this.game.add.sprite(256, 352, 'star');//방향 전환용 별
		this.star2 = this.game.add.sprite(512, 480, 'star');//방향 전환용 별
		this.star3 = this.game.add.sprite(832, 544, 'star');//방향 전환용 별
	  	/*플레이어 캐릭터 설정*/
	  	this.player = this.game.add.sprite(1073, 177, 'character');//원래 위치(1073, 177) (320,320)
	  	this.player.animations.add('down', [3,4,3,5], 10, true);
	  	this.player.animations.add('left', [6,7,6,8], 10, true);
	  	this.player.animations.add('right', [9,10,9,11], 10, true);
	  	this.player.animations.add('up', [0,1,2,1], 10, true);
	  	
  	    stop = this.player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);
  	    this.player.animations.play('stop', 5, true);
	  	   
  	    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
  	    this.player.body.collideWorldBounds = true;

	  	this.player.body.setSize(60, 60, 17, 80);//60 60  17 80
	  	this.player.body.immovable = true;
	  	/*플레이어 캐릭터 설정*/
  	    
	  	//문
	  	this.door3 = this.game.add.sprite(257, 587, 'door3');//north 256, 320
	  	this.game.physics.arcade.enable(this.door3);
	  	this.door3.body.collideWorldBounds = true;
	  	this.door3.body.bounce.setTo(1, 1);
	  	this.door3.body.immovable = true;
	  	
	  	//사다리
	  	this.sadari = this.game.add.sprite(128, 352, 'ob');//north 
	  	this.game.physics.arcade.enable(this.sadari);
	  	this.sadari.body.collideWorldBounds = true;
	  	this.sadari.body.bounce.setTo(1, 1);
	  	this.sadari.body.immovable = true;
	  	
	  	this.layer4 = this.map.createLayer('Tile Layer 4'); // 나중에 그려서 입체감
	  	this.layer4.resizeWorld(); // 나중에 그려서 입체감

/*------------------------------오브젝트1------------------------------*/
	  	//256, 352
	  	this.ob_north1 = this.game.add.sprite(256, 288, 'trans');//north 256, 320
	  	this.ob_west1 = this.game.add.sprite(192, 352, 'trans');//west
	  	this.ob_east1 = this.game.add.sprite(320, 352, 'trans');//east
	  	this.ob_south1 = this.game.add.sprite(256, 416, 'trans');//south
	  	
	  	this.game.physics.arcade.enable(this.ob_north1);
	  	this.ob_north1.body.collideWorldBounds = true;
	  	this.ob_north1.body.bounce.setTo(1, 1);
	  	this.ob_north1.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_west1);
	  	this.ob_west1.body.collideWorldBounds = true;
	  	this.ob_west1.body.bounce.setTo(1, 1);
	  	this.ob_west1.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_east1);
	  	this.ob_east1.body.collideWorldBounds = true;
	  	this.ob_east1.body.bounce.setTo(1, 1);
	  	this.ob_east1.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_south1);
	  	this.ob_south1.body.collideWorldBounds = true;
	  	this.ob_south1.body.bounce.setTo(1, 1);
	  	this.ob_south1.body.immovable = true;
	  	/*------------------------------오브젝트1------------------------------*/
	  	/*------------------------------오브젝트2------------------------------*/
	  	
	  	this.ob_north2 = this.game.add.sprite(512, 416, 'trans');//north 256, 320
	  	this.ob_west2 = this.game.add.sprite(448, 480, 'trans');//west
	  	this.ob_east2 = this.game.add.sprite(576, 480, 'trans');//east
	  	this.ob_south2 = this.game.add.sprite(512, 542, 'trans');//south
	  	
	  	this.game.physics.arcade.enable(this.ob_north2);
	  	this.ob_north2.body.collideWorldBounds = true;
	  	this.ob_north2.body.bounce.setTo(1, 1);
	  	this.ob_north2.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_west2);
	  	this.ob_west2.body.collideWorldBounds = true;
	  	this.ob_west2.body.bounce.setTo(1, 1);
	  	this.ob_west2.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_east2);
	  	this.ob_east2.body.collideWorldBounds = true;
	  	this.ob_east2.body.bounce.setTo(1, 1);
	  	this.ob_east2.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_south2);
	  	this.ob_south2.body.collideWorldBounds = true;
	  	this.ob_south2.body.bounce.setTo(1, 1);
	  	this.ob_south2.body.immovable = true;
	  	/*------------------------------오브젝트2------------------------------*/
	  	/*------------------------------오브젝트3------------------------------*/
	  	
	  	this.ob_north3 = this.game.add.sprite(832, 480, 'trans');//north 256, 320
	  	this.ob_west3 = this.game.add.sprite(768, 544, 'trans');//west
	  	this.ob_east3 = this.game.add.sprite(896, 544, 'trans');//east
	  	this.ob_south3 = this.game.add.sprite(832, 606, 'trans');//south
	  	
	  	this.game.physics.arcade.enable(this.ob_north3);
	  	this.ob_north3.body.collideWorldBounds = true;
	  	this.ob_north3.body.bounce.setTo(1, 1);
	  	this.ob_north3.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_west3);
	  	this.ob_west3.body.collideWorldBounds = true;
	  	this.ob_west3.body.bounce.setTo(1, 1);
	  	this.ob_west3.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_east3);
	  	this.ob_east3.body.collideWorldBounds = true;
	  	this.ob_east3.body.bounce.setTo(1, 1);
	  	this.ob_east3.body.immovable = true;
	  	
	  	this.game.physics.arcade.enable(this.ob_south3);
	  	this.ob_south3.body.collideWorldBounds = true;
	  	this.ob_south3.body.bounce.setTo(1, 1);
	  	this.ob_south3.body.immovable = true;
	  	/*------------------------------오브젝트3------------------------------*/
	  	
	  	var temp1 = this.game.input.onDown.add(this.mouseOnDownEvent, this);//누를때
	    var temp2 = this.game.input.onUp.add(this.mouseOnUpEvent, this);//뗄때
	    
	    /* pause_label누르면 pause됨과 동시에 menu창 뜸*/
	    this.pause_label = this.game.add.text(0, 0, 'Pause', { font: '24px Arial', fill: '#fff' });
	    this.pause_label.inputEnabled = true;
	    this.pause_label.fixedToCamera = true;
	    this.pause_label.cameraOffset.setTo(700, 20);
	    
	    this.pause_label.events.onInputUp.add(function () {
	        // When the paus button is pressed, we pause the game
	    	this.game.paused = true;
	        // Then add the menu
	        this.menu = this.game.add.sprite(this.game.camera.x+400, this.game.camera.y+300, 'menu2');
	        this.menu.anchor.setTo(0.5, 0.5);
	        
	        this.choiseLabel = this.game.add.text(this.game.camera.x+400, this.game.camera.y+450, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
	        this.choiseLabel.anchor.setTo(0.5, 0.5);
	        
	        this.pauseFlag1 = true;
	        this.pause_label.inputEnabled = false;	//클릭하면 메뉴창 닫을 때까지 클릭 안됨 
	    },this);
	    this.game.input.onDown.add(this.unpause, this);
	    /* pause_label누르면 pause됨과 동시에 menu창 뜸*/
	    
	    /*script 미희코드 긁어옴*/
		portrait = this.game.add.image(0, 0, 'portrait');	//캐릭터 그림
		portrait.fixedToCamera = true;
		portrait.cameraOffset.setTo(0, 0);
		scriptBar = this.game.add.image(0, 0, 'scriptBar');	// 스크립트창
		scriptBar.fixedToCamera = true;
		scriptBar.cameraOffset.setTo(0, 0);
		script_item = this.game.add.image(0, 0, 'script_item');	// 스크립트창
		script_item.fixedToCamera = true;
		script_item.cameraOffset.setTo(0, 0);
		tutorial_window = this.game.add.image(0, 0, 'tutorial');	// 스크립트창
		tutorial_window.fixedToCamera = true;
		tutorial_window.cameraOffset.setTo(0, 0);
		tutorial_window.visible = false;

		scriptBar.visible = false;						//초기설정
		portrait.visible = false;
		script_item.visible = false;
	 	
	 	scriptText = this.game.add.text(80, 470, '', { font: "12px Arial", fill: "#ffffff" });
	 	style = { font: "12px Arial", fill: "#fff", align: "center", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 400 };
	 	/*script 미희코드 긁어옴*/
	 	
	 	stage7IntroScriptFlag = true;
	 	this.game.paused = true;
	 	this.game.input.onDown.add(this.introScript, this);
	},
	update: function(){
		//문 안열고 나갈라고 하면
		if(this.game.physics.arcade.collide(this.player, this.sadari) && !this.clearFlag){
			actionFlag = false;//플래그
			command = 'stop';//현재 상태
			this.user('stop');//실행 부분
			this.player.x += 5;//이거 안해주니깐 레이어에 걸리네
			this.game.paused = true;
			stage7SadariScriptFlag = true;
			this.game.input.onDown.add(this.sadariScript, this);
		}
		//클리어하면
		if(this.game.physics.arcade.collide(this.player, this.sadari) && this.clearFlag){
//			alert('클리어');
			this.game.paused = true;
			
			this.clearMenu = this.game.add.sprite(this.game.camera.x+400, this.game.camera.y+300, 'menu3');
	        this.clearMenu.anchor.setTo(0.5, 0.5);
	        
	        this.pause_label.inputEnabled = false;	//이 상태에서 pause버튼 안눌리게 함
	        this.ifClearFlag = true;
	        this.game.input.onDown.add(this.clearState, this);
		}
		//적이랑 부딫히면
		if(this.game.physics.arcade.collide(this.player, this.enemy)){
//			alert('사망!!!!!');
			this.enemy.destroy();
			this.game.paused = true;
			
			this.gameoverMenu = this.game.add.sprite(this.game.camera.x+400, this.game.camera.y+300, 'menu4');
	        this.gameoverMenu.anchor.setTo(0.5, 0.5);
	        
	        this.choiseLabel = this.game.add.text(this.game.camera.x+400, this.game.camera.y+450, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
	        this.choiseLabel.anchor.setTo(0.5, 0.5);
	        
	        this.pause_label.inputEnabled = false;	//이 상태에서 pause버튼 안눌리게 함
	        this.gameoverFlag = true;
	        this.game.input.onDown.add(this.gameoverState, this);
		}
		//문이랑 부딫히면
		if(this.game.physics.arcade.collide(this.player, this.door3)){
			this.clearFlag = true;//이제는 출구 가면 클리어 됨
			actionFlag = false;//플래그
			command = 'stop';//현재 상태
			this.user('stop');//실행 부분
			this.door3.destroy();//문 빠개짐
			this.openDoor();//두두 움직이게 함
			this.game.paused = true;
			stage7OpenDoorScriptFlag = true;
			this.game.input.onDown.add(this.openDoorScript, this);
		}
		//적 움직이게 정해진 인덱스 순서대로 움직임...왼,위,왼,위
		if(this.enemyFlag){
			if(this.game.physics.arcade.collide(this.enemy, this.layer3)){
				this.moveEnemyIndex++;
				this.enemyMove(this.moveEnemy[this.moveEnemyIndex]);
			}
		}
		if(this.game.physics.arcade.collide(this.player, this.layer3)){
			console.log("%ccollide layer3", "color:pink; background:green");
			this.user('stop');//일단 멈춤
			//값을 받아 넣어둔 배열의 인덱스 증가
			arrActionNum++;//충돌했을때 다음 인덱스로
//			alert(arrActionNum);
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
//				alert(arrAction);//배열출력
//				alert(arrActionNum);
				this.iFlag = false;
				command = arrAction[arrActionNum];
				this.user(command);//실행 부분
				
				//다음 동작이 if문일 경우에
				//null검사는 배열 넘어가는 경우 예외 처리
				if(arrAction[arrActionNum+1] != null){
					if(arrAction[arrActionNum+1].indexOf('true') != -1){
						console.log("%cnext is true!!!!!", "color:pink; background:green");
//						alert('next is true!!!');
						this.iFlag = true;
						arrActionNum++;//인덱스 올려주고
						if(arrAction[arrActionNum].indexOf('trueleft') != -1){
							arrAction[arrActionNum] = 'left';
						}else if(arrAction[arrActionNum].indexOf('trueright') != -1){
							arrAction[arrActionNum] = 'right';
						}else if(arrAction[arrActionNum].indexOf('trueup') != -1){
							arrAction[arrActionNum] = 'up';
						}else if(arrAction[arrActionNum].indexOf('truedown') != -1){
							arrAction[arrActionNum] = 'down';
						}
					}
				}
			}
		}
		else{
			if(this.iFlag){
				if(command === "left"){
					console.log("%ccharacter state : left", "color:pink; background:green");
					if(this.game.physics.arcade.collide(this.player, this.ob_west1) || this.game.physics.arcade.collide(this.player, this.ob_west2) || this.game.physics.arcade.collide(this.player, this.ob_west3)){
						console.log("%ccharacter state : left, collide : ob_west", "color:pink; background:gray");
						this.player.x += 2;//이거 안해주니깐 레이어에 걸리네
						this.user('stop');//일단 멈춤
						//값을 받아 넣어둔 배열의 인덱스 증가
						command = "stop";//플래그주고
					}
				}
				else if(command === "right"){
					console.log("%ccharacter state : right", "color:pink; background:yellow");
					if(this.game.physics.arcade.collide(this.player, this.ob_east1) || this.game.physics.arcade.collide(this.player, this.ob_east2) || this.game.physics.arcade.collide(this.player, this.ob_east3)){
						console.log("%ccharacter state : right, collide : ob_east", "color:pink; background:gray");
						this.player.x -= 2;//이거 안해주니깐 레이어에 걸리네
						this.user('stop');//일단 멈춤
						//값을 받아 넣어둔 배열의 인덱스 증가
						command = "stop";//플래그주고
					}
				}
				else if(command === "up"){
					console.log("%ccharacter state : up", "color:pink; background:gray");
					if(this.game.physics.arcade.collide(this.player, this.ob_north1) || this.game.physics.arcade.collide(this.player, this.ob_north2) || this.game.physics.arcade.collide(this.player, this.ob_north3)){
						console.log("%ccharacter state : up, collide : ob_north", "color:pink; background:gray");
						this.player.y += 2;//이거 안해주니깐 레이어에 걸리네
						this.user('stop');//일단 멈춤
						//값을 받아 넣어둔 배열의 인덱스 증가
						command = "stop";//플래그주고
					}
				}
				else if(command === "down"){
					console.log("%ccharacter state : down", "color:pink; background:orange");
					if(this.game.physics.arcade.collide(this.player, this.ob_south1) || this.game.physics.arcade.collide(this.player, this.ob_south2) || this.game.physics.arcade.collide(this.player, this.ob_south3)){
						console.log("%ccharacter state : down, collide : ob_south", "color:pink; background:gray");
						this.player.y -= 2;//이거 안해주니깐 레이어에 걸리네
						this.user('stop');//일단 멈춤
						//값을 받아 넣어둔 배열의 인덱스 증가
						command = "stop";//플래그주고
					}
				}
			}
		}
		if(this.mouseButtonClick){
			offsetX = this.game.input.activePointer.positionDown.x - this.game.input.activePointer.position.x;
	    	offsetY = this.game.input.activePointer.positionDown.y - this.game.input.activePointer.position.y;
	    	this.game.camera.x = this.curX + offsetX;
	    	this.game.camera.y = this.curY + offsetY;
	    }
	},
	
	mouseOnDownEvent: function(){
		this.curX = this.game.camera.x;
		this.curY = this.game.camera.y;
		this.mouseButtonClick = true;
	},
	mouseOnUpEvent: function(){
		this.mouseButtonClick = false;
	},
	unpause: function(event){
		console.log("%cunpause!!!!!", "color:blue; background:green");
        if(this.game.paused && this.pauseFlag1){
            //this.game.camera.x는 왼쪽 상단 기준
            //event는 현재 카메라 기준으로 들어감
            if(event.x > 280 && event.x < 353 && event.y > 270 && event.y < 343){
            	//목록으로 가기 + 초기화 해줘야함
            	console.log("%cgoSelectStage Button!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("SelectStage");
            }
            else if(event.x > 363 && event.x < 437 && event.y > 270 && event.y < 343){
            	//계속하기
            	this.pauseFlag1 = false;
            	this.pause_label.inputEnabled = true;
                this.menu.destroy();
                this.choiseLabel.destroy();
                this.game.paused = false;
            }
            else if(event.x > 448 && event.x < 520 && event.y > 270 && event.y < 343){
            	//다시하기
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage7");
            }
        }
    },
    gameoverState: function(event){
    	if(this.game.paused && this.gameoverFlag){
    		if(event.x > 363 && event.x < 437 && event.y > 270 && event.y < 343){
    			actionFlag = false;
    			command = "stop";
    			this.clearFlag = false;
    			this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("SelectStage");
            }
    	}
    },
    clearState: function(event){
    	if(this.game.paused && this.ifClearFlag){
    		if(event.x > 280 && event.x < 353 && event.y > 270 && event.y < 343){
            	//목록으로 가기 + 초기화 해줘야함
    			console.log("%cgoSelectStage Button!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("SelectStage");
            }
            else if(event.x > 363 && event.x < 437 && event.y > 270 && event.y < 343){
            	//다시하기
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		clearFlag = false;
        		this.ifClearFlag = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage7");
            }
            else if(event.x > 448 && event.x < 520 && event.y > 270 && event.y < 343){
            	//다음스테이지
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage8");
            }
    	}
    },
    //실행 되면 두두 생기고 따라가게
    openDoor: function(){
    	this.enemy = this.game.add.sprite(350, 700, 'enemy');//(1073, 177)
	  	this.enemy.animations.add('enemyDown', [3,4,3,5], 10, true);
	  	this.enemy.animations.add('enemyLeft', [6,7,6,8], 10, true);
	  	this.enemy.animations.add('enemyRight', [9,10,9,11], 10, true);
	  	this.enemy.animations.add('enemyUp', [0,1,0,2], 10, true);
	  	
  	    enemyStop = this.enemy.animations.add('enemyStop', [1], 0.1, true);
  	    this.enemy.animations.play('enemyStop', 5, true);
  	    
  	    this.game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
	    this.enemy.body.collideWorldBounds = true;
  	    
  	    this.enemy.body.setSize(60, 60, 25, 80);//60 60  17 80
	  	this.enemy.body.immovable = true;
	  	
	  //적 이동
		this.moveEnemy = new Array();
		this.moveEnemy = ['left', 'up', 'left', 'up', 'stop'];
		this.moveEnemyIndex = 0;
		this.enemyFlag = true;
	
		this.enemyMove(this.moveEnemy[this.moveEnemyIndex]);
	  	
    },
    introScript : function() {
    	if(stage7IntroScriptFlag && this.game.paused){
			if(scriptIndex == 0){
				scriptBar = this.game.add.image(0, 0, 'scriptBar');	
				scriptBar.fixedToCamera = true;
				scriptBar.cameraOffset.setTo(0, 0);
			}
			if(stage7IntroScript[scriptIndex] == null){
				scriptBar.visible = false;
				scriptText.visible = false;
				stage7IntroScriptFlag = false;
				this.game.paused = false;
				scriptIndex = 0;
				return;
			}
			scriptText.setText(stage7IntroScript[scriptIndex]);
			scriptBar.addChild(scriptText);
			scriptIndex++;
    	}
	},
	openDoorScript : function() {
    	if(stage7OpenDoorScriptFlag && this.game.paused){
    		console.log("%copenDoorScript", "color:pink; background:green");
			if(scriptIndex == 0){
				scriptBar.visible = true;
				scriptText.visible = true;
			}
			if(stage7OpenDoorScript[scriptIndex] == null){
				scriptBar.visible = false;
				scriptText.visible = false;
				stage7OpenDoorScriptFlag = false;
				this.game.paused = false;
				scriptIndex = 0;
				return;
			}
			scriptText.setText(stage7OpenDoorScript[scriptIndex]);
			scriptBar.addChild(scriptText);
			scriptIndex++;
    	}
	},
	sadariScript : function() {
		if(stage7SadariScriptFlag && this.game.paused){
    		console.log("%copenDoorScript", "color:pink; background:green");
			if(scriptIndex == 0){
				scriptBar.visible = true;
				scriptText.visible = true;
			}
			if(stage7SadariScript[scriptIndex] == null){
				scriptBar.visible = false;
				scriptText.visible = false;
				stage7SadariScriptFlag = false;
				this.game.paused = false;
				scriptIndex = 0;
				return;
			}
			scriptText.setText(stage7SadariScript[scriptIndex]);
			scriptBar.addChild(scriptText);
			scriptIndex++;
    	}
	},
    closeScript: function () {
//		alert("closeScript");
		scriptBar.visible = false; //대사가 모두 떳다면 클릭 했을경우 대사창 꺼짐
		portrait.visible = false;   //대사가 모두 떳다면 클릭 했을경우 초상화 꺼짐
		script_item.visible = false;
		tutorial_window.visible = false;
		
		text.text="";				//대사 공백처리

		this.game.paused = false;
	},
	user: function(command) {
		if(command === 'left'){
			this.player.body.velocity.y=0;
			this.player.body.velocity.x = -150;
			this.player.animations.play('left');
		} else if(command === 'right'){
			this.player.body.velocity.y=0;
			this.player.body.velocity.x += 150;
			this.player.animations.play('right');
		} else if(command === 'up'){
			this.player.body.velocity.x=0;
			this.player.body.velocity.y=-150;
			this.player.animations.play('up');
		} else if(command === 'down'){
			this.player.body.velocity.x=0;
			this.player.body.velocity.y=150;
			this.player.animations.play('down');
		} else if(command === 'stop') {
			this.player.body.velocity.y=0;
			this.player.body.velocity.x=0;
			this.player.animations.stop();
			this.player.animations.play('stop', 5, true);
		}
	},
	enemyMove: function(command){
		if(command === 'left'){
			this.enemy.body.velocity.y=0;
			this.enemy.body.velocity.x = -475;
			this.enemy.animations.play('enemyLeft');
		}  else if(command === 'up'){
			this.enemy.body.velocity.x=0;
			this.enemy.body.velocity.y=-475;
			this.enemy.animations.play('enemyUp');
		} 
	}
}