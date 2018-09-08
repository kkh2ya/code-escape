<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- meta -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Odagirizo - Gaming Theme HTML</title>
  <!-- vendor css -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  <link rel="stylesheet" href="./resources/plugins/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="./resources/plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="./resources/plugins/animate/animate.min.css">
  <!-- plugins css -->
  <link href="./resources/plugins/ytplayer/jquery.mb.YTPlayer.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./resources/plugins/summernote/summernote-bs4.css">
  <link rel="stylesheet" href="./resources/plugins/switchery/switchery.min.css">
  <link rel="stylesheet" href="./resources/plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="./resources/plugins/flatpickr/flatpickr.min.css">
  <!-- theme css -->
  <link rel="stylesheet" href="./resources/css/theme.min.css">
  <link rel="stylesheet" href="./resources/css/custom.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>공지사항 보기</title>
<style>
#wrapper{
	text-align: center;
	margin: 0 auto;
}
#title{
	margin: 0 auto;
	float: left;
}
.content{
	text-align: left;
	margin: 0 auto;
	float: left;
}
.listbutton{
	text-align: right;
	margin: 0 auto;
	float: right;
}

.first{
	color: aqua;
	font-weight: bold;
}
</style>
<script src="resources/jquery-3.2.1.min.js"></script>
<script>
$(function (){
	$("#boardlist").on('click',boardlist);
	
});

function boardlist() {
	location.href="${pageContext.request.contextPath}/boardList";
	
}

function check() {
		alert("write");
	
	   //아이디를 입력하지 않았다면
	   if($.trim($("#naiyou").val())==""||$.trim($("#title").val())=="") {
	      alert("내용이나 제목이 누락 되었습니다!");
	      
	      return false;
	   } 
	   
	   /* //이메일 유효성 검사 (@이 들어가 있는지 검사)
	   if( ($.trim($("#email").val()).match(/[@]/g) == null) ) {
	      alert("올바른 이메일을 적어주세요.");
	            
	      return false;
	   } */
}
	   
	   
</script>

</head>
<body class="fixed-header">
  <!-- header -->
  <header id="header">
    <div class="container">
      <div class="navbar-backdrop">
        <div class="navbar">
          <div class="navbar-left">
            <a class="navbar-toggle"><i class="fa fa-bars"></i></a>
            <h4 class="first">オダギリジョー</h4>
            
            <nav class="nav">
              <ul>
                <!-- <li><a href="videos.html">Videos</a></li> -->
                <!-- <li class="has-dropdown">
                  <a>Board</a> -->
                  <div class="nav navbar-right">
                  <ul>
                    <li><a href="/main/boardList">Board</a></li>
                    <li><a href="/main/noticeList">Notice</a></li>
                    <li><a href="/main/intro">Intro</a></li>
                  </ul>
                  </div>
                <!-- </li> -->
              </ul>
            </nav>
            
          </div>
          <div class="nav navbar-right">
            <ul>
              <li class="hidden-xs-down"><a href="/main">Home</a></li>
              <li><a data-toggle="search"><i class="fa fa-search"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar-search">
        <div class="container">
          <form method="post">
            <input type="text" class="form-control" placeholder="Search...">
            <i class="fa fa-times close"></i>
          </form>
        </div>
      </div>
    </div>
  </header>
  <!-- /header -->

<!-- main -->


    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <form action="write" method="POST" class="tab-content p-t-20">
	          <div class="forum-headline forum-panel">
		          <h5 class="float-left m-t-25">タイトル<span>書いてください。</span></h5>
		          <div class="float-right">
		            <a class="btn btn-secondary m-t-25" id="boardlist" role="button">リスト<i class="fa fa-comments"></i></a>
		          </div>
	      	  </div>
              <!-- form -->
              <input type="hidden" value="${loginId}" id="userid" name="userid">
              <div class="form-group m-t-25 m-b-100">
               <textarea class="form-control" rows="1" cols="80" name="title" id="title"></textarea>
                <!-- <input type="text" class="form-control" id="title"　name="title"> -->
              </div>
              <div class="form-group m-t-25">
              <div class="forum-headline forum-panel">
		          <h5 class="float-left">内容<span>書いてください。</span></h5>
		        </div>
				<textarea class="form-control" rows="20" cols="101" name="content" id="naiyou"></textarea>
                <!-- <textarea id="summernote"　name="content"></textarea> -->
              </div>

            <div class="m-t-30">
              <input class="btn btn-primary btn-rounded btn-shadow float-right m-b-50" type="submit" value="提出" onclick="return check();">
            </div>
          </form>
        </div>
      </div>
    </div>


<!-- /main -->


<!-- footer -->
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-5">
          <h4 class="footer-title">オダギリジョーについて</h4>
          <p>凄い</p>
          <p>素晴らしい</p>
        </div>
        <div class="col-sm-12 col-md-3">
          <h4 class="footer-title">プラットホーム</h4>
          <div class="row">
            <div class="col">
              <ul>
              	<li><a href="#">Java</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">CSS</a></li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li><a href="#">Phaser</a></li>
                <li><a href="#">Bootstrap</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <h4 class="footer-title">申請</h4>
          <p>申請してニュースを受けます</p>
          <div class="input-group m-t-25">
            <input type="text" class="form-control" placeholder="Email">
            <span class="input-group-btn">
            <button class="btn btn-primary" type="button">申請</button>
          </span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-social">
          <a href="https://facebook.com/yakuthemes" target="_blank" data-toggle="tooltip" title="facebook"><i class="fa fa-facebook"></i></a>
          <a href="https://twitter.com/yakuthemes" target="_blank" data-toggle="tooltip" title="twitter"><i class="fa fa-twitter"></i></a>
          <a href="https://steamcommunity.com/id/yakuzi" target="_blank" data-toggle="tooltip" title="steam"><i class="fa fa-steam"></i></a>
          <a href="https://www.twitch.tv/" target="_blank" data-toggle="tooltip" title="twitch"><i class="fa fa-twitch"></i></a>
          <a href="https://www.youtube.com/user/1YAKUZI" target="_blank" data-toggle="tooltip" title="youtube"><i class="fa fa-youtube"></i></a>
        </div>
        <p>Copyright &copy; 2017 オダギリジョー. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <!-- /footer -->

  <!-- vendor js -->
  <script src="./resources/plugins/jquery/jquery-3.2.1.min.js"></script>
  <script src="./resources/plugins/popper/popper.min.js"></script>
  <script src="./resources/plugins/bootstrap/js/bootstrap.min.js"></script>

  <!-- plugins js -->
  <script src="./resources/plugins/ytplayer/jquery.mb.YTPlayer.min.js"></script>
  <script src="./resources/plugins/summernote/summernote-bs4.js"></script>
  <script src="./resources/plugins/switchery/switchery.min.js"></script>
  <script src="./resources/plugins/select2/js/select2.min.js"></script>
  <script src="./resources/plugins/flatpickr/flatpickr.min.js"></script>
  <script>
    (function($) {
      "use strict";
      // Background Player
      $(".player").mb_YTPlayer();
    })(jQuery);
    
    (function($) {
        "use strict";
        $('#summernote').summernote({
          height: 200,
          styleTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        });
        $(".js-example-basic").select2();
        $(".flatpickr").flatpickr();
        var elem = document.querySelector('.js-switch');
        var init = new Switchery(elem);
        
    /*     var postForm = function() {
            var content =  $('textarea[name="content"]').html($('#summernote').code());
        } */
        
      })(jQuery);
    
    function writer(){
    	var title = document.getElementById("title");
    	var content = document.getElementById("summernote");
    	alert(title.value);
    	alert(content.value);
    	/* var plainText =  $('textarea[name="content"]').html($('#summernote').code()); */
    	/* var plainText = $($("#summernote").summernote("code")).text(); */
    	/* var contents = $("#summernote").code().replace(/<\/?[^>]+(>|$)/g, ""); */
    	/* var plainText = $("#summernote").code()
                .replace(/<\/p>/gi, "\n")
                .replace(/<br\/?>/gi, "\n")
                .replace(/<\/?[^>]+(>|$)/g, ""); */
        
        var plainText = title.value.replace(/<\/p>/gi, "\n")
        							.replace(/<br\/?>/gi, "\n")
       								 .replace(/<\/?[^>]+(>|$)/g, "");  
        alert(plainText.value);
    	return true;
    }

  </script>

  <!-- theme js -->
  <script src="./resources/js/theme.min.js"></script>
</body>
</html>