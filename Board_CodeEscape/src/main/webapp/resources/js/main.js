//전역변수
var arrAction;
var actionFlag = false;
var arrActionNum;
var command = "stop";
	
var actionFlag2 = false;//추가
var arrActionNum2;//추가
var command2 = "stop";//추가
var eagleEyeOn = false;//추가

var compilerNum = 1;	//컴파일러 다르게 생김, 해당 스테이지 들어갈 때 값 변경함, 지금은 4,5(기홍)스테이지와 나머지로 나눴음
/*디비관련 추가 전역변수*/
var selectStage = 1; //시작 스테이지 선언 밑 디폴드값 삽입
var slot = [];//
/*디비관련 추가 전역변수*/
//phaser loading--------------------------------------------------
$(function() {
	
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, "section");
	game.state.add("Boot",boot);
	game.state.add("Preload",preload);
	game.state.add("SelectStage",selectstage);
	game.state.add("GameStage1",gamestage1);
	game.state.add("GameStage2",gamestage2);
	game.state.add("GameStage3",gamestage2);
	game.state.add("GameStage4",gamestage4);
	game.state.add("GameStage5",gamestage2);
	game.state.add("GameStage6",gamestage2);
	game.state.add("GameStage7",gamestage7);
	game.state.add("GameStage8",gamestage8);
	
	game.state.start("Boot");
}); 
//phaser loading--------------------------------------------------
//ajaxTest command return-----------------------------------------
function clickCode() {
	/*기존에 있던 변수*/
	var textArea = editor.getValue();
	arrAction = new Array();
	arrActionNum = 0;
	/*추가된 변수*/
	arrActionNum2 = 0;
	command = 'stop';	//일단 추가함. 기존 js에서도 동작은 됨
	eagleEyeOn = false;
	
	//스테이지 1,2,3,6,7,8
	if(compilerNum == 1 || compilerNum == 2 || compilerNum == 3 || compilerNum == 6 || compilerNum == 7 || compilerNum == 8){
		$.ajax({
			url: 'sendCommand',
			method: 'get',
			data: {
				temp: textArea
			},
			success: function(result) {
				editor.setValue("");
				$.each(result, function(index, element) {
					arrAction[index] = element;
				});
				actionFlag = true;
//				alert('success');
//				alert(arrAction);//배열출력
			},
			error: function() {
//				alert('error');
			}
		});
	}
	//스테이지 4,5
	else{
//		alert('compiler22222222222222');
		$.ajax({
			url: 'sendCommand2',
			method: 'get',
			data: {
				temp: textArea
			},
			success: function(result) {
				editor.setValue("");
				$.each(result, function(index, element) {
					arrAction[index] = element;
				});
//				alert("ajax : " + result);
				actionFlag = true;
				actionFlag2 = true;
			},
			error: function() {
//				alert('error');
			}
		});
	}
	
}
//ajaxTest command return-----------------------------------------
//ace-------------------------------------------------------------
var editor;
var r = new Range(1, 1, 30, 30);//1,1,42,42
$(function(){
   editor = ace.edit("aside");
   //web editor의 maxline을 설정
/* 	   editor.setOptions({ maxLines: 26 });	
 */	   //web editor의 syntaxing 언어 설정(java)
   editor.getSession().setMode("ace/mode/java");
   //뭐지
   editor.$blockScrolling = Infinity;
   //web editor의 테마 설정
   editor.setTheme("ace/theme/monokai");
   //web editor를 읽기 전용에의 설정을 해제
   editor.setReadOnly(false);
   editor.setValue("");
   //web editor 객체 생성 (Code part)
   editor.setFontSize(20);
   /*자동완성*/
   var langTools = ace.require("ace/ext/language_tools");
   editor.setOptions({enableBasicAutocompletion: true, enableSnippets: false, enableLiveAutocompletion: true});
      var staticWordCompleter = {
	    getCompletions: function(editor, session, pos, prefix, callback) {
	        var wordList = ["player.moveRight();", "player.moveLeft();", "player.moveUp();", "player.moveDown();", "while", "for", "if"];
	        callback(null, wordList.map(function(word) {
	            return {
	                caption: word,
	                value: word,
	                meta: "static"
	            };
	        }));
	    }
	}
   langTools.addCompleter(staticWordCompleter);
      /*자동완성*/
});
//ace-------------------------------------------------------------

