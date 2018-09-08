package sesoc.global.controller;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import sesoc.global.dao.GameDAO;
import sesoc.global.dao.GameRepository;
import sesoc.global.vo.Items;
import sesoc.global.vo.Users;



@Controller
public class GameController {
	
	@Autowired
	GameRepository repo;
	
	
	@RequestMapping(value = "/findItems", method = RequestMethod.GET)
	public @ResponseBody Items findItems(String userid) {
		
		Items items = repo.findItems(userid);
		System.out.println("현재 가지고 있는 아이템 값(findItems) : " + items.toString());
		return items;
	}
	
	@RequestMapping(value = "/updateItems", method = RequestMethod.GET)
	public @ResponseBody int updateItems(Items items) {
		System.out.println("다음 스테이지로 가지고 갈 아이템 값(updateItems) : " + items.toString());
		int result = repo.updateItems(items);
		System.out.println(result);
		return result;
	}
	
	@RequestMapping(value = "/saveLevel", method = RequestMethod.GET)
	public @ResponseBody int saveLevel(Users user) {
		System.out.println("saveLevel 에서의 user 값 : " +user.toString());
		int result = repo.saveLevel(user);
		System.out.println("saveLevel : " +result);
		return user.getUserlevel();
	}
	
	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	public @ResponseBody Users userInfo(Users user) {
		System.out.println("db 가기 전 userInfo : " + user.toString());
		Users result = repo.userInfo(user);
		System.out.println("db 갔다 온 userInfo : "+result);
		return result;
	}

}
