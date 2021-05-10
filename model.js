'use strict';

class USER {

  constructor() {
  
    this.TYPE = "USER";
    this.selected = false; 
    this.flag = true; 
    this.NAME = "unknown"; 

  };
                                             
  getSelected (){
     return selected;
  };

  populateFromMAP(map) {

    this.selected = map['selected']; 
    this.flag = map['flag']; 
    this.NAME = map['NAME']; 

  };


  toJSON() {
     var json;
     json = "{\"TYPE\":\""+this.TYPE+"\",\"NAME\":\""+this.NAME+"\",\"flag\":"+this.flag+"}";
     return json;
  };

};


class MESSAGE {

  constructor() {
  
    this.TYPE = "MESSAGE";
    this.selected = false; 
    this.author = "anonymous";

  };
                                             
  getSelected (){
     return selected;
  };


  toJSON() {
     var json;
     json = "{\"TYPE\":\""+this.TYPE+"\",\"author\":\""+this.author+"\",\"body\":\""+this.body+"\",\"rootid\":"+this.ROOTID+",\"id\":"+this.ID+",\"flag\":\""+this.flag+"\"}";
     return json;
  };

  populateFromMAP(map) {


        this.ID = map["id"];
        this.ROOTID = map["rootid"];
        this.author=map["login"];
        this.body=map["msg"];
        this.flag="text";



  };

};

class CALL {

  constructor() {
  
    this.TYPE = "CALL";
    this.to = "none"; 
    this.from = "anonymous";

  };
                                             
  getSelected (){
     return selected;
  };


  toJSON() {
     var json;
     json = "{\"TYPE\":\""+this.TYPE+"\",\"from\":\""+this.from+"\",\"to\":\""+this.to+"\"}";
     return json;
  };                                                                     

  populateFromMAP(map) {


        this.author=map["USERID"];
        this.to=map["TO"];



  };

};


module.exports = {USER: USER, MESSAGE:MESSAGE, CALL:CALL};
