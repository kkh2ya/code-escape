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
  <title>게시판</title>
  <!-- vendor css -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  <link rel="stylesheet" href="./resources/plugins/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="./resources/plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="./resources/plugins/animate/animate.min.css">
  <!-- plugins css -->
  <link href="./resources/plugins/ytplayer/jquery.mb.YTPlayer.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./resources/plugins/summernote/summernote-bs4.css">
  <!-- theme css -->
  <link rel="stylesheet" href="./resources/css/theme.min.css">
  <link rel="stylesheet" href="./resources/css/custom.css">

<title>공지사항 보기</title>
<style>
#wrapper{
	text-align: center;
	margin: 0 auto;
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

//유효성 검사
function check() {

	//아이디를 입력하지 않았다면
	if($.trim($("#updateReply").val())=="") {
	   alert("내용을 입력하세요!");
	   
	   $("#updateReply").val("").focus();
	   
	   return false;
	} 
}
function check2() {

	if($.trim($("#replycontent").val())=="") {
		   alert("내용을 입력하세요!");
		   
		   $("#replycontent").val("").focus();
		   
		   return false;
		} 
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
<!-- ====================================================================== -->  

<section class="p-t-40">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 mx-auto">
        <div class="forum-headline forum-panel">
          <h5 class="float-left">内容<span>読んでください。</span></h5>
          <div class="float-right">
            <a class="btn btn-secondary" id="boardlist" role="button">リスト<i class="fa fa-comments"></i></a>
          </div>
        </div>
        <div class="forum-post">
          <div class="forum-header">
            <!-- <div><a href="profile.html"><img src="img/user/user-3.jpg"></a></div> -->
            <div>
              <h2 class="forum-title">${selectedBoard.userid}</h2>
              <div class="forum-meta">
              </div>
            </div>
            <div>
        	  <span>${selectedBoard.hits} ヒット</span>
              <span>${selectedBoard.inputdate}</span>
            </div>
          </div>
          <div class="forum-body">
            <h5 class="m-b-20">${selectedBoard.title}</h5>
            <!-- <div class="forum-thumbnail">
              <div class="video-play" data-src="https://www.youtube.com/embed/ST262ZbNcos?rel=0&amp;amp;autoplay=1&amp;amp;showinfo=0">
                <div class="embed-responsive embed-responsive-16by9">
                  <img class="embed-responsive-item" src="https://img.youtube.com/vi/tklQ47Hpfxw/maxresdefault.jpg">
                  <div class="video-play-icon"><i class="fa fa-play"></i></div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        
        <div class="clearfix m-t-30 m-b-20">
   			<h5 class="m-t-10 m-b-0 float-left"><i class="fa fa-comment-o m-r-5"></i> 書き込み</h5>
		</div>
        
        
       	<div class="reply">
			<form action="reply" method="POST">
				<input type="hidden" name="board_num" value="${selectedBoard.board_num}">
					<textarea class="form-control" rows="1" cols="40" name="content" id="replycontent"></textarea>
					<input type=submit onclick="return check2();" value="답변달기">
        	   	<!-- <div class="summernote"></div> -->
        	   	<br>
       		<input type=submit class="btn btn-primary btn-rounded btn-shadow float-right" name="save" value="提出">
        </form>
		</div>
	</div>
  </div>	
        
   <div class="row">
   	<div class="col-lg-9 mx-auto">
        <c:if test="${not empty replyList}">
	        <c:forEach items="${replyList}" var="replyList">
		        <li class="forum-reply">
		            <i class="fa fa-comment-o m-r-5"></i> 
		            <div class="forum-title">
		               <h5>${replyList.userid}</h5>
		            </div>
		          	<div class="forum-body">
		        	  ${replyList.content}
		            </div>
		        </li>
				
				<form action="updateReply" method="post">
					<input type="text" name="content">
					<input type="hidden" name="replynum" value="${replyList.replynum}">
					<input type="hidden" name="board_num" value="${selectedBoard.board_num}">
					<input class="btn btn-issue" type="submit" value="修整" onclick="return check();">
					<a class="btn btn-danger" id="boardlist" role="button" href="deleteReply?replynum=${replyList.replynum}&board_num=${selectedBoard.board_num}">削除</a>
			    </form>
		        
	        </c:forEach>
		</c:if>
      </div>
    </div>
  </div>
</section>


<!-- ====================================================================== -->

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
<script src="./resources/plugins/summernote/summernote-bs4.js"></script>
<script type="text/javascript">
  (function($) {
    "use strict";
    $('.summernote').summernote({
      height: 160,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'picture']],
        ['para', ['ul', 'ol', 'paragraph']]
      ]
    });
  })(jQuery);
</script>
</script>

<script src="./resources/plugins/ytplayer/jquery.mb.YTPlayer.min.js"></script>
<script>
 (function($) {
   "use strict";
   // Background Player
   $(".player").mb_YTPlayer();
 })(jQuery);
</script>

<!-- theme js -->
<script src="./resources/js/theme.min.js"></script>
</body>
</html>