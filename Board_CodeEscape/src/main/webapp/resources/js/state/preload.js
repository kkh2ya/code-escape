/*
 * 리소스 추가하면 주석 꼼꼼히
 */
var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
		//이미지 로드
		/*----------------------스테이지 선택 이미지----------------------*/
		this.game.load.image('open_one', './resources/assets/public/stageSelectButton/open_1.png');
		this.game.load.image('open_two', './resources/assets/public/stageSelectButton/open_2.png');
		this.game.load.image('open_three', './resources/assets/public/stageSelectButton/open_3.png');
		this.game.load.image('open_four', './resources/assets/public/stageSelectButton/open_4.png');
		this.game.load.image('open_five', './resources/assets/public/stageSelectButton/open_5.png');
		this.game.load.image('open_six', './resources/assets/public/stageSelectButton/open_6.png');
		this.game.load.image('open_seven', './resources/assets/public/stageSelectButton/open_7.png');
		this.game.load.image('open_eight', './resources/assets/public/stageSelectButton/open_8.png');
		
		this.game.load.image('close_one', './resources/assets/public/stageSelectButton/close_1.png');
		this.game.load.image('close_two', './resources/assets/public/stageSelectButton/close_2.png');
		this.game.load.image('close_three', './resources/assets/public/stageSelectButton/close_3.png');
		this.game.load.image('close_four', './resources/assets/public/stageSelectButton/close_4.png');
		this.game.load.image('close_five', './resources/assets/public/stageSelectButton/close_5.png');
		this.game.load.image('close_six', './resources/assets/public/stageSelectButton/close_6.png');
		this.game.load.image('close_seven', './resources/assets/public/stageSelectButton/close_7.png');
		this.game.load.image('close_eight', './resources/assets/public/stageSelectButton/close_8.png');
		/*----------------------스테이지 선택 이미지----------------------*/
		
		this.game.load.image('sky', './resources/assets/public/sky.png');
		this.game.load.image('ground', './resources/assets/public/platform.png');
		this.game.load.image('button', './resources/assets/public/higher.png');
		
		
		this.game.load.image('smile', './resources/assets/public/smile.png');
		this.game.load.spritesheet('dude', './resources/assets/public/dude.png', 32, 48);
	    // TileMap 로드
		this.game.load.tilemap('map', './resources/assets/public/map.csv', null, Phaser.Tilemap.CSV);
		this.game.load.tilemap('map2', './resources/assets/public/map2.csv', null, Phaser.Tilemap.CSV);
		this.game.load.tilemap('map3', './resources/assets/public/map3.csv', null, Phaser.Tilemap.CSV);
	    // TileSet 로드
		this.game.load.image('tiles', './resources/assets/public/tileset.png');

		// Script 로드
		this.game.load.image('portrait', './resources/assets/script/portrait2.png');
		this.game.load.image('portrait_default', './resources/assets/script/portrait.png');
		this.game.load.image('scriptBar', './resources/assets/script/scriptBar.png');
		this.game.load.image('script_item', './resources/assets/script/script.png');
		
		//캐릭터 스프라이트 시트
	    this.game.load.spritesheet('character', './resources/assets/public/player1-bag.png', 86, 150);
	    this.game.load.spritesheet('character_default', './resources/assets/public/player1.png', 86, 150);
		
		
       // soundEffect
       this.game.load.audio('footStep', './resources/assets/public/soundEffect/footstep_player.mp3');
       this.game.load.audio('getItem', './resources/assets/public/soundEffect/getItem.mp3');
	    
       /*일시정지 눌렀을 때 뜨는 메뉴*/
       this.game.load.image('menu2', './resources/assets/public/game_pause.png', 270, 180);
       /*클리어 했을 때 뜨는 메뉴*/
       this.game.load.image('menu3', './resources/assets/public/game_clear.png', 270, 180);
       /*게임오버 했을 때 뜨는 메뉴*/
       this.game.load.image('menu4', './resources/assets/public/game_gameover.png', 270, 180);
       
		/*---------------------- Stage1 -----------------------*/
	    //TileMap 로드
	    this.game.load.tilemap('map_1', './resources/assets/stage1/Tilemap/stage1.json', null, Phaser.Tilemap.TILED_JSON);
	    this.game.load.tilemap('map_2', './resources/assets/stage2/tilemap/stage2.json', null, Phaser.Tilemap.TILED_JSON);
	    this.game.load.image('tiles_1', './resources/assets/stage1/Tilemap/tileset.png');
	    this.game.load.image('tutorial', './resources/assets/script/window.png');
		
	  //intro
	    this.game.load.image('black', './resources/assets/stage1/intro.png');
	    
	    //Map 아이템
	    this.game.load.image('door1', './resources/assets/stage1/Tilemap/stage1_door.png');
	    this.game.load.image('case', './resources/assets/stage1/Tilemap/case.png');
		this.game.load.image('openDoor', './resources/assets/stage1/openTheDoor.png');
	    
	    //인벤토리
	    this.game.load.spritesheet('inventory', './resources/assets/stage1/inventory1.png', 100, 50);
	    this.game.load.image('inven', './resources/assets/stage1/inven1.png'); //아이템창 이미지
	    this.game.load.image('cancel', './resources/assets/stage1/cancel.png');
	    this.game.load.image('array', './resources/assets/stage1/array.png');
		
	    //아이템 로드
	    this.game.load.spritesheet('bag', './resources/assets/stage1/map-bag.png', 32, 32);
	    this.game.load.image('phone', './resources/assets/stage1/item/phone.png');
	    this.game.load.image('water', './resources/assets/stage1/item/water.png');
	    this.game.load.image('mask', './resources/assets/stage1/item/mask.png');
	    this.game.load.spritesheet('hikari', './resources/assets/stage1/hikari.png', 32, 32);
	    this.game.load.spritesheet('mask_sprite', './resources/assets/stage1/item/mask_sprite.png', 32, 32);
	   
	    
	    /*---------------------- Stage1 -----------------------*/
	    
	    /*---------------------- Stage2 -----------------------*/
	    this.game.load.image('patch', './resources/assets/stage2/item/patch.png');
	    this.game.load.image('bar', './resources/assets/stage2/item/bar.png');
	    this.game.load.image('dirtyKey', './resources/assets/stage2/item/dirtyKey.png');
	    /*---------------------- Stage2 -----------------------*/
	    
		/*---------------------- Stage4 -----------------------*/
	    
	  //TileMap 로드
	    this.game.load.tilemap('map_4', './resources/assets/stage4/Tilemap/stage4.json', null, Phaser.Tilemap.TILED_JSON);
	    this.game.load.image('tiles_4', './resources/assets/stage4/Tilemap/tileset.png');
		
	    //생물체
	    this.game.load.image('ffollower', './resources/assets/stage4/Creature/follower_sprite.png', 108, 172);
	    
	    //Script관련 로드
	    this.game.load.image('questioner', './resources/assets/script/questioner2.png');
	    this.game.load.image('followerface', './resources/assets/script/followerface.png');
	    
	    this.game.load.image('mieru', './resources/assets/script/mieru2.png');
	    
	    //수수께끼관련 로드
	    this.game.load.image('question1', './resources/assets/script/door.png');
	    this.game.load.image('question2', './resources/assets/script/door.png');
	    this.game.load.image('question3', './resources/assets/script/door.png');
	    this.game.load.image('question4', './resources/assets/script/door.png');
	    this.game.load.image('question5', './resources/assets/script/door.png');
	    
	    //for문 안내
	    this.game.load.image('forIntro1', './resources/assets/script/door.png');
	    this.game.load.image('forIntro2', './resources/assets/script/door.png');
	    
	    //문
	    this.game.load.image('woodendoor', './resources/assets/stage4/woodendoor.png');
		
	    //아이템 로드
	    this.game.load.image('key', './resources/assets/stage4/item/key.png');
	    this.game.load.image("dia", "./resources/assets/stage4/item/diamond.png", 32, 40);
	    this.game.load.image("heart", "./resources/assets/stage4/item/heart.png", 32, 40);
	    
		
	    //사운드 로드
	    this.game.load.audio("bell", "./resources/assets/stage4/sound/bell.mp3");
	    this.game.load.audio("explosion", "./resources/assets/stage4/sound/explosion.mp3");
	    this.game.load.audio("beat", "./resources/assets/stage4/sound/synth2.mp3");
		
	    /*---------------------- Stage4 -----------------------*/
	},
  	create: function(){
		this.game.state.start("SelectStage");
	}
}