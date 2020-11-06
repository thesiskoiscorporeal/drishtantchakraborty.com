
//constructor for a simple stopwatch object.
function Stopwatch() {
    let timeLastStarted = null; //time when stopwatch is last started
    let elapsed = null;
    let isRunning = false;
    
    this.start = function() {
        timeLastStarted = Date.now();
        isRunning = true;
    };

    this.stop = function() {
        if (isRunning == false) {
            throw new Error("Stopwatch not started yet")
        }
        else {
            isRunning = false;
            elapsed += Date.now() - timeLastStarted;
        }
    }

    // define 'duration' property
    Object.defineProperty(this, 'duration', {
        get: function() {
                return `${Math.floor(elapsed/1000)}.${elapsed%1000}s`;}
        })

    this.reset = function() {
        startTime = null;
        stopTime = null;
        isRunning = false
    }
}

sp = new Stopwatch()