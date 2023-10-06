var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'svc.sel5.cloudtype.app',
  user     : 'root',
  password : '1234',
  database : 'mariadb_test',
  port: '31913'
});
 
connection.connect();

export async function queryExecute(str, value){
    return await new Promise((resolve,reject)=>{
        connection.query(str, value, function (error, results){
            resolve(results);
        });
    });
    return get;
}
