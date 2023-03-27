const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');
const {socketController} = require('../controllers/sockets/controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server,{
            cors: {
                origin: '*'
            }
        });


        this.authPath = '/api/auth';
        this.moviesPath = '/api/movies';
        this.searchPath = '/api/search';
        this.votePath = '/api/vote';
        this.seedPath = '/api/seed';

        //Connect database
        this.connectionDb();
        //Modules of Node
        this.middlewares();
        //Routes Api
        this.routes();
        //Sockets
        this.sockets();
    }

    async connectionDb() {
        await dbConnection();
    }

    middlewares() {
        // Inject Socket Io for use in Controllers
        this.app.set('socketIO', this.io);
        //Cors
        this.app.use(cors());
        //Write parse of body
        this.app.use(express.json());
        //File public index.html
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.moviesPath, require('../routes/movies'));
        this.app.use(this.searchPath, require('../routes/search'));
        this.app.use(this.seedPath, require('../routes/seed'));
        this.app.use(this.votePath, require('../routes/vote'));
    }

    sockets() {
        this.io.on("connection", socketController)
    }


    listen() {
        this.server.listen(this.port, () => {
            console.info("Server run: http://localhost:" + this.port);
        })
    }
}

module.exports = Server