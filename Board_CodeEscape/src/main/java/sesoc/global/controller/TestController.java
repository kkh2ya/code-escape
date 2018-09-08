package sesoc.global.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.game.vo.MyCompile;
import com.my.game.vo.MyCompile2;

@Controller
public class TestController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping(value = "/ajaxTest", method = RequestMethod.GET)
	public @ResponseBody ArrayList<String> ajaxTest(String temp) {
		ArrayList<String> list2 = new ArrayList<>();
		String[] str = temp.split("\n");
		for (String temp1 : str) {
			list2.add(temp1);
		}
		System.out.println(list2);

		ArrayList<String> list = new ArrayList<>();
		list.add("right");
		list.add("left");
		logger.info("list : {}", list);
		return list2;
	}

	@RequestMapping(value = "/ajaxTest2", method = RequestMethod.GET)
	public @ResponseBody ArrayList<String> ajaxTest2(String temp) {
		ArrayList<String> list = new ArrayList<>();
		list.add("up");
		list.add("true right");
		list.add("left");
		list.add("up");
		list.add("down");
		list.add("true right");
		list.add("down");
		return list;
	}

	@RequestMapping(value = "/sendCommand", method = RequestMethod.GET)
	public @ResponseBody ArrayList<String> sendCommand(String temp) {
		logger.info("sendCommand");
		ArrayList<String> list = new ArrayList<>();

		MyCompile myCompile = new MyCompile();

		System.out.println("temp : " + temp);

		String str = temp.trim();

		// 공백일때까지
		// 현재 글자 자르면 글자 안에 공백 있는 상태임... 이 방법으로 제거 -> str = str.replaceAll(" ",
		// "");

		str = str.replaceAll("player.", "");// player들어오면 다 자름
		while (!str.equals("")) {

			if (str.substring(0, 3).equals("for")) {
				// }인덱스 찾아낸담에 자르기
				int index1 = str.indexOf('}');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			} else if (str.substring(0, 5).equals("while")) {
				int index1 = str.indexOf('}');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			} else if (str.substring(0, 2).equals("if")) {
				// if else는 또 분기처리....
				int index1 = str.indexOf('}');
				String temp1 = str.substring(0, index1 + 1);// temp1이 if(){}까지의
															// 내용임
				temp1 = temp1.replaceAll(" ", "");
				temp1 = temp1.replaceAll("(\r\n|\r|\n|\n\r)", ""); // 개행없앰
				System.out.println("temp1 : " + temp1);
				str = str.substring(index1 + 1); // 문자열 남은 부분
				str = str.trim(); // 문자열 남은 부분
				// 여기서부터 temp1 문자열 분석해서 약속된 함수로 바꿔주자

				index1 = temp1.indexOf('('); // 재활용
				int index2 = temp1.indexOf(')');

				String tempSub1 = temp1.substring(index1 + 1, index2); // ()안의
																		// 내용
																		// 저장됨
				System.out.println("()안의 내용 : " + tempSub1);
				index1 = temp1.indexOf('{');
				index2 = temp1.indexOf('}');
				System.out.println("index1 : " + index1);
				System.out.println("index2 : " + index2);

				String tempSub2 = temp1.substring(index1 + 1, index2); // {}안의
																		// 내용 저장
				System.out.println("{}안의 내용 : " + tempSub2);

				// ()과{}의 내용 비교해서 정의된 함수 문자열 저장 후 리스트에 저장함
				String tempResult = "";
				if (tempSub1.equals("star")) {
					if (tempSub2.equals("moveRight();")) {
						tempResult = "true_right();";
					} else if (tempSub2.equals("moveLeft();")) {
						tempResult = "true_left();";
					} else if (tempSub2.equals("moveUp();")) {
						tempResult = "true_up();";
					} else if (tempSub2.equals("moveDown();")) {
						tempResult = "true_down();";
					}
				}
				System.out.println("if문 분기처리" + tempResult);

				list.add(tempResult);

			} else {
				int index1 = str.indexOf(';');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			}
			System.out.println("str : " + str);// 반복문 나가기 전 체크
		}

		System.out.println("list : " + list);

		// 리스트에서 받아서 뿌려줘야함
		ArrayList<String> list2 = null;
		try {
			// 파일 생성
			myCompile.makeFile(list);
			// 생성된 파일 컴파일
			list2 = myCompile.exeCompile();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return list2;
	}

	@RequestMapping(value = "/sendCommand2", method = RequestMethod.GET)
	public @ResponseBody ArrayList<String> sendCommand2(String temp) {
		logger.info("sendCommand2");
		ArrayList<String> list = new ArrayList<>();

		MyCompile2 myCompile = new MyCompile2();

		System.out.println("temp : " + temp);

		String str = temp.trim();

		list.add("String answer1=\"polymorphism\";");
		list.add("String answer2=\"class\";");
		list.add("String answer3=\"object oriented programming\";");
		list.add("String answer4=\"switch\";");
		list.add("String answer5=\"while\";");

		str = str.replaceAll("player.", "");
		// 공백일때까지
		while (!str.equals("")) {
			// 처음 문자 for비교
			if (str.substring(0, 3).equals("for")) {
				// }인덱스 찾아낸담에 자르기
				int index1 = str.indexOf('}');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			} else if (str.substring(0, 5).equals("while")) {
				int index1 = str.indexOf('}');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			} else if (str.substring(0, 2).equals("if")) {
				int index1 = str.indexOf('}');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			} else if (str.contains(";")) {
				int index1 = str.indexOf(';');
				String temp1 = str.substring(0, index1 + 1);
				list.add(temp1);
				str = str.substring(index1 + 1);
				str = str.trim();
			} else {
				str = "pi";
			}
			System.out.println("str : " + str);
		}
		System.out.println("list : " + list);

		// 리스트에서 받아서 뿌려줘야함
		ArrayList<String> list2 = new ArrayList<>();
		try {
			// 파일 생성
			myCompile.makeFile(list);
			// 생성된 파일 컴파일
			list2 = myCompile.exeCompile();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list2;
	}
}// TestController class