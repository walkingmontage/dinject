/* responsible for walking*/
function Walk(name) {
    this.constructor = function () {
        log('*** new Walk');
    }
    this.doWalk = function (name) {
        log(name + ' is walking');
    }
    this.constructor();
}

/* responsible for flying*/
function Fly(name) {
    this.constructor = function () {
        log('*** new Fly');
    }
    this.doFly = function (name) {
        log(name + ' is flying');
    }
    this.constructor();
}

/* bird */
function Bird(name) {
    this.constructor = function (name) {
        log('*** a new bird named ' + name);
        this.name = name;
    }

    var fly, walk;

    this.doThings = function () {
        fly.constructor(this.name);
        fly.doFly(name);
        walk.constructor(this.name);
        walk.doWalk(name);
    }
    this.constructor(name);
}

/* person */
function Person() {
    this.constructor = function () {
        log('*** a new person');
    }

    var speak, walk;

    this.doThings = function (name) {
        log('person '+ name + ' start doing things');
        this.speak.doSpeak(name);
        this.walk.doWalk(name);
        log('person '+ name + ' complete doing things');
    }
    this.constructor();
}

/* just a demo tool*/
function log(st) {
    document.write('<h5>' + st + '</h5>');
}
