package sesoc.global.vo;

public class Board1 {
	
	private int board_num;
	private int replynum;
	private String userid;
	private String title;
	private String inputdate;
	private int hits;
	private String content;
	
	public Board1() {
		// TODO Auto-generated constructor stub
	}

	public Board1(int board_num, int replynum, String userid, String title, String inputdate, int hits,
			String content) {
		super();
		this.board_num = board_num;
		this.replynum = replynum;
		this.userid = userid;
		this.title = title;
		this.inputdate = inputdate;
		this.hits = hits;
		this.content = content;
	}

	public int getBoard_num() {
		return board_num;
	}

	public void setBoard_num(int board_num) {
		this.board_num = board_num;
	}

	public int getReplynum() {
		return replynum;
	}

	public void setReplynum(int replynum) {
		this.replynum = replynum;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getInputdate() {
		return inputdate;
	}

	public void setInputdate(String inputdate) {
		this.inputdate = inputdate;
	}

	public int getHits() {
		return hits;
	}

	public void setHits(int hits) {
		this.hits = hits;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Board1 [board_num=" + board_num + ", replynum=" + replynum + ", userid=" + userid + ", title=" + title
				+ ", inputdate=" + inputdate + ", hits=" + hits + ", content=" + content + "]";
	}

}
