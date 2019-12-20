const mysql=require('./index');

module.exports={
     sql:async function  (sql,sqldata) {
        return new Promise((resolve, reject) => {
            mysql.query(sql,sqldata,function (mysqlres,mysqlreq) {
                resolve(JSON.stringify(mysqlres))
            })
        })
    }
}