const mysql=require('./mysql/index');

async function main () {
    return new Promise((resolve, reject) => {
        mysql.query('select * from zftp',[],function (mysqlres,mysqlreq) {
            resolve(JSON.stringify(mysqlres))
             })
    })
}
async function main2 () {
    const data = await main()
    console.log(data)
}
main2()