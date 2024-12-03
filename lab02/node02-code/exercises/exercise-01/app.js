//Lato server => aggiungere dipendenze a express, socket.io e http
const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { join } = require('path');

//Lato server => creare i rispettivi server
const app = express();
const server = createServer(app);
const io = new Server(server);

let messageHistory = [];

let users = [];

// Lato server => gestire la richiesta alla root restituendo il file index.html
app.get('/', (req, res) => {
    console.log(join(__dirname, 'public', 'index.html'))
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Ogni volta che un utente si connette viene generato un evento connection
io.on('connection', (socket) => {
    
    //Esercizio 1.c aggiungere nickname
    let nickname = 'User' + Math.floor(Math.random() * 1000);
    users.push(nickname);

    // Esercizio 1.a mandare un messaggio broadcast quando un utente si connette
    socket.broadcast.emit('chat message', 'User ' + nickname + ' connected');
    
    console.log('User ' + nickname + ' connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', nickname + " => " + msg);
        // Esercizio 1.b mantenere la storia dei messaggi
        messageHistory.push(msg);
    });
    
    socket.on('disconnect', () => {
        console.log('user' + nickname + ' disconnected');
        users = users.filter(user => user !== nickname);
        // Esercizio 1.a mandare un messaggio broadcast quando un utente si disconnette
        socket.broadcast.emit('chat message', 'user ' + nickname + ' disconnected');
    });

    // Esercizio 1.d gestione del sta scrivendo
    socket.on('typing', () => {
        socket.broadcast.emit('typing', nickname + ' is typing...');
    });

    socket.on('stop typing', () => {
        socket.broadcast.emit('stop typing');
    });

});

app.get('/messages', (req, res) => {
    // Esercizio 1.b mantenere la storia dei messaggi
    res.json(messageHistory);
});

// Esercizio 1.e restituire la lista degli utenti connessi
app.get('/users', (req, res) => {
    res.json(users);
});

// Lato server => avviare il server
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});