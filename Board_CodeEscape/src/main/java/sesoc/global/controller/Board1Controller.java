package sesoc.global.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import sesoc.global.dao.Board1Repository;
import sesoc.global.util.PageNavigator;
import sesoc.global.vo.Board1;

@Controller
public class Board1Controller {
	
	@Autowired
	Board1Repository Brepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		return "/realMain";
	}
	
	@RequestMapping(value = "/loginGo", method = RequestMethod.GET)
	public String loginGo(Locale locale, Model model) {
		
		return "/login";
	}
	
	@RequestMapping(value = "/intro", method = RequestMethod.GET)
	public String Intro() {
		return "/intro";
	}
	
	@RequestMapping(value="boardList", method=RequestMethod.GET)
	public String boardList(
			@RequestParam(value="currentPage", defaultValue="1") int currentPage,
			@RequestParam(value="searchtype", defaultValue="title") String searchtype,
			@RequestParam(value="searchword", defaultValue="") String searchword,
			Model model) {
		System.out.println("보드에 들어옴");
		int totalRecordCount = Brepo.getboardCount(searchtype, searchword);
		PageNavigator navi = new PageNavigator(currentPage, totalRecordCount);
		
		List<Board1> boardList = Brepo.selectAll(searchtype, searchword, navi.getStartRecord(), navi.getCOUNT_PER_PAGE());
		
		model.addAttribute("boardList", boardList);
		model.addAttribute("navi", navi);
		model.addAttribute("searchtype", searchtype);
		model.addAttribute("searchword", searchword);
		
		return "board1/boardList";
	}
	@RequestMapping(value="noticeList", method=RequestMethod.GET)
	public String noticeList(
			@RequestParam(value="currentPage", defaultValue="1") int currentPage,
			@RequestParam(value="searchtype", defaultValue="title") String searchtype,
			@RequestParam(value="searchword", defaultValue="") String searchword,
			Model model) {
		System.out.println("노티스에 들어옴");
		int totalRecordCount = Brepo.getboardCount(searchtype, searchword);
		PageNavigator navi = new PageNavigator(currentPage, totalRecordCount);
		
		List<Board1> boardList = Brepo.adminselectAll(searchtype, searchword, navi.getStartRecord(), navi.getCOUNT_PER_PAGE());
		
		model.addAttribute("boardList", boardList);
		model.addAttribute("navi", navi);
		model.addAttribute("searchtype", searchtype);
		model.addAttribute("searchword", searchword);
		
		return "board1/noticeList";
	}
	@RequestMapping(value="search", method=RequestMethod.POST)
	public String search(
			@RequestParam(value="currentPage", defaultValue="1") int currentPage,
			@RequestParam(value="searchtype", defaultValue="title") String searchtype,
			@RequestParam(value="searchword", defaultValue="") String searchword,
			Model model) {
		
		int totalRecordCount = Brepo.getboardCount(searchtype, searchword);
		PageNavigator navi = new PageNavigator(currentPage, totalRecordCount);
		
		List<Board1> boardList = Brepo.selectAll(searchtype, searchword, navi.getStartRecord(), navi.getCOUNT_PER_PAGE());
		
		model.addAttribute("boardList", boardList);
		model.addAttribute("navi", navi);
		model.addAttribute("searchtype", searchtype);
		model.addAttribute("searchword", searchword);
		
		return "board1/boardList";
	}
	
	
	@RequestMapping(value="boardDetail", method=RequestMethod.GET)
	public String boardDetail(int board_num, Model model) {
		
		Board1 selectedBoard = Brepo.selectOne(board_num);
		int result = Brepo.hitsup(board_num);
		
		if(result != 0) {
			System.out.println("조회수 올라감!");
		} else {
			System.out.println("조회수 올리기 실패!");
		}
		//답변리스트 모델에 저장
		model.addAttribute("selectedBoard", selectedBoard);
		//해당 글 데이터 넘김
		
		//해당 글 답변 리스트 넘김
		List<Board1> replyList = Brepo.replyList(selectedBoard);
		model.addAttribute("replyList",replyList);
		
		return "board1/boardDetail";
	}
	@RequestMapping(value="write", method=RequestMethod.GET)
	public String write() {
		return "board1/write";
	}
	@RequestMapping(value="write", method=RequestMethod.POST)
	public String write(Board1 board, String userid, String title, String content) {
		System.out.println("타이틀~~~!!!"+title);
		System.out.println("컨텐트~~~!!!"+(String)content);
		/*board.setUserid(userid);
		board.setTitle(title);
		board.setContent(content);*/
		System.out.println("이빠이~~~!!!"+board);
		Brepo.write(board);
		System.out.println("글쓰기성공");
		return "redirect:/boardList";
	}
	
	@RequestMapping(value="updateboard", method=RequestMethod.GET)
	public String updateboard(int board_num,Model model) {
		System.out.println("update 도착 board_num: "+board_num);
		//수정할 내용 삽입
		Board1 selectedBoard = Brepo.selectOne(board_num);
		model.addAttribute("selectedBoard",selectedBoard);
		return "board1/updateboard";
	}
	@RequestMapping(value="updateboard", method=RequestMethod.POST)
	public String updateboard(Board1 board) {
		//글수정
		Brepo.updateboard(board);
		return "redirect:/boardList";
	}
}
