const { config } = require ('./mariaDB.js')
const knex = require('knex')(config)


async function insertProducto(producto) {
    await knex('productos').insert(producto)
        .then(() => console.log('Producto agregado'))

}

module.exports = insertProducto