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






var events = require('events');

// var myEmitter = new events.EventEmitter();


// myEmitter.on('someEvent', function (msg) {

//     console.log(msg);
// })

// myEmitter.emit('someEvent', 'the event was emitted');



var util = require('util');
const { threadId } = require('worker_threads');


var Person = function (name) {
    this.name = name;
}


util.inherits(Person, events.EventEmitter)