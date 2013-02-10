
function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
	  	{
			return unescape(y);
		}
	}
}

function setUserIdCookie(userId) {
	setCookie("USER_ID", userId, 1);	
}

function getUserIdCookie() { 
	var userIdCookie = getCookie("USER_ID");	
	return parseInt(userIdCookie);
}

// used while building new habits:
function setNewCategoryIdCookie(categoryId) {
	setCookie("NEW_CATEGORY_ID", categoryId, 1);	
}

function getNewCategoryIdCookie() {
	var newCategoryIdCookie = getCookie("NEW_CATEGORY_ID");	
	return parseInt(newCategoryIdCookie);
}

// for navigation through current habits
function setCurrentHabitIdCookie(habitId) {
	setCookie("CURRENT_HABIT_ID", habitId, 1);	
}

function getCurrentHabitIdCookie() {
	var habitId = getCookie("CURRENT_HABIT_ID");	
	return parseInt(habitId);
}

