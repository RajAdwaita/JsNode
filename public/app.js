//FULL  DOCUMENT COMMENTED


// // console.log("Adwaita");


// // var time = 0;


// // var timer = setInterval(function () {
// //     time += 2;
// //     console.log(time + " seconds passed");

// //     if (time > 4) {
// //         clearInterval(timer);
// //     }
// // }, 2000);



// // console.log(__dirname);

// // console.log(__filename);




// // var work = function () {
// //     console.log("trial");
// // }

// // work();



// // var counter = require('./count')
// // console.log(counter(['a', 'v', 'f', 'r']))


// // var stuff = require('./stuff');
// // console.log(stuff.counter([1, 2, 3, 4]));
// // console.log(stuff.adder('adwaita', 'raj'));
// // console.log(stuff.pi * 100);






// // var events = require('events');

// // var myEmitter = new events.EventEmitter();


// // myEmitter.on('someEvent', function (msg) {

// //     console.log(msg);
// // })

// // myEmitter.emit('someEvent', 'the event was emitted');


// // var events = require('events');

// // var util = require('util');


// // var Person = function (name) {
// //     this.name = name;
// // }


// // util.inherits(Person, events.EventEmitter);
// // var james = new Person('james');
// // var pappu = new Person('pappu');
// // var harry = new Person('harry');

// // var people = [james, pappu, harry];

// // people.forEach(function (person) {
// //     person.on('speak', function (msg) {
// //         console.log(person.name + ' said ' + msg);

// //     })
// // })


// // james.emit('speak', 'wassup boi')

// ///FILE

// // var fs = require('fs');

// // fs.readFile('readme.txt', 'utf8', function (err, data) {
// //     // console.log(data);

// //     fs.writeFileSync('writeMe.txt', data);


// // });

// // fs.unlink('readme.txt', function (err) { });

// // console.log('heypppppppppppppppppppppp');
// // fs.writeFileSync('write.txt', text);


// // console.log(work);

// // var fs = require('fs')

// // fs.mkdirSync('stuff');
// // fs.mkdir('stuff', function () {
// //     fs.readFile('write.txt', 'utf8', function (err, data) {
// //         fs.writeFile('./stuff/readme.txt', data, function () { })
// //     })
// // });
// // fs.rmdir('stuff', function () { })




// var http = require('http');


// // var server = http.createServer(function (req, res) {

// //     console.log('Request made ' + req.url);
// //     res.writeHead(200, { 'Content-Type': 'text/plain' });
// //     res.end('HI raj')
// // });



// // server.listen(3000, '127.0.0.1')

// // console.log('Listended to  port 3K');



// var fs = require('fs');
// const { stringify } = require('querystring');

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8');

// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// // myReadStream.on('data', function (chunk) {
// //     console.log('new chunk received');

// //     myWriteStream.write(chunk);
// //     // console.log(chunk);



// // })

// myReadStream.pipe(myWriteStream);


// var server = http.createServer(function (req, res) {

//     console.log('Request made ' + req.url);
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // res.end('I need some more pasta')

//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }

//     else if (req.url === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);

//     }

//     else if (req.url === '/api/adwaita') {
//         var adwaita = [{
//             name: 'adwaita0',
//             age: 32,
//             status: 'sad'
//         },
//         {
//             name: 'Amvrin',
//             age: 15,
//             status: 'happy'
//         }];


//         res.writeHead(200, { 'Content-type': 'application/json' });
//         res.end(JSON.stringify(adwaita));
//     }

//     else {
//         res.writeHead(404, { 'Content-type': 'text/html ' });
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
//     // var myObj = {
//     //     name: 'Adwaita',
//     //     age: 19,
//     //     status: 'Happy'
//     // };
//     // res.end(JSON.stringify(myObj));



//     // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
//     // myReadStream.pipe(res);


// });



// server.listen(3000, '127.0.0.1')

// console.log('Listended to  port 3K');



//FULL  DOCUMENT COMMENTED

var express = require('express');

var app = express();


app.get('/', function (req, res) {
    // res.send("Hello friends")
    res.sendFile(__dirname + '/index.html')
})
app.get('/home', function (req, res) {
    res.send("Hello HOME PAGE")

})
app.get('/contact', function (req, res) {
    // res.send("Hello CONTACT US")
    res.sendFile(__dirname + '/contact.html')

})


app.get('/profile/:id', function (req, res) {
    res.send('You requested to see a profile with the Id of ' + req.params.id);

})

app.listen(3000);