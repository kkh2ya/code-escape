var gamestage8 = function(game){
	var map;
	var layer1;
	var layer2;
	var player;
	
	var nextButton;
	
	//맵 이동을 위한 지역변수 선언
	var mouseButtonClick = false;
	var offsetX = 0;
	var offsetY = 0;
	var curX;
	var curY;
	//if문 사용을 위한 오브젝트
	var ob_north1;
	var ob_west1;
	var ob_east1;
	var ob_south1;
	
	//if문 적용 여부 플래그 
	var iFlag = false;
	
	//pause
	var w = 800; 
	var h = 600;
	var pause_label;
	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	var choiseLabel;
	
	//출구
	var sadari;
	//따라오는놈
	var dudePlayer;
	////////////////////////////////////////추가
//	var checkBag = true;
	//1. 버튼 이벤트를 위한 변수
	var inventory;
	var inven;
	var button;
	var popup;
	var tween = null;
	var width;
	var height;
}
//var menu;
//var layer1;
//var layer2;

/*위의 지역변수 전역변수로 설정함*/
var line = [];
//대사의 한 줄의 단어들이 담길 배열
var wordIndex = 0;
//한 줄의 단어들의 순번
var lineIndex = 0;
//대사 의 순번
var slineIndex = 0;
//#로 구분지은 부분까지의 인덱스를 미리 구해놓는 순번으로 마우스 클릭 시 바로 전체 스크립트가 뜨게 하는데 사용(이벤트에 사용)
var sslineIndex = 0;
//#로 구분지은 부분까지의 인덱스를 미리 구해놓는 순번으로 마우스 클릭 시 바로 전체 스크립트가 뜨게 하는데 사용(객체에 사용)
var wordDelay = 300;
//새로운 한 단어가 뜨는 딜레이
var lineDelay = 20;
//새로운 한 줄이 뜨는 딜레이
var myLoop;
//eventRepeat를 저장함
var receivedcommand;
//대사 클릭 후 진행하던 명령을 이어가게 하기 위한 변수
var script = '';
//#로 구분지은 부분까지의 대사를 미리 저장하기 위한 변수

var checkBag = true;
////1. 버튼 이벤트를 위한 변수
//var inventory;
//var inven;
//var button;
//var popup;
//var tween = null;
//var width;
//var height;


gamestage8.prototype = {
	preload: function(){
		this.game.load.tilemap('map8', './resources/assets/stage8/map8.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles_TileA4', './resources/assets/stage8/TileA4.png');
		this.game.load.image('tiles_tileset', './resources/assets/stage8/tileset.png');
		this.game.load.image('tiles_OuazkaI', './resources/assets/stage8/OuazkaI.png');
		this.game.load.spritesheet('character_player', './resources/assets/stage8/player1.png', 86, 150);
		this.game.load.image('ob', './resources/assets/stage8/obstacle_big.png');
		this.game.load.image('os', './resources/assets/stage8/obstacle_small.png');
		
//		this.game.load.image('menu', './resources/assets/stage8/number-buttons-90x90.png', 270, 180);
//		this.game.load.image('menu2', './resources/assets/public/game_pause.png', 270, 180);
		this.game.load.spritesheet('dude_player', './resources/assets/stage8/dude.png', 32, 48);
	},
	create: function(){
		compilerNum = 8;//컴파일 구분하기 위해!!!!!!!!!!
		
		this.game.physics.startSystem(Phaser.Physics.P2JS);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.map = this.game.add.tilemap('map8');
		this.map.addTilesetImage('TileA4', 'tiles_TileA4');	//첫번째에는 타일셋의 이름, 두번째는 타일셋의 키
		this.map.addTilesetImage('tileset', 'tiles_tileset');	//첫번째에는 타일셋의 이름, 두번째는 타일셋의 키
		this.map.addTilesetImage('OuazkaI', 'tiles_OuazkaI');	//첫번째에는 타일셋의 이름, 두번째는 타일셋의 키
		
		this.layer2 = this.map.createLayer('Tile Layer 2'); // 맵 레이어 생성
		this.layer1 = this.map.createLayer('Tile Layer 1'); // 맵 레이어 생성
	  	
		this.layer1.resizeWorld(); // 레이어 페이저 화면에 맞게 리사이저
		this.layer2.resizeWorld(); // 레이어 페이저 화면에 맞게 리사이저
		
	  	this.game.physics.arcade.enable(this.layer1);
	  
		this.map.setCollisionByExclusion([],true,this.layer1); //collides on every tile  [..]
//		this.map.setCollision([12,311,312,327,328]);
		//this.layer3.setCollisionRange(0, collision_water.total - 1, true, true, true, true);
	  	
	  	this.player = this.game.add.sprite(114, 50, 'character_player');//(114,50)
	  	this.player.animations.add('down', [3,4,3,5], 10, true);
	  	this.player.animations.add('left', [6,7,6,8], 10, true);
	  	this.player.animations.add('right', [9,10,9,11], 10, true);
	  	this.player.animations.add('up', [0,1,2,1], 10, true);
	  	   
  	    stop = this.player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);
  	    this.player.animations.play('stop', 5, true);
	  	   
	  	this.game.physics.arcade.enable(this.player);
//  	    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
  	    this.player.body.collideWorldBounds = true;

	  	this.player.body.setSize(60, 60, 17, 80);//60 60  17 80
	  	this.player.body.immovable = true;
	  	/*따라오는놈*/
	  	this.dudePlayer = this.game.add.sprite(130, 260, 'dude_player');//(114,50)
	  	this.dudePlayer.animations.add('down', [4], 10, true);
	  	this.dudePlayer.animations.add('left', [0,1,2,3], 10, true);
	  	this.dudePlayer.animations.add('right', [5,6,7,8], 10, true);
	  	this.dudePlayer.animations.add('up', [7,8], 10, true);
	  	this.dudePlayer.animations.add('stop', [2], 10, true);
  		
  		this.game.physics.arcade.enable(this.dudePlayer);
  		this.dudePlayer.body.setSize(60, 60, 0, 0);
  		this.dudePlayer.body.immovable = true;
  		/*따라오는놈*/
	  	this.sadari = this.game.add.sprite(129, 769, 'ob');//south
	  	this.game.physics.arcade.enable(this.sadari);
	  	this.sadari.body.collideWorldBounds = true;
	  	this.sadari.body.bounce.setTo(1, 1);
	  	this.sadari.body.immovable = true;
	  	
	  	var temp1 = this.game.input.onDown.add(this.mouseOnDownEvent, this);//누를때
	    var temp2 = this.game.input.onUp.add(this.mouseOnUpEvent, this);//뗄때
	    
	 // Create a label to use as a button
	    this.pause_label = this.game.add.text(0, 0, 'Pause', { font: '24px Arial', fill: '#fff' });
	    this.pause_label.inputEnabled = true;
	    this.pause_label.fixedToCamera = true;
	    this.pause_label.cameraOffset.setTo(700, 20);
	    
	    this.pause_label.events.onInputUp.add(function () {
	        // When the paus button is pressed, we pause the game
	    	this.game.paused = true;
	        // Then add the menu
	    	tempPosition = this.game.world.randomX;
	    	tempPosition2 = this.game.camera.x;
	        this.menu = this.game.add.sprite(this.game.camera.x+400, this.game.camera.y+300, 'menu2');
	        this.menu.anchor.setTo(0.5, 0.5);
//	        this.menu.fixedToCamera = true;
//	        this.menu.cameraOffset.setTo(100, 100);
//	        this.menu.x = 100;
	        
	        // And a label to illustrate which menu item was chosen. (This is not necessary)
	        this.choiseLabel = this.game.add.text(this.game.camera.x+400, this.game.camera.y+450, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
	        this.choiseLabel.anchor.setTo(0.5, 0.5);
	        
	        this.pause_label.inputEnabled = false; 
	    },this);
	    
	    this.game.input.onDown.add(this.unpause, this);//메뉴의 버튼 누를때
	    
//	    button = this.game.add.button(width, height, 'inventory', this.openWindow, this, 2, 1, 0);
	    
	    /*inventory button*/
		width = this.player.x + 32;
		height = this.player.y + 64;
		button = this.game.add.button(width, height, 'inventory', this.openWindow, this, 2, 1, 0);
		button.input.useHandCursor = true;
//		button.input.useHandCursor = false;
		
		
		/* inventory */
		popup = this.game.add.sprite(0, 0, 'inven'); // 인벤토리창 기본설정
		popup.fixedToCamera = true;
		popup.cameraOffset.setTo(400, 300);
		popup.anchor.set(0.5);
		popup.inputEnabled = true;

		// 아이템 창의 X버튼 위치 지정
		var pw = (popup.width / 2) - 35;
		var ph = (popup.height / 2);
		   
		// X버튼 눌렀을 경우의 이벤트
		var closeButton = this.game.make.sprite(pw, -ph, 'cancel');
		closeButton.inputEnabled = true;
		closeButton.input.priorityID = 1;
		closeButton.input.useHandCursor = true;
		closeButton.events.onInputDown.add(this.closeWindow, this);
		   
		popup.addChild(closeButton); // 클로즈 버튼을 인벤토리 창에 붙이기
		popup.scale.set(0); // 팝업창의 최초 사이즈 지정
		
		/*script*/
		portrait = this.game.add.image(0, 0, 'portrait');	//캐릭터 그림
		portrait.fixedToCamera = true;
		portrait.cameraOffset.setTo(0, 0);
	 	scriptBar = this.game.add.image(0, 0, 'scriptBar');	// 스크립트창
	 	scriptBar.fixedToCamera = true;
	 	scriptBar.cameraOffset.setTo(0, 0);
	 	script_item = this.game.add.image(0, 0, 'script_item');	// 스크립트창
	 	script_item.fixedToCamera = true;
	 	script_item.cameraOffset.setTo(0, 0);
	 	
	 	scriptBar.visible = false;						//초기설정
	 	script_item.visible = false;
	 	portrait.visible = false;
	 	text = this.game.add.text(100, 460, '', { font: "15px Arial", fill: "#19de65" });
	 	scriptBar.addChild(text);
	    
//	 	alert('checkBag : '+ checkBag);
	},
	update: function(){
		/*가방의 위치 값 파악 후 적용*/
		width = this.player.x + 32;
		height = this.player.y + 64;
		button.x = width;
		button.y = height;
		
		//목적지에 도착했을 때
		if(this.game.physics.arcade.collide(this.player, this.sadari)){
			alert('sadari!!!!!!!!!');
			actionFlag = false;
			command = "stop";
			this.game.state.start("SelectStage");
		}
		//레이어와 부딫혔을 때
		if(this.game.physics.arcade.collide(this.player, this.layer1)){
			console.log("%ccollide layer1", "color:pink; background:green");
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
				alert(arrActionNum);
				this.iFlag = false;
				command = arrAction[arrActionNum];
				this.user(command);//실행 부분
			}
		}
		
		//맵이동
		if(this.mouseButtonClick){
	    	offsetX = this.game.input.activePointer.positionDown.x - this.game.input.activePointer.position.x;
	    	offsetY = this.game.input.activePointer.positionDown.y - this.game.input.activePointer.position.y;
	    	this.game.camera.x = this.curX + offsetX;
	    	this.game.camera.y = this.curY + offsetY;
	    }
	},
	
	mouseOnDownEvent: function(){
		console.log("%cmouseondownevent", "color:blue; background:pink");
		this.curX = this.game.camera.x;
		this.curY = this.game.camera.y;
		this.mouseButtonClick = true;
		console.log(this.mouseButtonClick);
	},
	mouseOnUpEvent: function(){
		console.log("%cmouseonupevent", "color:blue; background:orange");
		this.mouseButtonClick = false;
		console.log(this.mouseButtonClick);
		
	},
	unpause: function(event){
        // Only act if paused
		console.log("%cunpause!!!!!", "color:blue; background:green");
        if(this.game.paused){
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
        		this.game.state.start("GameStage8");
            }
        }
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
	render: function() {
		this.game.debug.bodyInfo(this.player, 32, 32);
		this.game.debug.body(this.player);
		this.game.debug.body(this.dudePlayer);
		this.game.debug.cameraInfo(this.game.camera, 32, 500);
	},
	
	/*인벤토리를 열었을 때의 함수*/
	openWindow: function (){
	    if ((this.tween && this.tween.isRunning) || popup.scale.x === 1){
	        return;
	    }
	    tween = this.game.add.tween(popup.scale).to( { x: 1, y: 1}, 1000, Phaser.Easing.Elastic.Out, true);
		if(flag){
		    for(var i = 0; i < myInventory.length; i++){
				array = this.game.add.image(-283, arrayH, 'array');
				myInventory[i] = popup.addChild(array);
				arrayH = arrayH + 72;
				flag = false;
		    }
		}
		this.myItemList();
	},
	/*인벤토리를 닫을 때의 함수*/
	closeWindow: function(){
	    if (tween.isRunning || popup.scale.x === 0){
	        return;
	    }
	    tween = this.game.add.tween(popup.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Quintic.In, true);
	    this.allClear();
	},
	/*인벤토리창 내부의 아이템 리스트 업데이트를 위한 함수*/
	myItemList: function(){
		if(checkWater){
			for (var i = 0; i < myItem.length; i++){
				if(water != 0){
					break;
				}
				if(myItem[i] == null){
					water_Image = this.game.add.image(16, 16, 'water');
					water_Image.inputEnabled = true;
					myInventory[i].addChild(water_Image);
					myItem[i] = "생수"
					water_name = "생수";
					water_info = "생수에 대한 설명";
					water_Image.input.useHandCursor = true;
					water_Image.events.onInputDown.add(this.selectWater, this);
					water++;
					break;
				}
			}
		} if(checkPhone){
			for (var i = 0; i < myItem.length; i++){
				if(phone != 0){
					break;
				}
				if(myItem[i] == null){
					phone_image = this.game.add.image(16, 16, 'phone');
					phone_image.inputEnabled = true;
					myInventory[i].addChild(phone_image);
					myItem[i] = "스마트폰"
					phone_name = "스마트폰";
					phone_info = "평범한 스마트폰. 나의 지문에 반응한다. 3% 남아있는 상태. 곧 꺼질듯 하다.";
					phone_image.input.useHandCursor = true;
					phone_image.events.onInputDown.add(this.selectPhone, this);
					phone++;
					break;
				}
			}
		} if(checkMask){
			for (var i = 0; i < myItem.length; i++){
				if(mask != 0){
					break;
				}
				if(myItem[i] == null){
					mask_image = this.game.add.image(16, 16, 'mask');
					mask_image.inputEnabled = true;
					myInventory[i].addChild(mask_image);
					myItem[i] = "방독면"
					mask_name = "방독면"
					mask_info = "새 것으로 추정되는 방독면. 왜 이런 데에 방독면이 있는거지?";
					mask_image.input.useHandCursor = true;
					mask_image.events.onInputDown.add(this.selectMask, this);
					mask++;
					break;
				}
			}
		} if(checkKey){
			for (var i = 0; i < myItem.length; i++){
				if(key != 0){
					break;
				}
				if(myItem[i] == null){
					key_image = this.game.add.image(16, 16, 'key');
					key_image.inputEnabled = true;
					myInventory[i].addChild(key_image);
					myItem[i] = "열쇠"
					key_name = "열쇠"
					key_info = "찾았다. 열쇠!";
					key_image.input.useHandCursor = true;
					key_image.events.onInputDown.add(this.selectKey, this);
					key++;
					break;
				}
			}
			
		} if(checkHeart){
			for (var i = 0; i < myItem.length; i++){
					if(heart != 0){
						break;
					}
				if(myItem[i] == null){
					heart_image = this.game.add.image(16, 16, 'heart');
					heart_image.inputEnabled = true;
					myInventory[i].addChild(heart_image);
					myItem[i] = "구급함"
					heart_name = "구급함"
					heart_info = "너의 비타민";
					heart_image.input.useHandCursor = true;
					heart_image.events.onInputDown.add(this.selectHeart, this);
					heart++;
					break;
				}
			}
		}
	},
	
	/*아이템창에서 열쇠를 선택했을 때*/	
	selectKey: function(){
		this.allClear();

		item_key = this.game.add.text(-135, 90, key_name, {font: "12px verdana", fill : "#ffffff"});
		info_key = this.game.add.text(-135, 110, key_info, {font: "10px verdana", fill: "#ffffff"});

		popup.addChild(item_key);
		popup.addChild(info_key);
		item_key.visible = true;
		info_key.visible = true;
	},
	
	/*아이템창에서 다이아를 선택했을 때*/	
	
	/*아이템창에서 하트를 선택했을 때*/	
	selectHeart: function(){
		this.allClear();

		item_heart = this.game.add.text(-135, 90, heart_name, {font: "12px verdana", fill : "#ffffff"});
		info_heart = this.game.add.text(-135, 110, heart_info, {font: "10px verdana", fill: "#ffffff"});

		popup.addChild(item_heart);
		popup.addChild(info_heart);
		item_heart.visible = true;
		info_heart.visible = true;
	},
	
	/*아이템창에서 물을 선택했을 때*/
	selectWater: function (){
		this.allClear();

		item_water = this.game.add.text(-135, 90, water_name, {font: "12px verdana", fill : "#ffffff"});
		info_water = this.game.add.text(-135, 110, water_info, {font: "10px verdana", fill: "#ffffff"});
		
		popup.addChild(item_water);
		popup.addChild(info_water);
		item_water.visible = true;
		info_water.visible = true;
	},
	
	/*아이템창에서 스마트폰을 선택했을 때*/	
	selectPhone : function (){
		this.allClear();
		
		item_phone = this.game.add.text(-135, 90, phone_name, {font: "12px verdana", fill : "#ffffff"});
		info_phone = this.game.add.text(-135, 110, phone_info, {font: "10px verdana", fill: "#ffffff"});

		popup.addChild(item_phone);
		popup.addChild(info_phone);
		item_phone.visible = true;
		info_phone.visible = true;
	},
	
	/*아이템창에서 방독면을 선택했을 때*/	
	selectMask: function(){
		this.allClear();

		item_mask = this.game.add.text(-135, 90, mask_name, {font: "12px verdana", fill : "#ffffff"});
		info_mask = this.game.add.text(-135, 110, mask_info, {font: "10px verdana", fill: "#ffffff"});

		popup.addChild(item_mask);
		popup.addChild(info_mask);
		item_mask.visible = true;
		info_mask.visible = true;
	},
	
	/*기존에 세팅된 이미지를 전부 지운다. */
	allClear: function (){
		if(item_key != null && info_key != null){
			item_key.visible = false;
			info_key.visible = false;
		}
		
/*		if(item_dia != null && info_dia != null){
			item_dia.visible = false;
			info_dia.visible = false;
		}*/
		
		if(item_heart != null && info_heart != null){
			item_heart.visible = false;
			info_heart.visible = false;
		}
		
		if(item_phone != null && info_phone != null){
			item_phone.visible = false;
			info_phone.visible = false;
		}
		if(item_water != null && info_water != null){
			item_water.visible = false;
			info_water.visible = false;
		}
		
		if(item_mask != null && info_mask != null){
			item_mask.visible = false;
			info_mask.visible = false;
		}
	}
	
	
}