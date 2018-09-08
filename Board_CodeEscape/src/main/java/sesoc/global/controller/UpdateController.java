package sesoc.global.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import sesoc.global.dao.UsersRepository;
import sesoc.global.vo.Users;

@Controller
public class UpdateController {
	
	@Autowired
	UsersRepository repo;
	
	
	//회원 정보 수정 폼으로 이동 (GET방식)
	@RequestMapping(value="update", method = RequestMethod.GET)
	public String update(HttpSession session, Model model) {
		
		Users searchUser = new Users();
		
		searchUser.setId((String)session.getAttribute("loginId"));
		
		Users searchedUser = repo.selectOne(searchUser);
		
		model.addAttribute("updateUser", searchedUser);
		
		return "update";
	}
	
	//회원 정보 수정 (POST방식)
	@RequestMapping(value="update", method = RequestMethod.POST)
	public String update(Users user, Model model) {
		
		String message="";
		
		System.out.println(user);
		int result = repo.update(user);
		
		if(result != 0) {
			message="회원 정보가 정상적으로 수정 되었습니다.";
		} else {
			message="회원 정보 수정에 실패하였습니다.";
		}
		
		model.addAttribute("message", message);
		
		return "message";
	}
	
	
	

}
