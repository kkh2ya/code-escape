<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>메인 메뉴</title>
<style>
.topbuttons{
	float: right;
}
#list{
	float: center;
}
</style>
<!-- float text-align:center -->
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
<body>
<%@ include file="../login.jsp" %>
<div class="topbuttons">
	<input type="button" id="notice" value="공지사항" width="100">	
	<input type="button" id="board" value="일반 게시판" width="100">
</div>
<br>

<h3>코드 이스케이프 게시판</h3>
<!--  특정 글 검색    -->
<form id="search" action="search" method="POST">
<!-- <input type="hidden" name="action" value="boardList" /> -->
	<select name="searchtype">
		<option value="title" ${searchtype=='title' ? 'selected' : '' } >제목</option>
		<option value="userid" ${searchtype=='userid' ? 'selected' :'' } >아이디</option>
		<option value="content" ${searchtype=='content' ? 'selected' :'' } >내용</option>
	</select>
	<input type="text"  name="searchword" value="${searchword}" />
	<input class="btn" type="submit" value="검색" />
</form>
<br>


<!-- ====================================================================== -->

<!--  페이징 출력   -->

<div id="navigator">
<a href="/book?currentPage=${navi.currentPage - navi.PAGE_PER_GROUP}&searchtype=${searchtype}&searchword=${searchword}">◁◁ </a>
<a href="/book?currentPage=${navi.currentPage-1}&searchtype=${searchtype}&searchword=${searchword}">◀</a>
&nbsp;&nbsp;&nbsp;
<c:forEach var="page" begin="${navi.startPageGroup}" end="${navi.endPageGroup}">
		<c:if test="${navi.currentPage eq page}">
			<span style="color:orange;font-weight:bolder;font-size:2.3em;">${page}</span>
		</c:if>
		<c:if test="${navi.currentPage ne page}">
			<a href="/book?currentPage=${page}&searchtype=${searchtype}&searchword=${searchword}">${page}</a>
		</c:if>
</c:forEach>
&nbsp;&nbsp;&nbsp;
<a href="/book?currentPage=${navi.currentPage+1}&searchtype=${searchtype}&searchword=${searchword}">▶</a>
<a href="/book?currentPage=${navi.currentPage + navi.PAGE_PER_GROUP}&searchtype=${searchtype}&searchword=${searchword}">▷▷</a>
</div>
<hr>

<!-- ====================================================================== -->

</body>
</html>