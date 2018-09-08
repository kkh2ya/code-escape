package com.my.game.vo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class MyCompile2 {
	
	//파일 생성
	public void makeFile(ArrayList<String> temp) throws Exception{
		System.setProperty("java.home", "C:\\Program Files\\Java\\jdk1.8.0_144");
		
		//이중작업인듯....
		//여기 content부분 따로 작업 해야하나
		String content = "";
		for(String str : temp){
			content = content + str + "\r\n";
		}
		//content내용 확인
		System.out.println("content : " + content);
		
		String filename = "Hello";//만들 파일 이름, 아이디별로 각각 만들까 생각중
		
		String form0 = "import java.util.ArrayList;\r\n";
		String form1 = "public class "+ filename +"{\r\n";
		String form2 = "public static ArrayList<String> list = new ArrayList<>();\r\n";
		String form3 = "public static void main(String[] args){\r\n";
		//이부분이 
		String form4 = content;//임시방편
		String form5 = "System.out.println(list);\r\n";
		//코드 채워지는 부분!!!!!!!
		String form6 = "}\r\n";//main close
		String form7 = "public static void moveRight(){list.add(\"right\");}\r\n";//right리스트에 넣어줌
		String form8= "public static void moveLeft(){list.add(\"left\");}\r\n";
		String form9 = "public static void moveUp(){list.add(\"up\");}\r\n";
		String form10 = "public static void moveDown(){list.add(\"down\");}\r\n";
		String form11 = "public static void eagleEye(){\r\n";
		String form12 = "if("+content.contains("if")+"){\r\n";
		String form13 = "list.add(\"eagleEye\");}\r\n";
		String form14 = "}\r\n";
		String form15 = "}\r\n";//class close
		String sumForm = form0+form1+form2+form3+form4+form5+form6+form7+form8+form9+form10+form11+form12+form13+form14+form15;
		
		System.out.println("sumForm : " + sumForm);
		
		String filepath = "C://gameCode/";
		
		FileWriter fw = new FileWriter(filepath+filename+".java");	//파일 이름
		BufferedWriter bw = new BufferedWriter(fw);	//깔떄기
		bw.write(sumForm);
		bw.newLine();
		bw.close();
		//여기까지 파일 저장 완료!!!
		
	}
	public void printLinesForJavac(String name, InputStream ins) throws Exception {
		String line = null;
		BufferedReader in = new BufferedReader(new InputStreamReader(ins));
		while ((line = in.readLine()) != null) {
			System.out.println(name + " " + line);
		}
	}
	public void runProcessForJavac(String command, File file) throws Exception {
		Process pro = Runtime.getRuntime().exec(command, null, file);//실행
		printLinesForJavac(command + " stdout:", pro.getInputStream());
		printLinesForJavac(command + " stderr:", pro.getErrorStream());
		pro.waitFor();
		System.out.println(command + " exitValue() : " + pro.exitValue());
	}
	
	
	public ArrayList<String> printLines(String name, InputStream ins) throws Exception {
		String line = null;
		String temp = "";
		ArrayList<String> list = new ArrayList<>();
		BufferedReader in = new BufferedReader(new InputStreamReader(ins));
		while ((line = in.readLine()) != null) {
			System.out.println(name + " " + line);
			temp = line;//왜 한줄로 나오는지....[]는 왜 붙음?
		}
		//결과값 저장
		if(!temp.equals("")){
			temp = temp.substring(1, temp.length());
			temp = temp.substring(0, temp.length()-1);
			temp = temp.replaceAll(" ", "");
			System.out.println("temp : " + temp);
			String str[] = temp.split(",");
			System.out.println("temp : " + temp + "  str : " + str.length);
			for(int i=0; i<str.length; i++){
				System.out.println("str[" + i + "] : " + str[i]);
				list.add(str[i]);
			}
		}
		if(list.size() != 0)
			System.out.println(name + "printLines : " + list);
		//결과값 저장 끝
		return list;
	}
	
	public ArrayList<String> runProcess(String command, File file) throws Exception {
		System.out.println("file"+file);
		Process pro = Runtime.getRuntime().exec(command, null, file);//실행
		ArrayList<String> list = printLines(command + " stdout:", pro.getInputStream());//추가
		printLines(command + " stderr:", pro.getErrorStream());
		pro.waitFor();
		System.out.println(command + " exitValue() : " + pro.exitValue());
		return list;
	}
	//컴파일+실행
	public ArrayList<String> exeCompile(){
		final String path = "C://gameCode";
		File filepath = new File(path);
		ArrayList<String> list = null;
		try {
			runProcessForJavac("javac Hello.java", filepath);
			list = runProcess("java Hello", filepath);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}