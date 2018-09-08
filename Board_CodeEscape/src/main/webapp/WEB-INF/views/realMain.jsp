<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
  </style>
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
	
  <!-- main -->
  <section class="bg-image bg-image-sm section-streamer player p-y-65" style="height: 700px;background-image: url('http://images.amcnetworks.com/ifc.com/wp-content/uploads/2012/09/dredd-1.jpg');" data-property="{videoURL:'https://youtu.be/gRzjSsXw9PU',containment:'self',mute:true,stopMovieOnBlur:false, showControls: false, realfullscreen: true, showYTLogo: false, quality: 'hd1080',autoPlay:true,loop:true,opacity:1}">
    <div class="overlay"></div>
    <section class="p-t-30">
    <div class="container">
      <div class="row">
      
        <div class="col-lg-8">
        	  <section>
			    <div class="container">
			      <div id="carousel-animated" class="carousel slide carousel-animated" data-ride="carousel">
			        <ol class="carousel-indicators">
			          <li data-target="#carousel-animated" data-slide-to="0" class="active"></li>
			          <li data-target="#carousel-animated" data-slide-to="1"></li>
			          <li data-target="#carousel-animated" data-slide-to="2"></li>
			        </ol>
			        <div class="carousel-inner">
			          <div class="carousel-item active">
			            <img src="./resources/img/black.png" alt="">
			            <div class="carousel-overlay"></div>
			            <div class="carousel-caption">
			              <div>
			                <h2 class="carousel-title" data-animation="animated fadeInDown">CodeEscape</h2>
			                <p data-animation="animated animate3 fadeIn">詳しい説明はこちらでー</p>
			                <!-- <a href="#" class="btn btn-primary btn-lg btn-rounded" data-animation="animated animate5 fadeInUp">Watch Gameplay</a> -->
			              </div>
			            </div>
			          </div>
			          <div class="carousel-item">
			            <img src="./resources/img/black.png" alt="">
			            <div class="carousel-overlay"></div>
			            <div class="carousel-caption">
			              <div>
			                <h2 class="carousel-title" data-animation="animated animate2 bounceInDown">Javaの文法</h2>
			                <p data-animation="animated animate5 fadeInUp fast">ゲームを通じて文法を学びましょう</p>
			                <!-- <a href="#" data-toggle="modal" class="btn btn-primary btn-lg btn-rounded" data-animation="animated animate7 fadeIn fast">Watch Gameplay</a> -->
			              </div>
			            </div>
			          </div>
			          <div class="carousel-item">
			            <img src="./resources/img/black.png" alt="">
			            <div class="carousel-overlay"></div>
			            <div class="carousel-caption">
			              <div>
			                <h2 class="carousel-title" data-animation="animated animate3 bounceIn">チームについて</h2>
			                <p data-animation="animated animate3 fadeIn">チーム「おにぎり」</p>
			                <!-- <a href="#" data-toggle="modal" class="btn btn-primary btn-lg btn-rounded" data-animation="animated animate3 fadeIn">Watch Gameplay</a> -->
			              </div>
			            </div>
			          </div>
			        </div>
			        <a class="carousel-control-prev" href="#carousel-animated" role="button" data-slide="prev">
			        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			        <span class="sr-only">Previous</span>
			      </a>
			        <a class="carousel-control-next" href="#carousel-animated" role="button" data-slide="next">
			        <span class="carousel-control-next-icon" aria-hidden="true"></span>
			        <span class="sr-only">Next</span>
			      </a>
			      </div>
			    </div>
			 </section>
        </div>

        <div class="col-lg-4">
          <!-- sidebar -->
          <div class="sidebar">
            <!-- widget game -->
            <div class="widget widget-game">
              <div class="widget-block" style="background-image: url('./resources/img/Cloverfield_boy.jpg')">
                <div class="overlay"></div>
                <div class="widget-item">
                
                  <c:if test="${empty loginId}">
                  <h4>GameStart</h4>
                  <br>
                  <a href="javascript: noGo()"><img src="./resources/img/Play-Button-Transparent.png" alt=""></a>
                  </c:if>
                  
                  <c:if test="${not empty loginId}">
                  <h4>GameStart</h4>
                  <br>
                  <a href="startGame"><img src="" alt=""></a>
                  </c:if>
                  
                  <br>
                  <br>
<!--                   <span class="meta">発売: 2017. 10. 01</span> -->
                  <!-- <span class="meta">発売: 2017. 10. 01</span> -->
				  
				  <ul>
<!--                   	<span class="meta">開発: SCIT 33期 Dクラス オダギリジョー </span> -->
                  </ul>
                  <a href="/main/loginGo"><button class="btn btn-primary btn-sm btn-block">ログイン</button></a>
				  <a href="/main/register"><button class="btn btn-outline-default btn-sm btn-block">加入 <i class="fa fa-heart-o"></i></button></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  </section>
 
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

  <!-- theme js -->
  <script src="./resources/js/theme.min.js"></script>
</body>
</html>