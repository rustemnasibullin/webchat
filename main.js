// Super Lite anonymous chating and communication service. Designed-developed by rustemnasibullin@yahoo.com .
// A'la Telegram communication service.

var MODEL = require('./model.js');
var http = require("http");
// Import events module
var events = require('events');
var fs = require("fs");
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
var url = require('url');
var idx = 0;
var express = require('express');
var registered = new Map();
var roots = new Map();
var branches = new Map();
var pushes = new Map();
var sippushes = new Map();
var app = express();
var GEOPOS = "https://api.hackertarget.com/geoip/?q=www.mail.ru";

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const dburl = 'mongodb://localhost:27017';

// Database Name
const dbName = 'webchat';
const client = new MongoClient(dburl);


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function saveConversation(userId, data) {
// Use connect method to connect to the server
var id;
var active = false;
client.connect(function(err) {
  assert.equal(null, err);
  active = true;
  const db = client.db(dbName);
  var convs = db.collection("conversations");
  let DATAS = data;
  let ID = userId + "." +uuidv4();
  let TIMES = new Date().getTime();
  let dbResult;
  let dbError;
  console.log(ID);
  convs.insertOne({id:ID,time:TIMES,user:userId,convesation:DATAS}, function (error, response) {

  if(error) {
       console.log('Error occurred while inserting');
  } else {
       console.log('inserted record', response.ops[0]);
  }

  });

  console.log(err);
  console.log('Connected successfully to server');

});
    
return id;

};


function clearConversation(userId) {
// Use connect method to connect to the server
var id;
var active = false;
client.connect(function(err) {
  assert.equal(null, err);
  active = true;
  const db = client.db(dbName);
  var convs = db.collection("conversations");
  var myquery = { user: userId };
  let dbResult;
  let dbError;
  convs.deleteMany(myquery,function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
  });
  console.log(err);
  console.log('Connected successfully to server');
});    
return id;
};


function printConversation(userId) {
// Use connect method to connect to the server
var data;
data = "{\"info\":\"NoData\"}";
return data;
};

function addOptions(res) {
    res.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, HEAD');
  //  res.append('Access-Control-Allow-Headers','X-Requested-With,x-prototype-version');
  //  res.append('Access-Control-Max-Age','1728000');
  //  res.append('Connection','Keep-Alive');
  //  res.append('Content-Type','application/json');
    res.append('Access-Control-Allow-Origin','*'); 
};

function getUser(userId, userFlag){

         var uObj = new MODEL.USER();
         uObj.flag = userFlag;
         uObj.NAME = userId;
         return uObj;

};


app.get('/exit', function (req, res) {

    var data = '';
    var login = req.query.login; 
    var userObj = getUser(login, false);

    pushes.forEach(function (lpushes, key, map) {

    if (key != login) {
        console.log("Push2:" + key);
        lpushes.push(userObj); 
        console.log(key+" Pushes:" + lpushes.length);
        console.log(key+" Pushes:" + pushes.get(key).length);
    }

    });


    registered.set(login, false);
    pushes.delete(login);
    res.send("[]");


});

app.get('/online', function (req, res) {

    var data = '[';
    var login = req.query.login; 
    var start = true;
    console.log(login+" asks who is on ");

    registered.forEach(function (value, key, map) {
    if (!start) data=data+",";
    if (start) start = false;
    data = data+"\""+key+"\"";

    });

    data+="]";
    res.send(data);

});


app.post('/save', function (req, res) {
    var data = '';
    req.on('data', function(chunk) {
        data += chunk.toString();
    });

    req.on('end', function() {
    var cnv = JSON.parse(data);
    var login = cnv['user']; 
    var start = true;
    console.log(login+" saves conversation ");
    var idd =  saveConversation(login, data);
    res.send("["+idd+"]");
    });


});


app.get('/clear', function (req, res) {

    var data = '[';
    var login = req.query.login; 
    var start = true;
    console.log(login+" clears conversation ");
    var idd =  clearConversation(login);
    data+=idd;
    data+="]";
    res.send(data);

});


app.get('/pop', function (req, res) {

    console.log("Pop: ");
    var data = '[';
    var login = req.query.login; 
    var start = true;

    console.log("Notifications: "+login);

    var lpushes=pushes.get(login);
    console.log(login + " - " + lpushes);

    if (lpushes)  {
    
    lpushes.forEach(function (value, indx, arr) {
    if (!start) data=data+",";
    if (start) start = false;
    data = data+value.toJSON();
    });

    console.log(login+" Pushes:" + lpushes.length);
    if (lpushes.length>0) lpushes.splice(0);
    
    }


    data+="]";
    console.log(data);
    addOptions(res);
    res.send(data);

});




app.get('/register', function (req, res) {

    var data = '';
    var login = req.query.login;
    registered.set(login, true);

    // push for others on-line event about 
    console.log("Register: "+login);

    var cp = new Array(); 
    pushes.set(login, cp);
    var userObj = getUser(login, true);
    pushes.forEach(function (lpushes, key, map) {

    if (key != login) {
        console.log("Push2:" + key);
        lpushes.push(userObj); 
        console.log(key + "  Pushes:  " + lpushes.length);
        console.log(key + "  Pushes:  " + pushes.get(key).length);
    } else {
        var xpush = pushes.get(login);
        registered.forEach(function (xvalue, xkey, map) {
         
        if (xkey != login) {
            var userObjN = getUser(xkey, xvalue);
            xpush.push(userObjN);
        }                 
      });
    }

    });


    console.log("Registered and send callback: "+login);
    addOptions(res);
    res.send("[\'ok\']");

});



app.get('/responses', function (req, res) {

    var data = '';
    var msgid = req.query.idmsg; 
    addOptions(res);
    res.send("[]");

});

app.get('/msgsstatus', function (req, res) {

    var data = '';
    var msgids = req.query.idsmsg; 
    addOptions(res);
    res.send("[]");

});

app.get('/roots4user', function (req, res) {

    var data = '';
    var ids = req.query.idroot; 
    addOptions(res);
    res.send("[]");

});

// optional future function for SIP session pushes
app.get('/SIP', function (req, res) {

    var data = '';
    var f = req.query.FUNCTION; 
    var to = req.query.TO; 
    var from = req.query.USERID;

    addOptions(res);
    console.log("f: "+f);
    console.log("to: "+to);
    console.log("from: "+from);
 
    if (f=='PING') {
    var cp = new Array(); 
    sippushes.set(from, cp);
    }

    if (f=='APPLYCALL' || f=='APPLYVCALL') {
        var xpush = sippushes.get(to);
        if (!xpush) {
        res.send("[503]");
        return;
        } else {
        var cObj = new MODEL.CALL();
        cObj["to"] = to;
        cObj["from"] = from;
        if (f=='APPLYVCALL') {
        cObj["TYPE"] = 'VCALL';
        };
        xpush.push(cObj);

        }
    }

    if (f=='GETCALL') {
    var lpushes=sippushes.get(from);
    var data="[";
    if (lpushes)  {
    var start = true;
    lpushes.forEach(function (value, indx, arr) {
    if (!start) data=data+",";
    if (start) start = false;
    data = data+value.toJSON();
    });

    console.log(from+" Pushes:" + lpushes.length);
    if (lpushes.length>0) lpushes.splice(0);
    data+="]";
    console.log(data);
    addOptions(res);
    res.send(data);
    return;
    }
    }

    res.send("[200]");

});

app.post('/msgsend', function (req, res) {

    var data = '';

    req.on('data', function(chunk) {
        data += chunk.toString();
    });

    req.on('end', function() {
        console.log(data);
        var msg = JSON.parse(data);
        msg["id"] = idx+1;
        idx = idx+1;
        var mObj = new MODEL.MESSAGE();
        mObj.populateFromMAP(msg);
        var body = msg["body"];
        var to = msg["to"];
        var id = msg["rootid"];
        var login = msg["login"];
        var branchid=branches[id];

        if (branchid) {
            branches[idx] = branchid;
        } 

        if (to == "*") {
        registered.forEach(function (value, key, map) {
        var rootsfor = roots[idx];
        branches[idx] = idx;
        if (!rootsfor) { 
             rootsfor = new Array();
             roots[idx] = rootsfor;
             rootsfor.push(login);
        }
        rootsfor.push(key);

        });

        // push to sender to read 
        var lpushes_root=pushes.get(login);
        lpushes_root.push(mObj);
        
        } else {

          if (to) {
          var recs = to.split(",");
          var xs = recs.length;
          var rootsfor = roots[idx];
          if (!rootsfor) { 
               rootsfor = new Array();
               roots[idx] = rootsfor;
               rootsfor.push(login);
          }

          for (var i=0;i<xs; i++) {
          var lpushes=pushes.get(recs[i]);
          lpushes.push(mObj);
          branches[idx] = idx;
          rootsfor.push(recs[i]);
          console.log("PUshes: "+recs[i] + " - " + lpushes+"/"+mObj);
          };

          // push to sender to read 
          var lpushes_root=pushes.get(login);
          lpushes_root.push(mObj);

          } else {

            // analyse id 
            console.log("Pushes as answer 2: "+id);
            var rootsfor = roots[branchid];
            var nn = rootsfor.length;
            for (var i=0;i<nn; i++) {
            console.log("Pushes branch answer: "+rootsfor[i]);
            var lpushes4=pushes.get(rootsfor[i]);
            lpushes4.push(mObj);
            }    

          }

        }

        addOptions(res);
        res.send("["+msg.id+"]");
    });

});



app.get('/checkout', function (req, res) {
        addOptions(res);
        res.send("[]");
});

app.get('/', function (req, res) {
  var typeOf = req.headers["User-Agent"];
  var mobile = false;
  if (typeOf && typeOf.indexOf('Android')>0) mobile = true;
  
  if (mobile) {
  res.sendFile(__dirname+"/public/mindex.html");
  } else {
  res.sendFile(__dirname+"/public/index.html");
  }
});

app.get(['*.css','*.js','*.woff','*.map','*.json','*.png','*.gif','*.map','*.woff2','*.md'], function (req, res) {
  res.sendFile(__dirname+"/public/"+req.path);
});                               

app.post('/test', function (req, res) {

    var data = '';
    req.on('data', function(chunk) {
        data += chunk.toString();
    });

    req.on('end', function() {
        console.log(data);
    res.send(data);
    });

});

// main procedure 
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("WebChat app listening at http://%s:%s", host, port)
});


