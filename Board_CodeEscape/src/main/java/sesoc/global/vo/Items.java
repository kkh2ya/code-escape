package sesoc.global.vo;

public class Items {
	private String userid;
	private String slot1;
	private String slot2;
	private String slot3;
	private String slot4;
	private String slot5;
	
	public Items() {
		// TODO Auto-generated constructor stub
	}

	public Items(String userid, String slot1, String slot2, String slot3, String slot4, String slot5) {
		super();
		this.userid = userid;
		this.slot1 = slot1;
		this.slot2 = slot2;
		this.slot3 = slot3;
		this.slot4 = slot4;
		this.slot5 = slot5;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getSlot1() {
		return slot1;
	}

	public void setSlot1(String slot1) {
		this.slot1 = slot1;
	}

	public String getSlot2() {
		return slot2;
	}

	public void setSlot2(String slot2) {
		this.slot2 = slot2;
	}

	public String getSlot3() {
		return slot3;
	}

	public void setSlot3(String slot3) {
		this.slot3 = slot3;
	}

	public String getSlot4() {
		return slot4;
	}

	public void setSlot4(String slot4) {
		this.slot4 = slot4;
	}

	public String getSlot5() {
		return slot5;
	}

	public void setSlot5(String slot5) {
		this.slot5 = slot5;
	}
	@Override
	public String toString() {
		return "Items [userid=" + userid + ", slot1=" + slot1 + ", slot2=" + slot2 + ", slot3=" + slot3 + ", slot4="
				+ slot4 + ", slot5=" + slot5 + "]";
	}
}
