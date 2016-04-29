function MaxWin(){
	var strURI = "base.html";

	var uAgent = navigator.userAgent.toUpperCase(); 
	var uName = navigator.userAgent.toUpperCase();
	var aName = navigator.appName.toUpperCase(); 

	var WIN = uAgent.indexOf("WIN") != -1;
	var MAC = uAgent.indexOf("MAC") != -1;
	var EXPLORER = aName.indexOf("MICROSOFT") != -1;	
	var FIREFOX = uName.indexOf("FIREFOX") != -1;

	var s = 0;
	var e = 0; 
	var version = 0; 

	if (EXPLORER) { 
		appVer = navigator.userAgent; 
		s = appVer.indexOf("MSIE ",0) + 5; 
		e = appVer.indexOf(";",s); 
		version = eval(appVer.substring(s,e)); 
	} 

	if (FIREFOX) {
		s = uName.indexOf("FIREFOX/",0);
		version = parseFloat(uName.substring(s+8,s+8+3));
	} 

	if (screen.availWidth <= 1024 || screen.availHeight <= 768) {
        var screenXGA = true;
	}


	if(EXPLORER && version>=7 && screenXGA) {	//Browser--IE7, XGA
		maxWin = window.open(strURI, "", "fullscreen=yes");
	} else {
		maxWin = window.open(strURI,"","toolbar=no,menubar=no,location=no,status=no,scrollbars=no,resizable=no,left=0,screenX=0,top=0,screenY=0");
		maxWin.moveTo(0,0);
		maxWin.resizeTo(screen.availWidth,screen.availHeight);
	}	
}