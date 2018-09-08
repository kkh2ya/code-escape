var gamestage1 = function(game){
	var layer;
	var player;
	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	
	/*pause 버튼*/
	var w = 800; 
	var h = 600;
	var pause_label;
	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	var choiseLabel;
	
	/*맵 드래그 이동을 위한 지역변수*/
	var mouseButtonClick = false;
	var offsetX = 0;
	var offsetY = 0;
	var curX;
	var curY;
	
	/*대사 관련*/

	
	var line = [];
	var wordIndex = 0;
	var lineIndex = 0;

	var wordDelay = 120;
	var lineDelay = 400;
	var bag1;
	var openDoor;
	var door;
	
	
	
	/*조장 추가함*/
	var clearMenu;
}
/*조장 추가함... pause버튼 눌리는 문제 수정위해...지역변수 추가했더니 값 못받음*/
var pauseFlag = false;
 
/* 전역변수 구문 */
var checkBag = false;
var checkTutorial = true;
var introCheck = true;
var clearFlag1 = false;
/* inventory 관련 변수 */
var flag = true;				//아이템창을 한 번 이상 열었는가를 체크 
var myInventory = new Array(5);	//아이템 칸의 배열
var myItem = new Array(5);		//현재 아이템이 담긴 공간
var array;						//아이템 이미지의 배열
var arrayH = -176;				//아이템의 초기 위치값

/* 아이템 중복을 피하기 위한 플래그 변수 */
var water = 0;
var phone = 0;
var mask = 0;

/* 아이템 이름 및 정보 */
var item_phone = null;
var item_water = null;
var item_mask = null;

var info_phone = null;
var info_water = null;
var info_mask = null;

/* 아이템 획득여부 확인을 위한 플래그변수 */
var checkWater = false;
var checkPhone = false;
var checkMast = false;



/*대사 변수*/
var content = ["... ... ... ..."
	,"머리가 아프다. 말을 듣지 않는 몸을 간신히 일으켜 주위를 살펴보지만, 불빛이 흐린 탓에 잘 보이지 않는다."
	,"「 ... ... 여긴 어디지? 」"
	,"스스로에게 던진 질문만이 공간을 가득 채운다. 울려퍼지는 목소리. 덩달아 머리 속이 울리는 기분이다.\n비좁은 방, 그리고 통조림과 물... ... 방독면...?"
	, "「 창고인가? 」"
	, "잘 모르겠지만, 이곳에 계속 있을 수는 없다."];
var serihu = new Array();
var index = 0;
var clearContent = ["... ... ?"
					, "안에서 열 수 있는 문이다. 잠겨있지 않은 것 같다."
					, "「... ... 나가자. 」"];
/*------------------ 전역변수 종료 -------------------*/


gamestage1.prototype = {
	create: function(){
  		compilerNum = 1;//컴파일 구분하기 위해!!!!!!!!!!
  		checkBag = false;
  		
  		this.game.physics.startSystem(Phaser.Physics.ARCADE);
  		
  		this.game.stage.backgroundColor = "#000000";			// 배경컬러 설정
  		
	    
  		
  		/*타일맵 설정*/
  		var map = this.game.add.tilemap('map_1');				// 타일맵 추가
  		map.addTilesetImage('tileset', 'tiles_1');				// 타일셋 이미지를 맵에 추가
  		
  		layer3 = map.createLayer('Tile Layer 3');
  		layer1 = map.createLayer('Tile Layer 1');				// 맵 레이어 생성
 
  		layer1.resizeWorld();									// 레이어 페이저 화면에 맞게 리사이저
  		layer3.resizeWorld();								// 레이어 페이저 화면에 맞게 리사이저
  		
  		this.game.physics.arcade.enable(layer3);				//레이어의 충돌 허가
  	   
  		map.setCollision([3]);
  		

  		
  		/*맵상의 아이템 설정*/
  		//1. 가방
  		bag = this.game.add.sprite(880, this.game.world.height/2+150, 'bag');
  		bag.animations.add('bag_map', [0,1,2], 10, true);
  		bag.animations.play('bag_map', 2, true);
  		this.game.physics.enable(bag, Phaser.Physics.ARCADE);
  		bag.body.immovable = true;
  		
  		//2. 아이템표시_생수
  		item_water = this.game.add.sprite(350, this.game.world.height/2-30, 'hikari');
  		item_water.animations.add('kirakira');
  		item_water.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_water);
  		item_water.body.immovable = true;
  		
  		//3. 아이템표시_스마트폰
  		item_phone = this.game.add.sprite(500, this.game.world.height/2+110, 'hikari');
  		item_phone.animations.add('kirakira');
  		item_phone.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_phone);
  		item_phone.body.immovable = true;
  		
  		//4. 아이템표시_방독면
  		item_mask = this.game.add.sprite(650, this.game.world.height/2-95, 'mask_sprite');
  		item_mask.animations.add('mask_map', [0,1,2], 10, true);
  		item_mask.animations.play('mask_map', 2, true);
  		this.game.physics.arcade.enable(item_mask);
  		item_mask.body.immovable = true;
  		
  		//방독면 위의 케이스
  		this.game.add.image(633, this.game.world.height/2-110, 'case');
  		
  		//문 충돌 확인용 객체
  		door = this.game.add.sprite(832, 320, 'door1');
  		
  		openDoor = this.game.add.sprite(844, 340, 'openDoor');
  		this.game.physics.enable(openDoor, Phaser.Physics.ARCADE);
  		openDoor.body.immovable = true;
  		
  		clearDoor = this.game.add.sprite(844, 195, 'openDoor');
  		this.game.physics.enable(clearDoor, Phaser.Physics.ARCADE);
  		clearDoor.body.immovable = true;
  		
  		/* Player 설정 */
		player=this.game.add.sprite(this.game.world.width/2, this.game.world.height/2, 'character_default');	//플레이어 초기값 설정
		player.animations.add('down', [3,4,3,5], 10, true);												//플레이어 객체의 애니메이션 지정
		player.animations.add('left', [6,7,6,8], 10, true);
		player.animations.add('right', [9,10,9,11], 10, true);
		player.animations.add('up', [0,1,2,1], 10, true);
		player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);
		
		player.animations.play('stop', 5, true);	//플레이어 객체의 애니메이션 시작
  	   
		this.game.physics.arcade.enable(player);	//플레이어 객체의 충동 허가

		player.body.setSize(60, 60, 17, 80);		//플레이어 객체의 바디 설정(실제 영역)
		player.body.immovable = true;

		//레이어 위치 변경
  		layer2 = map.createLayer('Tile Layer 2');
  		layer2.resizeWorld();

		
  		/*inventory button*/
		width = player.x + 32;
		height = player.y + 64;
		button = this.game.add.button(width, height, 'inventory');
		button.input.useHandCursor = false;
		
		
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
		
		
		//170928 pause버튼 위치 이동
		/*pause누르면 메뉴 뜸, 마우스 버튼 누를 때 onDown 실행됨, 튜토리얼때 눌리면 input버튼 눌렀을때 flag줘서 수정하는 방향으로*/
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
			
			this.pause_label.inputEnabled = false;
			pauseFlag = true;//플래그
		},this);
		
		this.game.input.onDown.add(this.unpause, this);//메뉴의 버튼 누를때
		/*pause누르면 메뉴 뜸, 마우스 버튼 누를 때 onDown 실행됨, 튜토리얼때 눌리면 input버튼 눌렀을때 flag줘서 수정하는 방향으로*/
		
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
	 	tutorial_window = this.game.add.image(0, 0, 'tutorial');	// 스크립트창
	 	tutorial_window.fixedToCamera = true;
	 	tutorial_window.cameraOffset.setTo(0, 0);
	 	tutorial_window.visible = false;

	 	scriptBar.visible = false;						//초기설정
	 	script_item.visible = false;
	 	portrait.visible = false;
	 	
	 	text = this.game.add.text(80, 470, '', { font: "12px Arial", fill: "#ffffff" });
	 	style = { font: "12px Arial", fill: "#fff", align: "center", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 400 };
	 	
	 	/*Sound Effect*/
	 	footStep = this.game.add.audio("footStep");
	 	getItem = this.game.add.audio("getItem");
  		
  		var temp1 = this.game.input.onDown.add(this.mouseOnDownEvent, this);//누를때
	    var temp2 = this.game.input.onUp.add(this.mouseOnUpEvent, this);//뗄때
  		
	    scriptText = this.game.add.text(100, 480, '', {font: "12px Arial", fill: "#ffffff"});
		intro = this.game.add.image(0, 0, 'black');
	 	intro.fixedToCamera = true;
	 	intro.cameraOffset.setTo(0, 0);
		
		
		this.game.input.onDown.add(this.introScript, this);
		this.game.paused = true;
		
		bag1 = this.game.add.sprite(385, 200, 'bag');
		bag1.visible = false;
	},
	update: function(){

//		if(introCheck){
//			alert(introCheck);
//			this.game.paused = true;
//			this.game.input.onDown.add(this.introScript, this);
//		}
		
		/*만약, 처음 하는 사람이면 튜토리얼이 실행된다*/
		if(checkTutorial && !introCheck){
			this.tutorial();
			index = 0;
			checkTutorial = false;
		}
		
		/*가방의 위치 값 파악 후 적용*/
		width = player.x + 32;
		height = player.y + 64;
		this.position(width, height);

		if(command === "stop"){
			footStep.stop();
		} 
		
		/* 특정 아이템과 충돌시 발생하는 이벤트 */
		//1. 플레이어와 가방의 충돌 이벤트
		if(this.game.physics.arcade.collide(player, bag)){
			bag.destroy();
			checkBag = true;
			footStep.stop();
			this.getItem("「가방(인벤토리)」");
			this.game.input.onDown.addOnce(this.bagTutorial, this);
			// 플레이어 이미지 변경
			player.loadTexture('character', 0);
			player.animations.add('down', [3,4,3,5], 10, true);
			player.animations.add('left', [6,7,6,8], 10, true);
			player.animations.add('right', [9,10,9,11], 10, true);
			   
			player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);

			portrait = this.game.add.image(0, 0, 'portrait');	//캐릭터 그림
			portrait.fixedToCamera = true;
			portrait.cameraOffset.setTo(0, 0);
			portrait.visible = false;
			
			item_water.body.enable = true;
			item_phone.body.enable = true;
			item_mask.body.enable = true;
			
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			
		}

		//2. 플레이어와 아이템(물)의 충돌
		if(this.game.physics.arcade.collide(player, item_water)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			if(checkBag){
				item_water.destroy();
				checkWater = true;
				this.getItem("「물(아이템)」");
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				item_water.body.enable = false;
				this.falseGet();
				this.game.input.onDown.addOnce(this.haveNotBag, this);
			}
		}
		
		//2. 플레이어와 아이템(핸드폰)의 충돌
		if(this.game.physics.arcade.collide(player, item_phone)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			if(checkBag){
				item_phone.destroy();
				checkPhone = true;
				this.getItem("「스마트폰(아이템)」");
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.haveNotBag, this);
				item_phone.body.enable = false;
			}
		}
		
		//3. 플레이어와 아이템(방독면)의 충돌
		if(this.game.physics.arcade.collide(player, item_mask)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			  
			if(checkBag){
				item_mask.destroy();
				checkMast = true;
				this.getItem("「방독면(아이템)」");
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.haveNotBag, this);
				item_mask.body.enable = false;
			}
		}
		
		//4. 문을 열기위한 행동 이전
		if(this.game.physics.arcade.collide(player, openDoor)){
			this.user('stop');
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			scriptBar.visible = false;
			portrait.visible = false;
			scriptBar = this.game.add.image(0, 0, 'scriptBar');	// 스크립트창
			scriptBar.fixedToCamera = true;
			scriptBar.cameraOffset.setTo(0, 0);
			portrait.visible = true;
			scriptBar.visible = true;
			this.game.paused = true;
			
			if(checkWater && checkPhone && checkMast){
				clearFlag1 = true;//추가
				openDoor.destroy();
				text.setText(clearContent[index]);
				door.destroy();
				index++;
				scriptBar.addChild(text);
				this.game.input.onDown.addOnce(this.clearScript1, this);
			} else {
				player.y += 3;
				text.setText("아직 살펴볼게 남아있어.");
				scriptBar.addChild(text);
				this.game.input.onDown.addOnce(this.wait, this);
			}
			
		}
		
		
		//클리어 조건
		if(this.game.physics.arcade.collide(player, clearDoor) && clearFlag1){
			arrActionNum++;//충돌했을때 다음 인덱스로     주석 달았음
			this.user('stop');
			command = "stop";//플래그주고
			
			footStep.stop();
			clearDoor.destroy();
			this.game.paused = true;
			
	        this.clearMenu = this.game.add.sprite(this.game.camera.x+400, this.game.camera.y+300, 'menu3');
	        this.clearMenu.anchor.setTo(0.5, 0.5);
	           
	        this.pause_label.inputEnabled = false;   //이 상태에서 pause버튼 안눌리게 함
	        this.ifClearFlag = true;
	        this.game.input.onDown.add(this.clearState, this);
		}


		
		//4. 플레이어와 레이어의 충돌
		if(this.game.physics.arcade.collide(player, layer3)){
			this.user('stop');
			arrActionNum++;
			command = "stop";
		}
		if(command === "stop") {	
			if(actionFlag){
				if(arrActionNum === arrAction.length-1) {
					actionFlag = false;//동작
				}
				command = arrAction[arrActionNum];
				this.user(command);//실행 부분
			}
		} else {
	    	this.game.camera.x = player.x-400;
	    	this.game.camera.y = player.y-300;
		}
		
		if(this.mouseButtonClick){
			offsetX = this.game.input.activePointer.positionDown.x - this.game.input.activePointer.position.x;
	    	offsetY = this.game.input.activePointer.positionDown.y - this.game.input.activePointer.position.y;
	    	this.game.camera.x = this.curX + offsetX;
	    	this.game.camera.y = this.curY + offsetY;
	    }
		
	},
	
	/*가방이 없을 경우 실행되는 대사*/
	falseGet:function(){
		portrait.visible = true;
	 	scriptBar = this.game.add.image(0, 0, 'scriptBar');	// 스크립트창
	 	scriptBar.fixedToCamera = true;
	 	scriptBar.cameraOffset.setTo(0, 0);
		text.setText("가져갈 수 없어. 물건을 담을만한 게 없을까?");
	 	scriptBar.addChild(text);
		this.game.paused = true;
	},
	
	/*아이템 획득*/
	getItem:function(stage_item){
		getItem.play();
		script_item.visible = true;
		text.setText(stage_item + " (을/를) 획득했다!");
	 	script_item.addChild(text);
		this.game.paused = true;
	},
	
	
	closeScript: function () {
		scriptBar.visible = false; //대사가 모두 떳다면 클릭 했을경우 대사창 꺼짐
		portrait.visible = false;   //대사가 모두 떳다면 클릭 했을경우 초상화 꺼짐
		script_item.visible = false;
		tutorial_window.visible = false;
		
		text.text="";				//대사 공백처리

		this.game.paused = false;
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
	
	closeWindow: function(){
	    if (tween.isRunning || popup.scale.x === 0){
	        return;
	    }
	    tween = this.game.add.tween(popup.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Quintic.In, true);
	    
	    this.allClear();
	},
	
	/*기존에 세팅된 이미지를 전부 지운다. */
	allClear: function (){
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
					water_info = "깨끗한 물. 마실 수 있다.";
					water_Image.input.useHandCursor = true;
					water_Image.events.onInputDown.add(this.selectWater, this);
					water++;
					break;
				}
			}
		} if(checkPhone){
			for (var i = 0; i < myItem.length; i++){
				if(phone!= 0){
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
		} if(checkMast){
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

		}
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
	
	/*tutorial 함수*/
	tutorial : function() {
	 	/*Tutorial Window*/
		var noticeArray = ["「CodeEscape」의 세계에 오신 것을 환영합니다!\nCodeEscape는 코드를 입력해서 플레이하는 게임입니다.\n상하좌우 캐릭터의 이동부터 아이템의 습득과 사용까지\n모든 것이 코드로 이루어집니다.\n\n코드를 이용하여 스토리를 진행해보세요.\n\n[클릭시 진행]"];
		tutorial_window.visible = true;
		this.game.paused = true;
	 	
		//Welcome이라는 메인 표시
	 	notice = this.game.add.text(178, 150, ":: Welcome ::", {font: "bold 15px verdana", fill : "#ffffff"});
	 	noticeText = this.game.add.text(250, 210, noticeArray, style);
		tutorial_window.addChild(notice);
		tutorial_window.addChild(noticeText);
		
		this.game.input.onDown.addOnce(this.walkTutorial, this);
		
	},
	
	walkTutorial: function () {
		noticeText.destroy();
		notice.destroy();
		noticeArray = ["게임을 시작하기 전 캐릭터 이동에 대해 알아보겠습니다.\n캐릭터의 이동은 상하좌우 네 방향으로 가능하며,\n각각의 이동에 맞는 메소드가 존재합니다.\n\n▶ 위로 : player.moveUp(); \n▶ 아래로 : player.moveDown();\n▶ 오른쪽으로 : player.move();\n ▶ 왼쪽으로 : player.moveLeft();\n\n[클릭시 진행]"];
		notice = this.game.add.text(170, 150, ":: Information ::", {font: "bold 15px verdana", fill : "#ffffff"});
		noticeText = this.game.add.text(250, 210, noticeArray, style);
		tutorial_window.addChild(notice);
		tutorial_window.addChild(noticeText);
		
		this.game.input.onDown.addOnce(this.methodTutorial, this);
	},
	
	methodTutorial: function () {
		noticeText.visible = false;
		notice.visible = false;
		noticeArray = ["이 문법에서 player는 캐릭터 객체를 나타내며,\n.moveRight() 과 같은 형식은 그 객체가 가진 메소드를 의미합니다.\n\n자바는 한 문장(statement)가 끝날 때, ; (세미콜른)이 붙으므로,\n오른쪽으로 이동을 하기 위한 코드는 \nplayer.moveRight(); 가 됩니다.\n\n[클릭시 진행]"];
		notice = this.game.add.text(170, 150, ":: Information ::", {font: "bold 15px verdana", fill : "#ffffff"});
		noticeText = this.game.add.text(225, 210, noticeArray, style);
		tutorial_window.addChild(notice);
		tutorial_window.addChild(noticeText);
		
		this.game.input.onDown.addOnce(this.cameraTutorial, this);
	},
	
	cameraTutorial : function () {
		noticeText.visible = false;
		noticeArray = ["아이템은 빛나는 이모티콘으로 표시됩니다.\n아이템의 위치 확인은 시점 이동을 이용해주세요.\n\n시점 이동은 마우스로 가능합니다. 클릭 후 마우스를 움직여보세요.\n\n[클릭시 종료]"];
		noticeText = this.game.add.text(230, 210, noticeArray, style);
		tutorial_window.addChild(noticeText);
		
		this.game.input.onDown.addOnce(this.closeScript, this);
	},
	
	bagTutorial: function () {
		getItem.stop();
		scriptBar.visible = false; //대사가 모두 떳다면 클릭 했을경우 대사창 꺼짐
		portrait.visible = false;   //대사가 모두 떳다면 클릭 했을경우 초상화 꺼짐
		noticeText.visible = false;
		tutorial_window.visible = true;
		bag1.visible = false;
		noticeArray = ["가방은 bag[4]로 선언된 배열입니다.\n배열의 인덱스는 0부터 시작하므로,\n아이템은 최대 5개까지 저장이 가능합니다.\n\n[클릭시 종료]"];
		noticeText = this.game.add.text(285, 210, noticeArray, style);
		tutorial_window.addChild(noticeText);
		
		this.game.input.onDown.addOnce(this.closeScript, this);

	},
	
	haveNotBag: function () {
		scriptBar.visible = false; //대사가 모두 떳다면 클릭 했을경우 대사창 꺼짐
		portrait.visible = false;   //대사가 모두 떳다면 클릭 했을경우 초상화 꺼짐
		noticeText.visible = false;
		tutorial_window.visible = true;
		noticeArray = ["아이템을 획득하기 위해서는 \"가방(인벤토리)\" 이 필요합니다.\n아이템 획득 후, 다시 시도해보세요.\n\n[클릭시 종료]"];
		noticeText = this.game.add.text(240, 250, noticeArray, style);
		bag1.visible = true;
		tutorial_window.addChild(bag1);
		tutorial_window.addChild(noticeText);
		
		this.game.input.onDown.addOnce(this.closeScript, this);

	},
	
	unpause: function(event){
        // Only act if paused
		console.log("%cunpause!!!!!", "color:blue; background:green");
        if(this.game.paused && pauseFlag){
            //this.game.camera.x는 왼쪽 상단 기준
            //event는 현재 카메라 기준으로 들어감
            if(event.x > 280 && event.x < 353 && event.y > 270 && event.y < 343){
            	//목록으로 가기 + 초기화 해줘야함
            	console.log("%cgoSelectStage Button!!!!!", "color:blue; background:green");
            	this.mouseButtonClick = false;
            	actionFlag = false;
        		command = "stop";
        		pauseFlag = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		checkTutorial = true;//추가함 시작할때 튜토리얼 대사 다시 나오게 함
        		introCheck = true;
        		this.game.state.start("SelectStage");
            }
            else if(event.x > 363 && event.x < 437 && event.y > 270 && event.y < 343){
            	//계속하기
            	this.mouseButtonClick = false;
            	this.pause_label.inputEnabled = true;
            	pauseFlag = false;
            	this.menu.destroy();
                this.choiseLabel.destroy();
                this.game.paused = false;
            }
            else if(event.x > 448 && event.x < 520 && event.y > 270 && event.y < 343){
            	//다시하기
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	this.mouseButtonClick = false;
            	actionFlag = false;
        		command = "stop";
        		pauseFlag = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		checkTutorial = true;//추가함 시작할때 튜토리얼 대사 다시 나오게 함
        		introCheck = true;
        		this.game.state.start("GameStage1");
            }
        }
    },
	
	mouseOnDownEvent: function(){
//		console.log("%cmouseondownevent", "color:blue; background:pink");
		this.curX = this.game.camera.x;
		this.curY = this.game.camera.y;
		this.mouseButtonClick = true;
//		console.log(this.mouseButtonClick);
	},
	mouseOnUpEvent: function(){
		this.mouseButtonClick = false;
	},

	/*캐릭터 이동*/
	user: function(command){
		footStep.loopFull(0.5);
		if(command === 'left'){
			player.body.velocity.set(-250, 0);
			player.animations.play('left');
			footStep.play();
		} else if(command === 'right'){
			player.body.velocity.set(250, 0);
			player.animations.play('right');
			footStep.play();
		} else if(command === 'up'){
			player.body.velocity.set(0, -250);
			player.animations.play('up');
			footStep.play();
		} else if(command === 'down'){
			player.body.velocity.set(0, 250);
			player.animations.play('down');
			footStep.play();
		} else if(command === 'stop') {
			player.body.velocity.set(0, 0);
			player.animations.stop();
			player.animations.play('stop', 5, true);
		}
	},
	
	position: function(width, heigth){
		if(checkBag){
			button = this.game.add.button(width, height, 'inventory', this.openWindow, this, 2, 1, 0);
			button.visible = !checkBag;
		}
		if(command == 'stop'){
			button.visible = checkBag;
			button.input.useHandCursor = checkBag;
		}
	
	},
		
	introScript : function() {
		if(introCheck && this.game.paused){
			if(index == 0){
				scriptBar = this.game.add.image(0, 0, 'scriptBar');	
			 	intro.addChild(scriptBar);
			}
			if(content[index] == null){
				scriptBar.visible = false;
				scriptText.visible = false;
				intro.destroy();
				introCheck = false;
				this.game.paused = false;
				return;
			}
			scriptText.setText(content[index]);
			scriptBar.addChild(scriptText);
			index++;
		}
	},
	
	clearScript1: function() {
		scriptBar.visible = false;
		portrait.visible = false;
		script_item.visible = true;
		text.setText(clearContent[index]);
		script_item.addChild(text);
		index++;
		
		this.game.input.onDown.addOnce(this.clearScript2, this);
	},
	
	clearScript2: function() {
		scriptBar.visible = true;
		portrait.visible = true;
		script_item.visible = false;
		text.setText(clearContent[index]);
		scriptBar.addChild(text);

		index = 0;
		
		this.game.input.onDown.addOnce(this.closeScript, this);
	},
	
	wait: function() {
		scriptBar.visible = false;
		portrait.visible = false;
		this.game.paused = false;
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
            	//다시하기+초기화
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		clearFlag1 = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage1");
            }
            else if(event.x > 448 && event.x < 520 && event.y > 270 && event.y < 343){
            	//다음스테이지
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage2");
            }
    	}
    }
}