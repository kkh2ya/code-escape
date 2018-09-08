package sesoc.global.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import sesoc.global.dao.UsersRepository;
import sesoc.global.vo.Users;

@Controller
public class RegisterController {
	
	@Autowired
	UsersRepository repo;
	
	
	//아이디 체크 (Ajax처리)
	@ResponseBody
	@RequestMapping(value="idcheck", method = RequestMethod.POST)
	public String idcheck(String check_id) {
		
		String checked_id = repo.idcheck(check_id);
		
		if(checked_id != null) {
			return "N"; //이미 존재하는 아이디 입니다.
		} else {
			return "Y";	//사용 가능한 아이디 입니다.
		}
		
	}
	
	//회원가입 폼으로 이동 (GET방식)
	@RequestMapping(value="register", method = RequestMethod.GET)
	public String register(Model model) {
			
		return "register";
	}
	
	
	//회원가입 처리 (POST방식)
	@RequestMapping(value="register", method = RequestMethod.POST)
	public String register(
			@RequestParam(value="is_deleted", defaultValue="n") String is_deleted,
			Users user, Model model) {
		
		Users makedUser = new Users(user.getId(), user.getPassword(),user.getNickname(), user.getEmail(),user.getInputdate(),user.getUserlevel(), is_deleted);
		
		String message = "";
		
		int result = repo.register(makedUser);
		
		if(result != 0) {
			message = "회원가입이 정상적으로 완료 되었습니다.";
		} else {
			message = "회원가입에 실패하였습니다.";
		}
		
		model.addAttribute("message", message);
		
		return "message";
	}
	
	
	//회원 탈퇴 (GET방식)
	@RequestMapping(value="unregister", method = RequestMethod.GET)
	public String unregister(HttpSession session, Model model) {
		
		Users quitUser = new Users();
		String message = "";
		
		quitUser.setId((String)session.getAttribute("loginId"));
		
		int result = repo.unregister(quitUser);
		
		if(result != 0) {
			message = "회원 탈퇴 처리 되었습니다.";
			session.invalidate();
			
		} else {
			message = "회원 처리에 실패하였습니다.";
		}
		
		model.addAttribute("message", message);
		
		return "message";
	}
	
	

}
