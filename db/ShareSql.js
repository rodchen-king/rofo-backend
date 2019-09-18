var UserSQL = {  
  insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
  queryAll:'SELECT * FROM share',  
  getShareById:'SELECT * FROM share WHERE id = ? ',
};
module.exports = UserSQL;