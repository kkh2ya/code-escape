var boot = function(game){
	console.log("%codagirigumi", "color:pink; background:green");
};
  
boot.prototype = {
		preload: function(){
		},
	  	create: function(){
	  		this.userInfo();
	  	//스테이지선택 위해서 딜레이 줌 
	  		setTimeout(() => {
	  			this.game.state.start("Preload");
	  		}, 600);
	  		
		},
		//스테이지 선택 추가부분/
		userInfo: function() {
//			alert('userInfo');
			$.ajax({
				url: 'userInfo',
				method: 'get',
				data: {
					id: 8, 
				},
				dataType : "json",
				cache: false,
				success: function(result) {
//					alert("id :"+result.id+" userlevel :"+result.userlevel)
					selectStage = result.userlevel;
				},
				error: function() {
				}
			});
		}
		//스테이지 선택 추가부분/
	}
