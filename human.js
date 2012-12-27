/* responsible for speaking */
function Speak(name) {
    this.constructor = function () {
        log('*** new Speak');
    }
    this.doSpeak = function (name) {
        log(name + ' is speaking');
    }
    this.constructor();
}
