package sesoc.global.dao;

import sesoc.global.vo.Items;

public interface ItemsDAO {
	public Items findItems(String userid);
	public int updateItems(Items items);
}
