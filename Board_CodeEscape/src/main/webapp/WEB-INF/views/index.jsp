<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE htmld">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">
<head>
  <!-- meta -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>CodeEscape - Gaming Theme HTML</title>
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
  	.first{
  		color: aqua;
  		font-weight: bold;
  	}
  	#main{
  		background-color: black;
  	}
  	.fixed-header{
  		background-color: black;
  	}
  </style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="./resources/js/phaser.min.js"></script>
	<script src="./resources/ace/ace.js"></script>
	<script src="./resources/ace/ext-language_tools.js"></script>
	
	<script src="./resources/js/main.js?ver=7"></script>
	
	<script src="./resources/js/state/boot.js"></script>
	<script src="./resources/js/state/preload.js?ver=6"></script>
	<script src="./resources/js/state/selectstage.js?ver=6"></script>
	<script src="./resources/js/state/gamestage1.js?ver=5"></script>
	<script src="./resources/js/state/gamestage2.js?ver=4"></script>
	<script src="./resources/js/state/gamestage3.js?ver=1"></script>
	<script src="./resources/js/state/gamestage4.js?ver=9"></script>
	<script src="./resources/js/state/gamestage5.js?ver=1"></script>
	<script src="./resources/js/state/gamestage6.js?ver=1"></script>
	<script src="./resources/js/state/gamestage7.js?ver=3"></script>
	<script src="./resources/js/state/gamestage8.js?ver=4"></script>
	<link href="./resources/css/style.css" rel="stylesheet">
	<script type="text/javascript">
	</script>
	<title>tutorial</title>
</head>
<body class="fixed-header">
<!-- header -->
  <header id="header">
    <div class="container">
      <div class="navbar-backdrop">
        <div class="navbar">
          <div class="navbar-left">
            <a class="navbar-toggle"><i class="fa fa-bars"></i></a>
            <h4 class="first">CodeEscape</h4>
            
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

<section class="p-t-40">
<div class="container">
	<div id="main">
		<nav></nav>
		
		<section id="section">
		</section>
		
		<aside id="aside">
			<div id="lineDiv">
			</div>
		</aside>
	</div>
	<br><br><br>
	<input type="button" class="btn btn-warning btn-rounded btn-shadow float-right" id="input" value="input" onclick="clickCode()">
</div>
</section>

<br><br><br>

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
    
    function noGo(){
    	alert("로그인 하시오");
    }
  </script>

<!--   <!-- theme js -->
  <script src="./resources/js/theme.min.js"></script> -->
</body>
</html>