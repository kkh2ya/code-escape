package sesoc.global.vo;

public class Users {
	private String id;
	private String password;
	private String nickname;
	private String email;
	private String inputdate;
	private int userlevel;
	private String is_deleted;
	
public Users() {
	// TODO Auto-generated constructor stub
}

public Users(String id, String password, String nickname, String email, String inputdate, int userlevel,
		String is_deleted) {
	super();
	this.id = id;
	this.password = password;
	this.nickname = nickname;
	this.email = email;
	this.inputdate = inputdate;
	this.userlevel = userlevel;
	this.is_deleted = is_deleted;
}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getNickname() {
	return nickname;
}

public void setNickname(String nickname) {
	this.nickname = nickname;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getInputdate() {
	return inputdate;
}

public void setInputdate(String inputdate) {
	this.inputdate = inputdate;
}

public int getUserlevel() {
	return userlevel;
}

public void setUserlevel(int userlevel) {
	this.userlevel = userlevel;
}

public String getIs_deleted() {
	return is_deleted;
}

public void setIs_deleted(String is_deleted) {
	this.is_deleted = is_deleted;
}

@Override
public String toString() {
	return "Users [id=" + id + ", password=" + password + ", nickname=" + nickname + ", email=" + email + ", inputdate="
			+ inputdate + ", userlevel=" + userlevel + ", is_deleted=" + is_deleted + "]";
}
}
