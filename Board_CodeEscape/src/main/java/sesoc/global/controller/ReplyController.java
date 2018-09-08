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
public class ReplyController {
	
	@Autowired
	Board1Repository Brepo;
	
	@RequestMapping(value = "reply", method = RequestMethod.GET)
	public String reply() {
		
		return "board1/boardDetail";
	}
	
	@RequestMapping(value = "reply", method = RequestMethod.POST)
	public String reply(Board1 board, Model model, HttpSession session) {
			String loginId = (String) session.getAttribute("loginId");
			board.setUserid(loginId);
			Brepo.reply(board);
			System.out.println("아이조아"+loginId);
			
			//해당 글 데이터 넘김
			Board1 selectedBoard = Brepo.selectOne(board.getBoard_num());
			model.addAttribute("selectedBoard", selectedBoard);
			//해당 글 답변 리스트 넘김
			List<Board1> replyList = Brepo.replyList(selectedBoard);
			System.out.println("아이조아조아"+replyList);
			model.addAttribute("replyList",replyList);
		return "board1/boardDetail";
	}
	@RequestMapping(value = "updateReply", method = RequestMethod.POST)
	public String updateReply(Board1 board, Model model) {
		System.out.println("updateReply :"+board.toString());
		Brepo.updateReply(board);
		
		System.out.println("board: "+ board.toString());
		//해당 글 데이터 넘김
		Board1 selectedBoard = Brepo.selectOne(board.getBoard_num());
		model.addAttribute("selectedBoard", selectedBoard);
		
		System.out.println("selectedBoard: "+ selectedBoard);
		//해당 글 답변 리스트 넘김
		List<Board1> replyList = Brepo.replyList(selectedBoard);
		model.addAttribute("replyList",replyList);
		return "board1/boardDetail";
	}
	@RequestMapping(value = "deleteReply", method = RequestMethod.GET)
	public String deleteReply(Board1 board, Model model) {
		System.out.println("deleteReply :"+board.toString());
		Brepo.deleteReply(board);
		
		//해당 글 데이터 넘김
		Board1 selectedBoard = Brepo.selectOne(board.getBoard_num());
		model.addAttribute("selectedBoard", selectedBoard);
		//해당 글 답변 리스트 넘김
		List<Board1> replyList = Brepo.replyList(selectedBoard);
		model.addAttribute("replyList",replyList);
	
		return "board1/boardDetail";
	}
}
