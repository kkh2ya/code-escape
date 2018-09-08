var gamestage2 = function(game){
	var layer;
	var player;
	
	/*일시정지*/
	var pause_label;
	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	var choiseLabel;
}

/*아이템 중복을 피하기 위한  플래그변수*/
var patch = 0;
var bar = 0;
var dirtyKey = 0;

/* 아이템 이름 및 정보 */
var item_patch = null;
var item_bar = null;
var item_dirtyKey = null;

var info_patch = null;
var info_bar = null;
var info_dirtyKey = null;


/*아이템 획득 여부를 확인하는 플래그변수 */
var checkPatch = false;
var checkBar = false;
var checkDirtyKey = false;

/*맵 드래그 이동을 위한 지역변수*/
var mouseButtonClick = false;
var offsetX = 0;
var offsetY = 0;
var curX;
var curY;

gamestage2.prototype = {
  	create: function(){
  		this.game.physics.startSystem(Phaser.Physics.ARCADE);
  		
  		/*배경 컬러 설정*/
  		this.game.stage.backgroundColor = "#000000";			// 배경컬러 설정
  		
 		var map = this.game.add.tilemap('map_2');				// 타일맵 추가
  		map.addTilesetImage('tileset', 'tiles_1');
  		
  		/*map*/
  		layer1 = map.createLayer('Tile Layer 1');				// 맵 레이어 생성
  		layer2 = map.createLayer('Tile Layer 2');
  		
  		layer2.resizeWorld();
  		layer1.resizeWorld();									// 레이어 페이저 화면에 맞게 리사이저
  		
  		this.game.physics.arcade.enable(layer1);				//레이어의 충돌 허가
  		
  		map.setCollision([4]);

  		this.game.add.image(160, 96, 'door1');
  		

  		/* 아이템 */
  		//1. 아이템_헝겁
  		item_patch = this.game.add.sprite(80, 480, 'hikari');
  		item_patch.animations.add('kirakira');
  		item_patch.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_patch);
  		item_patch.body.immovable = true;
  		
  		//2. 아이템_막대기
  		item_bar = this.game.add.sprite(520, 660, 'hikari');
  		item_bar.animations.add('kirakira');
  		item_bar.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_bar);
  		item_bar.body.immovable = true;
  		
  		//3. 아이템_더러운 키
  		item_dirtyKey = this.game.add.sprite(440, 230, 'hikari');
  		item_dirtyKey.animations.add('kirakira');
  		item_dirtyKey.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_dirtyKey);
  		item_dirtyKey.body.immovable = true;
  		
  		/* Player 설정 */
		player=this.game.add.sprite(150, 150, 'character');	//플레이어 초기값 설정
		player.animations.add('down', [3,4,3,5], 10, true);		//플레이어 객체의 애니메이션 지정
		player.animations.add('left', [6,7,6,8], 10, true);
		player.animations.add('right', [9,10,9,11], 10, true);
		player.animations.add('up', [0,1,2,1], 10, true);
		player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);
		
		player.animations.play('stop', 5, true);	//플레이어 객체의 애니메이션 시작
  	   
		this.game.physics.arcade.enable(player);	//플레이어 객체의 충동 허가

		player.body.setSize(60, 60, 17, 80);		//플레이어 객체의 바디 설정(실제 영역)
		player.body.immovable = true;
  	   
  		layer3 = map.createLayer('Tile Layer 3');
  		layer3.resizeWorld();
  		
  		/*inventory button*/
		width = player.x + 32;
		height = player.y + 64;
		button = this.game.add.button(width, height, 'inventory', this.openWindow, this, 2, 1, 0);
		button.input.useHandCursor = true;
		
		
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
	 	text = this.game.add.text(80, 470, '', { font: "15px Arial", fill: "#ffffff" });

		
	 	/*Sound Effect*/
	 	footStep = this.game.add.audio("footStep");

  		/*화면 이동을 위한 변수*/
  		this.game.input.onDown.add(this.mouseOnDownEvent, this);//한번클릭
  		this.game.input.onUp.add(this.mouseOnUpEvent, this);//한번클릭
  		
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
	        
	        this.pause_label.inputEnabled = false;	//클릭하면 메뉴창 닫을 때까지 클릭 안됨 
	    },this);
	    this.game.input.onDown.add(this.unpause, this);
	    /* pause_label누르면 pause됨과 동시에 menu창 뜸*/
  		
	},
	update: function(){
		checkBag = true;
		/*가방의 위치 값 파악 후 적용*/
		width = player.x + 32;
		height = player.y + 64;
		button.position.set(width, height);
		
		/*발소리*/
		if(command === "stop"){
			footStep.stop();
		} 
		
		//2. 플레이어와 아이템(물)의 충돌
		if(this.game.physics.arcade.collide(player, item_patch)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			if(checkBag){
				item_patch.destroy();
				checkPatch = true;
				this.getItem("「낡은 헝겊(아이템)」");
			} else {
				this.falseGet();
				item_patch.body.enable = false;
			}
			this.game.input.onDown.addOnce(this.closeScript, this);
		} 
		
		if(this.game.physics.arcade.collide(player, item_bar)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			if(checkBag){
				item_bar.destroy();
				checkBar = true;
				this.getItem("「막대기(아이템)」");
			} else {
				this.falseGet();
				item_bar.body.enable = false;
			}
			this.game.input.onDown.addOnce(this.closeScript, this);
		} 
		
		if(this.game.physics.arcade.collide(player, item_dirtyKey)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			if(checkBag){
				item_dirtyKey.destroy();
				checkDirtyKey = true;
				this.getItem("「더러워진 열쇠(아이템)」");
			} else {
				this.falseGet();
				item_dirtyKey.body.enable = false;
			}
			this.game.input.onDown.addOnce(this.closeScript, this);
		}
		
		
		
		if(this.game.physics.arcade.collide(player, layer1)){
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
		}
		
		
	    if(command === "stop") {   
	    	if(actionFlag){
	    		if(arrActionNum === arrAction.length-1){
	    			actionFlag = false;
	            }
	            command = arrAction[arrActionNum];
	            this.user(command);//실행 부분
	    	}
	    }else{
	    	this.game.camera.x = player.x-400;
	    	this.game.camera.y = player.y-300;
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
		
		if(this.mouseButtonClick){
			offsetX = this.game.input.activePointer.positionDown.x - this.game.input.activePointer.position.x;
	    	offsetY = this.game.input.activePointer.positionDown.y - this.game.input.activePointer.position.y;
	    	this.game.camera.x = this.curX + offsetX;
	    	this.game.camera.y = this.curY + offsetY;
	    }

	},
	
	
	
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
	
	myItemList: function(){
		if(checkPatch){
			for (var i = 0; i < myItem.length; i++){
				if(patch != 0){
					break;
				}
				if(myItem[i] == null){
					patch_Image = this.game.add.image(16, 16, 'patch');
					patch_Image .inputEnabled = true;
					myInventory[i].addChild(patch_Image);
					myItem[i] = "마른 헝겊"
					patch_name = "마른 헝겊";
					patch_info = "더러운 마른 헝겊. 금방이라도 바스러질 것 같다.";
					patch_Image.input.useHandCursor = true;
					patch_Image.events.onInputDown.add(this.selectPatch, this);
					patch++;
					break;
				}
			}
		}
		
		if(checkBar){
			for (var i = 0; i < myItem.length; i++){
				if(bar != 0){
					break;
				}
				if(myItem[i] == null){
					bar_Image = this.game.add.image(16, 16, 'bar');
					bar_Image .inputEnabled = true;
					myInventory[i].addChild(bar_Image);
					myItem[i] = "막대기"
					bar_name = "막대기";
					bar_info = "쇠로 된 막대기. 물에 젖어 있다.";
					bar_Image.input.useHandCursor = true;
					bar_Image.events.onInputDown.add(this.selectBar, this);
					bar++;
					break;
				}
			}
		}
		
		if(checkDirtyKey){
			for (var i = 0; i < myItem.length; i++){
				if(dirtyKey != 0){
					break;
				}
				if(myItem[i] == null){
					dirtyKey_Image = this.game.add.image(16, 16, 'dirtyKey');
					dirtyKey_Image .inputEnabled = true;
					myInventory[i].addChild(dirtyKey_Image);
					myItem[i] = "더러운 열쇠"
					dirtyKey_name = "더러운 열쇠";
					dirtyKey_info = "더러운 열쇠. 초록색의 무언가가 잔뜩 묻어있다. 그냥 사용할 수는 없을 것 같은데...";
					dirtyKey_Image.input.useHandCursor = true;
					dirtyKey_Image.events.onInputDown.add(this.selectDirtyKey, this);
					dirtyKey++;
					break;
				}
			}
		}
		
		
	},
	
	/*아이템창에서 헝겊을 선택했을 때*/
	selectPatch: function (){
		this.allClear();

		item_patch = this.game.add.text(-135, 90, patch_name, {font: "12px verdana", fill : "#ffffff"});
		info_patch = this.game.add.text(-135, 110, patch_info, {font: "10px verdana", fill: "#ffffff"});
		
		popup.addChild(item_patch);
		popup.addChild(info_patch);
		item_patch.visible = true;
		info_patch.visible = true;
	},
	
	selectBar: function (){
		this.allClear();

		item_bar = this.game.add.text(-135, 90, bar_name, {font: "12px verdana", fill : "#ffffff"});
		info_bar = this.game.add.text(-135, 110, bar_info, {font: "10px verdana", fill: "#ffffff"});
		
		popup.addChild(item_bar);
		popup.addChild(info_bar);
		item_bar.visible = true;
		info_bar.visible = true;
	},
	
	selectDirtyKey: function (){
		this.allClear();

		item_dirtyKey = this.game.add.text(-135, 90, dirtyKey_name, {font: "12px verdana", fill : "#ffffff"});
		info_dirtyKey = this.game.add.text(-135, 110, dirtyKey_info, {font: "10px verdana", fill: "#ffffff"});
		
		popup.addChild(item_dirtyKey);
		popup.addChild(info_dirtyKey);
		item_dirtyKey.visible = true;
		info_dirtyKey.visible = true;
	},
	
	
	
	/*기존에 세팅된 이미지를 전부 지운다. */
	allClear: function (){
		if(item_patch != null && info_patch != null){
			item_patch.visible = false;
			info_patch.visible = false;
		}
		if(item_bar != null && info_bar != null){
			item_bar.visible = false;
			info_bar.visible = false;
		}
		
		if(item_dirtyKey != null && info_dirtyKey != null){
			item_dirtyKey.visible = false;
			info_dirtyKey.visible = false;
		}
	},
	
	
	falseGet:function(){
		if (myLoop != null) {
			this.game.time.events.remove(myLoop);
		}
		text.text="";
		portrait.visible = true;
		scriptBar.visible = true;
		text.setText("가져갈 수 없어. 물건을 담을만한 게 없을까?");
	 	scriptBar.addChild(text);
		this.game.paused = true;
		
	},
	
	/*아이템 획득*/
	getItem:function(stage_item){
		if (myLoop != null) {
			this.game.time.events.remove(myLoop);
		}
		text.text="";
		script_item.visible = true;
		text.setText(stage_item + " (을/를) 획득했다!");
	 	script_item.addChild(text);
		this.game.paused = true;
	},
	
	
	closeScript: function () {
		this.game.time.events.remove(myLoop);
		scriptBar.visible = false; //대사가 모두 떳다면 클릭 했을경우 대사창 꺼짐
		portrait.visible = false;   //대사가 모두 떳다면 클릭 했을경우 초상화 꺼짐
		script_item.visible = false;
		this.user(receivedcommand);		//진행되던 케릭터의 행동 재게
		text.text="";				//대사 공백처리

		this.game.paused = false;
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
        		this.game.state.start("GameStage2");
            }
        }
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
	
}