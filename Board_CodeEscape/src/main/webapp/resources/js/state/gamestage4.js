var gamestage4 = function(game){
	/////////-------------------------------------------------from learn1
	
	/*조장 추가함*/
	var ifClearFlag = false;
	
	var player;
	var map;
	var layer1;
	
	var layer2;
	var layer3;
	var stop;

	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	
	/*pause 버튼*/
	var w = 800; 
	var h = 600;
	var pause_label;
	var menu; //pause누르면 뜨는 창 현재 사이즈 270*180
	var choiseLabel;
	
//	var userStop = false;//안씀
//	var followerStop = true;//이것도 안씀

/*	var ffollower;*/

	var spriteText;
	var sound1;
	var sound2;
	var sound3;
	
	var mieru;

	var key;
	/*var monster;*/
	var woodendoor;

	/*var score = 500;*/
	var txtScore;
	var eventScore;

	/*var boolean = false;	//플래그
	var boolean2 = false;*/

/*	var tmp = new Array();	//ajax를 통해 넘어온 값(컴파일 완료)을 저장하는 배열 생성
	var tmpIdx = 0; //tmp배열의 인덱스값
	var tmpIdx2 = 0;*/

	
	
/*	//-------------자막관련 변수 설정
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
	var tempLine = 0;
	//lineIndex와 관련된 임시변수
*/
	var portrait; 
	var scriptBar; 
	var text;

	//-------------자막관련 변수 설정 끝
	
	/////////-------------------------------------------------from learn1 end
	
	//----------------------카메라 드래그
	
/*	var mouseButtonClick = false;
	
	var offsetX = 0;
	var offsetY = 0;
	*/
	var cursors;
	
	//----------------------
	
	var platforms;

	var layer;

	/*인벤토리를 위한 변수*/
	
	//1. 버튼 이벤트를 위한 변수
	var inventory;
	var inven;
	var button;
	var popup;
	var tween = null;
	var width;
	var height;
	//2. 아이템 변수
	var bag;
	
	var key_name;
	var dia_name;
	var heart_name;
	
	var phone_name;
	var water_name;
	var mask_name;
	
	var key_info;
	var dia_info;
	var heart_info;
	
	var phone_info;
	var water_info;
	var mask_info;
	
	var item;
	var itemInformation;
	
	var key_image;
	var dia_image;
	var heart_image;
	
	var water_image;
	var phone_image;
	var mask_image;
	
}

/*var ffollower;*/

/*조장 추가함... pause버튼 눌리는 문제 수정위해...지역변수 추가했더니 값 못받음*/
var pauseFlag = false;

//-------------자막관련 변수 설정

/* 전역변수 구문 */
/*item 충돌시 사용 플래그*/
//var itemming = false;

/*카메라*/
/*var eagleEyeOn = false;*/

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
var wordDelay = 50;
//새로운 한 단어가 뜨는 딜레이
var lineDelay = 20;
//새로운 한 줄이 뜨는 딜레이
var myLoop;
//eventRepeat를 저장함
var receivedcommand;
//대사 클릭 후 진행하던 명령을 이어가게 하기 위한 변수
var script = '';
//#로 구분지은 부분까지의 대사를 미리 저장하기 위한 변수

/* 전역변수 구문 */
/*item 충돌시 사용 플래그*/
var itemming = false;

/*타이머*/
var score = 500;

//가방유무
var checkBag = true;

/* inventory 관련 변수 */
var flag = true;				//아이템창을 한 번 이상 열었는가를 체크 
var myInventory = new Array(5);	//아이템 칸의 배열
var myItem = new Array(5);		//현재 아이템이 담긴 공간
var array;						//아이템 이미지의 배열
var arrayH = -176;				//아이템의 초기 위치값

var slot = new Array(5);

/* 아이템 중복을 피하기 위한 플래그 변수 */
var key = 0;
var dia = 0;
var heart = 0;

var water = 0;
var phone = 0;
var mask = 0;

/* 아이템 이름 및 정보 */
var item_key = null;
var item_dia = null;
var item_heart = null;

var info_key = null;
var info_dia = null;
var info_heart = null;

var item_phone = null;
var item_water = null;
var item_mask = null;

var info_phone = null;
var info_water = null;
var info_mask = null;

/* 아이템 획득여부 확인을 위한 플래그변수 */
var checkKey = false;
var checkDia = false;
var checkHeart = false;

var checkWater = false;
var checkPhone = false;
var checkMask = false;
 
/*follower와 player 충돌여부 확인을 위한 플래그 변수*/
var checkFP = false;

/*대사 변수*/
//---follower와 player 충돌관련
var getWarning = ["밖으로 나가면 안돼!"
	, ""
	, "#"];

//---for문 관련
var getFor = ["산소가 점점 줄고 있으니, for문을 사용하여 이동속도를 높이시오."
	,""
	,"#"]; 

var checkForP = false;

var forIntro1;
var forIntro2;
//---while문 관련
var getWhile = ["산소가 점점 줄고 있으니, 변수 및 while문을 사용하여 이동속도를 높이시오."
	,""
	,"#"]; 

var checkWhileP = false;
//---if문 수수께끼 관련
	//질문 지점 장애물 변수
var checkQP = false;
var QPIndex = 0;
var question1;
var question2;
var question3;
var question4;
var question5;

var getQuestion = new Array(5);

var getQuestion1 = ["( )는 서로 다른 객체가 같은 메시지에 대하여 서로 다른 방법으로 응답할 수 있는 기능을"
	,"이야기 한다. 의미(semantics)는 하나지만 실제 형태는 여러 가지가 될 수 있다는 말이다. "
	,"다형성은 프로그램에서 특별한 연산자나 키워드가 있는 것이 아니며 객체지향 프로그래밍"
	,"언어에서 오버로딩(overloading), 오버라이딩 (overriding)의 형태로 나타난다. "
	,">> [만약 answer1이 ( )라면 eagleEye함수를 실행한다.] 라는 문장을 if문으로 표현하시오."
	,""
	,"#"]; //다형성, polymorphism, Polymorphism


var getQuestion2 = ["( )란 특정 종류의 객체들에 대해 일반적으로 적용할 수 있는 변수와 메소드를"
	,"정의하고 있는 소프트웨어적인 설계도(blueprint) 또는 프로토타입(prototype)."
	,"실세계에 존재하는 객체들이 가질 수 있는 상태와 행동들에 대해"
	,"소프트웨어적으로 추상화(abstraction) 해 놓은 것."
	,">> [만약 answer2가 ( )라면 eagleEye함수를 실행한다.] 라는 문장을 if문으로 표현하시오."
	,""
	,"#"]; //클래스, class

var getQuestion3 = ["( )은 컴퓨터 프로그래밍의 패러다임의 하나이다."
	,"( )은 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위,"
	,"즉 객체들의 모임으로 파악하고자 하는 것이다."
	,">> [만약 answer3이 ( )라면 eagleEye함수를 실행한다.] 라는 문장을 if문으로 표현하시오."
	,""
	,"#"]; //객체지향프로그래밍, OOP, Object Oriented Programming

var getQuestion4 = ["자바 언어에서 조건문은 if문외에 ( )문이 있다."
	,">> [만약 answer4가 ( )라면 eagleEye함수를 실행한다.] 라는 문장을 if문으로 표현하시오."
	,""
	,"#"]; //switch

var getQuestion5 = ["자바 언어에서 반복문은 for문외에 ( )문이 있다."
	,">> [만약 answer5가 ( )라면 eagleEye함수를 실행한다.] 라는 문장을 if문으로 표현하시오."
	,""
	,"#"]; //while

getQuestion[0] = getQuestion1;
getQuestion[1] = getQuestion2;
getQuestion[2] = getQuestion3;
getQuestion[3] = getQuestion4;
getQuestion[4] = getQuestion5;



//---아이템 관련
var getItem = [];
var falseGetItem = ["가져갈 수 없어. 물건을 담을만한 게 없을까?"
					, ""
					, "#"];
var getBag = ["가방(인벤토리)을 획득했다!"
				, ""
				, "#"];

var getKey = ["열쇠(인벤토리)을 획득했다!"
				, ""
				, "#"];

/*var getDia = ["다이아(인벤토리)을 획득했다!"
				, ""
				, "#"];*/

var getHeart = ["구급함(인벤토리)을 획득했다!"
					, ""
					, "#"];

var getPhone = ["스마트폰(아이템)을 획득했다!"
				, ""
				, "#"];

var getMask = ["마스크(아이템)을 획득했다!"
				, ""
				, "#"];

var getWater = ["물(아이템)을 획득했다!"
				, ""
				, "#"];

var tempLine = 0;


/*------------------ 전역변수 종료 -------------------*/


gamestage4.prototype = {
	preload: function(){
//		this.game.load.image('menu2', './resources/assets/public/game_pause.png', 270, 180);
	},
  	create: function(){
  		this.findItems();//민용 디비 추가
  		compilerNum = 4;//컴파일 구분하기 위해!!!!!!!!!!
  		
  		/*클래스 설정 추가*/
  		this.game.physics.startSystem(Phaser.Physics.P2JS);		//카메라를 위한 클래스
  		this.game.physics.startSystem(Phaser.Physics.ARCADE);	//캐릭터 추가를 위한 클래스
  		
  		/*배경 컬러 설정*/
  		this.game.stage.backgroundColor = "#3a5963";			// 배경컬러 설정

  		/*타일맵 설정*/
  		map = this.game.add.tilemap('map_4');				// 타일맵 추가
  		map.addTilesetImage('tileset', 'tiles_4');			// 타일셋 이미지를 맵에 추가
  		
  		layer1 = map.createLayer('Tile Layer 1');				// 맵 레이어 생성
  		layer1.resizeWorld();									// 레이어 페이저 화면에 맞게 리사이저
 		this.game.physics.arcade.enable(layer1);				//레이어의 충돌 허가
 		
  		layer2 = map.createLayer('Tile Layer 2');				// 맵 레이어 생성
  		layer2.resizeWorld();									// 레이어 페이저 화면에 맞게 리사이저
 		this.game.physics.arcade.enable(layer2);				//레이어의 충돌 허가
  		
  		
 		///////////////////////////////////////////////////

  		
  		/*맵상의 아이템 설정*/
  		//열쇠
  		item_key = this.game.add.sprite(1380, 128, 'hikari');
  		item_key.animations.add('kirakira');
  		item_key.animations.play('kirakira', 2, true);
  		/*key = this.game.add.sprite(1504, 288, 'key');*/
  		this.game.physics.arcade.enable(item_key);
  		item_key.body.immovable = true;
  		
/*  		//다이아
  		item_dia = this.game.add.sprite(120, 32, 'hikari');
  		item_dia.animations.add('kirakira');
  		item_dia.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_dia);
  		item_dia.body.immovable = true;*/
  		
  		//구급함
  		item_heart = this.game.add.sprite(160, 300, 'hikari');
  		item_heart.animations.add('kirakira');
  		item_heart.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_heart);
  		item_heart.body.immovable = true;
  		
  		/*  		//1. 가방
  		bag = this.game.add.sprite(500, 500, 'bag');
  		bag.animations.add('bag_map', [0,1,2], 10, true);
  		bag.animations.play('bag_map', 2, true);
  		this.game.physics.enable(bag, Phaser.Physics.ARCADE);
  		bag.body.immovable = true;
  		
  		//2. 아이템표시_생수
  		item_water = this.game.add.sprite(90, 72, 'hikari');
  		item_water.animations.add('kirakira');
  		item_water.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_water);
  		item_water.body.immovable = true;
  		
  		//3. 아이템표시_스마트폰
  		item_phone = this.game.add.sprite(90, 111, 'hikari');
  		item_phone.animations.add('kirakira');
  		item_phone.animations.play('kirakira', 2, true);
  		this.game.physics.arcade.enable(item_phone);
  		item_phone.body.immovable = true;
  		
  		//4. 아이템표시_방독면
  		item_mask = this.game.add.sprite(200, 32, 'mask_sprite');
  		item_mask.animations.add('mask_map', [0,1,2], 10, true);
  		item_mask.animations.play('mask_map', 2, true);
  		this.game.physics.arcade.enable(item_mask);
  		item_mask.body.immovable = true;*/
  		

		
		/* 문 설정*/
		woodendoor = this.game.add.sprite(2436, 64, 'woodendoor');
/*		door2 = this.game.add.sprite(3167, 128, 'door2');
		
		door3 = this.game.add.sprite(3135, 96, 'door3');
		door4 = this.game.add.sprite(3135, 128, 'door4');
		
		door5 = this.game.add.sprite(3103, 96, 'door5');
		door6 = this.game.add.sprite(3103, 128, 'door6');
		
		door7 = this.game.add.sprite(3071, 96, 'door7');
		door8 = this.game.add.sprite(3071, 128, 'door8');
		
		door9 = this.game.add.sprite(3039, 96, 'door9');
		door10 = this.game.add.sprite(3039, 128, 'door10');
		
		door11 = this.game.add.sprite(3135, 64, 'door11');
		door12 = this.game.add.sprite(3103, 64, 'door12');
		door13 = this.game.add.sprite(3071, 64, 'door13');
		door14 = this.game.add.sprite(3039, 64, 'door14');*/
		
		/*this.game.physics.enable(woodendoor, Phaser.Physics.ARCADE);
		woodendoor.enableBody = true;
		woodendoor.body.immovable = true;*/
/*		this.game.physics.enable(door2, Phaser.Physics.ARCADE);
		door2.enableBody = true;
		door2.body.immovable = true;
		this.game.physics.enable(door3, Phaser.Physics.ARCADE);
		door3.enableBody = true;
		door3.body.immovable = true;
		this.game.physics.enable(door4, Phaser.Physics.ARCADE);
		door4.enableBody = true;
		door4.body.immovable = true;
		this.game.physics.enable(door5, Phaser.Physics.ARCADE);
		door5.enableBody = true;
		door5.body.immovable = true;
		this.game.physics.enable(door6, Phaser.Physics.ARCADE);
		door6.enableBody = true;
		door6.body.immovable = true;
		this.game.physics.enable(door7, Phaser.Physics.ARCADE);
		door7.enableBody = true;
		door7.body.immovable = true;
		this.game.physics.enable(door8, Phaser.Physics.ARCADE);
		door8.enableBody = true;
		door8.body.immovable = true;
		this.game.physics.enable(door9, Phaser.Physics.ARCADE);
		door9.enableBody = true;
		door9.body.immovable = true;
		this.game.physics.enable(door10, Phaser.Physics.ARCADE);
		door10.enableBody = true;
		door10.body.immovable = true;
		this.game.physics.enable(door11, Phaser.Physics.ARCADE);
		door11.enableBody = true;
		door11.body.immovable = true;
		this.game.physics.enable(door12, Phaser.Physics.ARCADE);
		door12.enableBody = true;
		door12.body.immovable = true;
		this.game.physics.enable(door13, Phaser.Physics.ARCADE);
		door13.enableBody = true;
		door13.body.immovable = true;
		this.game.physics.enable(door14, Phaser.Physics.ARCADE);
		door14.enableBody = true;
		door14.body.immovable = true;*/
		
		
		///////////////////////////////////////////////
		
		
  		/* Player 설정 */
		player=this.game.add.sprite(62, 100, 'character');	//플레이어 초기값 설정 62, 100  2400,300
		player.animations.add('down', [3,4,3,5], 10, true);												//플레이어 객체의 애니메이션 지정
		player.animations.add('left', [6,7,6,8], 10, true);
		player.animations.add('right', [9,10,9,11], 10, true);
		player.animations.add('up', [0,1,2,1], 10, true);
		player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);
		
		player.animations.play('stop', 5, true);	//플레이어 객체의 애니메이션 시작
  	   
		this.game.physics.arcade.enable(player);	//플레이어 객체의 충동 허가

		player.body.setSize(60, 60, 17, 80);		//플레이어 객체의 바디 설정(실제 영역)
		player.body.immovable = true;
  	   
		this.game.physics.p2.enable(player);		//플레이어 객체에 카메라 설정 허가
		this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, true);
		/*		if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, false);	//플레이어 객체에 카메라 고정
		}else{
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, true);
		}*/
			
		/* 생물체 설정 */
/*		ffollower = this.game.add.sprite(60, 400, 'ffollower');
		this.game.physics.enable(ffollower, Phaser.Physics.ARCADE);
		ffollower.body.setSize(60, 60, 20, 87);
		ffollower.body.immovable = true;
		ffollower.animations.add('fdown', [3,4,3,5], 10, true);												//플레이어 객체의 애니메이션 지정
		ffollower.animations.add('fleft', [6,7,6,8], 10, true);
		ffollower.animations.add('fright', [9,10,9,11], 10, true);
		ffollower.animations.add('fup', [0,1,2,1], 10, true);
		ffollower.animations.add('fstop', [3], 0.1, true);
		
		ffollower.animations.play('fstop', 5, true);	//플레이어 객체의 애니메이션 시작
  	   
		ffollower.body.collideWorldBounds = true;
		ffollower.body.setSize(60, 60, 25, 80);		//플레이어 객체의 바디 설정(실제 영역)
		ffollower.body.immovable = true;*/
  	   
		
		/////////////////////////////////////////////////--벽 뚜껑
 		
 		
  		layer3 = map.createLayer('Tile Layer 3');
  		layer3.resizeWorld();
  		this.game.physics.arcade.enable(layer3);
  		
  		map.setCollision([2]); //layer2 해당
  		/*map.setCollisionByExclusion([],true, layer2); */
  		
		
		//////////////////////////////////////////////////
		
		
	 	/*수수께끼 관련*/
 		//script
	 	questioner = this.game.add.image(0, 0, 'questioner');
	 	questioner.fixedToCamera = true;
	 	questioner.cameraOffset.setTo(500, 80);
/*	 	followerface = this.game.add.image(0, 0, 'followerface');
	 	followerface.fixedToCamera = true;
	 	followerface.cameraOffset.setTo(0, 0);*/
	 	
	 	questioner.visible = false;
/*	 	followerface.visible = false;*/
	 	
 	
	 	//if문 지점
	 	question1 = this.game.add.sprite(868, 484, 'hikari');
	 	question1.animations.add('kirakira');
	 	question1.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(question1);
	 	question1.body.immovable = true;
	 	
	 	question2 = this.game.add.sprite(868, 192, 'hikari');
	 	question2.animations.add('kirakira');
	 	question2.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(question2);
	 	question2.body.immovable = true;
	 	
	 	question3 = this.game.add.sprite(992, 484, 'hikari');
	 	question3.animations.add('kirakira');
	 	question3.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(question3);
	 	question3.body.immovable = true;
	 	
	 	question4 = this.game.add.sprite(2436, 128, 'hikari');
	 	question4.animations.add('kirakira');
	 	question4.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(question4);
	 	question4.body.immovable = true;
	 	
	 	question5 = this.game.add.sprite(2436, 484, 'hikari');
	 	question5.animations.add('kirakira');
	 	question5.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(question5);
	 	question5.body.immovable = true;
			
	 	//for문 지점
	 	forIntro1 = this.game.add.sprite(288, 128, 'hikari');
	 	forIntro1.animations.add('kirakira');
	 	forIntro1.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(forIntro1);
	 	forIntro1.body.immovable = true;
	 	
	 	forIntro2 = this.game.add.sprite(1508, 288, 'hikari');
	 	forIntro2.animations.add('kirakira');
	 	forIntro2.animations.play('kirakira', 2, true);
	 	this.game.physics.arcade.enable(forIntro2);
	 	forIntro2.body.immovable = true;
	 	
		
		/* sound 설정 */
		this.sound1 = this.game.add.audio("bell");
		this.sound2 = this.game.add.audio("explosion");
		this.sound3 = this.game.add.audio("beat");
		
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
  		
	    
		/*타이머*/
		spriteText = this.game.add.sprite(0, 0);
	    spriteText.fixedToCamera = true;
		
	    txtScore = this.game.add.text(50, 50, "Oxygen : 500", { fontSize: "20px", fill: "#FFFFFF" });
	    eventScore = this.game.time.events.loop(Phaser.Timer.SECOND, function () {score--; txtScore.setText("Oxygen : " + score);}, this);
	    eventScore.fixedToCamera;
	    
	    spriteText.addChild(txtScore);
		
	    
	    /*eagleEye pop*/
		this.mieru = this.game.add.image(0, 0, 'mieru');	//캐릭터 그림
		this.mieru.fixedToCamera = true;
		this.mieru.cameraOffset.setTo(0, 0);
		this.mieru.visible = false;
	    
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
	 	/*script_item.addChild(text);*/
  		
	 	
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

	        pauseFlag = true;//플래그
	        this.pause_label.inputEnabled = false;	//클릭하면 메뉴창 닫을 때까지 클릭 안됨 
	    },this);
	    
	    this.game.input.onDown.add(this.unpause, this);//메뉴의 버튼 누를때
	    /*pause누르면 메뉴 뜸, 마우스 버튼 누를 때 onDown 실행됨, 튜토리얼때 눌리면 input버튼 눌렀을때 flag줘서 수정하는 방향으로*/
	 	
	 	/*판 깸*/
  		/*var nextButton = this.game.add.button(300, 500, "button",this.moveNextStage4,this);
  		nextButton.anchor.setTo(0.5,0.5);*/
	 	
/*	 	var temp1 = this.game.input.onDown.add(this.mouseOnDownEvent, this);//한번클릭
	    var temp2 = this.game.input.onUp.add(this.mouseOnUpEvent, this);//한번클릭
*/	    
	    cursors = this.game.input.keyboard.createCursorKeys();
	},
	
	/*업데이트 함수*/
	update: function(){
		this.game.input.onDown.addOnce(this.closeScript, this);
		/*타이머*/
		if(score < 0){
			this.game.time.events.remove(eventScore);
			txtScore.kill();
			this.game.add.text(50, 50, "Sayonara", {fontSize: "20px", fill: "#FFFFFF"});
			player.kill();
		}
		
		/*가방의 위치 값 파악 후 적용*/
		width = player.x + 32;
		height = player.y + 64;
		this.position(width, height);

		/* 특정 아이템과 충돌시 발생하는 이벤트 */
		
		//1. 플레이어와 가방의 충돌 이벤트
/*		if(this.game.physics.arcade.collide(player, bag)){
			alert("crush !");
			lineIndex = 0;
			bag.destroy();
			checkBag = true;
			// 플레이어 이미지 변경
			player.loadTexture('character_bag', 0);
			player.animations.add('down', [3,4,3,5], 10, true);
			player.animations.add('left', [6,7,6,8], 10, true);
			player.animations.add('right', [9,10,9,11], 10, true);
			   
			player.animations.add('stop', [12,13,14,15,12,12,12,15,14,13,12,12,12], 0.1, true);

			item_key.body.enable = true;
			item_dia.body.enable = true;
			item_heart.body.enable = true;
			
			item_water.body.enable = true;
			item_phone.body.enable = true;
			item_mask.body.enable = true;
			
			this.user('stop');//일단 멈춤
			itemming = true;
			alert("pb : "+itemming);
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			this.alternateUserCommand();
		}*/
		
		//2. 플레이어와 아이템(열쇠)의 충돌
		if(this.game.physics.arcade.collide(player, item_key)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');//일단 멈춤
			itemming = true;
			/*alert("pk : "+itemming);*/
			/*arrActionNum++;//충돌했을때 다음 인덱스로
*/			command = "stop";//플래그주고
			this.alternateUserCommand();
			if(checkBag){
				item_key.destroy();
				this.sound1.play();
				checkKey = true;
				/*woodendoor.body.enable = false;*/
/*				door2.body.immovable = false;
				door3.body.immovable = false;
				door4.body.immovable = false;
				door5.body.immovable = false;
				door6.body.immovable = false;
				door7.body.immovable = false;
				door8.body.immovable = false;
				door9.body.immovable = false;
				door10.body.immovable = false;
				door11.body.immovable = false;
				door12.body.immovable = false;
				door13.body.immovable = false;
				door14.body.immovable = false;*/
				this.getItem(getKey);
				this.game.input.onDown.addOnce(this.closeScript, this);
				/*this.myItemList();*/
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.closeScript, this);
				item_key.body.enable = false;
			}
		}
		
/*		//2. 플레이어와 아이템(다이아)의 충돌
		if(this.game.physics.arcade.collide(player, item_dia)){
			lineIndex = 0;
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			if(checkBag){
				item_dia.destroy();
				checkDia = true;
				this.getItem(getDia);
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.closeScript, this);
				item_dia.body.enable = false;
			}
		}*/
		
		//2. 플레이어와 아이템(구급함)의 충돌
		if(this.game.physics.arcade.collide(player, item_heart)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');//일단 멈춤
			itemming = true;
			/*alert("ph : "+itemming);*/
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			this.alternateUserCommand();
			if(checkBag){
				this.sound1.play();
				item_heart.destroy();
				checkHeart = true;
				this.getItem(getHeart);
				this.game.input.onDown.addOnce(this.closeScript, this);
				/*this.myItemList();*/
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.closeScript, this);
				item_heart.body.enable = false;
			}
		}
		

		//2. 플레이어와 아이템(물)의 충돌
	/*		if(this.game.physics.arcade.collide(player, item_water)){
			alert("crush !");
			lineIndex = 0;
			this.user('stop');//일단 멈춤
			itemming = true;
			alert("pw : "+itemming);
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			this.alternateUserCommand();
			if(checkBag){
				item_water.destroy();
				checkWater = true;
				this.getItem(getWater);
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.closeScript, this);
				item_water.body.enable = false;
			}
		}
		
		//2. 플레이어와 아이템(핸드폰)의 충돌
		if(this.game.physics.arcade.collide(player, item_phone)){
			alert("crush !");
			lineIndex = 0;
			this.user('stop');//일단 멈춤
			itemming = true;
			alert("pph : "+itemming);
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			this.alternateUserCommand();
			if(checkBag){
				item_phone.destroy();
				checkPhone = true;
				this.getItem(getPhone);
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.closeScript, this);
				item_phone.body.enable = false;
			}
		}
		
		//3. 플레이어와 아이템(방독면)의 충돌
		if(this.game.physics.arcade.collide(player, item_mask)){
			alert("crush !");
			lineIndex = 0;
			this.user('stop');//일단 멈춤
			itemming = true;
			alert("pm : "+itemming);
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
			this.alternateUserCommand();
			  
			if(checkBag){
				item_mask.destroy();
				checkMask = true;
				this.getItem(getMask);
				this.game.input.onDown.addOnce(this.closeScript, this);
			} else {
				this.falseGet();
				this.game.input.onDown.addOnce(this.closeScript, this);
				item_mask.body.enable = false;
			}
		}*/
		
		//4. 플레이어와 레이어의 충돌
		if(this.game.physics.arcade.collide(player, layer1)){
			/*alert("crush !");*/
			this.user('stop');//일단 멈춤
			arrActionNum++;//충돌했을때 다음 인덱스로
			command = "stop";//플래그주고
		}
		
		
		if(player.body.x == 2436 && player.body.y == 128){
			if(checkKey){
				this.doorOpen();
			}
		}
		
		
		
		//4. for문 충돌
		if(this.game.physics.arcade.collide(player, forIntro1)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq1 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkForP = true;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			forIntro1.body.enable = false;
		}
		
		if(this.game.physics.arcade.collide(player, forIntro2)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq1 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkWhileP = true;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			forIntro2.body.enable = false;
		}
		
		//4. 수수께끼 충돌
		if(this.game.physics.arcade.collide(player, question1)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq1 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkQP = true;
			QPIndex = 1;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			question1.body.enable = false;
		}
		
		if(this.game.physics.arcade.collide(player, question2)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq2 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkQP = true;
			QPIndex = 2;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			question2.body.enable = false;
		}
		
		if(this.game.physics.arcade.collide(player, question3)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq3 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkQP = true;
			QPIndex = 3;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			question3.body.enable = false;
		}
		
		if(this.game.physics.arcade.collide(player, question4)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq4 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkQP = true;
			QPIndex = 4;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			question4.body.enable = false;
		}
		
		if(this.game.physics.arcade.collide(player, question5)){
			/*alert("crush !");*/
			lineIndex = 0;
			this.user('stop');
			itemming = true;
			/*alert("pq5 : "+itemming);*/
			command = "stop";
			this.alternateUserCommand();
			/*arrActionNum++;*/
			checkQP = true;
			QPIndex = 5;
			this.soundE();
			this.falseGet();
			/*this.game.input.onDown.addOnce(this.closeScript, this);*/
			question5.body.enable = false;
		}
		
	    if(command === "stop") {
	    	if(actionFlag){
	    		if(arrActionNum === arrAction.length-1){
	    			actionFlag = false;
	            }
	    		/*alert("command stop : " + command);*/
	    		/*alert("p stop itemming: " + itemming);*/
	    		/*if(!(itemming)){*/
	    			/*alert("arrAction : "+arrAction);*/
	    			command = arrAction[arrActionNum];
	    			/*alert("p stop normal command: " + command);
	    			alert("p stop normal arrActionNum: " + arrActionNum);*/
	    			this.user(command);//실행 부분
	    		/*}else{*/
		    		/*alert("p stop item command: " + command);
		    		alert("p stop item arrActionNum: " + arrActionNum);*/
		    		/*this.user(command);*/
		    		/*alert("p stop last itemming: " + itemming);*/
	    		/*}*/
	    		itemming = false;
	    	}
	    }
	    
		if(command2 === "stop") {	
			if(actionFlag2){
				if(arrActionNum2 === arrAction.length-1) {
					console.log("????");
					actionFlag2 = false;
				}
				/*alert("command2 stop : " + command);*/
	    		command2 = arrAction[arrActionNum2];
	    		/*alert("f stop command :" + command2);*/
	    		/*this.follow(command2);*/
			}
		}
	    
		if(eagleEyeOn){
			/*cursors.enabled = true;*/
		    if (cursors.up.isDown)
		    {
		        this.game.camera.y -= 10;
		    }
		    else if (cursors.down.isDown)
		    {
		        this.game.camera.y += 10;
		    }
	
		    if (cursors.left.isDown)
		    {
		        this.game.camera.x -= 10;
		    }
		    else if (cursors.right.isDown)
		    {
		        this.game.camera.x += 10;
		        /*alert("command eagleEyefunctionin : " + command);*/
		    }
	    }
	},
	
	doorOpen: function(){
//			this.user('stop');
//			arrActionNum++;
//			command = "stop";
//			this.game.state.start("GameStage5");
		
		this.game.paused = true;
		
		this.clearMenu = this.game.add.sprite(this.game.camera.x+400, this.game.camera.y+300, 'menu3');
        this.clearMenu.anchor.setTo(0.5, 0.5);
        
        this.pause_label.inputEnabled = false;	//이 상태에서 pause버튼 안눌리게 함
        this.ifClearFlag = true;
        this.game.input.onDown.add(this.clearState, this);
			
	},
	/*조장 추가함!!!*/
	clearState: function(event){
    	if(this.game.paused && this.ifClearFlag){
    		if(event.x > 280 && event.x < 353 && event.y > 270 && event.y < 343){
            	//목록으로 가기 + 초기화 해줘야함
    			console.log("%cgoSelectStage Button!!!!!", "color:blue; background:green");
    			score = 500;
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("SelectStage");
            }
            else if(event.x > 363 && event.x < 437 && event.y > 270 && event.y < 343){
            	//다시하기
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	score = 500;
            	actionFlag = false;
        		command = "stop";
        		this.ifClearFlag = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage4");
            }
            else if(event.x > 448 && event.x < 520 && event.y > 270 && event.y < 343){
            	//다음스테이지
            	console.log("%creplay current stage!!!!!", "color:blue; background:green");
            	score = 500;
            	actionFlag = false;
        		command = "stop";
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		this.game.state.start("GameStage5");
            }
    	}
    },
	
	
	soundE: function(){
		this.sound3.mute = false;
		this.sound3.loopFull();
	},
	
	alternateUserCommand: function(){
    	actionFlag = false;
    	this.user(command);
    	itemming = false;
	},
	
	alternateUserCommand2: function(){
    	actionFlag2 = false;
    	this.user(command2);
    	itemming = false;
	},
	
	/*가방이 없을 경우 실행되는 대사*/
	falseGet:function(){
		if (myLoop != null) {
			this.game.time.events.remove(myLoop);
		}
		
		text.text="";
		
		/*lineIndex = sslineIndex;*/
		if(checkQP){
			questioner.visible = true;
			scriptBar.visible = true;
			if(QPIndex==1){
				content = getQuestion[0];
			}else if(QPIndex==2){
				content = getQuestion[1];
			}else if(QPIndex==3){
				content = getQuestion[2];
			}else if(QPIndex==4){
				content = getQuestion[3];
			}else if(QPIndex==5){
				content = getQuestion[4];
			}
		}else if(checkFP){
			/*followerface.visible = true;*/
			scriptBar.visible = true;
			content = getWarning;
		}else if(checkForP){
			questioner.visible = true;
			scriptBar.visible = true;
			content = getFor;
			checkForP = false;
		}else if(checkWhileP){
			questioner.visible = true;
			scriptBar.visible = true;
			content = getWhile;
		}else {
			portrait.visible = true;
			scriptBar.visible = true;
			content = falseGetItem;
		}
		this.nextLine();
		/*tempLine = sslineIndex;*/
		for (var i = lineIndex; i < content.length; i++) {
			if (content[i] === "#"){
				slineIndex=i+1;
				/*sslineIndex=i+1;*/
				break;
		    }
		}
		/*this.game.paused = true;*/
		
	},
	
	/*아이템 획득*/
	getItem:function(stage_item){
		if (myLoop != null) {
			this.game.time.events.remove(myLoop);
		}
		text.text="";
		portrait.visible = true;
		scriptBar.visible = true;
		/*script_item.visible = true;*/
		/*lineIndex = sslineIndex;*/
		content = stage_item;
		this.nextLine();
		for (var i = lineIndex; i < content.length; i++) {
			if (content[i] === "#"){
				slineIndex=i+1;
				/*sslineIndex=i+1;*/
				break;
		    }
		}
		/*this.game.paused = true;*/
		
	},
	
	nextLine: function () {
	    line = content[lineIndex].split(' ');
		if (line[0] === "#"){
	    	return;
	    }
	    wordIndex = 0;
	    myLoop = this.game.time.events.repeat(wordDelay, line.length, this.nextWord, this);
	    lineIndex++;
	},
	
	closeScript: function () {
		this.game.time.events.remove(myLoop);
		//일단 eventrepeat을 제거
		text.text="";
		//공백처리
		this.script = "";
		//공백처리
		for (var i = tempLine; i < slineIndex-1; i++){
			 this.script = this.script + text.text.concat(content[i] + "\n");
		}
		//한번 클릭했을때의 대사를 갱신
		text.text = this.script;		//위에서 갱신한것을 화면 상 대사에 삽입
		if (lineIndex+1 == slineIndex) {
			scriptBar.visible = false; //대사가 모두 떳다면 클릭 했을경우 대사창 꺼짐
			portrait.visible = false;   //대사가 모두 떳다면 클릭 했을경우 초상화 꺼짐
			questioner.visible = false;
			/*followerface.visible = false;*/
			script_item.visible = false;
			/*this.user(receivedcommand);	*/	//진행되던 케릭터의 행동 재게
			text.text = "";				//대사 공백처리
			this.sound3.mute = true;
		}
		lineIndex = slineIndex-1;
		checkQP = false;
		checkFP = false;
		/*this.game.paused = false;*/
	},
	
	nextWord : function () {
	    text.text = text.text.concat(line[wordIndex] + " ");
	    wordIndex++;
	    if (wordIndex === line.length){
	        text.text = text.text.concat("\n");
	        this.game.time.events.add(lineDelay, this.nextLine, this);
	    }
	},
	
	/*---------------------스테이지선택 추가부분---------------------*/
	saveLevel: function() {
		$.ajax({
			url: 'saveLevel',
			method: 'get',
			data: {
		id: 1, 
		userlevel: 4
			},
			dataType : "json",
			cache: false,
			success: function(result) {
				
			},
			error: function() {
			}
		});
	},
	saveItems: function() {
		/*alert("saveItems myItem : "+myItem);*/
		/*alert("saveItems slot.lenght : "+slot.length);*/
		for (var i = 0; i < slot.length; i++) {
			if (myItem[i]!=null) {
				slot[i] = myItem[i];
				alert("saveItems slot : "+slot);
			}else{
				slot[i] = "미 장착";
				alert("slot not : "+slot);
			}
		}
		$.ajax({
			url: 'updateItems',
			method: 'get',
			data: {
		userid: 1, 
		slot1: slot[0], 
		slot2: slot[1], 
		slot3: slot[2], 
		slot4: slot[3], 
		slot5: slot[4],
			},
			dataType : "json",
			cache: false,
			success: function(result) {
				
			},
			error: function() {
			}
		});
	},
	findItems: function() {
		/*alert("findItems myItem : "+myItem);*/
			$.ajax({
				url: 'findItems',
				method: 'get',
				data: {
					userid: 1
				},
				success: function(result) {
					/*alert("result : "+result.slot1);*/
					slot[0] = result.slot1;
					slot[1] = result.slot2;
					slot[2] = result.slot3;
					slot[3] = result.slot4;
					slot[4] = result.slot5;
					for (var i = 0; i < slot.length; i++) {
					}
			  		for (var i = 0; i < slot.length; i++) {
			  			if (slot[i] == "열쇠") {
			  				checkKey = true;
			  			}else if(slot[i] == "다이아"){
			  				checkDia = true;
			  			}else if(slot[i] == "구급함"){
			  				checkHeart = true;
			  			}else if(slot[i] == "스마트폰"){
			  				checkPhone = true;
			  			}else if(slot[i] == "방독면"){
			  				checkMask = true;
			  			}else if(slot[i] == "생수"){
			  				checkWater = true;
			  			}
			  		}
				},
				error: function() {
				}
			});
		},
		/*---------------------스테이지선택 추가부분---------------------*/
		/*민용 이것도 추가함*/
		moveNextStage4: function(){
			/*alert("movens4");
			alert("movens4 myItem : " +myItem);*/
			this.saveItems();
			this.saveLevel();
			this.game.state.start("Boot");
		}
		/*민용 이것도 추가함*/
		,
	
	/*캐릭터 이동*/
	user: function(command){
		/*alert("command function : " +command);
		alert("command arrAction : " +arrAction);*/
		if(command === 'left'){
			this.mieru.visible = false;
	    	this.sound2.mute = true;
	    	this.sound3.mute = true;
			/*receivedcommand = command;*/
			player.body.velocity.set(-500, 0);
			player.animations.play('left');
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, true);
		} else if(command === 'right'){
			this.mieru.visible = false;
	    	this.sound2.mute = true;
	    	this.sound3.mute = true;
			/*receivedcommand = command;*/
			player.body.velocity.set(500, 0);
			player.animations.play('right');
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, true);
		} else if(command === 'up'){
			this.mieru.visible = false;
	    	this.sound2.mute = true;
	    	this.sound3.mute = true;
			/*receivedcommand = command;*/
			player.body.velocity.set(0, -500);
			player.animations.play('up');
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, true);
		} else if(command === 'down'){
			this.mieru.visible = false;
	    	this.sound2.mute = true;
	    	this.sound3.mute = true;
			/*receivedcommand = command;*/
			player.body.velocity.set(0, 500);
			player.animations.play('down');
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, true);
		} else if(command === 'stop') {
			/*receivedcommand = command;*/
			player.body.velocity.set(0, 0);
			player.animations.stop();
			player.animations.play('stop', 5, true);
			/*ffollower.body.enable = true;*/
			this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, false);
		} else if(command === 'eagleEye') {
			//////화면드래깅
			eagleEyeOn = true;
			this.mieru.visible = true;
			this.sound2.mute = false;
			this.sound2.play();
			/*alert("eE : "+eagleEyeOn);*/
			command = "stop";
			command2 = "stop";
			/*alert("eagle Eye Command after : " +command);*/
		}
	},
/*	follow: function(command){
		if(command === 'left'){
			ffollower.body.velocity.set(-400, 0);
			ffollower.animations.play('fleft');
		} else if(command === 'right'){
			ffollower.body.velocity.set(400, 0);
			ffollower.animations.play('fright');
		} else if(command === 'up'){
			ffollower.body.velocity.set(0, -400);
			ffollower.animations.play('fup');
		} else if(command === 'fdown'){
			ffollower.body.velocity.set(0, 400);
			follower.animations.play('fdown');
		} else if(command === 'stop') {
			ffollower.body.velocity.set(0, 0);
			ffollower.animations.play('stop');
			follower.animations.play('fstop', 5, true);
		}
	},*/
	
	/*캐릭터 이동에 따른 인벤토리 버튼 위치 변경*/
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
					myItem[i] = "생수";
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
					myItem[i] = "스마트폰";
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
					myItem[i] = "방독면";
					mask_name = "방독면";
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
					myItem[i] = "열쇠";
					/*alert("myItem i : "+i);
					alert("myItem : "+myItem);*/
					key_name = "열쇠";
					key_info = "이걸로, 나갈 수 있겠군.";
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
					myItem[i] = "구급함";
					heart_name = "구급함";
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
		/*alert("selectKey item_key : " + item_key);
		alert("selectKey info_key : " + item_key);*/
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
            	actionFlag = false;
        		command = "stop";
        		pauseFlag = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		checkTutorial = true;//추가함 시작할때 튜토리얼 대사 다시 나오게 함
        		this.game.state.start("SelectStage");
            }
            else if(event.x > 363 && event.x < 437 && event.y > 270 && event.y < 343){
            	//계속하기
            	pauseFlag = false;
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
        		pauseFlag = false;
        		this.game.paused = false;
        		this.mouseButtonClick = false;
        		checkTutorial = true;//추가함 시작할때 튜토리얼 대사 다시 나오게 함
        		this.game.state.start("GameStage4");
            }
        }
    },
    
	/* 다음스태이지로의 이동 */
    /*	moveNextStage4: function(){
    		console.log("%cmoveNextStage4", "color:pink; background:green");
    		actionFlag = false;
    		command = "stop";
    		this.game.state.start("SelectStage");
    	},*/
	
	render : function () {
		/*this.game.debug.bodyInfo(player, 32, 32);
		this.game.debug.body(player);*/
		/*this.game.debug.cameraInfo(this.game.camera, 32, 32);*/
	},
}