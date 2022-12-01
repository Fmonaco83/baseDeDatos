import ClienteSql from "./sql.js";
import { config } from "./config/mariaDB.js"

const sql = new ClienteSql(config)

sql.createTable()
    .then(() =>{
        console.log('1. Tabla creada')


        const articulos = [
            {nombre: 'escuadra', codigo: 'c1', precio: 123, stock: 10},
            {nombre: 'regla', codigo: 'c2', precio: 100, stock: 1},
            {nombre: 'caculadora', codigo: 'c3', precio: 300, stock: 30},
            {nombre: 'lapiz', codigo: 'c4', precio: 250, stock: 15},
            {nombre: 'celular', codigo: 'c5', precio: 300, stock: 15},
        ]
        return sql.insertArticles(articulos)
    }) 
    .then (() =>{
        console.log('2. articulos insertados')

        return sql.getArticles
    })
    .catch((err)=>{
        console.log(err)
        throw err
    })
    .finally(() =>{
        sql.close
    })

     