package sesoc.global.dao;

import java.util.Map;

import sesoc.global.vo.Items;
import sesoc.global.vo.Users;

public interface GameDAO {
	public Items findItems(String userid);
	public int updateItems(Items items);
	public int saveLevel(Users user);
	public Users userInfo(Users user);
	public int insertItems(Users user);
	public int deleteItems(Users user);
}

