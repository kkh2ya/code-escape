package sesoc.global.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

import sesoc.global.vo.Board1;

public interface Board1DAO {
	
	public List<Board1> selectAll(Map<String,String> search, RowBounds rb);
	public List<Board1> adminselectAll(Map<String,String> search, RowBounds rb);
	public Board1 selectOne(int board_num);
	public int hitsup(int board_num);
	public int getboardCount(Map<String,String> map);
	public int write(Board1 board);
	public int updateboard(Board1 board);
	public int reply(Board1 board);
	public List<Board1> replyList(Board1 board);
	public int deleteReply(Board1 board);
	public int updateReply(Board1 board);
	
}