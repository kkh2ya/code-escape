package sesoc.global.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sesoc.global.vo.Board1;

@Repository
public class Board1Repository {
	
	@Autowired
	SqlSession sqlSession;
	
	public List<Board1> selectAll(String searchtype, String searchword, int startRecord, int COUNT_PER_PAGE) {
		
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		int countPerPage = COUNT_PER_PAGE;
		
		RowBounds rb = new RowBounds(startRecord, countPerPage);

		Map<String, String> search = new HashMap<>();

		search.put("searchtype", searchtype);
		search.put("searchword", searchword);
		
		List<Board1> list = dao.selectAll(search, rb);
		
		return list;
	}
public List<Board1> adminselectAll(String searchtype, String searchword, int startRecord, int COUNT_PER_PAGE) {
		
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		int countPerPage = COUNT_PER_PAGE;
		
		RowBounds rb = new RowBounds(startRecord, countPerPage);

		Map<String, String> search = new HashMap<>();

		search.put("searchtype", searchtype);
		search.put("searchword", searchword);
		
		List<Board1> list = dao.adminselectAll(search, rb);
		
		return list;
	}
	
	public Board1 selectOne(int board_num) {
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		Board1 selectedBoard = new Board1();
		
		selectedBoard = dao.selectOne(board_num);
		
		return selectedBoard;
	}
	
	public int hitsup(int board_num) {
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		int result = dao.hitsup(board_num);
		
		return result;
	}
	
	public int getboardCount(String searchtype, String searchword) {
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		Map<String,String> map = new HashMap<>();
		
		map.put("searchtype", searchtype);
		map.put("searchword", searchword);
		
//		SELECT count(*) FROM board WHERE title= '%' || '����' || '%'
		
		int result = dao.getboardCount(map);
		
		return result;
		
	}
	
	public int write(Board1 board){
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		int result = dao.write(board);
		
		return result;
	}
	
	public int updateboard(Board1 board){
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		System.out.println(board);
		int result = dao.updateboard(board);
		
		return result;
	}
	
	public int reply(Board1 board){
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		int result = dao.reply(board);
		
		return result;
	}
	
	public List<Board1> replyList(Board1 board){
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		List<Board1> result = dao.replyList(board);
		
		return result;
	}
	
	public int updateReply(Board1 board){
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		System.out.println("Board!Repository :"+board.toString());
		int result = dao.updateReply(board);
		
		return result;
	}
	
	public int deleteReply(Board1 board){
		Board1DAO dao = sqlSession.getMapper(Board1DAO.class);
		
		int result = dao.deleteReply(board);
		
		return result;
	}
}
