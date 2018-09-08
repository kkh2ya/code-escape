package sesoc.global.controller;

import java.lang.ProcessBuilder.Redirect;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import sesoc.global.dao.UsersRepository;
import sesoc.global.vo.Users;

@Controller
public class LoginController {
	
	@Autowired
	UsersRepository repo;
	
	//로그인	
	@RequestMapping(value="login", method=RequestMethod.POST)
	public String login(HttpSession session, Model model, Users users) {
		
		Users selectedUser = repo.login(users.getId(), users.getPassword());
		
		String message = "";
		
		if(selectedUser != null) {
			message = "로그인이 되었습니다.";
			
			session.setAttribute("loginId", selectedUser.getId());
			
		} else {
			message = "입력하신 아이디나 비밀번호가 존재하지 않습니다.";
		}
		
		model.addAttribute("message", message);
		
		return "message";
	}
	
	//로그아웃
	@RequestMapping(value="logout", method = RequestMethod.GET)
	public String logout(HttpSession session, Model model) {
		
		session.invalidate();
		
		return "redirect:/";
	}
	
}
