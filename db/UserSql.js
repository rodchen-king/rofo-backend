var UserSQL = {  
  insert:'INSERT INTO user(uid,userName) VALUES(?,?)', 
  queryAll:'SELECT * FROM user',  
  getUserById:'SELECT * FROM user WHERE id = ? ',
  getUserByUsername:'SELECT * FROM user WHERE username = ? and password = ? ',
};
module.exports = UserSQL;