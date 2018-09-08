package sesoc.global.dao;

import java.util.Map;

import sesoc.global.vo.Users;

public interface UsersDAO {
	public Users login(Users AccessUser);
	public String idcheck(String id);
	public String nicknamecheck(String nickname);
	public int register(Users makedUser);
	public Users selectOne(Users searchUser);
	public int update(Users user);
	public int unregister(Users quitUser);         //삭제처리1-1 (is_deleted = 'Y')
	public int saveLevel(Users user);
	public Users userInfo(Users user);
}
