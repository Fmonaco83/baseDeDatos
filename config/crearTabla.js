const { config } = require ('./mariaDB.js')
const knex = require('knex')(config);

(async () => {
    try {
        await knex.schema.createTable('productos', table => {
            table.string('titulo')
            table.float('precio')
            table.string('imagen')
        })
        console.log('La tabla "productos" se ha creado')
            
    }catch(err) { 
        console.log(err); throw err 
    }
    finally {
        knex.destroy();
    }
})()