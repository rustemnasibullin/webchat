
var LOGIN_NAME;
var timerId;
var tckId=0;
var ntf;
var mUSERS = new Map();
var mMSGS = new Array();
var mCONVERSATION = [];

function attach() {
}


function startMsgPane (rootId,AUTHOR,title) {
var s;
var tbar = "<table width=\"100%\"><tr><td width=\"100%\"><img src=\"images/upload-72.png\"  height=\"19\" onclick=\"attach();\" /></td>";  
var bgcolor = "";    
    if (LOGIN_NAME==AUTHOR) {
    tbar = tbar + "<td><img src=\"images/stop-36.png\" onclick=\"closebranch('"+rootId+"');\" /></td>";
    } else {
    tbar = tbar + "<td><img src=\"images/chat.png\" onclick=\"reply('"+rootId+"','Reply', event);\" /></td>";
    }  

    tbar = tbar + "</tr></table>";  

s="<table cellspacing=\"0\" cellpadding=\"5\" border=\"0\" >"+
  "<tbody> "+
  "  <tr>  "+
  "    <td valign=\"top\">  "+
  "      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">   "+
  "        <tbody>     "+
  "          <tr>        "+
  "            <td><img src=\"../../common/e.gif\" width=\"4\" height=\"4\" border=\"0\"/></td>   "+
  "            <td bgcolor=\"#d1e0c1\"><img src=\"../../common/lt1.gif\" width=\"11\" height=\"4\" border=\"0\"/></td>  "+
  "            <td bgcolor=\"#d1e0c1\"><img src=\"../../common/e.gif\" width=\"4\" height=\"4\" border=\"0\"/></td>"+
  "            <td><img src=\"../../common/rt1.gif\" width=\"15\" height=\"4\" border=\"0\"/></td>   "+
  "            <td><img src=\"../../common/e.gif\" width=\"4\" height=\"4\" border=\"0\"/></td> "+
  "          </tr>         "+
  "          <tr bgcolor=\"#336633\">   "+
  "            <td valign=\"top\" bgcolor=\"#d1e0c1\"><img src=\"../../common/lt2.gif\" width=\"4\" height=\"19\" border=\"0\"/></td> " +
  "            <td valign=\"top\"><img src=\"../../common/lt3.gif\" width=\"11\" height=\"19\" border=\"0\"/></td> " +
  "            <td width=\"100%\" align=\"center\">" +
  "            <table> <tr> "+
  "            <td><font color=\"Gold\" size=\"2\" face=\"Times New Roman, Times, serif\" >&nbsp;&nbsp;"+title+"</font></td> "+
  "            <td>"+tbar+"</td></tr></table>"+
  "            <td valign=\"top\"><img src=\"../../common/rt3.gif\" width=\"15\" height=\"19\" border=\"0\"/></td> " +
  "            <td valign=\"top\" bgcolor=\"#d1e0c1\"><img src=\"../../common/rt2.gif\" width=\"4\" height=\"19\" border=\"0\"/></td> " +
  "          </tr>" +
  "          <tr bgcolor=\"#f4f8ed\">" +
  "            <td bgcolor=\"#d1e0c1\"><img src=\"../../common/e.gif\" width=\"4\" height=\"1\" border=\"0\"/></td>" +
  "            <td></td><td>";

  return s;

};


function closeMsgPane () {

var s;

s="          </td><td></td>"+
  "          <td bgcolor=\"#d1e0c1\"><img src=\"common/e.gif\" width=\"4\" height=\"1\" border=\"0\"/></td>"+
  "          </tr>"+
  "          <tr>   "+
  "            <td><img src=\"common/lb2.gif\" width=\"4\" height=\"10\" border=\"0\"></td>"+
  "            <td><img src=\"common/lb3.gif\" width=\"11\" height=\"10\" border=\"0\"></td> "+
  "            <td bgcolor=\"#f4f8ed\"><img src=\"common/e.gif\" width=\"15\" height=\"1\" border=\"0\"></td>"+
  "            <td><img src=\"common/rb3.gif\" width=\"15\" height=\"10\" border=\"0\"></td>"+
  "            <td><img src=\"common/rb2.gif\" width=\"4\" height=\"10\" border=\"0\"></td>"+
  "          </tr> "+
  "          <tr> "+
  "            <td><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"></td> "+
  "            <td><img src=\"common/lb1.gif\" width=\"11\" height=\"4\" border=\"0\"></td> "+
  "            <td bgcolor=\"#d1e0c1\"><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"></td>"+
  "            <td><img src=\"common/rb1.gif\" width=\"15\" height=\"4\" border=\"0\"></td> "+
  "            <td><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"></td>"+
  "          </tr>"+
  "        </tbody>"+
  "      </table>"+
  "      <br>"+
  "      </td>"+
  "  </tr>"+
  "  </tbody>"+
  "  </table>";

  return s;


};



function startFormPane (title) {
var s;
var tbar = "<table><tr><td><img src=\"images/upload-72.png\"   onclick=\"attach();\" /></td>";  
    tbar = tbar + "</tr></table>";  

s="<table cellspacing=\"0\" cellpadding=\"5\" border=\"0\" >"+
  "<tbody> "+
  "  <tr>  "+
  "    <td valign=\"top\">  "+
  "      <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">   "+
  "        <tbody>     "+
  "          <tr>        "+
  "            <td><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"/></td>   "+
  "            <td bgcolor=\"#d1e0c1\"><img src=\"common/lt1.gif\" width=\"11\" height=\"4\" border=\"0\"/></td>  "+
  "            <td bgcolor=\"#d1e0c1\"><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"/></td>"+
  "            <td><img src=\"common/rt1.gif\" width=\"15\" height=\"4\" border=\"0\"/></td>   "+
  "            <td><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"/></td> "+
  "          </tr>         "+
  "          <tr bgcolor=\"white\">   "+
  "            <td valign=\"top\" bgcolor=\"#d1e0c1\"><img src=\"common/lt2.gif\" width=\"4\" height=\"19\" border=\"0\"/></td> " +
  "            <td valign=\"top\"><img src=\"common/lt3L.gif\" width=\"11\" height=\"19\" border=\"0\"/></td> " +
  "            <td width=\"100%\" align=\"center\">" +
  "            <table> <tr> "+
  "            <td>"+tbar+"</td> "+
  "            <td></td></tr></table>"+
  "            <td valign=\"top\"><img src=\"common/rt3L.gif\" width=\"15\" height=\"19\" border=\"0\"/></td> " +
  "            <td valign=\"top\" bgcolor=\"#d1e0c1\"><img src=\"common/rt2.gif\" width=\"4\" height=\"19\" border=\"0\"/></td> " +
  "          </tr>" +
  "          <tr bgcolor=\"white\">" +
  "            <td bgcolor=\"#d1e0c1\"><img src=\"common/e.gif\" width=\"4\" height=\"1\" border=\"0\"/></td>" +
  "            <td></td><td>";


  return s;

};


function closeFormPane () {

var s;
var tbar = "<table><tr><td><img src=\"images/send-36.png\" onclick=\"send();\" /></td>";  
    tbar = tbar + "</tr></table>";  
s = tbar;
s += "          </td><td></td>"+
  "          <td bgcolor=\"#d1e0c1\"><img src=\"common/e.gif\" width=\"4\" height=\"1\" border=\"0\"/></td>"+
  "          </tr>"+
  "          <tr>   "+
  "            <td><img src=\"common/lb2.gif\" width=\"4\" height=\"10\" border=\"0\"></td>"+
  "            <td><img src=\"common/lb3L.gif\" width=\"11\" height=\"10\" border=\"0\"></td> "+
  "            <td bgcolor=\"white\"><img src=\"common/e.gif\" width=\"15\" height=\"1\" border=\"0\"></td>"+
  "            <td><img src=\"common/rb3L.gif\" width=\"15\" height=\"10\" border=\"0\"></td>"+
  "            <td><img src=\"common/rb2.gif\" width=\"4\" height=\"10\" border=\"0\"></td>"+
  "          </tr> "+
  "          <tr> "+
  "            <td><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"></td> "+
  "            <td><img src=\"common/lb1.gif\" width=\"11\" height=\"4\" border=\"0\"></td> "+
  "            <td bgcolor=\"#d1e0c1\"><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"></td>"+
  "            <td><img src=\"common/rb1.gif\" width=\"15\" height=\"4\" border=\"0\"></td> "+
  "            <td><img src=\"common/e.gif\" width=\"4\" height=\"4\" border=\"0\"></td>"+
  "          </tr>"+
  "        </tbody>"+
  "      </table>"+
  "      <br>"+
  "      </td>"+
  "  </tr>"+
  "  </tbody>"+
  "  </table>";

  return s;


};




function startPane2 (title) {
var s;

var tbar = "<table><tr><td><a href=\"javascript:reply();\">Reply</a></td>";  
    tbar = tbar + "</tr></table>";  



s=" <table border=\"1\" width=\"100%\"  height=\"100%\" cellpadding=\"2\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#111111\" id=\"AutoNumber1\">"+
  "<tr> "+
  "  <td bgcolor=\"#BFCCD6\">  "+
  "  <table border=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#111111\" width=\"100%\" id=\"AutoNumber2\">"+
  "    <tr>       "+
  "      <td bgcolor=\"#FFFFFF\"> "+
  "      <table  width=\"100%\"  height=\"100%\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#111111\" id=\"AutoNumber3\"> "+
  "        <tr>  "+
  "           <td bgcolor=\"#11679E\" colspan=\"2\"> "+
  "           <table> <tr> "+
  "           <td><font color=\"Gold\" size=\"2\" face=\"Times New Roman, Times, serif\" >&nbsp;&nbsp;"+title+"</font></td> "+
  "           <td>"+tbar+"</td></tr></table>"+
  "           </td>"+
  "        </tr>   "+
  "        <tr>    "+
  "          <td valign=\"CENTER\" bgcolor=\"LightGoldenrodYellow\">  "+
  "          </td>  "+
  "          <td valign=\"top\" bgcolor=\"LightGoldenrodYellow\">";

  return s;

};

function closePane2 () {
         var s;
         s = "            </td>   </tr>         </table>   </td>   </tr>   </table> </td> </tr></table>";
         return s;
};

function startForm (rootId,title, x, y) {


         $("#msgForm").show();
         var v=document.getElementById("msgForm");
         v.style.position="absolute";
         v.style.left=""+x+"px";
         v.style.top=""+(y+30)+"px";

         var ts =  startFormPane(title);

         ts = ts +

         "<form  action=\"javascript:send_message()\" name=\"formid_reply\">"+
         "<input type=\"hidden\" name=\"idroot\" value=\""+rootId+"\"/>"+
         "<input type=\"hidden\" name=\"login\" value=\""+LOGIN_NAME+"\"/>"+
         "<table>"+
         "<tr><td colspan=2><textarea type=\"textfield\" name=\"msg\" cols=30 rows=5> </textarea></td></tr>"+
         "<tr><td></td><td></td></tr>"+
         "</table>";

         ts = ts + closeFormPane();
         $("#msgForm").html(ts);

}

function reply(rootId,title, event) {
         startForm (rootId, title, event.pageX, event.pageY);
}



function send() {


  setReceipients();


  var body = document.forms["formid_reply"].elements["msg"].value;
  var lines = body.split("\n");
  var ns = lines.length;
  var xbody = ""; 
  for (var i=0; i<ns; i++){
       xbody=xbody+lines[i]+"&#12;"; 
  } 


  var rootId = document.forms["formid_reply"].elements["idroot"].value;
  var datain = "{\"id\":\"0\",\"login\":\""+ document.forms['formid_reply'].login.value + "\","+
  "\"rootid\":\""+ rootId+ "\","+
  "\"msg\":\""+xbody+"\"}";

  // alert(datain);

  $.ajax({
  url: '/msgsend',
  type: 'POST',
  data: datain,
  error: function(jqXHR, textStatus, errorThrown) { 
  //alert(textStatus); 
  },

  success: function(data) { 
           // alert(data); 
           $("#msgForm").hide();
  },
  dataType: 'json'
  });



}


function toUserHTML(map) {
     var ht  = "";
     var xs1 = "notactive";
     if (map.flag) {
         xs1="active";
     }

     var xs2 = "images/unchecked.png";
     if (map.selected) {
         xs2="images/checked.png";
     }

     ht = ht + "<div onclick=\"selectUser('"+map.NAME+"')\" id=\"u_"+map.NAME+"\">\n";
     ht = ht + "<table><tr><td><img src=\""+xs2+"\"></td>";  
     ht = ht + "<td class="+xs1+">"+map.NAME+"</td>";  
     ht = ht + "</tr></table>";  
     ht = ht + "</div>\n";
     return ht;
};


function toMsgJSON(objMsg) {
     mCONVERSATION.push(objMsg); 
};


function toMsgHTML(objMsg) {
     var ht  = "";
     var xs2="";
     var xs1 = "";

     //var datestr = objMsg.dateof;
     
     var datestr = objMsg.dateof.getDate() 
     +"."+
     (objMsg.dateof.getMonth()+1) 
     +"."+
     objMsg.dateof.getFullYear() 
     +"  "+
     objMsg.dateof.getHours() 
     +"."+
     objMsg.dateof.getMinutes() 
     +"."+
     objMsg.dateof.getSeconds(); 
     


     ht = ht + "<div id=\"msg_"+objMsg.id+"\">\n";
     ht = ht + startMsgPane (objMsg.id,objMsg.author,objMsg.author + " wrote " + 
     datestr
     ); 

     var txt = objMsg.body;
     txt=txt.replaceAll("&#12;","\n");   

     ht = ht + "<table><tr><td><img src=\""+xs2+"\"></td>";  
     ht = ht + "<td class="+xs1+"><pre>"+txt+"</pre></td>";  
     ht = ht + "</tr></table>";  
     ht = ht + closeMsgPane();
     ht = ht + "</div>\n";
     return ht;
};


function refreshUserList() {

$("#userlist").show();
    var ht = "";
    mUSERS.forEach(function (uObj, i, arr) {
    ht += toUserHTML(uObj);  
    });
    $("#userlist").html(ht);
};


function refreshRootMSGList() {

    $("#infoline").show();
    var ht = "";
    mMSGS.forEach(function (uObj, map) {
    uObj.dateof = new Date(Date.now());
    toMsgJSON(uObj);
    ht += toMsgHTML(uObj);  
    if (uObj.rootid){
    $("#msg_"+uObj.rootid).append(ht);
    } else {
    $("#infoline").append(ht);
    }
    });
    var ns = mMSGS.length;
    mMSGS.splice(0,ns);

};

function selectUser(uName) {
         var user = mUSERS.get(uName);
         if (user) {
             var selectedflag = user.selected;
             user.selected = !selectedflag;  
             refreshUserList();                  
         }   
}

function showNotifications(notifications) { 
var nl = notifications.length;
for (var i=0; i<nl; i++) {
     var obji = notifications [i];
     if (obji.TYPE && obji.TYPE=="USER") {
         var vsKey = obji.NAME;
         mUSERS.set(vsKey, obji);
     } else if (obji.TYPE && obji.TYPE=="MESSAGE") {
         mMSGS.push(obji);
     }
     refreshUserList();
     refreshRootMSGList();
}


};

function checkNotificationPushService() {
  tckId = tckId +1;  
  $.ajax({
    url: "/pop?login="+LOGIN_NAME+"&amp;tick="+tckId,
    success: function(data) {
    ntf = JSON.parse (data);
    showNotifications(ntf);
    }
  });
};

// schedule the first invocation:
$(function() {
$( "#msg" ).dialog({
resizable: true,
minHeight: 320,
minWidth: 400,
autoOpen: false,
modal: true,
show: {
effect: "blind",
duration: 500
},         
hide: {
effect: "explode",
duration: 500
},

buttons: {
"Send": function() {
submitmessage();
$(this).dialog("close");
},
Cancel: function() {
$(this).dialog("close");
}
}
});
});
 

$(function() {
$( "#dialogPrintView" ).dialog({
autoOpen: false,
minHeight: 520,
minWidth: 820,
modal: true,

show: {
effect: "blind",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
});

function submitmessage() {
         document.forms['formid'].submit(); 
};

function setReceipients() {

    var ht = "";
    var start = false;
    mUSERS.forEach(function (uObj, key, map) {

    if (uObj.selected) {
    if (start) ht+=",";
    ht += key;
    start = true;   
    }

    });
    document.forms['formid'].to.value = ht;
};

function closebranch(rootid) {
};

function send_message() {

  setReceipients();
  var body = document.forms["formid"].elements["msg"].value;
  var lines = body.split("\n");
  var ns = lines.length;
  var xbody = ""; 
  for (var i=0; i<ns; i++){
       xbody=xbody+lines[i]+"&#12;"; 
  } 


  var rootId = document.forms["formid"].elements["idroot"].value;
  var datain = "{\"id\":\"0\",\"login\":\""+ document.forms['formid'].login.value + "\","+
  "\"to\":\""+ document.forms['formid'].to.value+ "\","+
  "\"rootid\":\""+ rootId+ "\","+
  "\"msg\":\""+xbody+"\"}";

//  alert(datain);

  $.ajax({
  url: '/msgsend',
  type: 'POST',
  data: datain,
  error: function(jqXHR, textStatus, errorThrown) { 
//  alert(textStatus); 
  },

  success: function(data) { 
  //alert(data); 
  },
  dataType: 'json'
  });


};

function getOnline(login) {
         $.get('/online?login='+login,function(data, status) {
         });
}

function login() {

         LOGIN_NAME = document.forms['login'].login.value; 
         $("#loginview").hide();
         $("#loginform").hide();
         $("#logintitle").html(LOGIN_NAME);
         $("#logintitle").show();
         $("#printview").show();
         $("#exitview").show();
         document.forms['formid'].login.value=LOGIN_NAME;               
//         alert('start register');
         $.get('/register?login='+LOGIN_NAME,function(data, status) {
//         alert('registered!!!!!!!');
         getOnline(LOGIN_NAME);
         // schedule the next request *only* when the current one is complete:
         timerId = setInterval(checkNotificationPushService, 5000);
         });

};

function loginas(userid) {

         LOGIN_NAME = userid; 
         $.get('/register?login='+userid,function(data, status) {
         getOnline(LOGIN_NAME);
         // schedule the next request *only* when the current one is complete:
         timerId = setInterval(checkNotificationPushService, 5000);
         });

};

function startlogin() {

         $("#loginview").hide();
         $("#loginform").show();
         $("#logintitle").hide();

};

function init() {
$("#loginview").show();
$("#loginform").hide();
$("#logintitle").hide();
$("#exitview").hide();
$("#printview").hide();
};

function exit() {
         if(LOGIN_NAME) {
         $.get('/exit?login='+LOGIN_NAME,function(data, status) {
         clearInterval(timerId);
         init();
         });
         }
};

function print() {
         if(LOGIN_NAME) {
         alert (JSON.stringify(mCONVERSATION));
         }
};

function clear() {
         if(LOGIN_NAME) {
         $.get('/clear?login='+LOGIN_NAME,function(data, status) {
         console.log (data);
         });
         }
};


function save() {
         if(LOGIN_NAME) {
         var data = {};
         data['user'] = LOGIN_NAME;
         data['data'] = mCONVERSATION;
   
         $.post('/save',JSON.stringify(data), function(data, status) {
         console.log (data);
         });
         }
};



