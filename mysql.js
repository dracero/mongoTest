var mysql = require('mysql');
var io = require('socket.io').listen(3000);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "moodle"   
});

con.connect();

var socketCount=0;
var data;
var notes = [];
io.sockets.on('connection', function(socket){
    // Socket has connected, increase socket count
    socketCount++
    // Let all sockets know how many are connected
    io.sockets.emit('users connected', socketCount)
 
    socket.on('disconnect', function() {
        // Decrease the socket count on a disconnect, emit
        socketCount--
        io.sockets.emit('users connected', socketCount)
    });
 
     con.query('SELECT email FROM mdl_user')
            .on('result', function(data){
                // Push results onto the notes array
                notes.push(data);
                
            })
            .on('end', function(){
               // Only emit notes after query has been completed
                socket.emit('notes', notes)
                notes = [];
            })
    
    socket.on('writer', function(data){
        // New note added, push to all sockets and insert into db
        notes.push(data)
        io.sockets.emit('writer', data)
        // Use node's db injection format to filter incoming data
        con.query('INSERT INTO mdl_user (email) VALUES (?)', data.note)
    })
 
        });