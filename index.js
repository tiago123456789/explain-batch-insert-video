const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

const states = [
    {
        name: "São Paulo",
        uf: "SP"
    },
    {
        name: "Rio de janeiro",
        uf: "RJ"
    },
    {
        name: "Goiás",
        uf: "GO"
    },
    {
        name: "Minas gerais",
        uf: "MG"
    }
];

function insertStatesInBatch(states) {
    let sql = "INSERT INTO states(name, uf) VALUES"
    let sqlValue = [];
    let datas = [];
    states.map(item => {
        const values = Object.keys(item).map(key => {
            datas.push(item[key])
            return "?"
        }).join(", ")
        sqlValue.push(`(${values})`)
    });
    sqlValue = sqlValue.join(", ");

    return new Promise((resolve, reject) => {
        connection.query(
            `${sql} ${sqlValue}`,
            datas,
            function (err, results, fields) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results)
            }
        );
    })
}

insertStatesInBatch(states).then(console.log).catch(console.log);