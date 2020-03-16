const db = require('../config/db')

// excluir por id
db('perfis').where({ id: 7 })
    .delete()
    .then(res => console.log(res))
    .finally(() => db.destroy())


// excluir tudo
// db('perfis')
//     .delete()
//     .then(res => console.log(res))
//     .finally(() => db.destroy())