package sesoc.global.util;

public class PageNavigator {
	
    private final int COUNT_PER_PAGE = 10; 
	private final int PAGE_PER_GROUP = 5;  
	private int currentPage;       
	private int totalRecordCount; 
	private int totalPageCount;    
	private int currentGroup;     
	private int startPageGroup;    
	private int endPageGroup;     
	private int startRecord;       
		
	
	public PageNavigator(int currentPage, int totalrecord){
				
		this.totalRecordCount = totalrecord;
		
		
		
		totalPageCount = (totalRecordCount + COUNT_PER_PAGE - 1) / COUNT_PER_PAGE;		
		
		
		
		if(currentPage < 1 )
				currentPage = 1;
	    if(currentPage > totalPageCount ) 
	    	    currentPage = totalPageCount;
	    
	    this.currentPage = currentPage;
	    
	   
	   currentGroup = (currentPage - 1) / PAGE_PER_GROUP;
	   
	  
	   startPageGroup = currentGroup * PAGE_PER_GROUP + 1;
	   
	   startPageGroup = startPageGroup < 1 ? 1 : startPageGroup;
	   
	  
	   endPageGroup = startPageGroup + PAGE_PER_GROUP - 1;
	   
	   endPageGroup = endPageGroup < totalPageCount ? endPageGroup : totalPageCount;
	   
	   
	   startRecord = (currentPage - 1) * COUNT_PER_PAGE;
	
	} 


	public int getTotalRecordCount() {
		return totalRecordCount;
	}


	public void setTotalRecordCount(int totalRecordCount) {
		this.totalRecordCount = totalRecordCount;
	}


	public int getTotalPageCount() {
		return totalPageCount;
	}

	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = totalPageCount;
	}


	public int getCurrentGroup() {
		return currentGroup;
	}


	public void setCurrentGroup(int currentGroup) {
		this.currentGroup = currentGroup;
	}

	public int getStartPageGroup() {
		return startPageGroup;
	}

	public void setStartPageGroup(int startPageGroup) {
		this.startPageGroup = startPageGroup;
	}

	public int getEndPageGroup() {
		return endPageGroup;
	}

	public void setEndPageGroup(int endPageGroup) {
		this.endPageGroup = endPageGroup;
	}

	public int getStartRecord() {
		return startRecord;
	}

	public void setStartRecord(int startRecord) {
		this.startRecord = startRecord;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getCOUNT_PER_PAGE() {
		return COUNT_PER_PAGE;
	}

	public int getPAGE_PER_GROUP() {
		return PAGE_PER_GROUP;
	}

}
