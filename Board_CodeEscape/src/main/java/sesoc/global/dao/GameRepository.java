package sesoc.global.dao;

import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import sesoc.global.vo.Items;
import sesoc.global.vo.Users;

@Repository
public class GameRepository {
	
	@Autowired
	SqlSession sqlSession;
	
	public Items findItems(String userid) {
		GameDAO dao = sqlSession.getMapper(GameDAO.class);
		Items items = dao.findItems(userid);
		System.out.println("현재 가지고 있는 아이템 값(findItems) : " + items.toString());
		return items;
	}
	
	public int updateItems(Items items) {
		
		GameDAO dao = sqlSession.getMapper(GameDAO.class);
		System.out.println("다음 스테이지로 가지고 갈 아이템 값(updateItems) : " + items.toString());
		int result = dao.updateItems(items);
		System.out.println(result);
		return result;
	}
	
	public int saveLevel(Users user) {
		GameDAO dao = sqlSession.getMapper(GameDAO.class);
		int result = dao.saveLevel(user);
		System.out.println("seveLevel : " +result);
		return user.getUserlevel();
	}
	
	public Users userInfo(Users user) {
		System.out.println("db 가기 전 userInfo : " + user.toString());
		GameDAO dao = sqlSession.getMapper(GameDAO.class);
		Users result = dao.userInfo(user);
		System.out.println("db 갔다 온 userInfo : "+result);
		return result;
	}
	
	public int insertItems(Users user) {
		System.out.println("db 가기 전 userInfo : " + user.toString());
		GameDAO dao = sqlSession.getMapper(GameDAO.class);
		int result = dao.insertItems(user);
		System.out.println("db 갔다 온 userInfo : "+result);
		return result;
	}
	
	public int deleteItems(Users user) {
		System.out.println("db 가기 전 userInfo : " + user.toString());
		GameDAO dao = sqlSession.getMapper(GameDAO.class);
		int result = dao.deleteItems(user);
		System.out.println("db 갔다 온 userInfo : "+result);
		return result;
	}
	
	//----------------------------------------------------------------
}
