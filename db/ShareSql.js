var UserSQL = {  
  insert:'INSERT INTO share(author, title, share_date) VALUES(?,?,?)', 
  queryAll:'SELECT * FROM share',  
  getShareById:'SELECT * FROM share WHERE id = ? ',
};
module.exports = UserSQL;