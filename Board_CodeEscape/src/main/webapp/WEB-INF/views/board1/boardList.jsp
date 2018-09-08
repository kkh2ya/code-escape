<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
  <!-- theme css -->
  <link rel="stylesheet" href="./resources/css/theme.min.css">
  <link rel="stylesheet" href="./resources/css/custom.css">

<style>
#wrapper{
	margin: 0 auto;
	text-align: center;
	float: center;
}
#main_table{
	margin: 0 auto;
	text-align: center;
	float: center;
}
.topbuttons{
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
 	$("#notice").on('click', function(){
 		location.href=("${pageContext.request.contextPath}/noticeList");
 	});
	
	$("#board").on('click', function(){
		location.href=("${pageContext.request.contextPath}/boardList");
	});
	
});
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
		<div align="right">
			<!--  특정 글 검색    -->
			<form id="search" action="search" method="POST">
			<div class="btn">
					<input class="btn btn-sm" type="button" id="notice" value="공지사항" width="100">	
					<input class="btn btn-sm" type="button" id="board" value="일반 게시판" width="100">
				</div>
			<!-- <input type="hidden" name="action" value="boardList" /> -->
				<select name="searchtype">
					<option value="title" ${searchtype=='title' ? 'selected' : '' } >タイトル</option>
					<option value="userid" ${searchtype=='userid' ? 'selected' :'' } >アイディー</option>
					<option value="content" ${searchtype=='content' ? 'selected' :'' } >内容</option>
				</select>
				<input type="text" name="searchword" value="${searchword}" placeholder="Search..."/>
				<input class="btn btn-sm" type="submit" value="検索"/>
			</form>
		</div>
		<br>
    
      <div class="forum-headline forum-panel">
    　　<h5 class="float-left">トピック<span>存分に。。</span></h5>
     	 <c:if test="${not empty loginId}">
	     	<a class="btn btn-primary btn-shadow float-right" href="write" role="button">ニュー トピック <i class="fa fa-plus"></i></a>
     	 </c:if>
      </div>
      
      <div class="forum">
        <div class="forum-head">
          <div></div>
          <div style="width: 80%">タイトル</div>
          <div style="width: 10%">ヒット</div>
          <div style="width: 10%">書き手</div>
        </div>
      
        <c:forEach var="boardList" items="${boardList}">
          <div class="forum-group">
          	<div class="forum-row">
          	<div class="forum-icon">
              <!-- <span class="badge badge-warning"><i class="fa fa-thumb-tack"></i></span> -->
              <i class="fa fa-comments"></i>
            </div>
				<!-- <tr> -->
					<%-- <td>${boardList.board_num}</td> --%>
				<div class="forum-title">
				<!-- <td> --><a href="boardDetail?board_num=${boardList.board_num}">${boardList.title}</a><!-- </td> -->
				</div>
				<div class="forum-thread">
				<!-- <td> -->${boardList.hits}<!-- </td> -->
				</div>
				<div class="forum-thread">
				<!-- <td> -->${boardList.userid}<!-- </td> -->
				</div>
				<!-- </tr> -->
			</div>
      	  </div>
    	</c:forEach>
      <div class="forum-footer">
        <div></div>
      	<div>タイトル</div>
   	    <div>ヒット</div>
   	    <div>書き手</div>
      </div>
    </div>
    </div>
  </section>
  
  <div class="container" id="navigator" align="center">
		<a href="/main/boardList?currentPage=${navi.currentPage - navi.PAGE_PER_GROUP}&searchtype=${searchtype}&searchword=${searchword}">◁◁ </a>
		<a href="/main/boardList?currentPage=${navi.currentPage-1}&searchtype=${searchtype}&searchword=${searchword}">◀</a>
		&nbsp;&nbsp;&nbsp;
		<c:forEach var="page" begin="${navi.startPageGroup}" end="${navi.endPageGroup}">
				<c:if test="${navi.currentPage eq page}">
					<span style="color:orange;font-weight:bolder;font-size:1.5em;">${page}</span>
				</c:if>
				<c:if test="${navi.currentPage ne page}">
					<a href="/main/boardList?currentPage=${page}&searchtype=${searchtype}&searchword=${searchword}">${page}</a>
				</c:if>
		</c:forEach>
		&nbsp;&nbsp;&nbsp;
		<a href="/main/boardList?currentPage=${navi.currentPage+1}&searchtype=${searchtype}&searchword=${searchword}">▶</a>
		<a href="/main/boardList?currentPage=${navi.currentPage + navi.PAGE_PER_GROUP}&searchtype=${searchtype}&searchword=${searchword}">▷▷</a>
</div>
<br><br><br>
  

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