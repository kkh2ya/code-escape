package sesoc.global.dao;

import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import sesoc.global.vo.Users;

@Repository
public class UsersRepository {
	
	@Autowired
	SqlSession sqlSession;
	
	public Users login(String id, String password) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		Users AccessUser = new Users();
		AccessUser.setId(id);
		AccessUser.setPassword(password);
		
		Users resultUser = dao.login(AccessUser);
		
		return resultUser;
	}
	
	public String idcheck(String id) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		String checked_id = dao.idcheck(id);
		
		return checked_id;
	}
	
	public String nicknamecheck(String nickname) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		String checked_nickname = dao.nicknamecheck(nickname);
		
		return checked_nickname;
	}
	
	public int register(Users makedUser) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		int result = dao.register(makedUser);
		
		return result;
	}
	
	public Users selectOne(Users searchUser) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		Users searchedUser = dao.selectOne(searchUser);
		
		return searchedUser;
	}
	

	public int update(Users user) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		int result = dao.update(user);
		
		return result;
	}
	
	public int unregister(Users quitUser) {
		UsersDAO dao = sqlSession.getMapper(UsersDAO.class);
		
		int result = dao.unregister(quitUser);
		
		return result;
		
	}
	
	//----------------------------------------------------------------
}
