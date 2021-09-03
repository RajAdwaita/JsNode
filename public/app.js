// console.log("Adwaita");


// var time = 0;


// var timer = setInterval(function () {
//     time += 2;
//     console.log(time + " seconds passed");

//     if (time > 4) {
//         clearInterval(timer);
//     }
// }, 2000);



// console.log(__dirname);

// console.log(__filename);




// var work = function () {
//     console.log("trial");
// }

// work();



// var counter = require('./count')
// console.log(counter(['a', 'v', 'f', 'r']))


// var stuff = require('./stuff');
// console.log(stuff.counter([1, 2, 3, 4]));
// console.log(stuff.adder('adwaita', 'raj'));
// console.log(stuff.pi * 100);






// var events = require('events');

// var myEmitter = new events.EventEmitter();


// myEmitter.on('someEvent', function (msg) {

//     console.log(msg);
// })

// myEmitter.emit('someEvent', 'the event was emitted');


// var events = require('events');

// var util = require('util');


// var Person = function (name) {
//     this.name = name;
// }


// util.inherits(Person, events.EventEmitter);
// var james = new Person('james');
// var pappu = new Person('pappu');
// var harry = new Person('harry');

// var people = [james, pappu, harry];

// people.forEach(function (person) {
//     person.on('speak', function (msg) {
//         console.log(person.name + ' said ' + msg);

//     })
// })


// james.emit('speak', 'wassup boi')

///FILE

// var fs = require('fs');

// fs.readFile('readme.txt', 'utf8', function (err, data) {
//     // console.log(data);

//     fs.writeFileSync('writeMe.txt', data);


// });

// fs.unlink('readme.txt', function (err) { });

// console.log('heypppppppppppppppppppppp');
// fs.writeFileSync('write.txt', text);


// console.log(work);

// var fs = require('fs')

// fs.mkdirSync('stuff');
// fs.mkdir('stuff', function () {
//     fs.readFile('write.txt', 'utf8', function (err, data) {
//         fs.writeFile('./stuff/readme.txt', data, function () { })
//     })
// });
// fs.rmdir('stuff', function () { })




var http = require('http');


var server = http.createServer(function (req, res) {

    console.log('Request made ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('HI raj')
});



server.listen(3000, '127.0.0.1')

console.log('Listended to  port 3K');