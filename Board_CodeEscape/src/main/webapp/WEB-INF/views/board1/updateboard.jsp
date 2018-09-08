<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
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
</style>
<script src="resources/jquery-3.2.1.min.js"></script>
<script>
$(function (){
	$("#noticelist").on('click',boardlist);
	$("#updateboard").on('click',boardlist2);
});

function boardlist() {
	location.href="${pageContext.request.contextPath}/boardList";
}
</script>

</head>
<body>
<%-- <%@ include file="../login.jsp" %> --%>
<div id=wrapper>
<h1>글쓰기</h1>
	<form id="updateboard" method="POST">
	<table border="2">
		<tr>
			<th>작성자</th>
			<th>${loginId}</th>
		</tr>
		<tr>
			<input type="hidden" value="${loginId}" name="userid">
		</tr>
		<tr>
			<td>제목</td>
			<td colspan="3" width="800px">
			<%-- 	${selectedBoard.title} --%>
			  <textarea rows="1" cols="80" name="title" id="title">${selectedBoard.title}</textarea>
			</td>
		</tr>
		<tr>
			<td>내용</td>
			<td colspan="3" width="800px" height="400px">
				<div class="content">
					<textarea rows="30" cols="80" name="content">${selectedBoard.content}</textarea>
				</div>
			</td>
		</tr>
	</table>
		<c:if test="${loginId == selectedBoard.userid}">
		<input type="submit" value="수정">
	</c:if>
	</form>
	<div class="listbutton">
	
		<input type="button" id="noticelist" value="목록">
	</div>

</div>
</body>
</html>