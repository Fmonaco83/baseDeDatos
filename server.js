const express = require('express');

const { Server: HttpServer} = require('http');
const { Server: IOserver} = require('socket.io');


const app = express();
const httpServer = new HttpServer(app);

const io = new IOserver(httpServer); 



const PORT = 8080;



const productos = []

const mensajes = []

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

io.on('connection', socket => {
    console.log('nuevo usuario conectado');
    socket.emit('mensajes', mensajes)
    
    socket.on('new-message', data => {
        mensajes.push(data)
        io.sockets.emit('mensajes',mensajes);
    });
});

app.set('views', './public/views' );
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
    res.render('inicio', { productos });
});

app.post ('/productos', (req, res) => {
    productos.push(req.body);
    console.log(productos);
    res.redirect('/');
});




const server = httpServer.listen (PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

server.on("error", error => console.log ("error en el servidor", error))
