const { config } = require ('./mariaDB.js')
const knex = require('knex')(config)

async function selectProductos() {
    
    const list = await knex.from('productos').select('*')
    return list
}

module.exports = selectProductos