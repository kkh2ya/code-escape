/*
 * 스테이지 선택
 */ 
var selectstage = function(game){
	var test = 0;
	var getId;
}
 
selectstage.prototype = {
  	create: function(){
  		
  		this.game.physics.startSystem(Phaser.Physics.ARCADE);
  		
  		this.game.stage.backgroundColor = "#444740"; // 배경컬러 설정
  		
  		var nextButton1 = this.game.add.button(80,150,"open_one",this.moveNextStage1,this);
  		var nextButton2 = this.game.add.button(260,150,"open_two",this.moveNextStage2,this);
  		var nextButton3 = this.game.add.button(440,150,"open_three",this.moveNextStage3,this);
  		var nextButton4 = this.game.add.button(620,150,"open_four",this.moveNextStage4,this);
  		var nextButton5 = this.game.add.button(80,350,"open_five",this.moveNextStage5,this);
  		var nextButton6 = this.game.add.button(260,350,"open_six",this.moveNextStage6,this);
  		var nextButton7 = this.game.add.button(440,350,"open_seven",this.moveNextStage7,this);
  		var nextButton8 = this.game.add.button(620,350,"open_eight",this.moveNextStage8,this);
  		
  		/*민용 디비 추가 부분*/
  		var lockedStage1 = this.game.add.button(80,150,"close_one",this.lockedStage,this);
	  	lockedStage1.visible = false;
	  	var lockedStage2 = this.game.add.button(260,150,"close_two",this.lockedStage,this);
	  	lockedStage2.visible = false;
	  	var lockedStage3 = this.game.add.button(440,150,"close_three",this.lockedStage,this);
  		lockedStage3.visible = false;
  		var lockedStage4 = this.game.add.button(620,150,"close_four",this.lockedStage,this);
  		lockedStage4.visible = false;
  		var lockedStage5 = this.game.add.button(80,350,"close_five",this.lockedStage,this);
  		lockedStage5.visible = false;
  		var lockedStage6 = this.game.add.button(260,350,"close_six",this.lockedStage,this);
	  	lockedStage6.visible = false;
	  	var lockedStage7 = this.game.add.button(440,350,"close_seven",this.lockedStage,this);
  		lockedStage7.visible = false;
  		var lockedStage8 = this.game.add.button(620,350,"close_eight",this.lockedStage,this);
	  	lockedStage8.visible = false;
	  	var nextButtonVisible = [];
	  	nextButtonVisible[0] = nextButton1.visible;
	  	nextButtonVisible[1] = nextButton2.visible;
	  	nextButtonVisible[2] = nextButton3.visible;
  		nextButtonVisible[3] = nextButton4.visible;
		nextButtonVisible[4] = nextButton5.visible;
  		nextButtonVisible[5] = nextButton6.visible;
	 	nextButtonVisible[6] = nextButton7.visible;
	 	nextButtonVisible[7] = nextButton8.visible;
	  	var lockedStageVisible = [];
	  	lockedStageVisible[0] = lockedStage1.visible;
	  	lockedStageVisible[1] = lockedStage2.visible;
	  	lockedStageVisible[2] = lockedStage3.visible;
	  	lockedStageVisible[3] = lockedStage4.visible;
	 	lockedStageVisible[4] = lockedStage5.visible;
	 	lockedStageVisible[5] = lockedStage6.visible;
	 	lockedStageVisible[6] = lockedStage7.visible;
	  	lockedStageVisible[7] = lockedStage8.visible;
	  	
	 	for (var i = selectStage ; i < nextButtonVisible.length ; i++) {
  			nextButtonVisible[i] = false;
  			lockedStageVisible[i] = true;
	}
	  	
	  	nextButton1.visible = nextButtonVisible[0];
	  	nextButton2.visible = nextButtonVisible[1];
	  	nextButton3.visible = nextButtonVisible[2];
	  	nextButton4.visible = nextButtonVisible[3];
	  	nextButton5.visible = nextButtonVisible[4];
	  	nextButton6.visible = nextButtonVisible[5];
	  	nextButton7.visible = nextButtonVisible[6];
	  	nextButton8.visible = nextButtonVisible[7];
	  		
	  	lockedStage1.visible = lockedStageVisible[0];
  		lockedStage2.visible = lockedStageVisible[1];
  		lockedStage3.visible = lockedStageVisible[2];
  		lockedStage4.visible = lockedStageVisible[3];
  		lockedStage5.visible = lockedStageVisible[4];
  		lockedStage6.visible = lockedStageVisible[5];
  		lockedStage7.visible = lockedStageVisible[6];
  		lockedStage8.visible = lockedStageVisible[7];
	  	
//	  	alert("selectStage : " + selectStage);
	  	/*민용 디비 추가 부분*/
  		
  		getId = document.getElementById('aside');
  		getId.style.display = 'none';
	},
	update: function(){},
	moveNextStage1: function(){
		console.log("%cmoveNextStage1", "color:blue; background:green");
		this.game.state.start("GameStage1");
		getId.style.display = 'block';
	},
	moveNextStage2: function(){
		console.log("%cmoveNextStage2", "color:blue; background:green");
		this.game.state.start("GameStage2");
		getId.style.display = 'block';
	},
	moveNextStage3: function(){
		console.log("%cmoveNextStage3", "color:blue; background:green");
		this.game.state.start("GameStage3");
		getId.style.display = 'block';
	},
	moveNextStage4: function(){
		console.log("%cmoveNextStage4", "color:blue; background:green");
		this.game.state.start("GameStage4");
		getId.style.display = 'block';
	},
	moveNextStage5: function(){
		console.log("%cmoveNextStage5", "color:blue; background:green");
		this.game.state.start("GameStage5");
		getId.style.display = 'block';
	},
	moveNextStage6: function(){
		console.log("%cmoveNextStage6", "color:blue; background:green");
		this.game.state.start("GameStage6");
		getId.style.display = 'block';
	},
	moveNextStage7: function(){
		console.log("%cmoveNextStage7", "color:blue; background:green");
		this.game.state.start("GameStage7");
		getId.style.display = 'block';
	},
	moveNextStage8: function(){
		console.log("%cmoveNextStage8", "color:blue; background:green");
		this.game.state.start("GameStage8");
		getId.style.display = 'block';
	}
	
}