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
  <title>CodeEscape - Gaming Theme HTML</title>
  <!-- vendor css -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  <link rel="stylesheet" href="./resources/plugins/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="./resources/plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="./resources/plugins/animate/animate.min.css">
  <!-- theme css -->
  <link rel="stylesheet" href="./resources/css/theme.min.css">
  <link rel="stylesheet" href="./resources/css/custom.css">
<title>로그인</title>
<style type="text/css">

	#wrappers{
		margin: 0 auto;
		text-align: center;
	 	width:300px; 
	/* 	height:100px; */
		background:skyblue;
	}

  	.first{
  		color: aqua;
  		font-weight: bold;
  	}

</style>
<script src="resources/jquery-3.2.1.min.js"></script>
<script>
$(function() {
	$("#register").on('click',register);
	$("#logout").on('click',logout);
	$("#update").on('click',update);
});

function register() {
	location.href="${pageContext.request.contextPath}/register";
}

function logout() {
	location.href="${pageContext.request.contextPath}/logout";
}

function update() {
	location.href="${pageContext.request.contextPath}/update";
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
            <h4 class="first">CodeEscape</h4>
            <nav class="nav">
              <ul>
                  <li class="has-dropdown">
                  <a href="forums.html">Board</a>
                  <ul>
                    <li><a href="forums.html">Forum</a></li>
                    <li><a href="forum-topic.html">Forum Topic</a></li>
                    <li><a href="forum-post.html">Forum Post</a></li>
                    <li><a href="forum-create.html">Forum Create</a></li>
                  </ul>
                </li>
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
  <section class="bg-image bg-image-sm" style="background-image: url('img/bg/bg-login.jpg');">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-4 mx-auto">
          <div class="card m-b-0">
            <div class="card-header">
              <h4 class="card-title"><i class="fa fa-sign-in"></i> ログインしてください</h4>
            </div>
            <div class="card-block">
            	<c:if test="${empty loginId}">
		            <form action="login" method="post">
		            
		               <div class="form-group input-icon-left m-b-10">
		                 <i class="fa fa-user"></i>
		                 <input type="text" class="form-control form-control-secondary" placeholder="アイディ" id="id" name="id">
		               </div>
		               
		               <div class="form-group input-icon-left m-b-15">
		                 <i class="fa fa-lock"></i>
		                 <input type="password" class="form-control form-control-secondary" placeholder="パスワード" id="password" name="password">
		               </div>
		               
		               <button type="submit" class="btn btn-primary btn-block m-t-10" id="login">ログイン <i class="fa fa-sign-in"></i></button>
		          				     
		            </form> 
	             
		               <div class="divider">
		                 <span>アカウントがなかったら。。。</span>
		               </div>
		               <a class="btn btn-secondary btn-block" role="button" id="register">加入</a>
		               
	             </c:if>
	             	<c:if test="${not empty loginId}">
					<p>${loginId}님 로그인 되었습니다.</p>
					
					<p>
						<input type="button" class="btn btn-primary btn-block m-t-10" id="update" value="회원 정보 수정">
						<input type="button" class="btn btn-secondary btn-block" id="logout" value="로그아웃">
					</p>
					
				</c:if>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /main -->

<!-- footer -->
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-5">
          <h4 class="footer-title">おにぎりについて</h4>
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
          <h4 class="footer-title">加入</h4>
          <p>加入してニュースを受けます</p>
          <div class="input-group m-t-25">
            <input type="text" class="form-control" placeholder="Email">
            <span class="input-group-btn">
            <button class="btn btn-primary" type="button">加入</button>
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
        <p>Copyright &copy; 2017 おにぎり. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <!-- /footer -->
  
<!-- vendor js -->
<script src="./resources/plugins/jquery/jquery-3.2.1.min.js"></script>
<script src="./resources/plugins/popper/popper.min.js"></script>
<script src="./resources/plugins/bootstrap/js/bootstrap.min.js"></script>

<!-- theme js -->
<script src="./resources/js/theme.min.js"></script>

</body>
</html>