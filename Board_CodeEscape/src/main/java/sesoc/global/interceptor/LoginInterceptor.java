package sesoc.global.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;


public class LoginInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println("들어옸다 인터셉터");
		//Session정보를 얻어옴
		HttpSession session = request.getSession();
		String loginId = (String)session.getAttribute("loginId");

		//로그인 안 한 경우
		if(loginId==null){
			//로그인화면으로 리다이렉트
			response.sendRedirect("/main");
			return false;
		}
		
		return true;
		
	}

	 
}
