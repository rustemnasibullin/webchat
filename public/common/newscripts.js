<!--



var pgLoaded = false;
var wndo = new Array();	// "window(s)" for scrollable content
function initScrLyr() {
	pgLoaded=true;	
	// creat scrollable content area
	// arg: id of div containing scrollable div(s)
	wndo[0] = new dynObj('wn');	
	// load scrolling content
	// arg's: array number of wndo, id of scroll div
	loadScrLyr(0,'lyr1');	

	// remove layers from table for ns6+/mozilla (overflow/clip bug?)
	if (navigator.userAgent.indexOf("Gecko")>-1) {
    for (var i=0; i<wndo.length; i++) {
			if (wndo[i].el.parentNode.id.indexOf("hold")!=-1) {
				var holderId = wndo[i].el.parentNode.id;
				wndo[i].holder = document.getElementById(holderId);
				var scrWn = wndo[i].holder.removeChild(wndo[i].el);
				document.body.appendChild(wndo[i].el);
				wndo[i].css.zIndex = 1000;
				var y = wndo[i].holder.offsetTop;
				var x = wndo[i].holder.offsetLeft;
				wndo[i].shiftTo(x,y);
			}
  	}
  }
}

// ns6+/mozilla need to reposition layers onresize
function rePosGecko() {
  for (var i=0; i<wndo.length; i++) {
    var y = wndo[i].holder.offsetTop;
		var x = wndo[i].holder.offsetLeft;
		wndo[i].shiftTo(x,y);
  }
}

window.onload = initScrLyr;
if (navigator.userAgent.indexOf("Gecko")>-1) window.onresize = rePosGecko;
//-->

// this is the email a page URL script 
<!--
function element(id) {  // universal way to get elemnt by id
	if (document.getElementById != null) {	// 1st choice
		return document.getElementById(id);	//no N4, IE4
	}
	if (document.all != null) {		// 2nd choice
		return document.all[id];	// IE only
	}
	if (document.layers != null) {	// 3rd choice
		return document.layers[id];	// N4 only
	}
	return null;
}

function openEmailLinkWindow() {
	var senderName = element("sender-name").value;
	var senderEmail = element("sender-email").value;
	var senderIsRecipient = element("sender-is-recipient-true").checked;
	var recipientName = element("recipient-name").value;
	var recipientEmail = element("recipient-email").value;
	var link = window.location.href;

	var emailLinkWindow = window.open(
		"/core/process?" + 
		"public-email-link.sender-name=" + 
		senderName + 
		"&public-email-link.sender-email=" + 
		senderEmail + 
		"&public-email-link.sender-is-recipient=" + 
		senderIsRecipient +
		"&public-email-link.recipient-name=" + 
		recipientName + 
		"&public-email-link.recipient-email=" + 
		recipientEmail +
		"&public-email-link.link=" + 
		link
		, "emailLinkWindow",
		"location=no," +
		"height=450," +
		"width=500," +
		"zlock=no,"
	);


	return true;
}

function height500(Url){
	window.open(Url, "newWindow","location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=750,height=500");
}


function bigWindow(Url){
				window.open(Url, "newWindow","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=519,height=500");
			}
			
function helpWindow() {
			window.open("/popups/SUPPORT/contactSUPPORT.html", "help","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=518,height=500");
			}

function width350(Url){
	window.open(Url, "newWindow","location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=416,height=300");
}

function PopIt(){window.open("https://www.websitealive.net/pop2.asp?group=thawte","guest","height=350,width=300")

	}

// -->
