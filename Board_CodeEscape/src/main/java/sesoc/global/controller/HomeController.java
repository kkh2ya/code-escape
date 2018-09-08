package sesoc.global.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "startGame", method = RequestMethod.GET)
	public String home() {
		return "index";
	}
	
	@RequestMapping(value="input", method=RequestMethod.GET)
	public @ResponseBody ArrayList<String> input(String text){
		ArrayList<String> list = new ArrayList<>();
		String [] code = text.split("\n");
		for (String string : code) {
			list.add(string);
		}
		System.out.println("리스트 : " + list);
		return list;
	}
}
